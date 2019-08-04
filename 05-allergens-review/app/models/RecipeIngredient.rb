class RecipeIngredient

  @@all = []

  def initialize
    @@all << self
  end

  def self.all
    # should return all of the RecipeIngredient instances
    @@all
  end

  def ingredient
    # should return the ingredient instance
  end

  def recipe
    # should return the recipe instance
  end


end