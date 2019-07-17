Rails.application.routes.draw do

  get '/rappers', to: "rappers#index", as: "rappers"
  get '/rappers/new', to: "rappers#new", as: "rapper"
  get '/rappers/:id/edit', to: "rappers#edit"
  get '/rappers/:id', to: "rappers#show", as: "rapper"
  post '/rappers', to: "rappers#create"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
