import axios from 'axios';

export const fetchArtistSongs = (artistId) => (
  axios.get(`/api/artists/${artistId}/songs.json`).then(
    response => { return response.data }
  )
);

export const fetchAlbumSongs = (albumId) => (
  axios.get(`/api/albums/${albumId}/songs.json`).then(
    response => { return response.data }
  )
);

export const fetchSong = (songId) => (
  axios.get(`/api/songs/${songId}.json`).then(
    response => { return response.data }
  )
);