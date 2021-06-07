<template>
  <p class="OrderMore-add-to-card-black Ag-text18-to-1070 E4E4E4">{{msg}}</p>
</template>
<style scoped>
@media (max-width: 1069px) {
  .OrderMore-add-to-card-black {
    color: #7E7E7E;
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