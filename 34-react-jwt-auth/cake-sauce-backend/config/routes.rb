Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      resources :members

      post '/favorite', to: 'users#favorite'
      
      post '/signup', to: 'users#create'
      post '/login', to: 'auth#login'
      
      get '/autologin', to: 'auth#autologin'
    end
  end
end
