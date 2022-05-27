<template>
  <div>
    <Breadcrumbs/>
    <div class="wrap_nav_comparison">
      <div class="container">
        <div class="nav_comparison">
          <div class="nav_left" v-if="firstProduct != 0">
            <div class="nav_title">
              Характеристики
            </div>
            <div class="snc_content">
              <div class="wrap_img">
                <img src="@/assets/img/product2.jpg" alt="img">
              </div>
              <div class="snc_info">
                <div class="snc_name">
                  {{ firstProduct.name }}
                </div>
                <div class="snc_price">
                  11 699 грн.
                </div>
              </div>
            </div>
          </div>
          <div class="nav_right" >
            <div class="slider_nav_comparison" v-if="otherProducts !== 0">
              <div class="snc_item" v-for="(item, idx) in otherProducts" :key="idx">
                <div class="snc_content">
                  <div class="wrap_img">
                    <img src="@/assets/img/product2.jpg" alt="img">
                  </div>
                  <div class="snc_info">
                    <div class="snc_name">
                      {{ item.name }}
                    </div>
                    <div class="snc_price">
                      12 699 грн.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="comparison_body">
      <div class="container">
        <div class="wrap_table_comparison">
          <div class="wtc_left" v-if="firstProduct != 0">
            <div class="wtc_col wtc_col_1">
              <div class="wtc_block1">
                <div class="wtc_b1_top">
                  <div class="wtc_b1_text">
                    Сравнить:
                  </div>
                  <div class="wtc_b1_item">
                    Смартфоны
                    <span class="wtc_b1_close"></span>
                  </div>
                  <div class="wtc_b1_item">
                    Смартфоны
                    <span class="wtc_b1_close"></span>
                  </div>
                  <div class="wtc_b1_item">
                    Смартфоны
                    <span class="wtc_b1_close"></span>
                  </div>
                  <div class="wtc_b1_item">
                    Смартфоны
                    <span class="wtc_b1_close"></span>
                  </div>
                </div>
                <div class="wtc_b1_bottom">
                  <div class="wtc_b1_text">
                    Выводить:
                  </div>
                  <select id="select-sort">
                    <option value="1">Все</option>
                    <option value="1">По имени</option>
                  </select>
                </div>
              </div>
              <div class="wtc_row wtc_row_title wtc_row_first">
                Характеристики дисплея
              </div>
              <div class="wtc_row wtc_row_first bd_bg">
                Тип подсветки
              </div>
              <div class="wtc_row wtc_row_first bd_bg">
                Диагональ
              </div>
              <div class="wtc_row wtc_row_first bd_bg">
                Изогнутый экран
              </div>
              <div class="wtc_row wtc_row_first">
                Угол обзора
              </div>
              <div class="wtc_row wtc_row_title wtc_row_first">
                Качество изображения
              </div>
              <div class="wtc_row wtc_row_first bd_bg">
                Разрешение
              </div>
              <div class="wtc_row wtc_row_big wtc_row_first">
                Особенности видео
              </div>
              <div class="wtc_row wtc_row_first bd_bg">
                Частота развертки
              </div>
              <div class="wtc_row wtc_row_first">
                Контраст
              </div>
              <div class="wtc_row wtc_row_title wtc_row_first">
                Применение
              </div>
              <div class="wtc_row wtc_row_first bd_bg">
                Назначение
              </div>
              <div class="wtc_row wtc_row_title wtc_row_first">
                Звук
              </div>
              <div class="wtc_row wtc_row_first bd_bg">
                Суммарная мощность динамиков
              </div>
              <div class="wtc_row wtc_row_title wtc_row_first">
              </div>
              <div class="wtc_block1">
              </div>
            </div>
            <div class="wtc_col" >
              <div class="wtc_block">
                <div class="wtc_product_item">
                  <div class="wrap_img">
                    <img src="@/assets/img/product2.jpg" alt="img">
                  </div>
                  <div class="wtc_p_body">
                    <div class="wtc_p_name">
                      {{ firstProduct.name }}
                    </div>
                    <div class="wtc_p_status color_green">
                      В наличии
                    </div>
                    <div class="wtc_p_price">
                      11 699 грн.
                    </div>
                  </div>

                  <div class="wtc_p_wrap_buttons">
                    <div class="button_favorite">
                      <svg class="svg-heart">
                        <use xlink:href="#svg-heart"></use>
                      </svg>
                    </div>
                    <div class="button_busked">
                      <svg class="svg-busked">
                        <use xlink:href="#svg-busked"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="wtc_row wtc_row_title">
              </div>
              <div class="wtc_row wtc_row_mob">
                Тип подсветки
              </div>
              <div class="wtc_row bd_bg">
                LED
              </div>
              <div class="wtc_row wtc_row_mob">
                Диагональ
              </div>
              <div class="wtc_row bd_bg">
                43”
              </div>
              <div class="wtc_row wtc_row_mob">
                Изогнутый экран
              </div>
              <div class="wtc_row bd_bg">
                Нет
              </div>
              <div class="wtc_row wtc_row_mob">
                Угол обзора
              </div>
              <div class="wtc_row">
              </div>
              <div class="wtc_row wtc_row_title">
              </div>
              <div class="wtc_row wtc_row_mob">
                Разрешение
              </div>
              <div class="wtc_row bd_bg">
                Full HD (1920×1080)
              </div>
              <div class="wtc_row wtc_row_mob">
                Особенности видео
              </div>
              <div class="wtc_row wtc_row_big">
                Mega Contrast; Процессор изображения: Crystal Processor 4K; Технология улучшения цветопередачи: PurColor; HDR; UHD Dimming; Технология улучшения изображения: Motion Xcelerator
              </div>
              <div class="wtc_row wtc_row_mob">
                Частота развертки
              </div>
              <div class="wtc_row bd_bg">
                -
              </div>
              <div class="wtc_row wtc_row_mob">
                Контраст
              </div>
              <div class="wtc_row">
                -
              </div>
              <div class="wtc_row wtc_row_title">
              </div>
              <div class="wtc_row wtc_row_mob">
                Назначение
              </div>
              <div class="wtc_row bd_bg">
                Для спальни
                Для кухни
              </div>
              <div class="wtc_row wtc_row_title">
              </div>
              <div class="wtc_row wtc_row_mob">
                Суммарная мощность динамиков
              </div>
              <div class="wtc_row bd_bg">
                20 Вт
              </div>
              <div class="wtc_row wtc_row_title">
              </div>
              <div class="wtc_block">
                <div class="wtc_product_item">
                  <div class="wrap_img">
                    <img src="@/assets/img/product2.jpg" alt="img">
                  </div>
                  <div class="wtc_p_body">
                    <div class="wtc_p_name">
                      Телевизор Gazer 43" Full HD Smart TV (TV43-FS2)
                    </div>
                    <div class="wtc_p_status color_green">
                      В наличии
                    </div>
                    <div class="wtc_p_price">
                      12 699 грн.
                    </div>
                  </div>

                  <div class="wtc_p_wrap_buttons">
                    <div class="button_favorite">
                      <svg class="svg-heart">
                        <use xlink:href="#svg-heart"></use>
                      </svg>
                    </div>
                    <div class="button_busked">
                      <svg class="svg-busked">
                        <use xlink:href="#svg-busked"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="wtc_right">
            <div class="list_comparison_table" v-if="otherProducts !== 0">
              <div class="lct_item comparison_item" v-for="(item, idx) in otherProducts" :key="idx">
                <div class="wtc_col">
                  <div class="wtc_block">
                    <div class="wtc_product_item">
                      <div class="wrap_img">
                        <img src="@/assets/img/product2.jpg" alt="img">
                      </div>
                      <div class="wtc_p_body">
                        <div class="wtc_p_name">
                          {{ item.name }}
                        </div>
                        <div class="wtc_p_status color_green">
                          В наличии
                        </div>
                        <div class="wtc_p_price">
                          12 699 грн.
                        </div>
                      </div>

                      <div class="wtc_p_wrap_buttons">
                        <div class="button_favorite">
                          <svg class="svg-heart">
                            <use xlink:href="#svg-heart"></use>
                          </svg>
                        </div>
                        <div class="button_busked">
                          <svg class="svg-busked">
                            <use xlink:href="#svg-busked"></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="wtc_row wtc_row_title">
                  </div>
                  <div class="wtc_row wtc_row_mob">
                  </div>
                  <div class="wtc_row bd_bg">
                    LED
                  </div>
                  <div class="wtc_row wtc_row_mob">
                  </div>
                  <div class="wtc_row bd_bg">
                    43”
                  </div>
                  <div class="wtc_row wtc_row_mob">
                  </div>
                  <div class="wtc_row bd_bg">
                    Нет
                  </div>
                  <div class="wtc_row wtc_row_mob">
                  </div>
                  <div class="wtc_row">
                  </div>
                  <div class="wtc_row wtc_row_title">
                  </div>
                  <div class="wtc_row wtc_row_mob">
                  </div>
                  <div class="wtc_row bd_bg">
                    Full HD (1920×1080)
                  </div>
                  <div class="wtc_row wtc_row_mob">
                  </div>
                  <div class="wtc_row wtc_row_big">
                    Mega Contrast; Процессор изображения: Crystal Processor 4K; Технология улучшения цветопередачи: PurColor; HDR; UHD Dimming; Технология улучшения изображения: Motion Xcelerator
                  </div>
                  <div class="wtc_row wtc_row_mob">
                  </div>
                  <div class="wtc_row bd_bg">
                    -
                  </div>
                  <div class="wtc_row wtc_row_mob">
                  </div>
                  <div class="wtc_row">
                    -
                  </div>
                  <div class="wtc_row wtc_row_title">
                  </div>
                  <div class="wtc_row wtc_row_mob">
                  </div>
                  <div class="wtc_row bd_bg">
                    Для спальни
                    Для кухни
                  </div>
                  <div class="wtc_row wtc_row_title">
                  </div>
                  <div class="wtc_row wtc_row_mob">
                  </div>
                  <div class="wtc_row bd_bg">
                    20 Вт
                  </div>
                  <div class="wtc_row wtc_row_title">
                  </div>
                  <div class="wtc_block">
                    <div class="wtc_product_item">
                      <div class="wrap_img">
                        <img src="@/assets/img/product2.jpg" alt="img">
                      </div>
                      <div class="wtc_p_body">
                        <div class="wtc_p_name">
                          Телевизор Gazer 43" Full HD Smart TV (TV43-FS2)
                        </div>
                        <div class="wtc_p_status color_green">
                          В наличии
                        </div>
                        <div class="wtc_p_price">
                          12 699 грн.
                        </div>
                      </div>

                      <div class="wtc_p_wrap_buttons">
                        <div class="button_favorite">
                          <svg class="svg-heart">
                            <use xlink:href="#svg-heart"></use>
                          </svg>
                        </div>
                        <div class="button_busked">
                          <svg class="svg-busked">
                            <use xlink:href="#svg-busked"></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import '@/assets/js/slick.js'
import Breadcrumbs from '@/components/breadcrumbs'
export default {
  name: 'SectionSlider',
  components: {
    Breadcrumbs
  },
  computed: {
    firstProduct () {
      if (this.SIMILE.length > 0) {
        return this.SIMILE[0]
      }
      return 0
    },
    otherProducts () {
      if (this.SIMILE.length >= 2) {
        const mas = []
        for (let i = 0; i < this.SIMILE.length; i++) {
          if (i !== 0) {
            mas.push(this.SIMILE[i])
          }
        }
        return mas
      }
      return 0
    },
    ...mapGetters([
      'SIMILE'
    ])
  },
  beforeRouteLeave () {
    if ($('.list_comparison_table').hasClass('slick-initialized') &&
      $('.slider_nav_comparison').hasClass('slick-initialized')) {
      $('.list_comparison_table').slick('unslick')
      $('.slider_nav_comparison').slick('unslick')
    }
  },
  mounted () {
    if ($('.comparison_item').length > 2) {
      const mySlider = $('.list_comparison_table')
      const mySlider2 = $('.slider_nav_comparison')
      mySlider2.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        swipe: false,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 570,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      })
      mySlider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 570,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      })

      mySlider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        mySlider2.slick('slickGoTo', currentSlide)
      })
    }
  }
}

window.addEventListener('scroll', function () {
  const posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
  if (posTop !== 0) {
    document.querySelector('.wrap_nav_comparison').classList.add('scroll')

    document.querySelector('.header').classList.add('scroll')
  } else {
    document.querySelector('.wrap_nav_comparison').classList.remove('scroll')
    document.querySelector('.header').classList.remove('scroll')
  }
})
</script>
<style lang="scss" scoped>
</style>
