Rails.application.routes.draw do
  resources :favorite_members
  resources :users
  resources :members
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
