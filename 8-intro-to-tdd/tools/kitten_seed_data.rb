def kitten_seed_data
  25.times do 
    Kitten.new(
      ["Tim", "Thomas", "Todd", "Tabitha", "Tinker", "Tashawn", "timothy", "tasha", "jeff", "arnie", "bri", "kcat"].sample, 
      Faker::Creature::Cat.breed, 
      (1..10).to_a.sample
    )
  end
  Kitten.all
end
