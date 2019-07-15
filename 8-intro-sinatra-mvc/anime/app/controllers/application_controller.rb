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

  get "/welcome2" do
    @things = ["list", "of", "things"]
    erb :welcome2
  end

end
