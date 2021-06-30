<template>
  <button class="OrderMore-add-to-card-black font-semibold Ag-text18-to-1070 E4E4E4 text-center">{{ msg }}</button>
</template>
<style scoped>
.OrderMore-add-to-card-black {
  color: #7E7E7E;
  line-height: 45px;
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
  name: 'GrayButton',
  props: {
    msg: String
  }
}
</script>