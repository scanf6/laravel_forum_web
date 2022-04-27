export function setAuth (state, payload) {
  state.token = payload.token
  state.user = payload.user
}

export function logout (state, payload) {
  state.token = ''
  state.user = {}
}

