class Cat < Animal 
    @@all = []
    def initialize
        Cat.all << self
    end

    def self.all        
        @@all
    end
end