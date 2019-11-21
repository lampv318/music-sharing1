import axios from 'axios';

export const fetchCategory = (categoryId) => (
  axios.get(`/api/categories/${categoryId}.json`).then(
    response => { return response.data }
  )
);

export const fetchCategories = () => (
  axios.get(`/api/categories.json`).then(
    response => { return response.data }
  )
);
