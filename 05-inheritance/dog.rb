class Dog < Animal
    attr_reader :tail
    attr_accessor :hunger_level
    @@all = [] 
    
    def initialize(name, tail)
        super(name)
        @tail = tail 
        @hunger_level = 5
        Dog.all << self
    end

    def eat(argument)
        self.hunger_level += 1
        if self.hunger_level > 8 
            poop(argument)
            self.hunger_level -= 2 
        end
    end

    def get_hungry
        self.hunger_level -= 1
        if self.hunger_level < 5
            self.bark
            self.mood = "hate you"
            puts self.mood
        end
    end

    def bark 
        puts  "woof woof I'm lovable"
    end
    
    def walk 
        self.mood = "loving"
    end
    
    def self.all 
        @@all_dogs
    end
    
    private 

    def poop(name)   
        puts "take me on a walk #{name}"
    end

end