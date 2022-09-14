<template>
  <div class="v-landing-page" :class="{ 'u-overflow-y-hidden': isDialogOpen }">
    <ModuleNavbarLanding background="white" />
    <div style="margin-top: 50px"></div>
    <div class="v-landing-page__desa">
      <ModuleBackgroundDesaBudaya />
    </div>
    <div style="margin-top: 900px"></div>
    <ModuleFooter />
  </div>
</template>

<script>
import ModuleNavbarLanding from '@/components/_module/ModuleNavbarLanding'
import ModuleFooter from '@/components/_module/ModuleFooter'
import ModuleBackgroundDesaBudaya from '@/components/_module/ModuleBackgroundDesaBudaya'

export default {
  components: {
    ModuleNavbarLanding,
    ModuleFooter,
    ModuleBackgroundDesaBudaya
  },
  methods: {}
}
</script>
