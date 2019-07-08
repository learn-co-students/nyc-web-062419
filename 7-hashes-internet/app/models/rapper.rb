require 'rest-client'
require 'pry'
require 'json'

class Rapper
    
    def self.fetch
        puts "What kind of books are you interested in?"
        searchTerm = gets.chomp
        JSON.parse(RestClient.get "http://localhost:3005/rapperList")
        puts searchTerm
    end
    
    def self.create_rappers
        fetch.each do |rapper|
            Book.create(b)
        end
    end

end



binding.pry

0 