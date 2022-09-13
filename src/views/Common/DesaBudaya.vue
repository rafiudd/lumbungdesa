<template>
  <div class="v-landing-page" :class="{ 'u-overflow-y-hidden': isDialogOpen }">
    <ModuleNavbarLanding background="white" />
    <ModuleBackgroundDesaBudaya />
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
