<template>
  <div class="comboNabori">
    <div class="Header flex justify-between">
      <BackButton/>
      <BurgMenu/>
    </div>
    <ComboSetItem/>
    <ComboItem/>
    <ComboItem/>
    <ComboItem/>
    <ComboItem/>
    <LoadBar/>
    <OrderMore/>
    <MenuBottom/>
  </div>
</template>
<script>
import BurgMenu from '../burgmenu/Index.vue'
import ComboSetItem from './ComboSetItem.vue'
import ComboItem from './ComboItem.vue'
import MenuBottom from '../menubottom/Index.vue'
import BackButton from '../backtopbutton/Index.vue'
import LoadBar from '../popupbluda/LoadBar.vue'
import OrderMore from '../popupbluda/OrderMore.vue'

export default {
  name: 'App',
  components: {
    BurgMenu,
    ComboSetItem,
    ComboItem,
    MenuBottom,
    BackButton,
    LoadBar,
    OrderMore
  }
}
</script>