<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'

export default defineComponent({
  name: 'App'
})
</script>

<style scoped>
</style>
