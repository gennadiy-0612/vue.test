<template>
  <div class="ComboSetsBottom">
    <ComboSetItem heads="Комбо-набор" descriptionitem="Комбо-набор" price="179"/>
    <ComboItem heads="Папкрони" descitem="Колбаса Пепперони,свежие томаты, сыр Моцарелла и соу..." price="179" />
    <ComboItem heads="Папкрони" descitem="Колбаса Пепперони,свежие томаты, сыр Моцарелла и соу..." price="179" />
    <ComboItem heads="Папкрони" descitem="Колбаса Пепперони,свежие томаты, сыр Моцарелла и соу..." price="179" />
    <ComboItem heads="Папкрони" descitem="Колбаса Пепперони,свежие томаты, сыр Моцарелла и соу..." price="179" />
    <LoadBar/>
    <OrderMore/>
    <MenuBottom/>
  </div>
</template>
<script>
import ComboSetItem from './ComboSetItem.vue'
import ComboItem from './ComboItem.vue'
import MenuBottom from '../menubottom/Index.vue'
import LoadBar from '../popupbluda/LoadBar.vue'
import OrderMore from '../popupbluda/OrderMore.vue'

export default {
  name: 'App',
  components: {
    ComboSetItem,
    ComboItem,
    MenuBottom,
    LoadBar,
    OrderMore
  }
}
</script>