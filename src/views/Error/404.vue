<template>
  <div class="notfound">
    <img alt="404" src="@/assets/404.gif">
  </div>
</template>

<script>
export default {
  name: '404'
}
</script>

<style scoped>
.notfound {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.notfound img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
