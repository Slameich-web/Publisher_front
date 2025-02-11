import axios from 'axios';

export const request = axios.create({
  baseURL: 'https://some-domain.com/api/',
  headers: { 'Content-Type': 'application/json' },
});
