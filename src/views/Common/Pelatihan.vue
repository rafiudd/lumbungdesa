<template>
  <div class="v-pelatihan" :class="{ 'u-overflow-y-hidden': isDialogOpen }">
    <ModuleNavbarLanding background="white" />
    <br><br>
    <div class="v-landing-page__keterampilan">
      <v-container mt-0 pt-0>
        <ModuleLihatSemua title="Pelatihan Keterampilan" description="LumbungDesa menyediakan berbagai pelatihan keterampilan secara online maupun offline tanpa biaya 100% gratis." />
        <ModulePelatihan />
      </v-container>
    </div>
    <ModuleFooter />
  </div>
</template>

<script>
import ModuleNavbarLanding from '@/components/_module/ModuleNavbarLanding'
import ModuleFooter from '@/components/_module/ModuleFooter'
import ModulePelatihan from '@/components/_module/ModulePelatihan'
import ModuleLihatSemua from '@/components/_module/ModuleLihatSemua'

export default {
  components: {
    ModuleNavbarLanding,
    ModuleFooter,
    ModulePelatihan,
    ModuleLihatSemua
  },
  methods: {}
}
</script>
