<template>
  <div class="DescriptionItem m-t10px flex justify-center relative">
    <img class="comboSet-img width-full" src="../../assets/img/photo86x59px.svg">
    <div class="flex flex-col">
      <div class="flex flex-col p-l7px">
        <h3 class="Ag-h3-to-1070 m-t-3px">{{heads}}</h3>
        <p class="Ag-text12-to-1070 m-t2px">{{descriptionitem}}</p>
      </div>
      <div class="flex justify-between mt5-mb10">
        <h3 class="Ag-h3-to-1070">{{price}}.-</h3>
        <img src="../../assets/img/alsobuy.svg"/>
      </div>
    </div>
  </div>
</template>
<style>
.comboSet-img {
  height: 90px;
  width: 134px;
}

</style>
<script>
export default {
  name: 'ComboItem',
  props: {
    heads: String,
    descriptionitem: String,
    price: String,
  }
}
</script>