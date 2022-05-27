<template>
  <div class="left_content_info">
    <div class="wrap_slider_product">
      <div class="slider_product_nav">
        <div class="spn_item">
          <div class="spn_content">
            <div class="wrap_image">
              <img src="@/assets/img/slider1.png" alt="img">
            </div>
          </div>
        </div>
        <div class="spn_item">
          <div class="spn_content">
            <div class="wrap_image">
              <img src="@/assets/img/slider1.png" alt="img">
            </div>
          </div>
        </div>
      </div>
      <div class="slider_product_for">
        <div class="spf_item">
          <a href="@/assets/img/slider1.png" class="spf_content" data-fancybox="modal">
            <div class="wrap_image">
              <img src="@/assets/img/slider1.png" alt="img">
            </div>
          </a>
        </div>
        <div class="spf_item">
          <a href="@/assets/img/slider1.png" class="spf_content" data-fancybox="modal">
            <div class="wrap_image">
              <img src="@/assets/img/slider1.png" alt="img">
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="description_product wrap_desc" id="description">
      <h3>
        Описание
      </h3>
      <div class="wrap_text js-block-open">
        <p class="js-block-open1">
          Электросамокат Xiaomi Mi Electric Scooter Pro станет отличной заменой привычному городскому транспорту,
          с его помощью вы сможете быстро добраться до места работы или учебы.
          Вы больше не будете зависеть от пробок и тянучки на дорогах.
          Электросамокат Xiaomi Mi Electric Scooter Pro станет отличной заменой привычному городскому транспорту,
          с его помощью вы сможете быстро добраться до места работы или учебы.
          Вы больше не будете зависеть от пробок и тянучки на дорогах.
        </p>
        <div class="read_more js-open-btn">Читать полностью</div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'ProductSlider',
  data () {
    return {
    }
  },
  components: {
  },
  beforeRouteLeave () {
    alert('dada')
    $('.slider_product_for').slick('unslick')
    $('.slider_product_nav').slick('unslick')
  },
  mounted () {
    $('.slider_product_for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      asNavFor: '.slider_product_nav',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: true,
          }
        }
      ]
    })
    $('.slider_product_nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      vertical: true,
      verticalSwiping: true,
      // adaptiveHeight: true,
      focusOnSelect: true,
      asNavFor: '.slider_product_for',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 4,
            vertical: false,
            verticalSwiping: false,
            adaptiveHeight: false,
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 3,
            vertical: false,
            verticalSwiping: false,
            adaptiveHeight: false,
          }
        }
      ]
    })
  }
}
</script>
<style lang="scss" scoped>
</style>
