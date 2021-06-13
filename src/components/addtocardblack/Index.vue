<template>
  <button class="OrderMore-add-to-card-black OrderActCash Ag-text18-to-1070 w-full">{{ msg }}</button>
</template>
<style scoped>
.OrderMore-add-to-card-black {
  background-color: #000000;
  color: #ffffff;
  text-align: center;
  line-height: 45px;
  font-weight: 600;
  transition-property: color, background-color;
  transition-duration: .7s;
  padding: 0 15px;
}

.OrderMore-add-to-card-black:hover {
  color: #000000;
  background-color: #FFFFFF;
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