import axios from 'axios';

export const fetchCategoryAlbums = (categoryId) => (
  axios.get(`/api/categories/${categoryId}/albums.json`).then(
    response => { return response.data }
  )
);

export const fetchArtistAlbums = (artistId) => (
  axios.get(`/api/artists/${artistId}/albums.json`).then(
    response => { return response.data }
  )
);

export const fetchAlbums = () => (
  axios.get(`/api/albums.json`).then(
    response => { return response.data }
  )
);

export const fetchAlbum = (albumId) => (
  axios.get(`/api/albums/${albumId}.json`).then(
    response => { return response.data }
  )
);
