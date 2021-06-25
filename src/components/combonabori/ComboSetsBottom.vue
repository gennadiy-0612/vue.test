<template>
  <div class="ComboSetsBottom xl:flex xl:flex-wrap">
    <ComboItem heads="Комбо-набор" descriptionitem="Колбаса Пепперони, свежие томаты, сыр..." price="610" />
    <ComboItem heads="Папперони" descriptionitem="Колбаса Пепперони, свежие томаты, сыр..." price="610" />
    <ComboItem heads="Папперони" descriptionitem="Колбаса Пепперони, свежие томаты, сыр..." price="610" />
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
import ComboItem from './ComboItem'
import MenuBottom from '../menubottom/Index'
import LoadBar from '../popupbluda/LoadBar'
import OrderMore from './OrderMore'

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