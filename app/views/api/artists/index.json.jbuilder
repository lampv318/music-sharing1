json.artists @artists do |artist|	json.array! @artists, partial: "artist", as: :artist
  json.id artist.id
  json.name artist.name
end