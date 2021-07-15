<template>
  <router-link to="/" class="block timeRow flex justify-between items-center afterLine relative padd-lr-5px">
    <p class="Ag-text18-to-1070 p-oformZakaz1">{{ from }}</p>
    <p>-</p>
    <p class="Ag-text18-to-1070 p-oformZakaz1">{{ to }}</p>
  </router-link>
</template>
<style>
.padd-lr-5px {
  padding: 0 5px;
}

.timeRow {
  padding: 0 5px 14px;
}

.afterLine::after {
  bottom: 10px;
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