require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  #"localhost:9393/welcome"

  get "/" do
    erb :welcome
  end

  get "/rappers" do
    @things = ["list", "of", "things"]
    @rappers = Rapper.all
    erb :welcome2
  end

end
