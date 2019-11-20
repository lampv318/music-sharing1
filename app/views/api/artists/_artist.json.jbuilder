json.call artist, :id, :name, :info, :created_at, :updated_at
if artist.picture.present?
  json.cover artist.picture_url
else
  json.cover nil
end
