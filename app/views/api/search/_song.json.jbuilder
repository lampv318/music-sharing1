json.call song, :id, :name, :track_no, :duration, :year, :bit_rate, :artist_id,
  :album_id, :created_at, :updated_at

if song.save_file.present?
  json.save_file song_attachment_path song
else
  json.save_file nil
end
