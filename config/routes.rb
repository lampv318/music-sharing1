Rails.application.routes.draw do
  root "pages#index"

  namespace :api, defaults: {format: 'json'} do
    resources :songs, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :artists, only: [:index, :show]
  end
end
