import axios from 'axios';

export const fetchCurrentUser = () => (
  axios.get(`/api/current_users.json`).then(
    response => { return response.data }
  )
);
