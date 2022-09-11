<template>
  <v-dialog hide-overlay fullscreen :value="isOpen">
    <div class="b-iframe-main">
      <v-layout class="b-iframe-main__header">
        <img src="@/assets/images/whiteLogo.svg" alt="logo" class="b-iframe-main__header__image" />
        <v-btn fab color="#F68F24" dark class="b-iframe-main__header__button" @click="closeButton">
          <v-icon>{{ icon.mdiClose }}</v-icon>
        </v-btn>
      </v-layout>
      <v-layout class="b-iframe-main__arrow" justify-space-between>
        <v-btn
          fab
          color="#E0E0E0"
          class="b-iframe-main__header__button button--left"
          @click="prevButton"
          v-if="isHasPrevButton"
        >
          <v-icon>{{ icon.mdiChevronLeft }}</v-icon>
        </v-btn>
        <v-btn
          fab
          color="#E0E0E0"
          class="b-iframe-main__header__button button--right"
          @click="nextButton"
          v-if="isHasNextButton"
        >
          <v-icon>{{ icon.mdiChevronRight }}</v-icon>
        </v-btn>
      </v-layout>
      <v-layout justify-center class="b-iframe-main__title">
        <div class="b-iframe-main__title__card">
          <p>{{ title }}</p>
        </div>
      </v-layout>
      <iframe
        id="iframe"
        class="b-iframe"
        title="labbaik vtour"
        :src="source"
        frameborder="0"
        style="border:0;"
        :allowfullscreen="true"
        :aria-hidden="false"
        tabindex="0"
      >
      </iframe>
    </div>
  </v-dialog>
</template>

<script>
import { mdiClose, mdiChevronLeft, mdiChevronRight } from '@mdi/js'
export default {
  data() {
    return {
      icon: {
        mdiClose,
        mdiChevronLeft,
        mdiChevronRight,
      },
    }
  },
  props: {
    isOpen: Boolean,
    source: String,
    title: String,
    closeButton: {
      type: Function,
      default: () => {},
    },
    prevButton: {
      type: Function,
      default: () => {},
    },
    nextButton: {
      type: Function,
      default: () => {},
    },
    isHasPrevButton: {
      default: true,
      type: Boolean,
    },
    isHasNextButton: {
      default: true,
      type: Boolean,
    },
  },
}
</script>

<style></style>
