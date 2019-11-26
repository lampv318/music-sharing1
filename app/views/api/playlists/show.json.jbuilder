json.partial! "playlist", playlist: @playlist
json.songs @playlist.playlist_songs do |playlist_song|
  song = playlist_song.song
  json.index playlist_song.index
  json.id playlist_song.id
  json.song_id song.id
  json.name song.name
  json.duration song.duration
  json.artist_id song.artist_id
  json.album_id song.album_id
  json.artist_name song.artist.name
  if song.save_file.present?
    json.save_file song_attachment_path song
  else
    json.save_file nil
  end
end
