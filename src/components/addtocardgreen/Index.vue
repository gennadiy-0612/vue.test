<template>
  <p class="OrderMore-add-to-card-green Ag-text18-to-1070">{{msg}}</p>
</template>
<style scoped>
@media (max-width: 1069px) {
  .OrderMore-add-to-card-green {
    background-color: #009200;
    color: #ffffff;
    text-align: center;
    line-height: 45px;
    font-weight: 600;
    transition-property: color, background-color;
    transition-duration: .7s;
  }

  .OrderMore-add-to-card-green:hover {
    color: #009200;
    background-color: #E6E6E6;
  }
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