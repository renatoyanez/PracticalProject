import axios from 'axios';

export default axios.create({
  //   baseURL: 'http://localhost:8080/api',
  baseURL: 'https://dev.obtenmas.com/catom/api/challenge/banks',
  headers: {
    'Content-type': 'application/json',
  },
});
