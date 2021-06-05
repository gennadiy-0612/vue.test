<template>
  <div class="ComboSetsBottom">
    <ComboItem heads="Папперони" descriptionitem="Колбаса Пепперони, свежие томаты, сыр..." price="610" />
    <ComboItem heads="Папперони" descriptionitem="Колбаса Пепперони, свежие томаты, сыр..." price="610" />
    <ComboItem heads="Папперони" descriptionitem="Колбаса Пепперони, свежие томаты, сыр..." price="610" />
    <ComboItem heads="Папперони" descriptionitem="Колбаса Пепперони, свежие томаты, сыр..." price="610" />
    <ComboItem heads="Папперони" descriptionitem="Колбаса Пепперони, свежие томаты, сыр..." price="610" />
    <LoadBar/>
    <OrderMore/>
    <MenuBottom/>
  </div>
</template>
<script>
import ComboItem from './ComboItem.vue'
import MenuBottom from '../menubottom/Index.vue'
import LoadBar from '../popupbluda/LoadBar.vue'
import OrderMore from '../combonabori/OrderMore.vue'

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