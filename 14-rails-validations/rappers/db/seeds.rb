# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Rapper.destroy_all
Song.destroy_all 

Rapper.create!(name: "Philip Lil Dumplin Smalls", age:26)
Rapper.create!(name: "Kanye", age:42)
Rapper.create!(name: "Nas", age:45)
Rapper.create!(name: "Marky Mark Wahlberg", age:48)
Rapper.create!(name: "Deltron 3030", age:667)

Song.create!(title:"You're all that and Dim Sum", release_year: 2019, fire: false, rapper_id:1)
Song.create!(title: "Stronger", release_year: 2007, fire: true, rapper_id:2)
Song.create!(title: "One Mic", release_year: 2001, fire: true, rapper_id:3)