class Dealership
    attr_accessor :name 
    attr_reader :city 
    def initialize(name, city)
        @name = name 
        @city = city
    end

end