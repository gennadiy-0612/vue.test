<template>
  <div class="mainPage">
    <MenuTop/>
    <div class="flex justify-between flex-wrap">
      <div class="iconsThemes flex flex-col items-center justify-center self-center">
        <ImgItem v-bind:alt="'Пицца'" v-bind:datasrc="'../../assets/img/mainpage/pizza.svg'"/>
        <descitem msg="Пицца"/>
      </div>
      <div class="iconsThemes flex flex-col items-center justify-center self-center">
        <ImgItem v-bind:alt="'Пасты'" v-bind:datasrc="'../../assets/img/mainpage/paste.svg'"/>
        <descitem msg="Пасты"/>
      </div>
      <div class="iconsThemes flex flex-col items-center justify-center self-center">
        <ImgItem v-bind:alt="'Супы'" v-bind:datasrc="'../../assets/img/mainpage/soups.svg'"/>
        <descitem msg="Супы"/>
      </div>
      <div class="iconsThemes flex flex-col items-center justify-center self-center">
        <ImgItem v-bind:alt="'Горячие блюда'" v-bind:datasrc="'../../assets/img/mainpage/hots.svg'"/>
        <descitem msg="Горячие блюда"/>
      </div>
      <div class="iconsThemes flex flex-col items-center justify-center self-center">
        <ImgItem v-bind:alt="'Салаты и закуски'" v-bind:datasrc="'../../assets/img/mainpage/salats.svg'"/>
        <descitem msg="Салаты и закуски"/>
      </div>
      <div class="iconsThemes flex flex-col items-center justify-center self-center">
        <ImgItem v-bind:alt="'Десерты и напитки'" v-bind:datasrc="'../../assets/img/mainpage/drinks.svgg'"/>
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
import descitem from '../descimg/DescItem.vue'
import ImgItem from '../descimg/ImageItem.vue'
import MenuBottom from '../menubottom/Index.vue'

export default {
  name: 'App',
  components: {
    MenuBottom,
    descitem,
    ImgItem,
    MenuTop
  }
}
</script>