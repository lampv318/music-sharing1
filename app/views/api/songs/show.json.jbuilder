json.call @song, :id, :name
json.artist @song.artist, :id, :name
json.album @song.album, :id, :name
json.file rails_blob_path @song.file, disposition: "attachment"
