<template>
  <div class="popup_wrapper" ref="popup_wrapper">
    <div class="v-popup box-modal2" id="exampleModal3">
      <div class="wrap_header">
        <h2>
          Вход
        </h2>
        <div class="box-modal_close arcticmodal-close" @click="closePopup()">
          <svg viewBox="0 0 24 24" fill="currentColor" class="icon-0-2-33"><path d="M10.5858 11.9999L4.66667 6.08079C4.27615 5.69027 4.27615 5.0571 4.66667 4.66658C5.0572 4.27606 5.69036 4.27605 6.08088 4.66658L12 10.5857L17.9191 4.66658C18.3096 4.27606 18.9428 4.27606 19.3333 4.66658C19.7239 5.0571 19.7239 5.69027 19.3333 6.08079L13.4142 11.9999L19.3333 17.919C19.7239 18.3096 19.7239 18.9427 19.3333 19.3332C18.9428 19.7238 18.3096 19.7238 17.9191 19.3332L12 13.4141L6.08088 19.3332C5.69036 19.7238 5.0572 19.7238 4.66667 19.3332C4.27615 18.9427 4.27615 18.3096 4.66667 17.919L10.5858 11.9999Z"></path></svg>
        </div>
      </div>
      <form action="/" @submit.prevent="onSubmit" class="form_register js-form" id="popupResult3">
        <div class="contact-form__wrap-input">
          <label class="contact-form__name-inp">
            Эл. почта или телефон
          </label>
          <div class="form-item" :class="{ errorInput: v$.email.$error }">
            <div class="wrap_input">
              <input
                type="text"
                name="login"
                class="contact-form__inp"
                :class="{ error: v$.email.$error }"
                v-model="email"
                @change="v$.email.$touch()"
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
            Введите пароль
          </label>
          <div class="form-item" :class="{ errorInput: v$.password.$error }">
            <div class="wrap_input wrap_input_password">
              <span class="ice_icon icon" onclick="visiblePass(this)"></span>
              <input
                type="password"
                name="password"
                class="contact-form__inp"
                v-model="password"
                :class="{ error: v$.password.$error }"
                @change="v$.password.$touch()"
              >
            </div>
            <p class="errorText" v-if="v$.password.required.$invalid">
              Filed is required
            </p>
            <p class="errorText" v-if="v$.password.minLength.$invalid">
              Password mast have at least {{ v$.password.minLength.$params.min }} !
            </p>
          </div>
        </div>
        <button class="my_btn btn_reg">Войти</button>
        <a href="#" class="lc_reg" @click.prevent="showPopup()">
          Зарегистрироваться
        </a>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email } from '@vuelidate/validators'
export default {
  name: 'v-popup',
  setup () {
    return { v$: useVuelidate() }
  },
  data () {
    return {
      password: '',
      email: ''
    }
  },
  validations () {
    return {
      password: {
        required,
        minLength: minLength(4)
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

        //   console.log(user);
        //   this.email = "";
        //   this.v$.$reset();
        //   this.$emit("close");
      }

      // this.name = "";
      // this.email = "";
      // this.v$.$reset();
      // this.$emit("close");
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

.form-item .errorText {
  display: none;
  margin-top: 5px;
  font-size: 13px;
  color: rgb(207, 86, 86);
}

.form-item.errorInput .errorText {
  display: block;
}

.wrap_form {
  padding: 50px 0;
  max-width: 350px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;

  form {
    width: 100%;
    padding: 50px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .form-item {
      width: 100%;
      margin-bottom: 30px;

      &.errorInput {
        margin-bottom: 10px;
      }

      input {
        width: 100%;
        height: 44px;
        padding: 0 20px;
      }
    }
  }
}

input.error {
  border: 1px solid rgb(207, 86, 86);
}
</style>
