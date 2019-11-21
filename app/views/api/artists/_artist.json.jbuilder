json.call artist, :id, :name, :info, :created_at, :updated_at
if artist.picture.present?
  json.picture artist.picture_url
else
  json.picture nil
end
