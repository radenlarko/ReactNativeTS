import axios from 'axios';
import {endpoint} from './endpoint';
import {LoginInputs} from '../types/formValue';

export const fetchApi = axios.create({
  baseURL: `${endpoint}/api`,
});

export const getPost = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts',
  );

  return response.data;
};

export const loginUser = async (data: LoginInputs) => {
  const response = await fetchApi.post('/auth/login', data);

  return response.data;
};
