import { ref, onMounted, onUnmounted, Ref } from 'vue'

export const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutside = ref(false)
  const handler = (e: MouseEvent) => {
    if (!elementRef.value) {
      return
    }
    if (!elementRef.value.contains(e.target as HTMLElement)) {
      isClickOutside.value = true
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return isClickOutside
}
