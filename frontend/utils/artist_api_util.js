import axios from 'axios';

export const fetchArtist = (artistId) => (
  axios.get(`/api/artists/${artistId}.json`).then(
    response => { return response.data }
  )
);

export const fetchArtists = () => (
  axios.get(`/api/artists.json`).then(
    response => { return response.data }
  )
);