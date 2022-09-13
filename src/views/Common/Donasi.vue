<template>
  <div class="v-landing-page" :class="{ 'u-overflow-y-hidden': isDialogOpen }">
    <ModuleNavbarLanding background="white" />
    <div class="v-landing-page__donasi">
      <v-row class="mr-0 ml-0" justify="center" align="center">
        <div class="v-landing-page__donasi__content u-w-md-full-width u-w-52per text-center">
          <h1 class="font-weight-bold u-fs-44"> Untuk Desa Yang Lebih Baik </h1>
          <p class="mt-4 u-fs-18 u-line-height-30 u-fs-md-16"> Kami butuh bantuanmu, setiap rupiah yang kamu berikan sangat berarti untuk kami. Ayo bersama membantu pembangunan masyarakat desa</p>
        </div>
      </v-row>
      <ModuleDonasi page="home" />
    </div>
    <ModuleFooter />
  </div>
</template>

<script>
import ModuleNavbarLanding from '@/components/_module/ModuleNavbarLanding'
import ModuleFooter from '@/components/_module/ModuleFooter'

export default {
  components: {
    ModuleNavbarLanding,
    ModuleFooter
  },
  methods: {}
}
</script>
