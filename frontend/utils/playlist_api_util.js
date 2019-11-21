import axios from 'axios';

export const fetchUserPlaylists = (userId) => (
  axios.get(`/api/users/${userId}/playlists.json`).then(
    response => {return response.data}
  )
);

export const fetchUserPlaylist = (userId, playlistId) => (
  axios.get(`/api/users/${userId}/playlists/${playlistId}.json`).then(
    response => {return response.data}
  )
);

export const fetchPlaylist = playlistId => (
  axios.get(`/api/playlists/${playlistId}.json`).then(
    response => {return response.data}
  )
);
