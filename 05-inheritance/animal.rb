class Animal
    attr_accessor :name, :mood
    @@all = []
    def initialize(name)
        @name = name
        @mood = "loving"
        Animal.all << self
    end


    def self.all
        @@all
    end
end