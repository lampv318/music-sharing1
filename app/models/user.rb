class User < ApplicationRecord
  has_many :user_artists, dependent: :destroy
  has_many :artists, through: :user_artists
  has_many :playlists, dependent: :destroy
end
