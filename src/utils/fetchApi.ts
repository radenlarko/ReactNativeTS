import axios from 'axios';

export const fetchApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getPost = async () => {
  const response = await fetchApi.get('/posts');

  return response.data;
};
