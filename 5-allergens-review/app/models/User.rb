class User

  @@all = []

  def initialize 

    @@all << self
  end

  def self.all
    @@all
  end

  def recipes
# should return all of the recipes this user has recipe cards for
  end

  def add_recipe_card
# should accept a recipe instance as an argument, as well as a date and rating, and create a new recipe card for this user and the given recipe
  end

  def declare_allergy
# should accept an`Ingredient` instance as an argument, and create a new `Allergy` instance for this `User` and the given `Ingredient`
  end

  def allergens
# should return all of the ingredients this user is allergic to
  end

  def top_three_recipes
# should return the top three highest rated recipes for this user.
  end

  def most_recent_recipe
    # should return the recipe most recently added to the user's cookbook.

    # compare by date vs. Time.now

  end


  # BONUS
# - `User#safe_recipes`
# should return all recipes that do not contain ingredients the user is allergic to
# - What other methods might be useful to have?


end