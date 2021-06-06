<template>
  <div class="popUpCombo">
    <a href="/"><X/></a>
    <Photo msg="Photo"/>
    <Descriptor/>
    <div class="p-b5px">
      <DescriptionItem/>
      <DescriptionItem/>
      <DescriptionItem/>
      <DescriptionItem/>
    </div>
    <LoadBar/>
    <OrderMore/>
    <AddCard/>
    <MenuBottom/>
  </div>
</template>
<style>
.popUpCombo {
  padding: 6px 16px 100px;
}
</style>
<script>
import X from '../popupbluda/X.vue'
import Photo from '../popupbluda/Photo.vue'
import Descriptor from './Descriptor.vue'
import DescriptionItem from './DescriptionItem.vue'
import LoadBar from '../popupbluda/LoadBar.vue'
import OrderMore from '../popupbluda/OrderMore.vue'
import AddCard from './AddCard.vue'
import MenuBottom from '../menubottom/Index.vue'

export default {
  name: 'App',
  components: {
    X,
    Photo,
    Descriptor,
    DescriptionItem,
    OrderMore,
    LoadBar,
    AddCard,
    MenuBottom
  }
}
</script>