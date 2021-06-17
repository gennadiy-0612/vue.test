<template>
  <div class="desc"><router-link to="/" class="mainItem text-center Ag-text14-to-1070 Ag700 relative block">{{ msg }}</router-link></div>
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