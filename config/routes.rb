Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  root "pages#index"
  get "player", to: "player#index"
  get "login", to: "sessions#new"

  resources :attachments, only: :destroy

  namespace :api do
    resources :categories, only: [:index, :show] do
      resources :albums, only: :index
    end
    resources :artists, only: [:index, :show] do
      resources :albums, only: :index
      resources :songs, only: :index
    end
    resources :albums, only: [:index, :show] do
      resources :songs, only: :index
    end
    resources :songs, only: [:index, :show]
  end
end
