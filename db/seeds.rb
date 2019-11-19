metadata_files = Dir.glob("import/*.flac.json")
metadata_files.each do |metadata_file|
  metadata = JSON.parse(File.read(metadata_file))

  # set up
  filename = metadata["format"]["filename"]
  duration = metadata["format"]["duration"]
  bit_rate = metadata["format"]["bit_rate"]

  tags = metadata["format"]["tags"].transform_keys!(&:downcase)
  title = tags["title"]
  album = tags["album"]
  genre = tags["genre"]
  track_no = tags["track"]
  year = tags["date"] || tags["year"]
  artist = tags["artist"]
  bit_rate = metadata["format"]["bit_rate"]
  
  # create 
  album = Album.find_or_create_by name: album
  album.year = year if album.year.blank?
  album.save!
  puts "create album"

  artist = Artist.find_or_create_by name: artist
  puts "create artist"

  AlbumArtist.find_or_create_by album: album, artist: artist
  puts "create artist album"

  if genre.present?
    category = Category.find_or_create_by name: genre
  end
  puts "create artist category"

  song = Song.find_or_create_by(
    name: title,
    duration: duration,
    artist: artist,
    album: album,
    track_no: track_no,
    year: year,
    bit_rate: bit_rate
  )
  puts "create song"

  SongCategory.find_or_create_by(
    song: song,
    category: category
  ) if category.present?
  puts "create song category"
  
  song.file.attach(
    io: File.open(filename),
    filename: track_no.to_s + ". " + title + ".flac"
  ) unless song.file.attached?

end