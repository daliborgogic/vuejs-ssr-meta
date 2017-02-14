import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    head: {
      title: '',
      description: '',
      image: ''
    }
  },

  actions: {
    SET_HEAD (context, head) {
      context.commit('SET_HEAD', head)
    }
  },

  mutations: {
    SET_HEAD (state, head) {
      state.head = head
    }
  },

  getters: {
    activeHEAD (state) {
      return state.head
    }
  }
})

export default store
