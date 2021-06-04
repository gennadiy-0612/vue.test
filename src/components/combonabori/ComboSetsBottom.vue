<template>
  <div class="ComboSetsBottom">
    <ComboItem heads="Комбо-набор" descriptionitem="Колбаса Пепперони, свежие томаты, сыр..." price="179" />
    <ComboItem heads="Папперони" descriptionitem="Колбаса Пепперони,свежие томаты, сыр Моцарелла и соу..." price="179" />
    <ComboItem heads="Папперони" descriptionitem="Колбаса Пепперони,свежие томаты, сыр Моцарелла и соу..." price="179" />
    <ComboItem heads="Папперони" descriptionitem="Колбаса Пепперони,свежие томаты, сыр Моцарелла и соу..." price="179" />
    <ComboItem heads="Папперони" descriptionitem="Колбаса Пепперони,свежие томаты, сыр Моцарелла и соу..." price="179" />
    <LoadBar/>
    <OrderMore/>
    <MenuBottom/>
  </div>
</template>
<script>
import ComboItem from './ComboItem.vue'
import MenuBottom from '../menubottom/Index.vue'
import LoadBar from '../popupbluda/LoadBar.vue'
import OrderMore from '../popupbluda/OrderMore.vue'

export default {
  name: 'App',
  components: {
    ComboItem,
    MenuBottom,
    LoadBar,
    OrderMore
  }
}
</script>