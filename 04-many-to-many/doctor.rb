class Doctor 
    attr_reader :speciality
    attr_accessor :name, :rating 
    # has a name 
    # rating 
    # specialty

    @@all = []

    def initialize(name, speciality, rating = nil)
        @name = name 
        @speciality = speciality
        @rating = rating 
        @@all << self 
    end


    def appointments 
        Appointment.all.select do |appointment_instance|
            appointment_instance.doctor == self 
        end
    end

    def patients
        patients = self.appointments.map do |appointment_instance|
            appointment_instance.patient
        end
        patients.uniq
    end

    def make_appointment(patient)
        if patient.sick
            Appointment.new(self, patient )
        else 
            puts "they aint sick dawggggg"
        end 
    end

    def self.highest_rating
        doctors = Doctor.find do |doctor|
                doctor.rating != nil 
            end
        doctors.sort_by do |doctor|
            doctor.rating
        end.last
    end

    def self.all
        @@all
    end

end