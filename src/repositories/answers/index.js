import {http} from '../../utilities/axios'

export default {
  index(payload, params) {
    return http.get(`answers/`, { params: {...payload, ...params},})
      .then((result) => result)
  },
  
  getPostAnswers(payload, params) {
    return http.get(`answers/post/${payload.postId}`, { params: {...payload, ...params},})
      .then((result) => result)
  },

  show(payload, params) {
    return http.get(`answers/${payload.id}`, {params})
      .then((result) => result.data)
  },

  create(payload) {
    return http.post(`answers`, payload)
      .then((result) => result.data)
  },

  update(payload) {
    return http.patch(`answers/${payload.id}`, payload)
      .then((result) => result.data)
  },

  destroy(payload) {
    return http.delete(`answers/${payload.id}`, payload)
  },
}
