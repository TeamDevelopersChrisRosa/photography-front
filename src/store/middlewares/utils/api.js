import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://localhost:3000/api',
  baseURL: 'https://photographyy.herokuapp.com/api',
  timeout: 2500,
});

export default api;