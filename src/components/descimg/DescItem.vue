<template>
  <div class="desc xl:h-full xl:w-full xl:align-center xl:flex">
    <router-link to="/" class="mainItem xl:font-medium text-center Ag-text14-to-1070 font-bold relative block xl:self-center">{{ msg }}</router-link>
  </div>
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