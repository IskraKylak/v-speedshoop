<template>
  <section class="section_slider">
    <div class="container">
      <div class="content_slider">
        <div class="left_width">
          <div class="menu_catalog">
            <div
              class="mc_link"
              v-for="(item, idx) in CATALOG"
              :key="idx"
            >
              <a href="#">
                <div class="text_catalog">
                  <div class="icon">
                    <img src="@/assets/img/icon/1mobile.svg" alt="img">
                  </div>
                  {{ item.name }}
                </div>
                <span class="icon icon_arr_right"></span>
              </a>
              <div class="wrap_un_list">
                <div class="un_list">
                  <div class="wrap_list_un_menu">
                    <a href="#" class="title_un_menu">
                      Бренды
                    </a>
                    <div class="un_menu">
                      <a href="#">Apple</a>
                      <a href="#">Samsung</a>
                      <a href="#">Oppo</a>
                      <a href="#">Motorola</a>
                      <a href="#">Xiaomi</a>
                      <a href="#">POCO</a>
                      <a href="#">Nokia</a>
                      <a href="#">vivo</a>
                      <a href="#">OnePlus</a>
                      <a href="#">Oppo</a>
                      <a href="#">Motorola</a>
                    </div>
                  </div>
                  <div class="wrap_list_un_menu">
                    <a href="#" class="title_un_menu">
                      Бренды
                    </a>
                    <div class="un_menu">
                      <a href="#">Samsung Galaxy S22 Ultra</a>
                      <a href="#">Apple iPhone 13 Pro Max</a>
                      <a href="#">Samsung Galaxy S21 FE</a>
                      <a href="#">Samsung Galaxy S22</a>
                    </div>
                  </div>
                  <div class="wrap_list_un_menu">
                    <a href="#" class="title_un_menu">
                      Бренды
                    </a>
                    <div class="un_menu">
                      <a href="#">Проводные</a>
                      <a href="#">Беспроводные</a>
                      <a href="#">Игровые</a>
                    </div>
                  </div>
                  <div class="wrap_list_un_menu">
                    <a href="#" class="title_un_menu">
                      Бренды
                    </a>
                  </div>
                  <div class="wrap_list_un_menu">
                    <a href="#" class="title_un_menu">
                      Бренды
                    </a>
                    <div class="un_menu">
                      <a href="#">Чехлы для смартфонов</a>
                      <a href="#">Карты памяти</a>
                      <a href="#">Защитные стекла</a>
                      <a href="#">Зарядные устройства</a>
                      <a href="#">Беспроводные зарядки</a>
                      <a href="#">Переходники и кабели</a>
                      <a href="#">Держатели</a>
                    </div>
                  </div>
                  <div class="wrap_list_un_menu">
                    <a href="#" class="title_un_menu">
                      Бренды
                    </a>
                    <div class="un_menu">
                      <a href="#">Kyivstar</a>
                      <a href="#">Vodafone</a>
                      <a href="#">Lifecell</a>
                    </div>
                  </div>
                  <div class="wrap_list_un_menu">
                    <a href="#" class="title_un_menu">
                      Бренды
                    </a>
                  </div>
                  <div class="wrap_list_un_menu">
                    <a href="#" class="title_un_menu">
                      Бренды
                    </a>
                  </div>
                  <div class="wrap_list_un_menu">
                    <a href="#" class="title_un_menu">
                      Бренды
                    </a>
                  </div>
                  <div class="wrap_list_un_menu">
                    <a href="#" class="title_un_menu">
                      Бренды
                    </a>
                    <div class="un_menu">
                      <a href="#">Услуги</a>
                      <a href="#">Онлайн-сервисы</a>
                      <a href="#">Ключи активации</a>
                    </div>
                  </div>
                  <div class="wrap_list_un_menu">
                    <a href="#" class="title_un_menu">
                      Бренды
                    </a>
                  </div>
                  <div class="wrap_list_un_menu">
                    <a href="#" class="title_un_menu">
                      Бренды
                    </a>
                    <div class="un_menu">
                      <a href="#">Проводные</a>
                      <a href="#">Беспроводные</a>
                      <a href="#">Игровые</a>
                    </div>
                  </div>
                  <div class="wrap_list_un_menu">
                    <a href="#" class="title_un_menu">
                      Бренды
                    </a>
                  </div>
                  <div class="wrap_list_un_menu">
                    <a href="#" class="title_un_menu">
                      Бренды
                    </a>
                    <div class="un_menu">
                      <a href="#">Чехлы для смартфонов</a>
                      <a href="#">Карты памяти</a>
                      <a href="#">Защитные стекла</a>
                      <a href="#">Зарядные устройства</a>
                      <a href="#">Беспроводные зарядки</a>
                      <a href="#">Переходники и кабели</a>
                      <a href="#">Держатели</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right_width">
          <div class="slider_list">
            <div class="sl_item">
              <div class="sl_content">
                <div class="wrap_image">
                  <img src="@/assets/img/girobordy1.png" alt="img">
                </div>
                <h1>
                  Скидка 45%
                  на гироборд Like Bike!
                </h1>
              </div>
            </div>
            <div class="sl_item">
              <div class="sl_content">
                <div class="wrap_image">
                  <img src="@/assets/img/girobordy1.png" alt="img">
                </div>
                <h1>
                  Скидка 45%
                  на гироборд Like Bike!
                </h1>
              </div>
            </div>
            <div class="sl_item">
              <div class="sl_content">
                <div class="wrap_image">
                  <img src="@/assets/img/girobordy1.png" alt="img">
                </div>
                <h1>
                  Скидка 45%
                  на гироборд Like Bike!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import '@/assets/js/slick.js'
import { mapGetters } from 'vuex'
export default {
  name: 'SectionSlider',
  data () {
    return {
      sliderIsLive: false
    }
  },
  components: {
  },
  mounted () {

  },
  computed: {
    ...mapGetters([
      'CATALOG'
    ])
  }
}

</script>
<style lang="scss" scoped>
</style>
