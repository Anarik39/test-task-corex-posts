import {store} from 'quasar/wrappers'
import {createStore} from 'vuex'
import axios from 'axios';
import posts from './module-posts'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

const API_URL = process.env.API;

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    actions: {
      get({state}, method) {
        return axios
          .get(`${API_URL}/typicode/demo/${method}`)
          .then((response) => response.data)
      },
      post({state}, options) {
        return axios.post(`${API_URL}/typicode/demo/${options.method}`, options.params)
          .then((response) => response?.data)
      },
    },
    modules: {
      posts
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
