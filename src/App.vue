<template>
  <v-app>
    <Body/>
  </v-app>
</template>

<script>

import Body from '@/components/Body'

export default {
  name: 'App',
  components: {
    Body
  },
  created() {
    this.$store.commit('getAllTasks')
  }
}
</script>
