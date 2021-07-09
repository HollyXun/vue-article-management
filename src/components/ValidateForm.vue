<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt, { Emitter } from 'mitt'

export const emitter: Emitter<any> = mitt<any>()

export default defineComponent({
  name: 'ValidateForm',
  emits: ['form-submit'],
  setup (props, context) {
    const submitForm = () => {
      context.emit('form-submit', true)
    }
    const callback = (str: string) => {
      console.log(str)
    }
    emitter.on('form-item-created', callback)
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
    })
    return {
      submitForm
    }
  }
})
</script>

<style scoped>

</style>
