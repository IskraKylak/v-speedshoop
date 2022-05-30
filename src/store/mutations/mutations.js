export default {
  SET_SEARCH_VALUE_TO_VUEX: (state, value) => {
    state.searchValue = value
  },
  SWITCH_MOBILE: (state) => {
    state.isMobile = true
    state.isDesktop = false
  },
  SWITCH_DESKTOP: (state) => {
    state.isMobile = false
    state.isDesktop = true
  },
  SET_MAIN_PAGE_TO_STATE: (state, main) => {
    state.mainPage = main
  },
  SET_CATALOG_TO_STATE: (state, catalog) => {
    state.catalog = catalog
  },
  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = products
    if (state.simile.length > 0) {
      for (let i = 0; i < state.simile.length; i++) {
        for (let n = 0; n < state.products.length; n++) {
          if (state.simile[i].id === state.products[n].id) {
            state.products[n].isSimile = true
          }
        }
      }
    }
  },
  SET_SIMILE: (state, product) => {
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].id === product.id && !state.products[i].isSimile) {
        state.products[i].isSimile = true
        state.simile.push(product)
      }
    }
    window.localStorage.setItem('simile', JSON.stringify(state.simile))
  },
  SET_CART: (state, product) => {
    if (state.cart.length) {
      let isProductExists = false
      state.cart.map(function (item) {
        if (item.id === product.id) {
          console.log(product)
          isProductExists = true
          item.quantity++
        }
      })
      if (!isProductExists) {
        state.cart.push(product)
        product.quantity = 1
      }
    } else {
      state.cart.push(product)
      product.quantity = 1
    }
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  REMOVE_FROM_SIMILE: (state, index) => {
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].id === index) {
        state.products[i].isSimile = false
      }
    }
    for (let i = 0; i < state.simile.length; i++) {
      if (state.simile[i].id === index) {
        state.simile.splice(i, 1)
        window.localStorage.setItem('simile', JSON.stringify(state.simile))
      }
    }
  },
  REMOVE_FROM_CART: (state, index) => {
    state.cart.splice(index, 1)
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  INCREMENT (state, index) {
    state.cart[index].quantity++
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  DECREMENT (state, index) {
    if (state.cart[index].quantity > 1) {
      state.cart[index].quantity--
    }
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
  }
}
