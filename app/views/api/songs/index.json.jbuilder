json.songs @songs do |song|
  json.id song.id
  json.name song.name
  json.artist song.artist, :id, :name
  json.album song.album, :id, :name
end
