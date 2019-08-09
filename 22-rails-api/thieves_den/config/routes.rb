Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :marks
      resources :artifacts
      resources :thiefs
    end
  end

  get "/beef", to: "api/marks#steak"

  # http verb, URI
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
