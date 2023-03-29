import axios from 'axios';

const databaseAxios = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-type': 'application/json',
  },
});

const apiAxios = axios.create({
  baseURL: 'https://dev.obtenmas.com/catom/api/challenge/banks',
  headers: {
    'Content-type': 'application/json',
  },
});

export {databaseAxios, apiAxios};
