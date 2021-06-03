<template>
  <div>
    <X/>
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
<script>
import X from './X.vue'
import Photo from './Photo.vue'
import DescriptionPrice from './DescriptPrice.vue'
import AlsoBuy from './AlsoBuy.vue'
import AlsoItem from './AlsoItem.vue'
import LoadBar from './LoadBar.vue'
import OrderMore from './OrderMore.vue'
import AddToCard from '../addtocard/Index.vue'

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

<style>
#app {
  margin: 16px;
}
</style>