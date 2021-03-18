<template>
  <v-main id="main">
    <AppToolbar/>
    <transition name="fade" mode="out-in">
      <router-view style="margin-top: 60px"/>
    </transition>
    <Snackbar/>
    <DialogTask/>
  </v-main>
</template>

<script>
export default {
  name: 'Body',
  components: {
    AppToolbar: () => import('@/components/app/Toolbar'),
    Snackbar: () => import('@/components/Snackbar'),
    DialogTask: () => import('@/components/views/Task/dialogTask'),
  }
}
</script>