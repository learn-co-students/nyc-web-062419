Rails.application.routes.draw do
#Rapper Routes 
  get '/rappers', to: "rappers#index", as: "rappers"
  get '/rappers/new', to: "rappers#new"
  get '/rappers/:id/edit', to: "rappers#edit"
  get '/rappers/:id', to: "rappers#show", as: "rapper"
  post '/rappers', to: "rappers#create"


#Song Routes 
get "/songs", to: "songs#index", as: "songs"
get "/songs/new", to: "songs#new", as: "new_song"
get "/songs/:id", to: "songs#show", as: "song"
get "/songs/:id/edit", to: "songs#edit", as: "edit_song"
post "/songs", to: "songs#create"
patch "/songs/:id", to: "songs#update"


#User Routes 
get "/users", to: "users#index", as: "users"
get "/users/:id", to: "users#show", as: "user"
get "/signup", to: "users#new", as: "signup"
post "/users", to: "users#create"

#Session Routes 
get "/login", to: "sessions#new", as: "login"
post "/sessions", to: "sessions#create"
delete "/logout", to: "sessions#destroy"

end
