class Allergy

  @@all = []
  attr_reader :user, :ingredient

  def initialize(user, ingredient)
    # What methods should an instance of this model respond to?
    @user = user
    @ingredient = ingredient

    @@all << self
  end

  def self.all
    @@all
  end

end