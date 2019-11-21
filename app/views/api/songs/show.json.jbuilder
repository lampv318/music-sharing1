json.call @song, :id, :name
json.artist @song.artist, :id, :name
json.album @song.album, :id, :name
json.file @song.save_file