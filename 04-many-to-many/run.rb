require 'pry'
require_relative "./doctor"
require_relative "./patient"
require_relative "./appointment"

#Doctor shoud know their patients
#Doctor/Patient should know their Appointments 
#Doctor and/or Patient should be able to make an appointment 

#Patient should know their doctors
#Patient can find Doctor by speciality 
#Patient should be able rate their doctor


#User should be able to find Doctor with the highest rating 
#User should be able to find all sick Patients
#User should be able to cry profusely
#BONUS:
#User can find the Doctor with the highest rating by speciality
#Doctors should have an average rating 


patient1 = Patient.new("Yana", "swagstreet", true )
patient2 = Patient.new("Philip", "swagstreet")
patient3 = Patient.new("Jeff", "11 Broadway", true )

doctor1 = Doctor.new("Brianna", "Breaking Hearts")
doctor3 = Doctor.new("Someone", "Mending Hearts")
doctor2 = Doctor.new("Tashawn", "Proctology")

appointment1 = Appointment.new(doctor1, patient1)
appointment4 = Appointment.new(doctor1, patient1)
appointment2 = Appointment.new(doctor1, patient2)
appointment3 = Appointment.new(doctor2, patient3)

binding.pry 
puts "do some stuff "