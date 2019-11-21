json.call album, :id, :name, :disc_no, :year, :created_at, :updated_at
if album.picture.present?
  json.cover album.picture_url
else
  json.cover nil
end
