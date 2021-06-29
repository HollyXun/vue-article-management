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
import { defineComponent, reactive, ref, watch } from 'vue'
import { useClickOutside } from '@/hooks/useClickOutside'

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
    const isClickOutside = useClickOutside(dropdownRef)
    watch(isClickOutside, () => {
      if (isOpen.value && isClickOutside.value) {
        isOpen.value = false
      }
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
