<template>
  <div class="mainPage">
    <MenuTop/>
    <MainPhoto/>
    <div class="flex justify-between flex-wrap">
      <div class="iconsThemes flex flex-col items-center justify-center self-center">
        <img class="imgIcon" src="../../assets/img/mainpage/pizza.svg" alt="Пицца"/>
        <descitem msg="Пицца"/>
      </div>
      <div class="iconsThemes flex flex-col items-center justify-center self-center">
        <img class="imgIcon" src="../../assets/img/mainpage/paste.svg" alt="Пасты"/>
        <descitem msg="Пасты"/>
      </div>
      <div class="iconsThemes flex flex-col items-center justify-center self-center">
        <img class="imgIcon" src="../../assets/img/mainpage/soups.svg" alt="Супы"/>
        <descitem msg="Супы"/>
      </div>
      <div class="iconsThemes flex flex-col items-center justify-center self-center">
        <img class="imgIcon" src="../../assets/img/mainpage/hots.svg" alt="Горячие блюда"/>
        <descitem msg="Горячие блюда"/>
      </div>
      <div class="iconsThemes flex flex-col items-center justify-center self-center">
        <img class="imgIcon" src="../../assets/img/mainpage/salats.svg" alt="Салаты и закуски"/>
        <descitem msg="Салаты и закуски"/>
      </div>
      <div class="iconsThemes flex flex-col items-center justify-center self-center">
        <img class="imgIcon" src="../../assets/img/mainpage/drinks.svg" alt="Десерты и напитки"/>
        <descitem msg="Десерты и напитки"/>
      </div>
    </div>
    <MenuBottom/>
  </div>
</template>

<style>
.iconsThemes {
  flex: 1 1 50%;
  height: 100px;
}
.imgIcon{
  height: 40%;
}
</style>

<script>

import MenuTop from '../menutop/Index.vue'
import MainPhoto from './MainPhoto.vue'
import descitem from '../descimg/DescItem.vue'
import MenuBottom from '../menubottom/Index.vue'

export default {
  name: 'App',
  components: {
    MenuBottom,
    MainPhoto,
    descitem,
    MenuTop
  }
}
</script>