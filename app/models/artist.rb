class Artist < ApplicationRecord
  has_many :user_artists, dependent: :destroy
  has_many :users, through: :user_artists
  has_many :songs, dependent: :destroy
  has_many :album_artists, dependent: :destroy
  has_many :albums, through: :album_artists
end
