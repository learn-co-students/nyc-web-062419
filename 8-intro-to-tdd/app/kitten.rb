class Kitten
  
  @@all = []

  attr_accessor :name, :cuteness, :breed

  def initialize(name, breed, cuteness)
    @name = name.capitalize
    @breed = breed
    @cuteness = cuteness
    
    @@all << self
  end
  
  def self.all
    @@all
  end



  def self.find_cutest_kittens
    # class method find cutest kitten
    kittens_starts_with_T = Kitten.all.select do |kitten|
      kitten.name[0] == 'T'
    end

    kittens_starts_with_T.max_by(3) do |kitten|
      kitten.cuteness
    end
  end


  def self.find_by(**params) # {name: "Tim"}
    # assume we are searching by 1 attribute
    # arg should look like {key: value}
    Kitten.all.find do |kitten|
      kitten.send(hash.keys[0]) == hash.values[0]
    end
  end



end