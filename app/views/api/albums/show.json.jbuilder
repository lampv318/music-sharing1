json.call @album, :id, :name
json.songs @album.songs do |song|
  json.id song.id
  json.name song.name
  json.artist song.artist, :id, :name
end