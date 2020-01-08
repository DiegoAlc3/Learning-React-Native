import Axios from 'axios';

const api = axios.create({
  baseURL:"https://192.168.100.7:3001/api",
});

export default api;