import api from '../../repositories/answers'

export function index(context, payload) {
  return api.index(payload).then(value => {
    context.commit('setList', value.data.data);
    return Promise.resolve(context.state.items)
  }).catch(reason => {
    return Promise.reject(reason)
  })
}

export function getPostAnswers(context, payload) {
  return api.getPostAnswers(payload).then(value => {
    context.commit('setList', value.data.data);
    return Promise.resolve(context.state.items)
  }).catch(reason => {
    return Promise.reject(reason)
  })
}

export function show(context, payload) {
  return api.show(payload).then(value => {
    context.commit('setItem', value.data);
    return Promise.resolve(context.state.form)
  }).catch(reason => {
    return Promise.reject(reason)
  })
}

export function create(context, payload) {
  return api.create(payload).then(value => value.data)
}

export function update(context, payload) {
  return api.update(payload).then(value => value.data)
}

export function destroy(context, payload) {
  return api.destroy(payload)
}
