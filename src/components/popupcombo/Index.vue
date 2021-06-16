<template>
  <div class="popUpCombo">
    <router-link to="/"><X/></router-link>
    <Photo msg="Photo"/>
    <Descriptor/>
    <div class="DescSet">
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
.popUpCombo .Photo__img{
  height: 167px;
  margin-top: 7px;
}
.DescSet{
  margin-bottom: 27px;
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