class Recipe

  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name

    @@all << self
  end

  def self.all
    @@all
  end

  def self.most_popular
    # CLASS METHODS RETURNS RECIPE with the MOST recipe cards
    ####### DO THIS
  end

  def users
    # look through recipe card is recipe self?
    recipe_cards = RecipeCard.all.select do |recipe_card|
      recipe_card.recipe == self
    end
    
    users = recipe_cards.map do |recipe_card|
      recipe_card.user
    end

    users.uniq
    # return the user instances who have recipe cards with this recipe
  end

  def find_user_by_name(name)
    self.users.find do |user|
      user.name == name
    end
  end

  def ingredients
    # return all of the ingredients in this recipe
    recipe_ingredients = RecipeIngredient.all.select do |recipe_ingredient|
      recipe_ingredient.recipe == self
    end

    ingredients = recipe_ingredients.map do |ri|
      ri.ingredient
    end

    ingredients.uniq
  end

  def allergens
    # return all of the Ingredients in this recipe that are allergens for Users in our system.
    # RecipeIngredient -> Ingridient -> Allergy
    
    self.ingredients.select do |ingridient|
      # ingredient.allregies.length > 0
      ingredient.is_an_allergen?
    end

    Ingredient.all.select 
  end

  def add_ingredients(ingredients) #[macnChsee, oranges, apples, sauce, cheese]

    # turkey, stuffing, macNcheese 
    # for each one of these ingredients we want create a new RecipeIngredient instance

    ingredients.each do |ingredient|
      RecipeIngredient.new(self, ingredient)
    end

    # take an array of ingredient instances as an argument, 
    # and associate each of those ingredients with this recipe

  end

end