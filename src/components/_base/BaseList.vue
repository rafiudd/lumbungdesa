<template>
  <div class="b-list">
    <v-layout align-center wrap>
      <v-flex xs12 sm8>
        <v-layout align-center :class="{ 'additional--padding': isDetail }">
          <div class="b-list__number" :class="{ 'no--border': isDetail }">{{ number }}</div>
          <div class="b-list__title ml-6">
            <p class="mb-0 u-fs-20">{{ title }}</p>
          </div>
        </v-layout>
      </v-flex>
      <v-flex xs12 sm4>
        <v-layout class="b-list__wrapper-button" v-if="isHasButton">
          <v-btn rounded outlined class="u-capitalize btn--selengkapnya" color="#62B74B" @click="onClick">
            <p class="mb-0">{{ buttonText }}</p>
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    number: [String, Number],
    onClick: {
      default: () => {},
      type: Function,
    },
    isDetail: Boolean,
    buttonText: {
      default: 'Selengkapnya',
      type: String,
    },
    isHasButton: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
