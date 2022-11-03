import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://localhost:3000/api',
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 2500,
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export default api;


