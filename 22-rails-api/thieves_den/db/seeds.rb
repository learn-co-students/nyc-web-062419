# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


specialties = [
  "Pick pocket",
  "Skilled climber",
  "Master combatant",
  "Hacker",
  "Gadgeteer",
  "Infiltrator",
  "Black mailer"
]


20.times do
  Thief.create(
    name: Faker::Name.unique.name_with_middle,
    code_name: Faker::Creature::Animal.unique.name,
    specialty: specialties.sample,
    score: 0
  )
end

artifacts = [
  {
    name: "Declaration of Independence",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/United_States_Declaration_of_Independence.jpg/220px-United_States_Declaration_of_Independence.jpg",
    in_the_wind: false,
    value: (1..20).to_a.sample,
  },
  {
    name: "Rosetta Stone",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/91TuxLC8i0L._SX425_.jpg",
    in_the_wind: false,
    value: (1..20).to_a.sample,
  },
  {
    name: "Imperial State Crown",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Imperial_State_Crown.png/220px-Imperial_State_Crown.png",
    in_the_wind: false,
    value: (1..20).to_a.sample,
  },
  {
    name: "Imperial Seal",
    image_url: "http://listverse-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/3-heirloom-seal-of-the-realm.jpg",
    in_the_wind: false,
    value: (1..20).to_a.sample,
  },
  {
    name: "Mona Lisa",
    image_url: "http://www.sothebys.com/content/dam/sothebys-pages/auction-sales-slides/2019/01/302N10008_9T8WH_web.jpg.thumb.500.500.png",
    in_the_wind: false,
    value: (1..20).to_a.sample,
  },
  {
    name: "King Tut's Headdress",
    image_url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzE2MzkxNzY5NjEx/king-tut-9512446-1-402.jpg",
    in_the_wind: false,
    value: (1..20).to_a.sample,
  },
]

artifacts.each do |artifact|
  new_artifact = Artifact.create(artifact)

  num_thieves = rand(1..7)

  thieves = Thief.all.sample(num_thieves)

  thieves.each do |thief|
    Mark.create(
      thief_id: thief.id,
      artifact_id: new_artifact.id
    )
  end
end
