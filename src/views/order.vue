<template>
  <div>
    <div class="container">
      <div class="breadcrumbs">
        <a href="" class="home_link"></a>
        <span class="icon icon_arr_right"></span>
        <a href="#">
          Смартфоны, ТВ и электроника
        </a>
        <span class="icon icon_arr_right"></span>
        <a href="#">
          Телевизоры
        </a>
        <span class="icon icon_arr_right"></span>
        <div>
          Электросамокат Название
        </div>
      </div>
    </div>
    <div class="container">
      <h2 class="title_page">Оформление заказа</h2>
      <form action="" class="form_order">
        <div class="wrap_order_page">
          <div class="window_order">
            <div class="wo_top">
              <div class="wo_title">
                Итого
              </div>
              <div class="wo_list">
                <div class="wo_item">
                  <div>
                    {{ countProduct }} товара на сумму
                  </div>
                  <div class="wo_price">
                    {{ sumProduct }} ₴
                  </div>
                </div>
                <div class="wo_item">
                  <div>
                    Доставка
                  </div>
                  <div class="wo_price">
                    100 ₴
                  </div>
                </div>
              </div>
              <div class="wo_wrap_general_price">
                <div>
                  К оплате
                </div>
                <div class="wo_general_price">
                  {{ generalSumProduct }} ₴
                </div>
              </div>
            </div>
          </div>
          <div class="content_order1">
            <h3>
              1. Ваши контактные
            </h3>
            <div class="wrap_inputs_order">
              <label class="wrap_input">
                <div class="title_input">
                  Имя
                </div>
                <input type="text">
              </label>
              <label class="wrap_input">
                <div class="title_input">
                  Фамилия
                </div>
                <input type="text">
              </label>
              <label class="wrap_input">
                <div class="title_input">
                  Номер телефона
                </div>
                <input type="text">
              </label>
              <label class="wrap_input">
                <div class="title_input">
                  Эл. почта
                </div>
                <input type="email">
              </label>
            </div>
            <h3 class="title_order_custom">
              Заказ №1
            </h3>
            <div class="block_order block_tovar">
              <div class="wrap_title">
                <h3>
                  Товары
                </h3>
                <a href="#" class="edit_order">
                  Редактировать
                </a>
              </div>
              <div class="list_product_buy">
                <div class="lpb_item" v-for="(item, idx) in CART" key="item.id">
                  <div class="lpb_left">
                    <div class="wrap_img">
                      <img :src="require('@/assets/img/' + item.image)" alt="img">
                    </div>
                    <a href="#" class="lbp_name">
                      {{ item.name }}
                    </a>
                  </div>
                  <div class="wrap_price">
                    <div class="lbp_wrap_info lbp_wrap_info_price">
                      <div>
                        Цена
                      </div>
                      <div class="lbp_meaning">
                        {{ item.price }}
                      </div>
                    </div>
                    <div class="lbp_wrap_info">
                      <div>
                        Количество
                      </div>
                      <div class="lbp_meaning">
                        {{ item.quantity }}
                      </div>
                    </div>
                    <div class="lbp_wrap_info lbp_wrap_info_price">
                      <div>
                        Сумма
                      </div>
                      <div class="lbp_meaning">
                        {{ item.price * item.quantity }}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div class="block_order">
              <h3>
                2. Доставка
              </h3>
              <label class="label_town">
                Выберите ваш город
              </label>
              <div class="btn_town">
                <p class="text_town">Днепр</p>
                <span id="text_region">Днепропетровская обл.</span>
                <input type="hidden" class="order_town">
                <input type="hidden" class="order_region">
              </div>
              <div class="list_order_chekbox">
                <div class="loc_item">
                  <label for="ck11" class="lp_item">
                    <div class="custom_checkbox">
                      <input type="checkbox" id="ck11">
                      <label for="ck11"></label>
                    </div>
                    <div class="label_name">Самовывоз</div>
                  </label>
                  <div class="loc_price">
                    100 ₴
                  </div>
                </div>
                <div class="loc_item">
                  <label for="ck12" class="lp_item">
                    <div class="custom_checkbox">
                      <input type="checkbox" id="ck12">
                      <label for="ck12"></label>
                    </div>
                    <div class="label_name">Служба доставки </div>
                  </label>
                  <div class="loc_price">
                    100 ₴
                  </div>
                </div>
                <div class="loc_item">
                  <label for="ck13" class="lp_item">
                    <div class="custom_checkbox">
                      <input type="checkbox" id="ck13">
                      <label for="ck13"></label>
                    </div>
                    <div class="label_name">Доставка курьером</div>
                  </label>
                  <div class="loc_price">
                    100 ₴
                  </div>
                </div>
              </div>
            </div>
            <div class="block_order">
              <h3>
                3. Оплата
              </h3>
              <div class="list_order_chekbox">
                <div class="loc_item">
                  <label for="ck1" class="lp_item">
                    <div class="custom_checkbox">
                      <input type="checkbox" id="ck1">
                      <label for="ck1"></label>
                    </div>
                    <div class="label_name">Оплатить сейчас</div>
                  </label>
                </div>
                <div class="loc_item">
                  <label for="ck2" class="lp_item">
                    <div class="custom_checkbox">
                      <input type="checkbox" id="ck2">
                      <label for="ck2"></label>
                    </div>
                    <div class="label_name">Оплата при получении </div>
                  </label>
                </div>
                <div class="loc_item">
                  <label for="ck3" class="lp_item">
                    <div class="custom_checkbox">
                      <input type="checkbox" id="ck3">
                      <label for="ck3"></label>
                    </div>
                    <div class="label_name">Безналичными для юридических лиц</div>
                  </label>
                </div>
                <div class="loc_item">
                  <label for="ck4" class="lp_item">
                    <div class="custom_checkbox">
                      <input type="checkbox" id="ck4">
                      <label for="ck4"></label>
                    </div>
                    <div class="label_name">Безналичными для физических лиц</div>
                  </label>
                </div>
              </div>
            </div>
            <div class="block_order">
              <h3>
                4. Контактные данные получателя
              </h3>
              <div class="wrap_inputs_order">
                <label class="wrap_input">
                  <div class="title_input">
                    Имя
                  </div>
                  <input type="text">
                </label>
                <label class="wrap_input">
                  <div class="title_input">
                    Фамилия
                  </div>
                  <input type="text">
                </label>
                <label class="wrap_input">
                  <div class="title_input">
                    Номер телефона
                  </div>
                  <input type="text">
                </label>
              </div>
            </div>
          </div>
        </div>
        <button class="my_btn btn_buy">
          Оформить заказ
        </button>
      </form>
    </div>
  </div>
</template>
<script>

import { mapGetters } from 'vuex'

export default {
  name: 'Order',
  data () {
    return {
    }
  },
  components: {
  },
  computed: {
    countProduct () {
      let countProduct = 0
      for (const item of this.CART) {
        countProduct = countProduct + item.quantity
      }
      return countProduct
    },
    sumProduct () {
      let sum = 0
      for (const item of this.CART) {
        sum = sum + (item.price * item.quantity)
      }
      return sum
    },
    generalSumProduct () {
      let sum  = this.sumProduct + 100
      return sum
    },
    ...mapGetters([
      'CART'
    ])
  }
}
</script>
<style lang="scss" scoped>
  .lpb_item .wrap_img {
    min-width: 70px;
  }
</style>
