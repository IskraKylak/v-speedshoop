<template>
  <div class="section_category syngle_category">
    <div class="wrap_select-sort">
      <button class="my_btn btn_filter">Фильтр</button>
      <select id="select-sort" v-model="valSelect">
        <option value="1">По имени1</option>
        <option value="2">По имени2</option>
        <option value="3">По имени3</option>
      </select>
    </div>

    <div class="list_product" @click="select">
      <div class="item_product">
        <a href="#" class="wrap_img">
          <img src="@/assets/img/product2.jpg" alt="img">
        </a>
        <a href="#" class="name_product">
          Телевизор Gazer 43" Full HD Smart TV (TV43-FS2)
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
              12 699 грн.
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
      <div class="btn_arr_left disabled"></div>
      <div class="list_pagination">
        <a href="#" class="lp_item active">
          1
        </a>
        <a href="#" class="lp_item">
          2
        </a>
        <a href="#" class="lp_item">
          3
        </a>
        <a href="#" class="lp_item">
          4
        </a>
        <div class="lp_point">...</div>
        <a href="#" class="lp_item">
          19
        </a>
      </div>
      <div class="btn_arr_right"></div>
    </div>
  </div>
</template>

<script>
import '@/assets/js/select2.js'
export default {
  data () {
    return {
      valSelect: ''
    }
  },
  watch: {
    valSelect (newSelect, oldSelect) {
      this.select()
    }
  },
  methods: {
    select () {
      alert(this.valSelect)
    }
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
