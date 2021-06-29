<template>
  <div class="ComboSetsBottom xl:flex xl:flex-wrap">
    <ComboItem class="DescHide" heads="Папперони" descriptionitem="Колбаса Пепперони, свежие томаты, сыр..." price="610" />
    <ComboItem class="MobHide justify-between" heads="Филадельфия" descriptionitem="Нежная пицца со сливочным сыром и ломтиками слабосоленого лосося, с сыром Моцарелла, сырным соусом и салатом Руккола." price="610" />
    <ComboItem class="DescHide" heads="Папперони" descriptionitem="Колбаса Пепперони, свежие томаты, сыр..." price="610" />
    <ComboItem class="MobHide justify-between" heads="Пепперони" descriptionitem="Пикантная колбаса Пепперони, свежие томаты, маслины, каперсы, сыр Моцарелла и соус Помадоро." price="610" />
    <ComboItem class="DescHide" heads="Папперони" descriptionitem="Колбаса Пепперони, свежие томаты, сыр..." price="610" />
    <ComboItem class="MobHide justify-between" heads="Итальянский кебаб из мраморной говядины" descriptionitem="С запеченым картофелем и костровыми вешенками.." price="610" />
    <ComboItem class="DescHide" heads="Папперони" descriptionitem="Колбаса Пепперони, свежие томаты, сыр..." price="610" />
    <ComboItem class="MobHide justify-between" heads="Стейк из курицы" descriptionitem="Со спагетти в сливочном соусе с зеленым маслом." price="610" />
    <ComboItem class="DescHide" heads="Папперони" descriptionitem="Колбаса Пепперони, свежие томаты, сыр..." price="610" />
    <ComboItem class="MobHide justify-between" heads="Филадельфия" descriptionitem="Нежная пицца со сливочным сыром и ломтиками слабосоленого лосося, с сыром Моцарелла, сырным соусом и салатом Руккола." price="610" />
    <ComboItem class="MobHide justify-between" heads="Пепперони" descriptionitem="Пикантная колбаса Пепперони, свежие томаты, маслины, каперсы, сыр Моцарелла и соус Помадоро." price="610" />
    <ComboItem class="MobHide justify-between" heads="Итальянский кебаб из мраморной говядины" descriptionitem="С запеченым картофелем и костровыми вешенками.." price="610" />
    <ComboItem class="MobHide justify-between" heads="Стейк из курицы" descriptionitem="Со спагетти в сливочном соусе с зеленым маслом." price="610" />
    <LoadBar/>
    <OrderMore/>
    <MenuBottom/>
  </div>
</template>
<script>
import ComboItem from './ComboItem'
import MenuBottom from '../menubottom/Index'
import LoadBar from '../partpage/LoadBar'
import OrderMore from '../combonabori/OrderMore'

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