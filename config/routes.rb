Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  root "pages#index"

  resources :attachments, only: :destroy

  namespace :api, defaults: {format: 'json'} do
    resources :songs, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :artists, only: [:index, :show]
  end
end
