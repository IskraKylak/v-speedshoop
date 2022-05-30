<template>
  <div class="popup_wrapper" ref="popup_wrapper">
    <div class="v-popup box-modalBusket">
      <div class="box_modal_head">
        Корзина
        <div class="box-modal_close arcticmodal-close" @click="closePopup()">
          <svg viewBox="0 0 24 24" fill="currentColor" class="icon-0-2-33"><path d="M10.5858 11.9999L4.66667 6.08079C4.27615 5.69027 4.27615 5.0571 4.66667 4.66658C5.0572 4.27606 5.69036 4.27605 6.08088 4.66658L12 10.5857L17.9191 4.66658C18.3096 4.27606 18.9428 4.27606 19.3333 4.66658C19.7239 5.0571 19.7239 5.69027 19.3333 6.08079L13.4142 11.9999L19.3333 17.919C19.7239 18.3096 19.7239 18.9427 19.3333 19.3332C18.9428 19.7238 18.3096 19.7238 17.9191 19.3332L12 13.4141L6.08088 19.3332C5.69036 19.7238 5.0572 19.7238 4.66667 19.3332C4.27615 18.9427 4.27615 18.3096 4.66667 17.919L10.5858 11.9999Z"></path></svg>
        </div>
      </div>
      <div class="box_modal_body">
        <div class="wrap_list_cart">
          <div class="list_cart">
            <div class="lc_item"  v-for="(item, idx) in CART" key="item.id">
              <div class="wrap_img">
                <img src="@/assets/img/product2.jpg" alt="img">
              </div>
              <div class="lc_wrap_name">
                <div class="lc_name">
                  {{ item.name }}
                </div>
                <div class="wrap_numeric">
                  <div class="numeric_minus"  @click="decrementItem(idx)">
                    <svg class="svg-minus">
                      <use xlink:href="#svg-minus"></use>
                    </svg>
                  </div>
                  <div class="wrap_number_input">
                    <input type="number" :value="item.quantity" class="number_input">
                  </div>
                  <div class="numeric_plus" @click="incrementItem(idx)">
                    <svg class="svg-plus">
                      <use xlink:href="#svg-plus"></use>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="lc_wrap_price">
                <div class="lwp_top">
                  <div class="wrap_svg_border" >
                    <svg class="svg-heart">
                      <use xlink:href="#svg-heart"></use>
                    </svg>
                  </div>
                  <div class="wrap_svg_border" @click="deleteFromCart(idx)">
                    <svg class="svg-busket">
                      <use xlink:href="#svg-busket"></use>
                    </svg>
                  </div>
                </div>
                <div class="lwp_price">
                  {{ item.sale_price }}
                </div>
                <!--нужно для цены за 1 товар-->
                <div class="single_price d-none">{{ item.price }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="general_price">
          <a href="/" class="my_btn btn_continue" @click.prevent="closePopup">
            Продолжить покупки
          </a>
          <div class="gp_price">
            {{ cartTotalCost }}
          </div>
        </div>
        <div @click="openOrder" class="my_btn btn_order">Оформить заказ</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'v-popup',
  props: {
  },
  data () {
    return {
    }
  },
  methods: {
    openOrder () {
      if (this.CART.length !== 0) {
        this.closePopup()
        this.$router.push('/order')
      } else {
        this.$message("Додайте товар у кошик!")
      }
    },
    closePopup () {
      this.$emit('closePopup')
    },
    decrementItem (index) {
      this.DECREMENT_CART_ITEM(index)
    },
    incrementItem (index) {
      this.INCREMENT_CART_ITEM(index)
    },
    deleteFromCart (index) {
      this.DELETE_FROM_CART(index)
      if (this.CART.length === 0) {
        this.$emit('closePopup')
      }
    },
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM'
    ])
  },
  computed: {
    cartTotalCost () {
      let result = []
      if (this.CART.length) {
        for (const item of this.CART) {
          result.push(item.sale_price * item.quantity)
        }
        result = result.reduce(function (sum, el) {
          return parseInt(sum + el)
        })
        return parseInt(result)
      } else {
        return 0
      }
    },
    ...mapGetters([
      'CART'
    ])
  },
  mounted () {
    const vm = this
    document.addEventListener('click', function (item) {
      if (item.target === vm.$refs.popup_wrapper) {
        vm.closePopup()
      }
    })
  }
}
</script>

<style lang="scss">
.popup_wrapper {
  background: rgba(64,64,64, .4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
}
.box-modalBusket {

}

//.v-popup {
//  padding: 16px;
//  position: fixed;
//  top: 50px;
//  width: 400px;
//  background: #ffffff;
//  box-shadow: 0 0 17px 0 #e7e7e7;
//  z-index: 10;
//  &__header, &__footer {
//    display: flex;
//    justify-content: space-between;
//    align-items: center;
//  }
//  &__content {
//    display: flex;
//    justify-content: center;
//    align-items: center;
//  }
//  .submit_btn {
//    padding: 8px;
//    color: #ffffff;
//    background: #26ae68;
//  }
//  .close_modal {
//    padding: 8px;
//    color: #ffffff;
//    background: red;
//  }
//}
</style>
