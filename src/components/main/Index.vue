<template>
  <div class="mainPage h-full">
    <div class="mainBack bg-cover">
      <MenuTop/>
    </div>
    <div class="CenteringOneItem">
      <ul class="AddressesList MobHide">
        <li>Красный проспект, 25/1</li>
        <li>Пл. К. Маркса, 7, ТРЦ «Сан-Сити»</li>
        <li>Ул. Военная, 5, ТРЦ «Аура»</li>
        <li>Ул. Красный проспект, 101, ТРЦ ...</li>
        <li>Ул. Кутателадзе, 4/4</li>
        <li>Ул. Гоголя, 13, ТРЦ “Галерея”</li>
        <li>Меню доставки</li>
      </ul>
      <div class="flex justify-between flex-wrap mainPage__icons">
        <div class="iconsThemes flex flex-col items-center justify-between self-center">
          <div class="descImg flex justify-center items-center">
            <a href="/"><img class="imgIcon" src="../../assets/img/mainpage/pizza.svg" alt="Пицца"/></a>
          </div>
          <descitem msg="Пицца"/>
        </div>
        <div class="iconsThemes flex flex-col items-center justify-between self-center">
          <div class="descImg flex justify-center items-center">
            <a href="/"><img class="imgIcon" src="../../assets/img/mainpage/paste.svg" alt="Пасты"/></a>
          </div>
          <descitem msg="Пасты"/>
        </div>
        <div class="iconsThemes flex flex-col items-center justify-between self-center">
          <div class="descImg flex justify-center items-center">
            <a href="/"><img class="imgIcon" src="../../assets/img/mainpage/soups.svg" alt="Супы"/></a>
          </div>
          <descitem msg="Супы"/>
        </div>
        <div class="iconsThemes flex flex-col items-center justify-between self-center">
          <div class="descImg flex justify-center items-center">
            <a href="/"><img class="imgIcon" src="../../assets/img/mainpage/hots.svg" alt="Горячие блюда"/></a>
          </div>
          <descitem msg="Горячие блюда"/>
        </div>
        <div class="iconsThemes flex flex-col items-center justify-between self-center">
          <div class="descImg flex justify-center items-center">
            <a href="/"><img class="imgIcon" src="../../assets/img/mainpage/salats.svg" alt="Салаты и закуски"/></a>
          </div>
          <descitem msg="Салаты и закуски"/>
        </div>
        <div class="iconsThemes flex flex-col items-center justify-between self-center">
          <div class="descImg flex justify-center items-center">
            <a href="/"><img class="imgIcon" src="../../assets/img/mainpage/drinks.svg" alt="Десерты и напитки"/></a>
          </div>
          <descitem msg="Десерты и напитки"/>
        </div>
      </div>
    </div>
    <MenuBottom/>
  </div>
</template>

<style>
.mainPage {
  min-height: 520px;
}

.mainBack {
  height: 40.1%;
  background: url("../../assets/img/mainpage/main.png") center center no-repeat;
}

.CenteringOneItem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 59.9%;
}

.CenteringOneItem > :first-child {
  align-self: center;
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