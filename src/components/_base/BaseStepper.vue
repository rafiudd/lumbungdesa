<template>
  <div class="b-stepper d-flex flex-column">
    <div class="d-flex align-start">
      <div class="u-position-relative div--wrapper">
        <div class="b-stepper__bottom-line" v-if="!isFirstElement"></div>
        <div class="b-stepper__index">{{ index }}</div>
        <div class="line--bottom" v-if="!isLastElement"></div>
      </div>
      <div class="b-stepper__title ml-4 mb-0 pb-0 u-fs-20">{{ title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isFirstElement: {
      type: Boolean,
      default: false,
    },
    index: {
      type: [String, Number],
      default: 0,
    },
    title: {
      type: String,
      default: "Title",
    },
    isLastElement: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
