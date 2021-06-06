<template>
  <div class="flex justify-between addToCard-bw items-center">
    <p class="Ag-h3-to-1070">1 110.-</p>
    <AddCard msg="Добавить в корзину"/>
  </div>
</template>

<script>
import AddCard from '../addtocardblack/Index.vue'

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