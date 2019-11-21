import axios from 'axios';

export const fetchSearchResults = (string) => (
  axios.get(`/api/search.json?q=${string}`).then(
    response => { return response.data }
  )
);
