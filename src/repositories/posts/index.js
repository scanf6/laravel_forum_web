import {http} from '../../utilities/axios'

export default {
  index(payload, params) {
    return http.get(`posts/`, { params: {...payload, ...params},})
      .then((result) => result)
  },

  show(payload, params) {
    return http.get(`posts/${payload.id}`, {params})
      .then((result) => result.data)
  },

  create(payload) {
    return http.post(`posts`, payload)
      .then((result) => result.data)
  },

  update(payload) {
    return http.patch(`posts/${payload.id}`, payload)
      .then((result) => result.data)
  },

  destroy(payload) {
    return http.delete(`posts/${payload.id}`, payload)
  },
}
