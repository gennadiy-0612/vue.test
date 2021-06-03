<template>
  <div class="flex justify-between addToCard-bw content-center">
    <p class="Ag-h3-to-1070">1 110.-</p>
    <AddCard/>
  </div>
</template>

<script>
import AddCard from '../addtocard/Index.vue'

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

.addToCard-bw .OrderMore-add-to-card {
  background-color: #000000;
  color: #FFFFFF;
  padding: 0 15px;
}
</style>