<template>
  <div class="main-lc">
    <Header />
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
      <div class="wrap_syngle_category wrap_favorite">
        <LeftMenu></LeftMenu>
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/app/Header'
import Footer from '@/components/app/Footer'
import LeftMenu from '@/components/app/LeftMenu'
export default {
  name: 'MainLayout',
  components: {
    Header, Footer, LeftMenu
  }
}
</script>
<style lang="scss" scoped>
</style>
