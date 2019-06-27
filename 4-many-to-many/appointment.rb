class Appointment
    attr_reader :doctor, :patient
    #belongs to a Doctor
    #belongs to a Patient

    @@all = []
    def initialize(doctor, patient)
        @doctor = doctor 
        @patient = patient 
        Appointment.all << self 
    end

    def self.all 
        @@all
    end
end