<template>
  <div class="m-navbar-landing u-position-fixed u-top-0 u-z-index-10 u-full-width" :class="{ 'navbar--scrolled': scrollPosition > 98 }">
    <v-container class="pt-4 pb-4">
      <v-layout align-center justify-space-between>
        <div class="m-navbar-landing__logo u-pointer mt-2" @click="goToSection('/')">
          <img :src="logo" alt="Logo" />
        </div>
        <div class="m-navbar-landing__lists align-center justify-between d-none d-md-flex">
          <div class="list--item mx-3" @click="goToSection('produk')" :class="{ 'active--nav': isProduct }">
            <p class="mb-0 pb-0 u-fs-14">Produk Desa</p>
          </div>
          <div class="list--item mx-3" @click="goToSection('pelatihan')" :class="{ 'active--nav': isPelatihan }">
            <p class="mb-0 pb-0 u-fs-14">Pelatihan Keterampilan</p>
          </div>
          <div class="list--item mx-3" @click="goToSection('desa-budaya')" :class="{ 'active--nav': isDesa }">
            <p class="mb-0 pb-0 u-fs-14">Desa Budaya</p>
          </div>
          <div class="list--item mx-3" @click="goToSection('donasi')" :class="{ 'active--nav': isDonasi }">
            <p class="mb-0 pb-0 u-fs-14">Donasi</p>
          </div>
          <div class="list--item mx-3" @click="goToSection('csr')" :class="{ 'active--nav': isCSR }">
            <p class="mb-0 pb-0 u-fs-14">CSR</p>
          </div>
        </div>
        <div class="m-navbar-landing__lists align-center justify-between d-none d-md-flex">
          <v-btn color="#F58328" dark depressed class="ml-3 px-7 u-letter-spacing-0 u-fs-14 no-uppercase button--login u-radius-3" @click="goToAuth()">{{ authActionText }}</v-btn>
        </div>
        <div class="d-block d-md-none">
          <v-menu transition="slide-y-transition" bottom nudge-bottom="45">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon>
                <v-icon :color="scrollPosition > 98 ? 'black' : 'white'" dark v-bind="attrs" v-on="on">{{ icons.mdiMenu
                }}</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="goToSection('produk')">
                <v-list-item-title class="u-fs-14">Produk Desa</v-list-item-title>
              </v-list-item>
              <v-list-item @click="goToSection('pelatihan')">
                <v-list-item-title class="u-fs-14">Pelatihan Keterampilan</v-list-item-title>
              </v-list-item>
              <v-list-item @click="goToSection('desa-budaya')">
                <v-list-item-title class="u-fs-14">Desa Budaya</v-list-item-title>
              </v-list-item>
              <v-list-item @click="goToSection('donasi')">
                <v-list-item-title class="u-fs-14">Donasi</v-list-item-title>
              </v-list-item>
              <v-list-item @click="goToSection('csr')">
                <v-list-item-title class="u-fs-14">CSR</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-btn color="#F58328" dark rounded depressed class="u-fs-14 button--login no-uppercase u-radius-3" @click="goToAuth()">{{ authActionText }}</v-btn>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mdiMenu } from '@mdi/js'
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      icons: {
        mdiMenu,
      },
      scrollPosition: null,
      isScrolled: false,
      isHome: false,
      isProduct: false,
      isDesa: false,
      isDonasi: false,
      isCSR: false
    }
  },
  props: [
    'background'
  ],
  computed: {
    ...mapGetters('users', ['isExistProfiles', 'userRole']),

    authActionText() {
      if (this.isExistProfiles) {
        return 'Logout'
      }
      return 'Hubungi Kami'
    },
    logo() {
        if(this.background === 'white') {
          return 'https://res.cloudinary.com/duh8crgew/image/upload/v1662866966/lumbungdesa/images/logo/colored_logo_trdx7e.svg'
        } else {
          return this.scrollPosition > 98
               ? 'https://res.cloudinary.com/duh8crgew/image/upload/v1662866966/lumbungdesa/images/logo/colored_logo_trdx7e.svg'
               : 'https://res.cloudinary.com/duh8crgew/image/upload/v1662866961/lumbungdesa/images/logo/logo_potrhm.svg';
        }
    },
    currentRouteName() {
			return this.$route.name;
		}
  },

  mounted() {
    if(this.background === 'white') {
      this.scrollPosition = 100
    } else {
      window.addEventListener('scroll', this.updateScroll)
    }

    switch (this.currentRouteName) {
      case 'produk':
        this.isProduct = true
        break;
      case 'pelatihan':
        this.isPelatihan = true
        break;
      case 'desa-budaya':
        this.isDesa = true
        break;
      case 'donasi':
        this.isDonasi = true
        break;
      case 'CSR':
        this.isCSR = true
        break;
      default:
        break;
    }

    // eslint-disable-next-line no-console
    console.log(this.currentRouteName, "ROUTER", this.isProduct)
  },

  methods: {
    ...mapActions('users', ['removeProfiles']),

    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    goToAuth() {
      window.open(
        "https://api.whatsapp.com/send/?phone=%2B6285741892603&text=Halo saya ingin bertanya terkait lumbung desa&type=phone_number&app_absent=0",
        '_blank' // <- This is what makes it open in a new window.
      );
    },
    getActive(id) {
      const elem = document.getElementById(id)
      let offset = 200
      if (elem) {
        if (id === 'contact-us') {
          offset = 250
        }

        const scrollDistance = window.pageYOffset
        // eslint-disable-next-line no-console
        return (
          elem.offsetTop - offset <= scrollDistance && elem.offsetTop + elem.offsetHeight - offset >= scrollDistance
        )
      }
      return false
    },
  },
}
</script>
