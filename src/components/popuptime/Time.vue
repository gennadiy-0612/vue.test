<template>
  <div class="flex justify-between items-center afterLine relative padd-lr-5px">
    <p class="Ag-text18-to-1070">{{ from }}</p><p>-</p><p class="Ag-text18-to-1070">{{ to }}</p>
  </div>
</template>
<style>
.padd-lr-5px{
  padding: 0 5px;
}
.afterLine::after {
  content: '';
  height: 1px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #0B0B0B;
  position: absolute;
}
</style>
<script>
export default {
  name: 'PopUpHeader',
  props: {
    from: String,
    to: String
  }
}
</script>