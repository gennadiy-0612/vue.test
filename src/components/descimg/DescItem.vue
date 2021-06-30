<template>
  <div class="desc xl:flex xl:h-full xl:w-full xl:align-center"><router-link to="/" class="mainItem xl:font-medium text-center Ag-text14-to-1070 font-bold relative block">{{ msg }}</router-link></div>
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