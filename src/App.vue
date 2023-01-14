<script setup lang="ts">
import Navigation from './components/Navigation.vue'
</script>

<template>
  <body>
  <Navigation msg="" ></Navigation>
  <router-view></router-view>
  </body>
</template>

<style scoped>
body{
  width: 100%;
}
</style>
