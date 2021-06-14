<template>
  <div class="desc"><p class="mainItem text-center Ag-text14-to-1070 Ag700 relative">{{ msg }}</p></div>
</template>
<style>
.desc {
  height: 42px;
}
</style>
<script>
export default {
  name: 'descitem',
  props: {
    msg: String
  }
}
</script>