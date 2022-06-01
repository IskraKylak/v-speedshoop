<template>
  <div class="section_category syngle_category">
    <div class="wrap_select-sort">
      <button class="my_btn btn_filter">Фильтр</button>
      <select id="select-sort" v-model="valSelect">
        <option
          :value="item.val"
          v-for="(item, idx) in masOption"
          :key="idx"
          :selected="item.isSelected"
        >
          {{ item.name }}
        </option>
      </select>
    </div>
    <div class="list_product">
      <div
        class="item_product"
        v-for="(item, idx) in productSort" :key="idx"
      >
        <a href="#" class="wrap_img">
          <img src="@/assets/img/product2.jpg" alt="img">
        </a>
        <a href="#" class="name_product">
          {{ item.name }}
        </a>
        <div class="wrap_compare">
          <div class="icon" onclick="addFavorite(this)">
            <svg class="svg-scales">
              <use xlink:href="#svg-scales"></use>
            </svg>
          </div>
          <div class="icon" onclick="addFavorite(this)">
            <svg class="svg-heart">
              <use xlink:href="#svg-heart"></use>
            </svg>
          </div>
        </div>
        <div class="wrap_basket">
          <div class="price_product">
            <div class="new_price">
              {{ item.price }} грн.
            </div>
          </div>
          <button class="my_btn btn_basket" onclick="addBusked(this)">
            <div class="icon icon_basket2"></div>
          </button>
        </div>
        <div class="сharacteristic">
          <div class="ch_d">
            43"
          </div>
          <div class="ch_title">
            Характеристики
          </div>
          <div class="ch_list">
            <div class="ch_item">
              Тип подсветки <span>QLED</span>
            </div>
            <div class="ch_item">
              Разрешение
              <span>4K UND (3840× 2160)</span>
            </div>
            <div class="ch_item">
              Назначение
              <span>Для спальни</span>
            </div>
            <div class="ch_item">
              Суммарная можность динамиков
              <span>20 Вт</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="more_load">
      <div class="more_text"><span class="icon_load icon"></span> Показать еще</div>
    </div>
    <div class="wrap_pagination">
      <div class="btn_arr_left" @click.prevent="prevPage"></div>
      <div class="list_pagination">
        <a
          href="#"
          class="lp_item"
          :class="active === (idx + 1) ? 'active' : ''"
          v-for="(tmpPag, idx) in pag"
          :key="idx"
          @click.prevent="openPage(idx + 1)"
        >
          {{ idx + 1 }}
        </a>
      </div>
      <div class="btn_arr_right" @click.prevent="nextPage"></div>
    </div>
  </div>
</template>

<script>
import '@/assets/js/select2.js'
export default {
  data () {
    return {
      valSelect: 1,
      masOption: [
        {
          name: 'Від дешевих до дорогих',
          val: 1,
          isSelected: true
        },
        {
          name: 'Від дорогих до дешевих',
          val: 2,
          isSelected: false
        }
      ],
      masProduct: [
        { name: 1, price: 20 },
        { name: 2, price: 40 },
        { name: 3, price: 50 },
        { name: 4, price: 10 },
        { name: 5, price: 20 },
        { name: 6, price: 30 },
        { name: 7, price: 10 },
        { name: 8, price: 50 },
        { name: 9, price: 270 },
        { name: 10, price: 280 },
        { name: 11, price: 80 },
        { name: 12, price: 70 },
        { name: 13, price: 30 },
        { name: 14, price: 40 },
        { name: 15, price: 40 }
      ],
      pag: [],
      active: 1,
      page: {
        current: 1,
        length: 5
      }
    }
  },
  watch: {
    valSelect (newSelect, oldSelect) {
    }
  },
  computed: {
    productSort () {
      if (this.valSelect === 1) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return this.masProduct
          .sort(
            function (d1, d2) { return (d1.price > d2.price) ? 1 : -1 }
          )
          .filter((row, index) => {
            const start = (this.page.current - 1) * this.page.length
            const end = this.page.current * this.page.length
            if (index >= start && index < end) return true
          })
      } else if (this.valSelect === 2) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return this.masProduct
          .sort(
            function (d1, d2) { return (d1.price < d2.price) ? 1 : -1 }
          )
          .filter((row, index) => {
            const start = (this.page.current - 1) * this.page.length
            const end = this.page.current * this.page.length
            if (index >= start && index < end) return true
          })
      }
      return this.masProduct.filter((row, index) => {
        const start = (this.page.current - 1) * this.page.length
        const end = this.page.current * this.page.length
        if (index >= start && index < end) return true
      })
    }
  },
  methods: {
    openPage (idx) {
      this.active = idx
      this.page.current = idx
    },
    prevPage () {
      if (this.page.current > 1) {
        this.page.current -= 1
        this.active = this.page.current
      }
    },
    nextPage () {
      if (this.page.current * this.page.length < this.masProduct.length) {
        this.page.current += 1
        this.active = this.page.current
      }
    },
    getNotify () {
      this.pag = Math.ceil(this.masProduct.length / this.page.length)
    }
  },
  created () {
    this.getNotify()
  }
}

$(function () {
  // $('#select-sort').select2({
  //   minimumResultsForSearch: -1
  // })
})
</script>

<style lang="scss" scoped>
</style>
