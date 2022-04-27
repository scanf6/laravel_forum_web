import { createStore } from 'vuex'

import auth from './auth'
import posts from './posts'
import answers from './answers'

export default createStore({
  modules: {
    auth,
    posts,
    answers,
  }
});
