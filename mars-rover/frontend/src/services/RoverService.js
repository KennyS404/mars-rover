import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  deployRover(data) {
    return apiClient.post('/rovers', data);
  }
};
