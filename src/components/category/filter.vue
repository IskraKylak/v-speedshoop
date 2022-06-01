<template>
  <div class="container">
    <div v-if="false" class="filter_mobile_left">
      <div class="fml_Head">
        Фильтры
        <div class="close_filter" onclick="closeFilter(this)">
          <svg viewBox="0 0 24 24" fill="currentColor" class="icon-0-2-33"><path d="M10.5858 11.9999L4.66667 6.08079C4.27615 5.69027 4.27615 5.0571 4.66667 4.66658C5.0572 4.27606 5.69036 4.27605 6.08088 4.66658L12 10.5857L17.9191 4.66658C18.3096 4.27606 18.9428 4.27606 19.3333 4.66658C19.7239 5.0571 19.7239 5.69027 19.3333 6.08079L13.4142 11.9999L19.3333 17.919C19.7239 18.3096 19.7239 18.9427 19.3333 19.3332C18.9428 19.7238 18.3096 19.7238 17.9191 19.3332L12 13.4141L6.08088 19.3332C5.69036 19.7238 5.0572 19.7238 4.66667 19.3332C4.27615 18.9427 4.27615 18.3096 4.66667 17.919L10.5858 11.9999Z"></path></svg>
        </div>
      </div>
      <div class="flm_item">
        <span class="flm_text" onclick="openSubFilter(this)">
            Цена
        </span>
        <div class="flm_submenu">
          <div class="flms_head" >
            Цена
            <div class="close_filter" onclick="closeSubFilter(this)">
              <svg viewBox="0 0 24 24" fill="currentColor" class="icon-0-2-33"><path d="M10.5858 11.9999L4.66667 6.08079C4.27615 5.69027 4.27615 5.0571 4.66667 4.66658C5.0572 4.27606 5.69036 4.27605 6.08088 4.66658L12 10.5857L17.9191 4.66658C18.3096 4.27606 18.9428 4.27606 19.3333 4.66658C19.7239 5.0571 19.7239 5.69027 19.3333 6.08079L13.4142 11.9999L19.3333 17.919C19.7239 18.3096 19.7239 18.9427 19.3333 19.3332C18.9428 19.7238 18.3096 19.7238 17.9191 19.3332L12 13.4141L6.08088 19.3332C5.69036 19.7238 5.0572 19.7238 4.66667 19.3332C4.27615 18.9427 4.27615 18.3096 4.66667 17.919L10.5858 11.9999Z"></path></svg>
            </div>
          </div>
          <div class="flms_block flms_block--slider">

            <div class="filter__cost table">
              <div class="table-cell">
                <input type="text" :value="minPrice" class="form-control">
              </div>
              <span class="tire">&mdash;</span>
              <div class="table-cell">
                <input type="text" :value="maxPrice" class="form-control">
              </div>
              <button class="my_btn btn_filter">ok</button>
            </div>
            <div class="filter__slider">
              <div class="range__zero">0</div>
              <div id="filter__range2"></div>
            </div>
          </div>
        </div>

      </div>
      <div class="flm_item">
        <span class="flm_text" onclick="openSubFilter(this)">
            Бренд
        </span>
        <div class="flm_submenu">
          <div class="flms_head">
            Бренд
            <div class="close_filter" onclick="closeSubFilter(this)">
              <svg viewBox="0 0 24 24" fill="currentColor" class="icon-0-2-33"><path d="M10.5858 11.9999L4.66667 6.08079C4.27615 5.69027 4.27615 5.0571 4.66667 4.66658C5.0572 4.27606 5.69036 4.27605 6.08088 4.66658L12 10.5857L17.9191 4.66658C18.3096 4.27606 18.9428 4.27606 19.3333 4.66658C19.7239 5.0571 19.7239 5.69027 19.3333 6.08079L13.4142 11.9999L19.3333 17.919C19.7239 18.3096 19.7239 18.9427 19.3333 19.3332C18.9428 19.7238 18.3096 19.7238 17.9191 19.3332L12 13.4141L6.08088 19.3332C5.69036 19.7238 5.0572 19.7238 4.66667 19.3332C4.27615 18.9427 4.27615 18.3096 4.66667 17.919L10.5858 11.9999Z"></path></svg>
            </div>
          </div>
          <div class="flms_block">
            <div class="under_list_properties">
              <label for="Samsung" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="Samsung">
                  <label for="Samsung"></label>
                </div>
                <div class="label_name">Samsung <span>(5)</span></div>
              </label>
              <label for="c2" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="c2">
                  <label for="c2"></label>
                </div>
                <div class="label_name">LG <span>(5)</span></div>
              </label>
              <label for="c3" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="c3">
                  <label for="c3"></label>
                </div>
                <div class="label_name">Kivi <span>(5)</span></div>
              </label>
              <label for="c4" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="c4">
                  <label for="c4"></label>
                </div>
                <div class="label_name">Kivi <span>(5)</span></div>
              </label>
              <label for="c5" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="c5">
                  <label for="c5"></label>
                </div>
                <div class="label_name">Kivi <span>(5)</span></div>
              </label>
              <label for="c6" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="c6">
                  <label for="c6"></label>
                </div>
                <div class="label_name">Kivi <span>(5)</span></div>
              </label>
              <label for="c7" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="c7">
                  <label for="c7"></label>
                </div>
                <div class="label_name">Kivi <span>(5)</span></div>
              </label>
              <label for="c8" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="c8">
                  <label for="c8"></label>
                </div>
                <div class="label_name">Kivi <span>(5)</span></div>
              </label>
              <label for="c9" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="c9">
                  <label for="c9"></label>
                </div>
                <div class="label_name">Kivi <span>(5)</span></div>
              </label>
              <label for="c10" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="c10">
                  <label for="c10"></label>
                </div>
                <div class="label_name">Kivi <span>(5)</span></div>
              </label>
              <label for="c11" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="c11">
                  <label for="c11"></label>
                </div>
                <div class="label_name">Kivi <span>(5)</span></div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="flm_item">
        <span class="flm_text" onclick="openSubFilter(this)">
            Размер
        </span>
        <div class="flm_submenu">
          <div class="flms_head">
            Размер
            <div class="close_filter" onclick="closeSubFilter(this)">
              <svg viewBox="0 0 24 24" fill="currentColor" class="icon-0-2-33"><path d="M10.5858 11.9999L4.66667 6.08079C4.27615 5.69027 4.27615 5.0571 4.66667 4.66658C5.0572 4.27606 5.69036 4.27605 6.08088 4.66658L12 10.5857L17.9191 4.66658C18.3096 4.27606 18.9428 4.27606 19.3333 4.66658C19.7239 5.0571 19.7239 5.69027 19.3333 6.08079L13.4142 11.9999L19.3333 17.919C19.7239 18.3096 19.7239 18.9427 19.3333 19.3332C18.9428 19.7238 18.3096 19.7238 17.9191 19.3332L12 13.4141L6.08088 19.3332C5.69036 19.7238 5.0572 19.7238 4.66667 19.3332C4.27615 18.9427 4.27615 18.3096 4.66667 17.919L10.5858 11.9999Z"></path></svg>
            </div>
          </div>
          <div class="flms_block">
            <div class="under_list_properties">
              <label for="c2_1" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="c2_1">
                  <label for="c2_1"></label>
                </div>
                <div class="label_name">22"-29” <span>(5)</span></div>
              </label>
              <label for="c2_2" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="c2_2">
                  <label for="c2_2"></label>
                </div>
                <div class="label_name">32"-42” <span>(5)</span></div>
              </label>
              <label for="c2_3" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="c2_3">
                  <label for="c2_3"></label>
                </div>
                <div class="label_name">22"-29” <span>(5)</span></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap_filter">
      <div class="selected_attribute">
        <div class="title_atr">
          Вы выбрали:
        </div>
        <div class="list_sel_atr">
          <div class="lsa_item">
                <span class="lsa_name">
                    Бренд:
                </span>
            <span class="lsa_meaning">
                    Samsung
                </span>
            <a href="#" class="lsa_close"></a>
          </div>
          <div class="lsa_item">
                <span class="lsa_name">
                    Диагональ экрана:
                </span>
            <span class="lsa_meaning">
                    32"-42”
                </span>
            <a href="#" class="lsa_close"></a>
          </div>
          <div class="lsa_item">
                <span class="lsa_name">
                    Цена от:
                </span>
            <span class="lsa_meaning">
                    100
                </span>
            <a href="#" class="lsa_close"></a>
          </div>
          <div class="lsa_item">
                <span class="lsa_name">
                    Цена до:
                </span>
            <span class="lsa_meaning">
                    59999
                </span>
            <a href="#" class="lsa_close"></a>
          </div>
        </div>
        <div class="atr_text">
          Подобрано 28 товаров из 235
        </div>
        <a href="#" class="atr_clear">
          Очистить все
        </a>
      </div>
      <form class="filter_container">
        <div class="filter_title">
          Фильтр
        </div>
        <div class="wrap_properties">
          <div
            class="title_properties"
            :class="[openFilter1 && 'open']"
            @click="openFilter1 = !openFilter1"
          >
            Бренд
          </div>
          <div
            class="list_properties list_properties_scroll"
            :class="[openFilter1 && 'open']"
          >
            <div class="filter__block filter__block--slider">
              <div class="range-slider">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="10"
                  v-model.number="minPrice"
                  @change="setRangeSliders"
                >
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="10"
                  v-model.number="maxPrice"
                  @change="setRangeSliders"
                >
              </div>
              <div class="filter__cost table">

                <div class="table-cell">
                  <input type="text" :value="minPrice" class="form-control">
                </div>
                <span class="tire">&mdash;</span>
                <div class="table-cell">
                  <input type="text" :value="maxPrice" class="form-control">
                </div>
                <button class="my_btn btn_filter2">ok</button>
              </div>
              <div class="filter__slider">
                <div class="range__zero">0</div>
                <div id="filter__range"></div>
              </div>

            </div>
          </div>
        </div>
        <div class="wrap_properties">
          <div
            class="title_properties"
            :class="[openFilter2 && 'open']"
            @click="openFilter2 = !openFilter2"
          >
            Диагональ эрана
          </div>
          <div
            class="list_properties "
            :class="[openFilter2 && 'open']"
          >
            <div class="under_list_properties">
              <label for="Samsung" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="Samsung">
                  <label for="Samsung"></label>
                </div>
                <div class="label_name">Samsung <span>(5)</span></div>
              </label>
              <label for="c2" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="c2">
                  <label for="c2"></label>
                </div>
                <div class="label_name">LG <span>(5)</span></div>
              </label>
              <label for="c3" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="c3">
                  <label for="c3"></label>
                </div>
                <div class="label_name">Kivi <span>(5)</span></div>
              </label>
              <label for="c4" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="c4">
                  <label for="c4"></label>
                </div>
                <div class="label_name">Kivi <span>(5)</span></div>
              </label>
              <label for="c5" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="c5">
                  <label for="c5"></label>
                </div>
                <div class="label_name">Kivi <span>(5)</span></div>
              </label>
              <label for="c6" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="c6">
                  <label for="c6"></label>
                </div>
                <div class="label_name">Kivi <span>(5)</span></div>
              </label>
              <label for="c7" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="c7">
                  <label for="c7"></label>
                </div>
                <div class="label_name">Kivi <span>(5)</span></div>
              </label>
              <label for="c8" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="c8">
                  <label for="c8"></label>
                </div>
                <div class="label_name">Kivi <span>(5)</span></div>
              </label>
              <label for="c9" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="c9">
                  <label for="c9"></label>
                </div>
                <div class="label_name">Kivi <span>(5)</span></div>
              </label>
              <label for="c10" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="c10">
                  <label for="c10"></label>
                </div>
                <div class="label_name">Kivi <span>(5)</span></div>
              </label>
              <label for="c11" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="c11">
                  <label for="c11"></label>
                </div>
                <div class="label_name">Kivi <span>(5)</span></div>
              </label>
            </div>
          </div>
        </div>
        <div class="wrap_properties">
          <div
            class="title_properties"
            :class="[openFilter3 && 'open']"
            @click="openFilter3 = !openFilter3"
          >
            Диагональ эрана
          </div>
          <div
            class="list_properties"
            :class="[openFilter3 && 'open']"
          >
            <div class="under_list_properties">
              <label for="c2_1" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="c2_1">
                  <label for="c2_1"></label>
                </div>
                <div class="label_name">22"-29” <span>(5)</span></div>
              </label>
              <label for="c2_2" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="c2_2">
                  <label for="c2_2"></label>
                </div>
                <div class="label_name">32"-42” <span>(5)</span></div>
              </label>
              <label for="c2_3" class="lp_item">
                <div class="custom_checkbox">
                  <input type="checkbox" id="c2_3">
                  <label for="c2_3"></label>
                </div>
                <div class="label_name">22"-29” <span>(5)</span></div>
              </label>
            </div>

          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Filter',
  data () {
    return {
      openFilter1: true,
      openFilter2: false,
      openFilter3: false,
      minPrice: 0,
      maxPrice: 10000
    }
  },
  components: {
  },
  methods: {
    setRangeSliders () {
      if (this.minPrice > this.maxPrice) {
        const tmp = this.maxPrice
        this.maxPrice = this.minPrice
        this.minPrice = tmp
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}

.range-slider svg, .range-slider input[type=range] {
  position: absolute;
  left: 0;
  bottom: 0;
}

input[type=range]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}
</style>
