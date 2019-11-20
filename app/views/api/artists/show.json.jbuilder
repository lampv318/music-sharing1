json.partial! "artist", artist: @artist
json.related @artist do |artist|
  json.partial! "artist", artist: artist
end
json.contributed_albums @artist do |album|
  json.partial! "api/albums/album", album: album
end
