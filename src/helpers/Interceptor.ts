import axios from 'axios';

const queryString = require('query-string');

const axiosClient = axios.create({
  baseURL: 'https://5b5473af611af00014b90cda.mockapi.io/api/',
  timeout: 10000,
  headers: { 'content-type': 'application/json' },
  paramsSerializer: function (params) {
    return queryString.stringify(params);
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    // anywhere token  const token = localStorage.getItem('jwtToken') || '';
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    if (response && response.data) {
      return response.data;
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
