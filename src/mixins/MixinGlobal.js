import vConfig from '@/config/vConfig'
import moment from 'moment'

export default {
  computed: {
    vConfig() {
      return vConfig
    },
    vSubPath() {
      const path = process.env.NODE_ENV === 'production' ? '/' : ''
      return path
    },
  },
  methods: {
    goToSection(id) {
      const elementPosition = document.getElementById(id).offsetTop
      window.scrollTo({
        top: elementPosition - 150, //add your necessary value
        behavior: 'smooth', //Smooth transition to roll
      })
    },

    formatDate(date) {
      return moment(date).format('DD MMMM YYYY')
    },
  },
}
