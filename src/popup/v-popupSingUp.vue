<template>
  <div class="popup_wrapper" ref="popup_wrapper">
    <div class="v-popup box-modal2" id="exampleModal2">
      <div class="wrap_header">
        <h2>
          Регистрация
        </h2>
        <div class="box-modal_close arcticmodal-close" @click="closePopup()">
          <svg viewBox="0 0 24 24" fill="currentColor" class="icon-0-2-33"><path d="M10.5858 11.9999L4.66667 6.08079C4.27615 5.69027 4.27615 5.0571 4.66667 4.66658C5.0572 4.27606 5.69036 4.27605 6.08088 4.66658L12 10.5857L17.9191 4.66658C18.3096 4.27606 18.9428 4.27606 19.3333 4.66658C19.7239 5.0571 19.7239 5.69027 19.3333 6.08079L13.4142 11.9999L19.3333 17.919C19.7239 18.3096 19.7239 18.9427 19.3333 19.3332C18.9428 19.7238 18.3096 19.7238 17.9191 19.3332L12 13.4141L6.08088 19.3332C5.69036 19.7238 5.0572 19.7238 4.66667 19.3332C4.27615 18.9427 4.27615 18.3096 4.66667 17.919L10.5858 11.9999Z"></path></svg>
        </div>
      </div>
      <form action="/" class="form_register js-form" id="popupResult" @submit.prevent="onSubmit">
        <div class="contact-form__wrap-input">
          <label class="contact-form__name-inp">
            Имя
          </label>
          <div class="form-item" :class="{ errorInput: v$.name.$error }">
            <div class="wrap_input">
              <input
                type="text"
                name="name"
                class="contact-form__inp"
                v-model="name"
                :class="{ error: v$.name.$error }"
                @change="v$.name.$touch()"
              >
              <span class="error-icon"></span>
            </div>
            <p class="errorText" v-if="v$.name.required.$invalid">
              Filed is required
            </p>
            <p class="errorText" v-if="v$.name.minLength.$invalid">
              Name mast have at least {{ v$.name.minLength.$params.min }} !
            </p>
          </div>
        </div>
        <div class="contact-form__wrap-input">
          <label class="contact-form__name-inp">
            Фамилия
          </label>
          <div class="form-item" :class="{ errorInput: v$.surname.$error }">
            <div class="wrap_input">
              <input
                v-model="surname"
                :class="{ error: v$.surname.$error }"
                @change="v$.surname.$touch()"
                type="text"
                name="surname"
                class="contact-form__inp"
              >
              <span class="error-icon"></span>
            </div>
            <p class="errorText" v-if="v$.surname.required.$invalid">
              Filed is required
            </p>
            <p class="errorText" v-if="v$.surname.minLength.$invalid">
              Surname mast have at least
              {{ v$.surname.minLength.$params.min }} !
            </p>
          </div>
        </div>
        <div class="contact-form__wrap-input">
          <label class="contact-form__name-inp">
            Номер телефона
          </label>
          <div class="form-item" :class="{ errorInput: v$.tel.$error }">
            <div class="wrap_input">
              <input
                v-model="tel"
                :class="{ error: v$.tel.$error }"
                @change="v$.tel.$touch()"
                type="tel"
                name="tel"
                class="contact-form__inp contact-form__phone"
              >
              <span class="error-icon"></span>
            </div>
            <p class="errorText" v-if="v$.tel.required.$invalid">
              Filed is required
            </p>
            <p class="errorText" v-if="v$.tel.numeric.$invalid">
              You phone is not correct
            </p>
            <p class="errorText" v-if="v$.tel.minLength.$invalid">
              Tel mast have at least
              {{ v$.tel.minLength.$params.min }} !
            </p>
          </div>
        </div>
        <div class="contact-form__wrap-input">
          <label class="contact-form__name-inp">
            Эл. почта
          </label>
          <div class="form-item" :class="{ errorInput: v$.email.$error }">
            <div class="wrap_input">
              <input
                :class="{ error: v$.email.$error }"
                v-model="email"
                @change="v$.email.$touch()"
                type="email"
                name="email"
                class="contact-form__inp"
              >
              <span class="error-icon"></span>
            </div>
            <p class="errorText" v-if="v$.email.required.$invalid">
              Filed is required
            </p>
            <p class="errorText" v-if="v$.email.email">Email is not correct</p>
          </div>
        </div>
        <div class="contact-form__wrap-input">
          <label class="contact-form__name-inp">
            Создайте пароль
          </label>
          <div class="form-item" :class="{ errorInput: v$.password1.$error }">
            <div class="wrap_input wrap_input_password">
              <span class="ice_icon icon"></span>
              <input
                v-model="password1"
                :class="{ error: v$.password1.$error }"
                @change="v$.password1.$touch()"
                type="password"
                name="password"
                id="password"
                class="contact-form__inp"
              >
            </div>
            <p class="errorText" v-if="v$.password1.required.$invalid">
              Filed is required
            </p>
            <p class="errorText" v-if="v$.password1.minLength.$invalid">
              Password mast have at least
              {{ v$.password1.minLength.$params.min }} !
            </p>
          </div>
        </div>
        <div class="contact-form__wrap-input">
          <label class="contact-form__name-inp">
            Повторите пароль
          </label>
          <div class="form-item" :class="{ errorInput: v$.password2.$error }">
            <div class="wrap_input wrap_input_password">
              <span class="ice_icon icon"></span>
              <input
                v-model="password2"
                :class="{ error: v$.password2.$error }"
                @change="v$.password2.$touch()"
                type="password"
                name="password_confirm"
                class="contact-form__inp"
              >
            </div>
            <p class="errorText"  v-if="v$.password2.sameAsPassword.$params.equalTo">Password and Confirm Password should match</p>
            <p class="errorText" v-if="v$.password2.required.$invalid">
              Filed is required
            </p>
          </div>
        </div>
        <p class="text_terms">Продолжая, вы соглашаетесь <a href="#">Пользовательским соглашением</a></p>
        <button class="my_btn btn_reg">Зарегистрироваться</button>
        <a href="#" class="lc_login" @click.prevent="showPopup()">
          Я уже зарегистрирован
        </a>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email, numeric, sameAs } from '@vuelidate/validators'
export default {
  name: 'v-popup',
  setup () {
    return { v$: useVuelidate() }
  },
  data () {
    return {
      surname: '',
      name: '',
      email: '',
      tel: '',
      password1: '',
      password2: ''
    }
  },
  validations () {
    return {
      surname: {
        required,
        minLength: minLength(4)
      },
      name: {
        required,
        minLength: minLength(4)
      },
      position: {
        required,
        minLength: minLength(4)
      },
      password1: {
        required,
        minLength: minLength(4)
      },
      password2: {
        required,
        sameAsPassword: sameAs(this.password1)
      },
      tel: {
        required,
        numeric,
        minLength: minLength(1)
      },
      email: {
        required,
        email
      }
    }
  },
  props: {
  },
  methods: {
    async onSubmit () {
      this.v$.$touch()
      if (!this.v$.$invalid) {
        const user = {
          email: this.email,
          password: this.password
        }
        try {
          // await this.$store.dispatch('login', user)
          this.$router.push('/lc-favorite')
        } catch (e) {
          console.log('inLogin')
          throw e
        }
      }
    },
    showPopup () {
      this.$emit('showPopup')
    },
    closePopup () {
      this.$emit('closePopup')
    }
  },
  computed: {
    ...mapGetters([
      'CART'
    ])
  },
  mounted () {
    const vm = this
    document.addEventListener('click', function (item) {
      if (item.target === vm.$refs.popup_wrapper) {
        vm.closePopup()
      }
    })
  }
}
</script>

<style lang="scss">
.popup_wrapper {
  background: rgba(64,64,64, .4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  overflow-y: auto;
}
.box-modalBusket {

}
</style>
