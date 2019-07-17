Rails.application.routes.draw do
  get 'rappers', to: "rappers#index"
  get 'rappers/new', to: "rappers#new"
  post 'rappers', to: "rappers#create"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
