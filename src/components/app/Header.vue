<template>
  <header class="header">
      <div class="container">
        <div class="top_header">
          <div class="left_width">
            <router-link class="link_logo" to="/">
              <span class="icon_logo"></span>
            </router-link>
          </div>
          <div class="right_width">
            <div class="menu_head">
              <a href="#">
                Акции
              </a>
              <a href="#">
                Блог
              </a>
              <a href="#">
                О компании
              </a>
              <a href="#">
                Контакты
              </a>
            </div>
            <div class="wrap_select_tel">
              <span class="icon icon_tel"></span>
              <a href="#">+7 (000) 000-00-10</a>
              <span class="icon icon_arr_bottom"></span>
              <div class="wrap_tel_absolute">
                <a href="#">+7 (000) 000-00-10</a>
                <a href="#">+7 (000) 000-00-10</a>
                <a href="#">+7 (000) 000-00-10</a>
              </div>

            </div>
            <div class="wrap_lang">
              <a href="#">Ua</a>
              <span>|</span>
              <a href="#" class="active">Ru</a>
              <span>|</span>
              <a href="#">En</a>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom_header">
        <div class="container">
          <div class="bh_content">
            <div class="left_width">
              <div class="menu_burger" @click="openMenu">
                <div class="burger">
                  <span></span>
                </div>
                Каталог
              </div>
            </div>

            <div class="right_width">
              <div class="wrap_search">
                <input type="text" placeholder="Поиск">
                <button class="my_btn btn_search"><span class="icon icon_search"></span>Найти</button>
              </div>
              <div class="wrap_panel_icons">
                <a href="#"  @click.prevent="showPopupSingUp()" class="icon icon_user open_reg"></a>
                <a href="#" @click.prevent="GoToComparison()" class="icon icon_scales">
                  <span>{{ SIMILE.length }}</span>
                </a>
                <a href="#" class="icon icon_heart"><span>0</span></a>
                <div class="icon icon_basket busket_open" @click="showPopupBusked">
                  <span>{{ CART.length }}</span>
                </div>
              </div>
              <div class="wrap_panel_icons_mobile">
                <div class="icon icon_basket4 busket_open" @click="showPopupBusked">
                  <span>{{ CART.length }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="menu_catalog_wrap">
        <div class="container">
          <div class="menu_catalog">
            <div class="mc_link" v-for="(cat, idx) in CATALOG" :key="idx">
              <a href="#">
                <div class="text_catalog">
                  <div class="icon">
<!--                    <img src="./img/icon/1mobile.svg" alt="img">-->
                  </div>
                  {{ cat.name }}
                </div>
                <span class="icon icon_arr_right"></span>
              </a>
              <div class="wrap_un_list">
                <div class="un_list">
                  <div class="wrap_list_un_menu" v-for="(cat2, idx1) in cat.children_categories" :key="idx1">
                    <a href="#" class="title_un_menu">
                      {{ cat2.name }}
                    </a>
                    <div class="un_menu">
                      <a
                        href="#"
                        v-for="(cat3, idx3) in cat2.children_categories"
                        :key="idx3"
                        @click.prevent="GoToCategory(cat.id, cat2.id, cat3,id)"
                      >
                        {{ cat3.name }}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<!--    {{CATALOG}}-->
      <div class="left_menu">
      <div class="lm_row lm_top">
        <a href="#" class="link_logo">
          <div class="icon_logo2"></div>
        </a>
      </div>
      <div class="lm_row lm_user">
        <a href="#" class="link_icon">
          <svg class="svg-lm-1 svg-lm-icon">
            <use xlink:href="#svg-lm-1"></use>
          </svg>
          Вход/Регистрация
        </a>
      </div>
      <div class="lm_row">
        <a href="#" class="link_icon modal_window" >
          <svg class="svg-lm-2 svg-lm-icon">
            <use xlink:href="#svg-lm-2"></use>
          </svg>
          Каталог
        </a>
      </div>
      <div class="lm_row">
        <a href="#" class="link_icon">
          <svg class="svg-lm-7 svg-lm-icon">
            <use xlink:href="#svg-lm-7"></use>
          </svg>
          Акции
        </a>
      </div>
      <div class="lm_row">
        <a href="#" class="link_icon">
          <svg class="svg-lm-3 svg-lm-icon">
            <use xlink:href="#svg-lm-3"></use>
          </svg>
          Сравнение
          <span>
                3
            </span>
        </a>
      </div>
      <div class="lm_row">
        <a href="#" class="link_icon">
          <svg class="svg-lm-4 svg-lm-icon">
            <use xlink:href="#svg-lm-4"></use>
          </svg>
          Избранное
          <span>
                3
            </span>
        </a>
      </div>
      <div class="lm_row">
        <a href="#" class="link_icon">
          <svg class="svg-lm-5 svg-lm-icon">
            <use xlink:href="#svg-lm-5"></use>
          </svg>
          Корзина
          <span>
                5
            </span>
        </a>
      </div>
      <div class="lm_row lm_row_tel">
        <div class="link_icon link_tel">
          <svg class="svg-lm-6 svg-lm-icon">
            <use xlink:href="#svg-lm-6"></use>
          </svg>
          <a href="#">+ 38 (098) 000-00-00</a>
          <svg class="svg-lm-arr">
            <use xlink:href="#svg-lm-arr"></use>
          </svg>
        </div>
      </div>
      <div class="lm_row lm_row_lang">
        <div class="wrap_lang2">
          <div class="text_lang">
            Язык
          </div>
          <div class="list_lang">
            <a href="#" class="link_lang active">
              RU
            </a>
            <a href="#" class="link_lang">
              UA
            </a>
            <a href="#" class="link_lang">
              EN
            </a>
          </div>
        </div>
      </div>
      <div class="lm_row">
        <a href="#" class="link_icon">
          О нас
        </a>
      </div>
    </div>
      <v-PopupSingUp
        v-if="isSingUpPopupVisible"
        @closePopup="closeSingUpPopup"
        @showPopup="showPopupSingIn"
      >
      </v-PopupSingUp>

      <v-PopupSingIn
        v-if="isSingInPopupVisible"
        @closePopup="closeSingInPopup"
        @showPopup="showPopupSingUp"
      >
      </v-PopupSingIn>

      <v-PopupBusked
        v-if="isBuskedPopupVisible"
        @closePopup="closeBuskedPopup"
      >
      </v-PopupBusked>
    </header>
</template>
<script>
import vPopupBusked from '@/popup/v-popupBusked'
import vPopupSingUp from '@/popup/v-popupSingUp'
import vPopupSingIn from '@/popup/v-popupSingIn'
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  data () {
    return {
      isBuskedPopupVisible: false,
      isSingUpPopupVisible: false,
      isSingInPopupVisible: false
    }
  },
  components: {
    vPopupBusked,
    vPopupSingUp,
    vPopupSingIn
  },
  computed: {
    productSimile () {
      const mas = []
      for (let i = 0; i < this.PRODUCTS.length; i++) {
        if (this.PRODUCTS[i].isSimile) {
          mas.push(this.PRODUCTS[i])
        }
      }
      return mas.length
    },
    ...mapGetters([
      'CART',
      'SIMILE',
      'PRODUCTS',
      'CATALOG'
    ])
  },
  methods: {
    GoToCategory (catId1, catId2, catId3) {
      this.$router.push({
        name: 'category',
        params: { Pid: catId3 }
      })
    },
    GoToComparison () {
      this.$router.push({
        name: 'comparison'
      })
    },
    showPopupSingIn () {
      this.closeSingUpPopup()
      this.isSingInPopupVisible = true
      document.querySelector('body').setAttribute('style', 'overflow: hidden')
    },
    showPopupSingUp () {
      this.closeSingInPopup()
      this.isSingUpPopupVisible = true
      document.querySelector('body').setAttribute('style', 'overflow: hidden')
    },
    showPopupBusked () {
      if (this.CART.length !== 0) {
        this.isBuskedPopupVisible = true
        document.querySelector('body').setAttribute('style', 'overflow: hidden')
      } else {
        this.$message('Додайте товар у кошик!')
      }
    },
    closeSingUpPopup () {
      this.isSingUpPopupVisible = false
      document.querySelector('body').setAttribute('style', 'overflow: visible')
    },
    closeSingInPopup () {
      this.isSingInPopupVisible = false
      document.querySelector('body').setAttribute('style', 'overflow: visible')
    },
    closeBuskedPopup () {
      this.isBuskedPopupVisible = false
      document.querySelector('body').setAttribute('style', 'overflow: visible')
    },
    openMenu () {
      document.querySelector('.burger span').classList.toggle('active')
      document.querySelector('.menu_catalog').classList.toggle('active')
      document.querySelector('body').classList.toggle('catalog_open')
      if (window.innerWidth <= 991) {
        document.querySelector('.left_menu').classList.toggle('open_menu')
      }
    }
  },
  mounted () {
    // Ховер для бокового меню
    $('.mc_link').hover(function () {
      $('.menu_catalog').addClass('catalog_hover')
    }, function () {
      $('.menu_catalog').removeClass('catalog_hover')
    })
  }
}
$(function () {
  $('.menu_catalog').hover(function () {
    $('.menu_catalog').addClass('catalog_hover')
  }, function () {
    $('.menu_catalog').removeClass('catalog_hover')
  })
})

$(document).mouseup(function (e) { // событие клика по веб-документу
  var div = $('.header') // тут указываем ID элемента
  if (!div.is(e.target) && // если клик был не по нашему блоку
    div.has(e.target).length === 0) { // и не по его дочерним элементам
    div.removeClass('open')
    $('body').removeClass('catalog_open')
    $('.menu_catalog ').removeClass('active')
    $('.burger span').removeClass('active')
    if (window.innerWidth <= 991) {
      $('.left_menu').removeClass('open_menu')
    }
  }
})

</script>
<style lang="scss" scoped>
</style>
