<template>
  <div class="DescriptionItem flex justify-center relative xl:flex xl:flex-col">
    <router-link to="#"><img alt="alt" class="comboSet-img width-full" src="../../assets/img/photo86x59px.svg"></router-link>
    <div class="flex flex-col">
      <div class="flex flex-col p-l7px">
        <h3 class="Ag-h3-to-1070 DescriptionItem__h3">{{ heads }}</h3>
        <p class="Ag-text12-to-1070 DescriptionItem__p">{{ descriptionitem }}</p>
      </div>
      <div class="flex justify-between mt5-mb10">
        <h3 class="Ag-text14-to-1070 DescriptionItem__price">{{ price }}.-</h3>
        <button class="MobHide ComboNabButton OrderMore-add-to-card-black OrderActCash bg-black text-white Ag-text18-to-1070 w-full text-center"> Добавить в корзину </button>
        <img class="DescHide" alt="alt" src="../../assets/img/alsobuy.svg"/>
      </div>
    </div>
  </div>
</template>
<style>
.DescriptionItem {
  margin: 0 0 7px;
}

.CategoryPage .DescriptionItem::after {
  bottom: 3px;
}

.comboSet-img {
  height: 90px;
  width: 134px;
  margin-top: 0;
}

.DescriptionItem__h3 {
  margin: 0 0 0;
}

.DescriptionItem__p {
  margin: 6px 0 0;
}

.DescriptionItem__price {
  margin: 6px 0 0 9px;
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