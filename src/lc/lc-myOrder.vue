<template>
  <div class="wrap_order_body">
    <h3 class="title_mobile">
      Мои заказы
    </h3>
    <div class="top_order_body">
      <div class="wrap_inp_search">
        <input type="text" placeholder="Поиск">
        <button class="search_order_btn my_btn">
          Найти заказ
        </button>
      </div>
      <select id="select-sort" data-select2-id="select2-data-select-sort" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
        <option value="1" data-select2-id="select2-data-2-lxwb">За все время</option>
        <option value="1" data-select2-id="select2-data-4-7gvw">По имени</option>
      </select><span class="select2 select2-container select2-container--default select2-container--below" dir="ltr" data-select2-id="select2-data-1-qwln" style="width: 107px;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-select-sort-container" aria-controls="select2-select-sort-container"><span class="select2-selection__rendered" id="select2-select-sort-container" role="textbox" aria-readonly="true" title="За все время">За все время</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
    </div>
    <div class="list_order_body">
      <div class="lob_item">
        <div class="lob_top">
          <div class="lob_top_left">
                <span>
                    № 732 673 890 от 01.02.22
                </span>

            <span class="color_green">
                    Выполнен
                </span>
          </div>
          <div class="lob_top_center">
                <span>
                    Сумма заказа
                </span>
            <span>
                    24 999 ₴
                </span>
          </div>
          <div class="lob_top_right">
            <div class="wrap_img">
              <img src="@/assets/img/busket_img.png" alt="img">
            </div>
          </div>
        </div>
        <div class="lob_content d-none">
          <div class="lob_con_left">
            <div class="lob_con_title">
              Информация о заказе
            </div>
            <div class="lob_con_div">
              Днепропетровская обл., Каменское, <br>
              Свободи просп., д.53
            </div>
            <div class="lob_con_div">
              График работы: <br>
              Пн-Вс: 10:00-18:00
            </div>
            <div class="lob_con_div">
              ФИО <br>
              + 38 (098) 000 00 00
            </div>
            <div class="lob_con_div">
              эл. почта
            </div>
            <div class="history_order">
              История заказа
            </div>
            <div class="d-none content_modal_none">
              <div class="content_modal">
                <div class="cm_item">
                  <div class="cm_data">
                    17.02.2022 10:37
                  </div>
                  <div class="cm_status color_green">
                    Выполнен
                  </div>
                </div>
                <div class="cm_item">
                  <div class="cm_data">
                    17.02.2022 10:31
                  </div>
                  <div class="cm_status">
                    В очереди на получение
                  </div>
                </div>
                <div class="cm_item">
                  <div class="cm_data">
                    17.02.2022 10:37
                  </div>
                  <div class="cm_status">
                    Ожидает клиента в пункте самовывоза
                  </div>
                </div>
                <div class="cm_item">
                  <div class="cm_data">
                    17.02.2022 10:37
                  </div>
                  <div class="cm_status">
                    Обработан автоматически
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lob_con_right">
            <div class="lob_con_title">
              О товаре
            </div>
            <div class="lob_con_r_head">
              <div class="lcrh_left">
                <div class="wrap_img">
                  <img src="@/assets/img/busket_img.png" alt="img">
                </div>
                <div class="lcrh_text">
                  Электросамокат Название длинное-предлинное
                </div>
              </div>
              <div class="lcrh_right">
                <div class="lcrh_price">
                  Цена
                  <span>24 999 ₴ </span>
                </div>
                <div class="lcrh_count">
                  Количество
                  <span>1</span>
                </div>
                <div class="lcrh_price">
                  Сумма
                  <span>24 999 ₴</span>
                </div>
              </div>
            </div>
            <div class="lob_con_r_body">
              <div class="lcrb_row">
                <div class="lcrb_left">
                  Оплата
                </div>
                <div class="lcrb_right">
                  Оплата при получении товара
                </div>
              </div>
              <div class="lcrb_row">
                <div class="lcrb_left">
                  Доставка
                </div>
                <div class="lcrb_right">
                  50 ₴
                </div>
              </div>
              <div class="lcrb_row">
                <div class="lcrb_left">
                  Итого
                </div>
                <div class="lcrb_right">
                  25 049 ₴
                </div>
              </div>
            </div>
            <button class="my_btn repeat_order_btn">
              Повторить заказ
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-lcOrder',
  data () {
    return {
    }
  },
  props: {
  },
  methods: {
  },
  computed: {
  },
  mounted () {
  }
}
</script>

<style lang="scss">
</style>
