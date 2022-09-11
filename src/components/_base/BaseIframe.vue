<template>
  <v-dialog hide-overlay fullscreen :value="isOpen">
    <div class="b-iframe">
      <div class="b-iframe__wrapper">
        <v-btn fab color="#F68F24" dark class="b-iframe__wrapper__close-button" @click="closeButton">
          <v-icon>{{ icon.mdiClose }}</v-icon>
        </v-btn>
      </div>
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
import { mdiClose } from '@mdi/js'
export default {
  data() {
    return {
      icon: {
        mdiClose,
      },
    }
  },
  props: {
    isOpen: Boolean,
    source: String,
    closeButton: {
      type: Function,
      default: () => {},
    },
  },
}
</script>
