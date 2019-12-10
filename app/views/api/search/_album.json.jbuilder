json.call album, :id, :name, :disc_no, :year, :created_at, :updated_at
if album.picture.present?
  json.picture album.picture_url
elsif album.picture_in_ws.present?
  json.picture album.picture_in_ws
else
  json.picture nil
end
