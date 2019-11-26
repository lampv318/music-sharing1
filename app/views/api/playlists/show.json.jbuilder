json.partial! "playlist", playlist: @playlist
json.songs @playlist.playlist_songs do |playlist_song|
  song = playlist_song.song
  json.id playlist_song.id
  json.index playlist_song.index
  json.song_id song.id
  json.name song.name
  json.duration song.duration
  json.artist_id song.artist_id
  json.album_id song.album_id
  json.file song.save_file
end

