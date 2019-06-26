require 'pry'

class Car
attr_reader :serial_number, :make, :model
attr_accessor :nickname

@@all = []

def initialize(make, model, serial_number, nickname)
    @make = make
    @model = model
    @serial_number = serial_number
    @nickname = nickname
    @@all << self
  end

def turnKey
  puts "vroom vroom #{@nickname} has started"
end

def drive
  self.turnKey
  puts "#{@nickname} driving"
end

def all
end

def self.all
  @@all
end

end

def createCar
  car = Car.new("toyota", "camry", 1234, "stella")
  binding.pry
end

createCar
