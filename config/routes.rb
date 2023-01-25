Rails.application.routes.draw do
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/auth", to: "customers#show"


  resources :customers, only: [:show, :create, :index]
  resources :orders, only: [:index, :show, :create, :update, :destroy]
  resources :order_details, only: [:index, :create, :update]
  resources :products

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
