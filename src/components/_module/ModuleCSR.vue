<template>
  <div class="v-landing-page__csr">
    <v-row class="mr-0 ml-0" justify="center" align="center">
      <div class="v-landing-page__csr__content u-w-md-full-width u-w-52per text-center">
        <div :class="{ 'mt-160': currentRouteName == 'CSR' }"  :style="{'margin-top': currentRouteName == 'landingPage' ? '200px' : '160px'}"></div>
        <h1 class="font-weight-bold u-fs-44">Corporate Social Responsibility (CSR)</h1>
        <p class="mt-4 u-fs-18 u-line-height-30 u-fs-md-16">Membawa program kebaikan perusahaan tidak perlu menyita waktu. Bersama LumbungDesa lebih mudah untuk merencanakan, melaporkan, dan menjalankan program sepanjang tahun yang melibatkan lebih banyak orang dan mendukung tujuan CSR perusahaan.</p>
      </div>
    </v-row>
    <div justify="center" align="center" class="mt-10">
      <img class="v-landing-page__csr-img" src="https://res.cloudinary.com/duh8crgew/image/upload/v1663035764/lumbungdesa/images/landing-page/image_17_cnjn6x.png" alt="">
    </div>
    <v-row justify="center" align="center" class="v-landing-page__csr-btn-group">
      <v-btn target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send/?phone=%2B6285741892603&text=Halo%20saya%20ingin%20tertarik untuk bekerja sama&type=phone_number&app_absent=0" color="#F58328" width="200" dark class="px-7 u-letter-spacing-0 u-fs-14 no-uppercase button-all u-radius-2 mt-2 mr-5 v-landing-page__csr-btn-1">Bekerjasama Bersama Kami</v-btn>
      <v-btn target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=rCE7zZ2PHZk" color="#FFFFFF" width="160" dark class="px-7 u-letter-spacing-0 u-fs-14 no-uppercase button-all u-radius-2 u-color-29291e mt-2">Tonton Video</v-btn>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
        tab: null,
        isDialogOpen: false,
    }
  },
  computed: {
    currentRouteName() {
        return this.$route.name;
    }
  },
  mounted() {
    if(this.currentRouteName === 'landingPage') {
      this.donasi = this.donasiHome
    } else {
      this.donasi = this.donasiAll
    }
  },
}
</script>