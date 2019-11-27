User.create!(name: "lampv", email: "lampvhy@gmail.com", password: "111111", password_confirmation: "111111")

metadata_files = Dir.glob("import/*.flac.json")
metadata_files += Dir.glob("import/*.m4a.json")

metadata_files.each do |metadata_file|
  metadata = JSON.parse(File.read(metadata_file))

  imported_filename = metadata["format"]["filename"]
  imported_duration = metadata["format"]["duration"]
  # imported_bit_rate = metadata["format"]["bit_rate"]
  imported_tags = metadata["format"]["tags"].transform_keys!(&:downcase)
  imported_title = imported_tags["title"]
  imported_album = imported_tags["album"]
  imported_genre = imported_tags["genre"]
  # imported_composer = imported_tags["composer"]
  imported_track_no =
      if imported_tags["track"].blank?
        1
      else
        imported_tags["track"].split("/").first
      end
  imported_year = imported_tags["date"]
  imported_artist = imported_tags["artist"]
  imported_album_artist = imported_tags["album_artist"] || imported_artist
  imported_disc_no =
      if imported_tags["disc"].blank?
        1
      else
        imported_tags["disc"].split("/").first
      end
  album = Album.find_or_create_by name: imported_album, disc_no: imported_disc_no
  album.year = imported_year if album.year.blank?
  if album.picture.blank?
    picture_path = imported_filename + ".jpg"
    album.picture = File.open(picture_path) if File.file? picture_path
  end
  album.save!

  artist = Artist.find_or_create_by name: imported_artist
  if artist.picture.blank?
    picture_path = imported_filename + ".jpg"
    artist.picture = File.open(picture_path) if File.file? picture_path
  end
  artist.save!

  album_artist = Artist.find_or_create_by name: imported_album_artist

  AlbumArtist.find_or_create_by album: album, artist: album_artist
  if imported_genre.present?
    category = Category.find_or_create_by name: imported_genre
    category.tag = 0 if category.tag.blank?
    category.save!
  end

  song = Song.find_or_create_by(
      name: imported_title,
      duration: imported_duration,
      artist: artist,
      album: album,
      track_no: imported_track_no,
      year: imported_year
  )

  SongCategory.find_or_create_by(
      song: song,
      category: category
  ) if category.present?

  AlbumCategory.find_or_create_by(
      album: album,
      category: category
  ) if category.present?

  song.save_file = File.open(imported_filename) if song.save_file.blank?
  song.save!

end

Playlist.create!( name: "Greate", user_id: "1")
5.times do |n|
  PlaylistSong.create(playlist_id: "1", song_id: n, index: n)
end


