<template>
  <div class="flex justify-between addToCard-bw items-center AddCard">
    <p class="Ag-h3-to-1070 AddCard__P">1 110.-</p>
    <AddCard class="PUPC" msg="Добавить в корзину"/>
  </div>
</template>

<script>
import AddCard from '../addtocardblack/Index'

export default {
  name: 'App',
  components: {
    AddCard
  }
}
</script>
<style>
.addToCard-bw {
  margin: 20px 0 0;
}
</style>