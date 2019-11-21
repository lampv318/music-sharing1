json.artists @artists do |artist|
  json.partial! "artist", artist: artist
end
json.albums @albums do |album|
  json.partial! "album", album: album
end
json.songs @songs do |song|
  json.partial! "song", song: song
end

