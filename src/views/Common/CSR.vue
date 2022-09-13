<template>
  <div class="v-landing-page" :class="{ 'u-overflow-y-hidden': isDialogOpen }">
    <ModuleNavbarLanding background="white" />
    <ModuleCSR />

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
