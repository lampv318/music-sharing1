class Category < ApplicationRecord
  has_many :song_categories, dependent: :destroy
  has_many :songs, through: :song_categories
  has_many :album_categories, dependent: :destroy
  has_many :albums, through: :album_categories
end
