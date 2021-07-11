<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/home">我的个人专栏</router-link>
      <ul v-if="!user.isLogin" class="list-inline mb-0">
        <li class="list-inline-item"><router-link class="btn btn-outline-light my-2" to="/register">登陆</router-link></li>
        <li class="list-inline-item"><router-link class="btn btn-outline-light my-2" to="/register">注册</router-link></li>
      </ul>
      <ul v-else class="list-inline mb-0">
        <li class="list-inline-item">
          <dropdown :title="`你好，${user.name}`">
            <dropdown-item><a class="dropdown-item" href="#">登陆</a></dropdown-item>
            <dropdown-item><a class="dropdown-item" href="#">注册</a></dropdown-item>
            <dropdown-item><a class="dropdown-item" href="#">我的文章</a></dropdown-item>
          </dropdown>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'

export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number
}

export default defineComponent({
  name: 'GlobalHeader',
  components: {
    Dropdown,
    DropdownItem
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      require: true
    }
  }
})
</script>

<style scoped>

</style>
