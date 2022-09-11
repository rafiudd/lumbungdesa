<template>
  <v-app>
    <vue-snotify></vue-snotify>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  components: {},
}
</script>
