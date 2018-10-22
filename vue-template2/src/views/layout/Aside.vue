<template>
  <div class="page-aside">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PageAside'
}
</script>

<style lang="scss" scoped>
.page-aside {
  width: 240px;
  background-color: #d3dce6;
}
</style>
