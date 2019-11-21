json.partial! "album", album: @album
json.related @album do |album|
  json.partial! "album", album: album
end
