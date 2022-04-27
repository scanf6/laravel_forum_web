import {http} from '../../utilities/axios';

export default {
  login(payload) {
    return http.post(`/login`, payload)
      .then((result) =>  result.data)
  },
  
  register(payload) {
    return http.post(`/register`, payload)
      .then((result) =>  result.data)
  },

  logout(payload) {
    delete http.defaults.headers.common['Authorization'];
  },
}
