import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 2500,
  headers: {
    'authorization': `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
});

export default api;


