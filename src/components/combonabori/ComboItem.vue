<template>
  <div class="DescriptionItem comboNabori__all m-t10px combo flex xl:flex-col justify-center relative">
    <img alt="alt" class="comboSet-img width-full" src="../../assets/img/photo86x59px.svg">
    <div class="flex flex-col">
      <div class="flex flex-col p-l7px">
        <h3 class="Ag-h3-to-1070 m-t-3px DescriptionItem__head1">{{ heads }}</h3>
        <p class="Ag-text12-to-1070 m-t6px choiceTimeT xl:font-semibold">{{ descriptionitem }}</p>
      </div>
      <div class="flex justify-between mt5-mb10 comboNabori__price xl:flex">
        <h3 class="Ag-h3-to-1070 DescriptionItem__head3 xl:font-semibold t100-14 relative">{{ price }}.-</h3>
        <img class="DescHide" alt="alt" src="../../assets/img/alsobuy.svg"/>
      </div>
    </div>
  </div>
</template>
<style>
.DescriptionItem {
  margin: 10px 0 19px;
}

.DescriptionItem::after {
  bottom: 8px;
}

.DescriptionItem__p {
  margin: 6px 0 0 2px;
}

.comboNabori__all {
  margin: 0 0 18px;
}

.comboSet-img {
  height: 90px;
  width: 134px;
  margin-top: 8px;
}

.comboNabori__price {
  padding: 0 0 10px;
}

.Ag-h3-to-1070.t100-14 {
  font-weight: 400;
  font-size: 14px;
  margin: 0 0 0 8px;
  top: 8px;
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