// Common
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import MixinGlobal from '@/mixins/MixinGlobal'
import MixinValidateInput from '@/mixins/MixinValidateInput'
// Library
import '@/plugins/Lodash'
import '@/assets/scss/style.scss'
import '@/plugins/Snotify'
import '@mdi/font/css/materialdesignicons.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import vuetify from '@/plugins/Vuetify'

Vue.config.productionTip = false
Vue.mixin(MixinGlobal)
Vue.mixin(MixinValidateInput)


new Vue({
  router,
  store,
  vuetify,
  created () {
    AOS.init()
 },
  render: h => h(App),
}).$mount('#app')
