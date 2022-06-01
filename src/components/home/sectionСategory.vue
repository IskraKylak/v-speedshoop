<template>
  <section class="section_category section">
      <div class="container">
        <div class="category_content">
          <h3>
            Хиты продаж
          </h3>
          <div class="list_product">
            <div
              class="item_product"
              v-for="(item, idx) in MAIN_PAGE.featured"
              :key="idx"
            >
              <a href="#" @click.prevent="goToProduct(item.id)" class="wrap_img">
                <img src="@/assets/img/product2.jpg" alt="img">
              </a>
              <a href="#" @click.prevent="goToProduct(item.id)" class="name_product">
                {{ item.name }}
              </a>
              <div class="wrap_compare">
                <div
                  class="icon"
                  :class="{ active: item.isSimile }"
                  @click="addOrRemoveToSimile(item)"
                >
                  <svg class="svg-scales">
                    <use xlink:href="#svg-scales"></use>
                  </svg>
                </div>
                <div
                  class="icon"
                >
                  <svg class="svg-heart">
                    <use xlink:href="#svg-heart"></use>
                  </svg>
                </div>
              </div>
              <div class="wrap_basket">
                <div class="price_product">
                  <div class="old_price">
                    <p>{{ item.regular_price }} грн.</p>
                    <span>-7%</span>
                  </div>
                  <div class="new_price">
                    {{ item.sale_price }} грн.
                  </div>
                </div>
                <button class="my_btn btn_basket" @click="addToCart(item)">
                  <div class="icon icon_basket2"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'SectionCategory',
  data () {
    return {
      state: []
    }
  },
  components: {
  },
  methods: {
    addOrRemoveToSimile (product) {
      if (product.isSimile) {
        this.$message('Товар видалено із порівняння!')
        this.DELETE_TO_SIMILE(product.id)
      } else {
        this.$message('Товар додано у порівняння!')
        this.ADD_TO_SIMILE(product)
      }
    },
    addToCart (item) {
      this.$message('Товар додано!')
      this.ADD_TO_CART(item)
    },
    goToProduct (prodId) {
      this.$router.push({
        name: 'product',
        params: { Pid: prodId }
      })
    },
    ...mapActions([
      'ADD_TO_CART',
      'ADD_TO_SIMILE',
      'DELETE_TO_SIMILE'
    ])
  },
  computed: {
    ...mapGetters([
      'MAIN_PAGE',
      'CART',
      'SIMILE',
      'CATALOG'
    ])
  }
}
</script>
<style lang="scss" scoped>
</style>
