<template>
  <div class="container" id="app">
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'

const testData:ColumnProps[] = [
  {
    id: 1,
    title: 'test1专栏',
    description: '描述文本',
    avatar: 'http://sc.adminbuy.cn/uploads/allimg/210326/1-2103261344300-L.png'
  },
  {
    id: 2,
    title: 'test2',
    description: '描述文本',
    avatar: 'http://sc.adminbuy.cn/uploads/allimg/210326/1-210326134G20-L.png'
  }
]

export default defineComponent({
  name: 'App',
  components: {
    ColumnList
  },
  setup () {
    return {
      list: testData
    }
  }
})
</script>

<style scoped>
</style>
