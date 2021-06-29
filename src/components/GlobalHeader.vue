<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">我的个人专栏</a>
      <ul v-if="!user.isLogin" class="list-inline mb-0">
        <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">登陆</a></li>
        <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">注册</a></li>
      </ul>
      <ul v-else class="list-inline mb-0">
        <li class="list-inline-item">
          <dropdown :title="`你好，${user.name}`">
            <dropdown-item><a class="dropdown-item" href="#">登录</a></dropdown-item>
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
