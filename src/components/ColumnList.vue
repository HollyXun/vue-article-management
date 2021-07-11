<template>
  <div class="row">
    <div v-for='column in columnList' :key='column.id' class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :alt='column.title' :src='column.avatar' class="rounded-circle border border-light w-25 my-3">
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-start">{{ column.description }}</p>
          <span class="btn btn-outline-primary" @click="jumpHandle(column.id)">进入专栏</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'

export interface ColumnProps {
  id: number,
  title: string,
  avatar?: string,
  description: string
}

/**
 * Array是一个构造函数
 * ProType:将构造函数断言成类型
 */
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      require: true
    }
  },
  setup (props) {
    const router = useRouter()
    const columnList = computed(() => {
      // 使用可选链?来避免props.list为undefined的异常情况
      return props.list?.map(column => {
        if (!column.avatar) {
          column.avatar = require('@/assets/column.png')
        }
        return column
      })
    })
    const jumpHandle = (id: any) => {
      router.push({
        name: 'ColumnDetail',
        params: {
          id: id
        }
      })
    }
    return {
      columnList,
      jumpHandle
    }
  }
})
</script>

<style scoped>

</style>
