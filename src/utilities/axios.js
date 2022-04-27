import axios from 'axios'

const http = axios.create({
  baseURL: `http://${location.hostname}:8000/api`,
  headers: {'Accept': 'application/json'}
});

http.interceptors.request.use(function (config) {
    if (localStorage.getItem('laraforum_token')) {
      config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('laraforum_token');
    }
    return config;
}, function (errorHttp) {
    throw  errorHttp;
});

export {http};