artist1 = Artist.create!(
  name: "Lady Gaga",
  info: "A great singer born in 19xx"
)

album1 = Album.create!(
  name: "Album 02"
)

Song.create!(
  name: "Track 01",
  artist: artist1,
  album: album1
)

Song.create!(
  name: "Track 02",
  artist: artist1,
  album: album1
)

artist2 = Artist.create!(
  name: "Mariah Carey",
  info: "A very great artist born in 19xx"
)

album2 = Album.create!(
  name: "Greatest Hits"
)

Song.create!(
  name: "Track 03",
  artist: artist2,
  album: album2
)

Song.create!(
  name: "Track 04",
  artist: artist2,
  album: album2
)
