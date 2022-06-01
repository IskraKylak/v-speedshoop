<template>
  <div>
    <section class="section_slider">
      <div class="container">
        <div class="content_slider">
          <div class="left_width">
            <div class="menu_catalog">
              <div
                class="mc_link"
                v-for="(cat_slid, idx) in CATALOG"
                :key="idx"
              >
                <a href="#">
                  <div class="text_catalog">
                    <div class="icon">
                      <img src="@/assets/img/icon/1mobile.svg" alt="img">
                    </div>
                    {{ cat_slid.name }}
                  </div>
                  <span class="icon icon_arr_right"></span>
                </a>
                <div class="wrap_un_list">
                  <div class="un_list">
                    <div class="wrap_list_un_menu" v-for="(cat_slid2, idx1) in cat_slid.children_categories" :key="idx1">
                      <a href="#" class="title_un_menu" >
                        {{ cat_slid2.name }}
                      </a>
                      <div class="un_menu">
                        <a
                          href="#"
                          v-for="(cat_slid3, idx2) in cat_slid2.children_categories"
                          :key="idx2"
                          @click.prevent="GoToCategory(cat_slid.id, cat_slid2.id, cat_slid3.id)"
                        >
                          {{ cat_slid3.name }}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right_width">
            <div class="slider_list">
              <div class="sl_item" v-for="(item, idxMain) in MAIN_PAGE.mainslider" :key="idxMain">
                <div class="sl_content">
                  <div class="wrap_image">
                    <img :src="'https://speedshop.pp.ua/storage/galleries/' + item.img" alt="img">
                  </div>
                  <h1>
                    {{ item.title }}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Category/>
    <Reviews></Reviews>
    <vText></vText>
    <Benefit></Benefit>
  </div>
</template>
<script>
import Category from '@/components/home/sectionСategory'
import Reviews from '@/components/home/sectionReviews'
import vText from '@/components/home/sectionText'
import Benefit from '@/components/home/sectionBenefit'

import '@/assets/js/slick.min.js'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    Category,
    Reviews,
    vText,
    Benefit
  },
  beforeRouteLeave () {
    $('.slider_list').slick('unslick')
  },
  async mounted () {
    await this.GET_MAIN_PAGE_FROM_API()
    $('.slider_list').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1
    })

  },
  computed: {
    ...mapGetters([
      'MAIN_PAGE',
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
    ...mapActions([
      'GET_MAIN_PAGE_FROM_API'
    ])
  }
}
</script>
<style lang="scss" scoped>
</style>
