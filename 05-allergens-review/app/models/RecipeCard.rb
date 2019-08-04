class RecipeCard

  @@all = []

  def initialize 

    @@all << self
  end

  def self.all
    @@all
  end

  def date
    # should return the date of the entry
  end

  def rating
    # should return the rating (an integer) a user has given their entry
  end

  def user
    # should return the user to which the entry belongs
  end

  def recipe
    # should return the recipe to which the entry belongs
  end


end