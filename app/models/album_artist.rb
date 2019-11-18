class AlbumArtist < ApplicationRecord
  belongs_to :album
  belongs_to :artist
end
