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
  if song.file.present?
    json.file song_attachment_path song
  else
    json.file nil
  end
end

