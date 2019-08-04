class Patient
    attr_accessor :name, :address, :sick
    #has a name
    #has an address 
    #sick
    @@all = []
    def initialize(name, address, sick=false)
        @name = name
        @address = address 
        @sick = sick
        @@all << self 
    end 
    
    def appointments
        Appointment.all.select do |appt|
            appt.patient == self 
        end
    end

    def make_appointment(doctor)
        if self.sick 
            Appointment.new(doctor, self)
        else
            self.sick = true 
            Appointment.new(doctor, self)
        end
    end

    def doctors
        self.appointments.map do |appt|
            appt.doctor
        end
    end

    def find_doc(speciality)
        Doctor.all.select do |doctor_instance|
            doctor_instance.speciality == speciality
        end
    end

    def self.all
        @@all
    end
end