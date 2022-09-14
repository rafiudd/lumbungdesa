<template>
  <div class="v-landing-page" :class="{ 'u-overflow-y-hidden': isDialogOpen }">
    <ModuleNavbarLanding background="white" />
    <div style="margin-top: 50px"></div>
    <div class="v-landing-page__desa">
      <ModuleBackgroundDesaBudaya />
    </div>
    <div class="mt-700" style="margin-top: 700px"></div>

    <div class="v-landing-page__donasi">
      <v-row class="mr-0 ml-0" justify="center" align="center">
        <div class="v-landing-page__donasi__content u-w-md-full-width u-w-52per text-center">
          <div class="mt-120" style="margin-top: 120px"></div>
          <h1 class="font-weight-bold u-fs-44"> Desa Budaya </h1>
          <p class="mt-4 u-fs-18 u-line-height-30 u-fs-md-16"> Bersama LumbungDesa Desa Berdaya dengan Budaya yang ada. Jangan sampai budaya desa menghilang tanpa jejak. Sekarang semua terdokumentasi di LumbungDesa</p>
        </div>
      </v-row>
      <ModuleDesaBudaya page="home" />
    </div>
    <ModuleFooter />
  </div>
</template>

<script>
import ModuleNavbarLanding from '@/components/_module/ModuleNavbarLanding'
import ModuleFooter from '@/components/_module/ModuleFooter'
import ModuleBackgroundDesaBudaya from '@/components/_module/ModuleBackgroundDesaBudaya'
import ModuleDesaBudaya from '@/components/_module/ModuleDesaBudaya'

export default {
  components: {
    ModuleNavbarLanding,
    ModuleFooter,
    ModuleBackgroundDesaBudaya,
    ModuleDesaBudaya
  },
  methods: {}
}
</script>
