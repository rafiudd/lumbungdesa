<template>
  <div class="c-navbar u-bgc-white u-position-fixed u-top-0 u-z-index-10 u-full-width">
    <v-container>
      <v-layout align-center justify-space-between>
        <v-btn rounded color="#62B74B" dark class="font-weight-bold d-none d-md-block" @click="backHome">
          <v-icon left>{{ icons.mdiArrowLeft }}</v-icon> Kembali
        </v-btn>
        <div class="d-flex align-items-center c-navbar__wrapper-logo">
          <img src="@/assets/images/logo_labbaik.svg" alt="logo" class="c-navbar__wrapper-logo__logo" />
          <div class="c-navbar__wrapper-logo__switcher d-none d-md-block">
            <p class="u-fs-12 font-weight-bold">Live Mode</p>
            <v-switch
              class="mt-0 pt-0"
              :value="switchValue"
              :input-value="switchValue"
              @change="onChangeSwitch"
            ></v-switch>
          </div>
        </div>
        <div class="c-navbar__wrapper-button">
          <v-btn color="danger" rounded dark class="u-capitalize d-none d-md-block" @click="logout">Logout</v-btn>
        </div>
        <div class="d-block d-md-none">
          <v-menu transition="slide-y-transition" bottom nudge-bottom="48">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon>
                <v-icon dark v-bind="attrs" v-on="on">{{ icons.mdiMenu }}</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <div class="c-navbar__wrapper-logo__switcher ml-0">
                  <p class="u-fs-12 font-weight-bold">Live Mode</p>
                  <v-switch
                    class="mt-0 pt-0"
                    :value="switchValue"
                    :input-value="switchValue"
                    @change="onChangeSwitch"
                  ></v-switch>
                </div>
              </v-list-item>
              <v-list-item>
                <v-btn block rounded color="#62B74B" dark class="font-weight-bold" @click="backHome">
                  <v-icon left>{{ icons.mdiArrowLeft }}</v-icon> Kembali
                </v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn block color="danger" rounded dark class="u-capitalize" @click="logout">Logout</v-btn>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mdiArrowLeft, mdiMenu } from '@mdi/js'
import { mapActions } from 'vuex'
export default {
  props: {
    switchValue: Boolean,
    onChangeLive: {
      type: Function,
      default: () => {},
    },
  },

  data() {
    return {
      icons: {
        mdiArrowLeft,
        mdiMenu,
      },
    }
  },
  methods: {
    ...mapActions('users', ['setProfiles', 'removeProfiles']),

    onChangeSwitch(e) {
      this.onChangeLive(e)
    },

    backHome() {
      this.$router.push({ name: 'landingPage' })
    },

    logout() {
      this.removeProfiles()
      this.$router.push({ name: 'landingPage' })
    },
  },
}
</script>
