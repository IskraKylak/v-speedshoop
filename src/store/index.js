import { createStore } from 'vuex'
import commonActions from './actions/actions'
import apiRequests from './actions/api-request'
import mutations from './mutations/mutations'
import getters from './getters/getters'

const actions = { ...commonActions, ...apiRequests }

const cart = window.localStorage.getItem('cart')
const simile = window.localStorage.getItem('simile')

export default createStore({
  state: {
    mainPage: [],
    catalog: '',
    searchValue: '',
    products: [],
    cart: cart ? JSON.parse(cart) : [],
    isMobile: false,
    isDesktop: true,
    simile: simile ? JSON.parse(simile) : []
  },
  mutations,
  actions,
  getters,
  modules: {
  }
})
