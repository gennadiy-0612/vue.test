<template>
  <div class="popUpBluda">
    <a href="/"><X/></a>
    <Photo msg="Photo"/>
    <DescriptionPrice msg="Пепперони"/>
    <AlsoBuy/>

    <div class="flex-auto justify-between flex flex-wrap">
      <AlsoItem/>
      <AlsoItem/>
      <AlsoItem/>
      <AlsoItem/>
      <AlsoItem/>
      <AlsoItem/>
    </div>

    <LoadBar/>
    <OrderMore/>
    <AddToCard/>
  </div>
</template>
<style>
.popUpBluda{
  padding: 6px 16px 16px;
}
</style>
<script>
import X from './X.vue'
import Photo from './Photo.vue'
import DescriptionPrice from './DescriptPrice.vue'
import AlsoBuy from './AlsoBuy.vue'
import AlsoItem from './AlsoItem.vue'
import LoadBar from './LoadBar.vue'
import OrderMore from './OrderMore.vue'
import AddToCard from '../addtocardgreen/Index.vue'

export default {
  name: 'App',
  components: {
    X,
    Photo,
    DescriptionPrice,
    AlsoBuy,
    AlsoItem,
    LoadBar,
    OrderMore,
    AddToCard
  }
}
</script>