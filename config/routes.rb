Rails.application.routes.draw do
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/auth", to: "customers#show"

  get "/big_orders/:number", to:"orders#big"

  resources :customers, only: [:show, :create]
  resources :orders, only: [:show, :create, :update, :destroy]
  resources :order_details, only: [:create, :update]
  resources :products

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
