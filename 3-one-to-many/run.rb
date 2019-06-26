require 'pry'
require_relative './car.rb'
require_relative './dealership.rb'

dealership1 = Dealership.new("A1", "New York")
dealership2 = Dealership.new("A2", "Atlanta")
car1 = Car.new("nissan", "altima", 3456, "Rocky", dealership1)
car2 = Car.new("nissan", "maxima", 34567, "Rocky2", dealership1)
car3 = Car.new("toyota", "camry", 34568, "Cammy3", dealership2)
binding.pry
puts "stuff is happening"