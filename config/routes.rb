Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  root "pages#index"
  get "player", to: "player#index"
  get "login", to: "sessions#new"

  scope "/songs/:song_id", as: "song" do
    resource :attachment, only: [:show, :destroy]
  end


  namespace :api, defaults: {format: 'json'} do
    resources :songs, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :artists, only: [:index, :show]
  end
end
