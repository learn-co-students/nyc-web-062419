class Dealership
    attr_accessor :name 
    attr_reader :city 

    @@all = []
    
    def initialize(name, city)
        @name = name 
        @city = city
        Dealership.all << self 
    end

    def cars
        puts self 
        #Should return all of this instance of Dealership's cars 
        #Call on my Car class and ask that class to give me a list of all cars that belongs to this dealership 
        #each, map, find, select -- which is the right one? 
        #both find and select will return an element that fits our condition 
        #The biggest difference is that find will return the first element that matches 
        #Select will return EVERY element that matches the condition 
        Car.all.select do |car_instance|
            car_instance.dealership == self 
        end
    end

    #write a method that returns all of the dealership's nissans 

    def get_by_make(make)
        #gather all of this dealership's cars 
        self.cars.select do |car_instance|
            car_instance.make == make
        end
    end

    def self.all
        @@all
    end


end