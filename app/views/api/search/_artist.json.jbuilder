json.call artist, :id, :name, :info, :created_at, :updated_at
if artist.picture.present?
  json.picture artist.picture_url
elsif artist.picture_in_ws.present?
  json.picture artist.picture_in_ws
else
  json.picture nil
end
