<template>
  <div class="page-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PageRow'
}
</script>

<style scoped>
.page-row {
  display: flex;
  flex-grow: 1;
  flex-direction: row;
}
</style>
