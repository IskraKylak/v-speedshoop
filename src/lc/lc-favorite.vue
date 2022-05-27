<template>
  <div class="favorite_body">
    <div class="order_favorite">
      <div class="of_text">
        Доступно товара на сумму
        <span>
                101 592 ₴
            </span>
      </div>
      <div class="my_btn btn_vavorite_order">
        Оформить заказ
      </div>
      <a href="#" class="of_link_remove">
        Удалить все
      </a>
    </div>
    <div class="list_product">
      <div class="item_product">
        <a href="#" class="wrap_img">
          <img src="@/assets/img/product.png" alt="img">
        </a>
        <a href="#" class="name_product">
          Телевизор Gazer 43" Full HD Smart TV (TV43-FS2)
        </a>
        <div class="wrap_compare">
          <a href="#" class="icon icon_scales2"></a>
          <a href="#" class="icon icon_heart2"></a>
        </div>
        <div class="wrap_basket">

          <div class="price_product">
            <div class="old_price">
              <p>29 499 грн.</p>
              <span>-7%</span>
            </div>
            <div class="new_price">
              12 699 грн.
            </div>
          </div>
          <button class="my_btn btn_basket">
            <div class="icon icon_basket2"></div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-favorite',
  data () {
    return {
    }
  },
  props: {
  },
  methods: {
  },
  computed: {
  },
  mounted () {
  }
}
</script>

<style lang="scss">
</style>
