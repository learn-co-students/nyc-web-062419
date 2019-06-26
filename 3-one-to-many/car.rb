require 'pry'

class Car
attr_reader :serial_number, :make, :model
attr_accessor :nickname, :dealership 

@@all = []

def initialize(make, model, serial_number, nickname, dealership)
    @make = make
    @model = model
    @serial_number = serial_number
    @nickname = nickname
    @dealership = dealership
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