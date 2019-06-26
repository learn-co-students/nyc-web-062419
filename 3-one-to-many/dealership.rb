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
        #Should return all of this instance of Dealership's cars 
        #Call on my Car class and ask that class to give me a list of all cars that belongs to this dealership 
        



    end


end