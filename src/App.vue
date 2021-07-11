<template>
  <div class="container">
    <global-header :user="currentUser" />
    <router-view></router-view>
    <global-footer/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'

import 'bootstrap/dist/css/bootstrap.min.css'

const currentUserData: UserProps = {
  isLogin: false,
  name: '你微笑时好美'
}
export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    GlobalFooter
  },
  setup () {
    return {
      currentUser: currentUserData
    }
  }
})
</script>

<style scoped>
</style>
