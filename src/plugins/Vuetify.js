import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

const opts = {
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#62B74B',
        red: '#DD3A22',
        orange: '#F68F24',
        danger: '#DD3A22',
      },
    },
  },
}

export default new Vuetify(opts)
