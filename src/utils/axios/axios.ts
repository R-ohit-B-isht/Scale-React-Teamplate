import axios from 'axios';
import * as Sentry from '@sentry/react';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    Sentry.captureException(error);
    return Promise.reject(error);
  }
);

export { axiosInstance as axios };
