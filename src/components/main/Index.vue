<template>
  <div class="mainPage">
    <div class="mainBack bg-cover">
      <MenuTop/>
    </div>
    <div class="flex justify-between flex-wrap mainPage__icons">
      <div class="iconsThemes flex flex-col items-center justify-between self-center">
        <div class="descImg flex justify-center items-center"><img class="imgIcon"
                                                                   src="../../assets/img/mainpage/pizza.svg"
                                                                   alt="Пицца"/></div>
        <descitem msg="Пицца"/>
      </div>
      <div class="iconsThemes flex flex-col items-center justify-between self-center">
        <div class="descImg flex justify-center items-center"><img class="imgIcon"
                                                                   src="../../assets/img/mainpage/paste.svg"
                                                                   alt="Пасты"/></div>
        <descitem msg="Пасты"/>
      </div>
      <div class="iconsThemes flex flex-col items-center justify-between self-center">
        <div class="descImg flex justify-center items-center"><img class="imgIcon"
                                                                   src="../../assets/img/mainpage/soups.svg"
                                                                   alt="Супы"/></div>
        <descitem msg="Супы"/>
      </div>
      <div class="iconsThemes flex flex-col items-center justify-between self-center">
        <div class="descImg flex justify-center items-center"><img class="imgIcon"
                                                                   src="../../assets/img/mainpage/hots.svg"
                                                                   alt="Горячие блюда"/></div>
        <descitem msg="Горячие блюда"/>
      </div>
      <div class="iconsThemes flex flex-col items-center justify-between self-center">
        <div class="descImg flex justify-center items-center"><img class="imgIcon"
                                                                   src="../../assets/img/mainpage/salats.svg"
                                                                   alt="Салаты и закуски"/>
        </div>
        <descitem msg="Салаты и закуски"/>
      </div>
      <div class="iconsThemes flex flex-col items-center justify-between self-center">
        <div class="descImg flex justify-center items-center"><img class="imgIcon"
                                                                   src="../../assets/img/mainpage/drinks.svg"
                                                                   alt="Десерты и напитки"/>
        </div>
        <descitem msg="Десерты и напитки"/>
      </div>
    </div>
    <MenuBottom/>
  </div>
</template>

<style>
.mainBack {
  height: 30%;
  background: url("../../assets/img/mainpage/main.png") center center no-repeat;
}

.mainPage__icons {
  padding: 20px 6px 100px;
}

.mainPage .Header {
  padding: 33px 16px 175px;
}

.mainPage .address {
  color: #FFFFFF;
}

.mainPage .Header__img {
  background: url("../../assets/img/burgerwhite.svg") center center no-repeat;
}

.iconsThemes {
  flex: 1 1 33%;
  height: 112px;
}

.descImg {
  height: 52%;
}
</style>

<script>

import MenuTop from '../menutop/Index'
import descitem from '../descimg/DescItem'
import MenuBottom from '../menubottom/Index'

export default {
  name: 'App',
  components: {
    MenuBottom,
    descitem,
    MenuTop
  }
}
</script>