import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    'Authorization':  import.meta.env.VITE_BEARER_TOKEN,
    'Access-Control-Allow-Origin': '*',
    
  },
  timeout: 5000,
  
});

export default axiosInstance;
