<template>
    <global-header :user="currentUser"></global-header>
    <column-list :list="list"></column-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'

const ColumnListData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1专栏',
    description: '描述文本',
    avatar: 'http://sc.adminbuy.cn/uploads/allimg/210326/1-2103261344300-L.png'
  },
  {
    id: 2,
    title: 'test2',
    description: '描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本',
    avatar: 'http://sc.adminbuy.cn/uploads/allimg/210326/1-210326134G20-L.png'
  },
  {
    id: 3,
    title: 'test3',
    description: '描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本'
  }
]
const currentUserData: UserProps = {
  isLogin: true,
  name: '你微笑时好美'
}

export default defineComponent({
  name: 'Home',
  components: {
    ColumnList,
    GlobalHeader
  },
  setup () {
    return {
      list: ColumnListData,
      currentUser: currentUserData
    }
  }
})
</script>

<style scoped>
</style>
