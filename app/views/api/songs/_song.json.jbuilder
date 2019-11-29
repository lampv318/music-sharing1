json.call song, :id, :name, :track_no, :duration, :year, :bit_rate, :artist_id,
          :album_id, :created_at, :updated_at
json.artist_name song.artist.name
if song.save_file.present?
  json.save_file song_attachment_path song
elsif song.file_in_ws.present?
  json.save_file song.file_in_ws
else
  json.save_file nil
end
