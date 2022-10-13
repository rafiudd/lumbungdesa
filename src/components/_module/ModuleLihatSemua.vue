<template class="m-lihat-semua">
  <v-layout align-center wrap>
    <v-flex>
      <h1 data-aos="fade-right" data-aos-duration="1000">
        {{title}}
      </h1>
      <p class="m-lihat-semua__description" data-aos="fade-right" data-aos-duration="1000">
        {{description}}
      </p>
    </v-flex>
    <v-flex class="text-right" data-aos="fade-left" data-aos-duration="1000">
      <v-btn :v-bind="href" :href="href" color="#F58328" dark class="m-lihat-semua__button px-7 u-letter-spacing-0 u-fs-14 no-uppercase button-all u-radius-2" :class="{ 'display-none': page != 'home' }">Lihat Semua</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: [
    'title',
    'description',
    'href',
    'page'
  ]
}
</script>