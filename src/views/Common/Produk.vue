<template>
  <div class="v-product" :class="{ 'u-overflow-y-hidden': isDialogOpen }">
    <ModuleNavbarLanding background="white" />
    <div class="v-product__container">
      <v-container mt-0 pt-0>
        <ModuleLihatSemua title="Produk Terbaik Desa" description="LumbungDesa mempromosikan produk desa terbaik dari seluruh desa di Indonesia kepada dunia sehingga bisa dikenal mayarakat luas" href="" />
        <ModuleSearch />
        <br>
        <ModuleProductsHome page="produk" />
      </v-container>
    </div>
    <ModuleFooter />
  </div>
</template>

<script>
import ModuleNavbarLanding from '@/components/_module/ModuleNavbarLanding'
import ModuleFooter from '@/components/_module/ModuleFooter'
import ModuleProductsHome from '@/components/_module/ModuleProductsHome'
import ModuleLihatSemua from '@/components/_module/ModuleLihatSemua'
import ModuleSearch from '@/components/_module/ModuleSearch'

export default {
  components: {
    ModuleNavbarLanding,
    ModuleFooter,
    ModuleProductsHome,
    ModuleLihatSemua,
    ModuleSearch
  },
  data() {
    return {
      isDialogOpen: false
    }
  },
  methods: {}
}
</script>
