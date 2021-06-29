<template>
  <div class="dropdown" ref="dropdownRef">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="isToggleOpen">
      {{ title }}
    </a>
    <ul class="dropdown-menu" :style="dropdownMenu" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      require: true
    }
  },
  setup () {
    const dropdownMenu = reactive({
      display: 'block'
    })
    const isOpen = ref(false)
    const dropdownRef = ref<null | HTMLElement>(null)
    const isToggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    const handler = (e: MouseEvent) => {
      if (!dropdownRef.value) {
        return
      }
      if (!dropdownRef.value.contains(e.target as HTMLElement) && isOpen.value) {
        isOpen.value = false
      }
    }
    onMounted(() => {
      document.addEventListener('click', handler)
    })
    onUnmounted(() => {
      document.removeEventListener('click', handler)
    })
    return {
      isOpen,
      isToggleOpen,
      dropdownMenu,
      dropdownRef
    }
  }

})
</script>

<style scoped>

</style>
