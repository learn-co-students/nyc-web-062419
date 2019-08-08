require 'rest-client'
require 'json'
require 'pry'



response = RestClient.get("http://ron-swanson-quotes.herokuapp.com/v2/quotes/5")
sleep(5)

data = JSON.parse(response)
binding.pry

