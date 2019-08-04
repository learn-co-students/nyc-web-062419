class Ingredient

  @@all = []

  def initialize 

    @@all << self
  end

  def self.all
    # should return all of the ingredient instances
    @@all
  end

  def allergies
    Allergy.all.select do |allergy|
      allergy.ingredient == self
    end
    # [ <Allergy1233>, <Allergy12332>, <Allergy2331> ]
  end

  def allergic_users
    allergic_people = self.allergies.map do |allergy|
      allergy.user
    end

    allergic_people.uniq
  end

  def self.most_common_allergen
    # should return the ingredient instance that the highest number of users are allergic to
    ####### DO THIS
    self.all.max_by do |ingredient|
      ingredient.allergic_users.length
    end
    


    # in the end return an ingredient
  end


end