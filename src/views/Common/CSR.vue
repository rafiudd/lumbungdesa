<template>
  <div class="v-landing-page" :class="{ 'u-overflow-y-hidden': isDialogOpen }">
    <ModuleNavbarLanding background="white" />
    <ModuleCSR />
    <div class="v-landing-page__about">
      <v-container mt-0 pt-0>
        <div class="v-landing-page__about__content u-color-white u-w-md-full-width u-w-52per">
          <h1 class="font-weight-bold u-fs-44"> Kenapa donasi di LumbungDesa?</h1>
          <p class="mt-4 u-fs-18 u-line-height-30 u-fs-md-16 ">Aman dan Terpercaya, Semua galang dana yang dibuat sudah melalui proses kurasi dan verifikasi secara akurat oleh tim kami. Mudah dan Cepat, Proses donasi yang kamu lakukan hanya dalam hitungan menit dengan berbagai metode pembayaran. Transparan, Pencairan dan penggunaan donasi yang sudah diterima penggalang dana dapat dilihat di update aktivitas</p>
        </div>
      </v-container>
    </div>
    <v-row class="mr-0 ml-0" justify="center" align="center">
      <div class="v-landing-page__csr__content u-w-md-full-width u-w-52per text-center">
        <div :style="{'margin-top': currentRouteName == 'landingPage' ? '200px' : '160px'}"></div>
        <h1 class="font-weight-bold u-fs-44">Perusahaan Yang Sudah Menjadi #LumbungKebaikan</h1>
        <p class="mt-4 u-fs-18 u-line-height-30 u-fs-md-16">Lebih dari 20 perusahaan yang bekerja sama dengan kami, ayo bergabung sekarang untuk kebaikan yang berkelanjutan, demi Indonesia yang lebih baik lagi.</p>
      </div>
    </v-row>
    <div justify="center" align="center" class="mt-10">
      <img class="v-landing-page__csr-img" src="https://res.cloudinary.com/duh8crgew/image/upload/v1663134253/lumbungdesa/images/Group_154_leqsju.png" alt="">
    </div>
    <div style="margin-top: 200px"></div>
    <v-container class="v-landing-page-box-container">
      <v-row>
        <v-col md="8">
          <h1 class="u-fs-44">#KeluargaDesa</h1>
          <p>Bersama LumbungDesa membantu pemberdayaan masyarakat desa, menuju indonesia yang lebih baik</p>
        </v-col>
        <v-col md="4" class="text-right" align-self="center">
          <v-btn target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send/?phone=%2B6285741892603&text=Halo%20saya%20tertarik%20untuk bekerjasama bersama lumbung desa&type=phone_number&app_absent=0" color="#FFFFFF" width="150" dark class="btn-daftar px-7 u-letter-spacing-0 u-fs-14 no-uppercase button-all u-radius-2 u-color-29291e mt-2">Daftar Sekarang</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <ModuleFooter />
  </div>
</template>

<script>
import ModuleNavbarLanding from '@/components/_module/ModuleNavbarLanding'
import ModuleFooter from '@/components/_module/ModuleFooter'
import ModuleCSR from '@/components/_module/ModuleCSR'

export default {
  components: {
    ModuleNavbarLanding,
    ModuleFooter,
    ModuleCSR
  },
  methods: {}
}
</script>
