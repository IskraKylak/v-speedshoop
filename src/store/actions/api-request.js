import axios from 'axios'

export default {
  GET_PRODUCTS_FROM_API ({ commit }) {
    // return axios('http://localhost:3000/products', {
    //     method: "GET"
    // }).then((products) => {
    //     for(let i = 0; i < products.data.length; i ++) {
    //         products.data[i].quantity =  1
    //     }
    //     commit('SET_PRODUCTS_TO_STATE', products.data)
    //     return products.data
    // }).catch((error) => {
    //     console.log(error)
    //     return error
    // })
    const products = [{
      id: 1,
      name: 'Tovar1',
      price: '2000',
      image: 'product2.jpg',
      isSimile: false
    },
    {
      id: 2,
      name: 'Tovar2',
      price: '3000',
      image: 'product2.jpg',
      isSimile: false
    },
    {
      id: 3,
      name: 'Tovar3',
      price: '4000',
      image: 'product2.jpg',
      isSimile: false
    },
    {
      id: 4,
      name: 'Tovar4',
      price: '5000',
      image: 'product2.jpg',
      isSimile: false
    },
    {
      id: 5,
      name: 'Tovar5',
      price: '6000',
      image: 'product2.jpg',
      isSimile: false
    },
    {
      id: 6,
      name: 'Tovar6',
      price: '7000',
      image: 'product2.jpg',
      isSimile: false
    }]
    
    commit('SET_PRODUCTS_TO_STATE', products)
  }
}
