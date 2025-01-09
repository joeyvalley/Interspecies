import axios from 'axios';

// Log the base URL for debugging
console.log("API Base URL:", process.env.REACT_APP_SERVER_URL || 'http://localhost:3000');

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL || 'http://localhost:3000',
});

export default api;