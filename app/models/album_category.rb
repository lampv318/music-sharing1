class AlbumCategory < ApplicationRecord
  belongs_to :album
  belongs_to :category
end
