export default {
  ADD_TO_CART ({ commit }, product) {
    commit('SET_CART', product)
  },
  ADD_TO_SIMILE ({ commit }, product) {
    commit('SET_SIMILE', product)
  },
  DELETE_TO_SIMILE ({ commit }, index) {
    commit('REMOVE_FROM_SIMILE', index)
  },
  DELETE_FROM_CART ({ commit }, index) {
    commit('REMOVE_FROM_CART', index)
  },
  INCREMENT_CART_ITEM ({ commit }, index) {
    commit('INCREMENT', index)
  },
  DECREMENT_CART_ITEM ({ commit }, index) {
    commit('DECREMENT', index)
  },
  SET_MOBILE ({ commit }) {
    commit('SWITCH_MOBILE')
  },
  SET_DESKTOP ({ commit }) {
    commit('SWITCH_DESKTOP')
  },
  GET_SEARCH_VALUE_TO_VUEX ({ commit }, value) {
    commit('SET_SEARCH_VALUE_TO_VUEX', value)
  }
}
