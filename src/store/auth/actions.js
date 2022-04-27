import api from '../../repositories/authentication'

export function login({commit,dispatch}, payload) {
  return api.login(payload).then(async (data) => {
    const {
      user,
      token
    } = data;
    localStorage.setItem('laraforum_token', token);
    commit('setAuth', {user, token});
    return data
  })
};

export function register({commit,dispatch}, payload) {
  return api.register(payload).then(async ({data}) => {
    return data
  })
};

export function logout(context, payload) {
  api.logout(payload)
  return context.commit('logout')
}
