import { createApp } from 'vue'
import App from './App.vue'
import 'materialize-css/dist/js/materialize.min'
import router from './router'
import store from './store'
import './assets/css/style.css'
import messagePlugin from './utils/message.plugin'
// import './assets/js/app.min.js'

createApp(App).use(messagePlugin).use(store).use(router).mount('#app')
