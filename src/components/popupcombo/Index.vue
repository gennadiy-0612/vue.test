<template>
  <div class="popUpComboDesk xl:fixed xl:flex xl:h-full xl:w-full xl:justify-between xl:items-center">
    <div class="popUpCombo popUpComboDesk__inner xl:bg-white xl:flex xl:mx-auto xl:p-0">
      <router-link class="xl:hidden" to="/">
        <X/>
      </router-link>
      <Photo class="xl:order-2 xl:h-auto" msg="Photo"/>
      <div class="popUpComboDesk__info xl:order-1">
        <Descriptor/>
        <div class="DescSet">
          <DescriptionItem/>
          <DescriptionItem/>
          <DescriptionItem/>
          <DescriptionItem/>
        </div>
        <LoadBar class="xl:invisible"/>
        <OrderMore class="xl:invisible"/>
        <AddCard/>
        <router-link to="/" class="MobHide ClosePopUp absolute bottom-0">Закрыть</router-link>
        <MenuBottom/>
      </div>
    </div>
  </div>
</template>
<style>
.popUpCombo {
  padding: 6px 16px 100px;
}

.popUpCombo .Photo__img {
  height: 167px;
  margin-top: 7px;
}

.DescSet {
  margin-bottom: 27px;
}
</style>
<script>
import X from '../popupbluda/X'
import Photo from '../popupbluda/Photo'
import Descriptor from './Descriptor'
import DescriptionItem from './DescriptionItem'
import LoadBar from '../partpage/LoadBar'
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