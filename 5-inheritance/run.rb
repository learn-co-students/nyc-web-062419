require 'pry'
require_relative "./animal"
require_relative "./dog"
require_relative "./cat"
require_relative "./german_shephard"


dog = GermanShephard.new("Dog name", true)

binding.pry

puts "some stuff"




def test
    author = Author.new("name")
    if author.name == "name"
        puts "author.name works!"
    else
        puts "author.name doesn't work!"
        break        
    end
    if Author.all.count >0
        puts "Author.all works!"
    else
        puts "Author.all doesn't work!"
        break        
    end

    if Author.all.count > 0 

end