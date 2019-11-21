import axios from 'axios';

export const fetchCurrentUser = () => (
  axios.get(`/api/account.json`).then(
    response => { return response.data }
  )
);
