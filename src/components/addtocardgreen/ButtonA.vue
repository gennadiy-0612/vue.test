<template>
  <router-link to="/oformzakaza" class="OrderMore-add-to-card-green xl:block text-white Ag-text18-to-1070 w-full text-center">{{ msg }}</router-link>
</template>
<style scoped>
.OrderMore-add-to-card-green {
  background-color: #465500;
  line-height: 45px;
  font-weight: 600;
  transition-property: color, background-color;
  transition-duration: .7s;
}

.OrderMore-add-to-card-green:hover {
  color: #465500;
  background-color: #E6E6E6;
}
</style>
<script>
export default {
  name: 'GreenButton',
  props: {
    msg: String
  }
}
</script>