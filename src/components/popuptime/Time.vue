<template>
  <div class="flex justify-between items-center afterLine relative padd-lr-5px">
    <p class="Ag-text18-to-1070">{{ from }}</p><p>-</p><p class="Ag-text18-to-1070">{{ to }}</p>
  </div>
</template>
<style>
.padd-lr-5px{
  padding: 0 5px;
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