import axios from 'axios';

export const fetchCurrentUser = () => (
  axios.get(`/api/current_users.json`).then(
    response => { return response.data }
  )
);

export  const  fetchLogoutUser = () => (
  axios.delete(`/api/logout`).then(
    response => { return response.data }
  )
)
