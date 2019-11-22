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
    resources :albums, only: [:index, :show] do
      resources :songs, only: :index
    end
    resources :artists, only: [:index, :show] do
      resources :albums, only: :index
      resources :songs, only: :index
    end
    resources :categories, only: [:index, :show] do
      resources :albums, only: :index
    end
    resources :playlists, only: [:index, :show]
    resources :search, only: :index
    resources :users, except: :edit
  end
end
