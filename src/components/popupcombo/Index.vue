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
import X from '../popupbluda/X'
import Photo from '../popupbluda/Photo'
import Descriptor from './Descriptor'
import DescriptionItem from './DescriptionItem'
import LoadBar from '../popupbluda/LoadBar'
import OrderMore from '../popupbluda/OrderMore'
import AddCard from './AddCard'
import MenuBottom from '../menubottom/Index'

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