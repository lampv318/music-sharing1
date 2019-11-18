json.call @artist, :id, :name
json.songs @artist.songs do |song|
  json.id song.id
  json.name song.name
  json.album song.album, :id, :name
end