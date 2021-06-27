<template>
  <div class="dropdown">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="isToggleOpen">
      {{ title }}
    </a>
    <ul class="dropdown-menu" :style="dropdownMenu" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

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
    const isToggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    return {
      isOpen,
      isToggleOpen,
      dropdownMenu
    }
  }

})
</script>

<style scoped>

</style>
