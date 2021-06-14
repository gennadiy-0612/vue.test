<template>
  <div>
    <div class="mainPage w-full h-full">
      <div class="mainBack bg-no-repeat bg-cover bg-center">
        <MenuTop/>
      </div>
      <div class="CenteringOneItem xl:h-full flex flex-col justify-center items-center xl:items-start">
        <ul class="AddressesList MobHide">
          <li class="AddressesList__li AddressesList__main leading-8 relative">Красный проспект, 25/1</li>
          <li class="AddressesList__li leading-8">Пл. К. Маркса, 7, ТРЦ «Сан-Сити»</li>
          <li class="AddressesList__li leading-8">Ул. Военная, 5, ТРЦ «Аура»</li>
          <li class="AddressesList__li leading-8">Ул. Красный проспект, 101, ТРЦ ...</li>
          <li class="AddressesList__li leading-8">Ул. Кутателадзе, 4/4</li>
          <li class="AddressesList__li leading-8">Ул. Гоголя, 13, ТРЦ “Галерея”</li>
        </ul>
        <p class="MobHide CarryMenu Ag-text14-to-1070 Ag700 w-full text-center">Меню доставки</p>
        <div class="flex justify-between flex-wrap mainPage__icons">
          <div class="iconsThemes flex flex-col items-center justify-between self-center">
            <div class="descImg flex justify-center items-center">
              <a href="/"><img class="imgIcon" src="../../assets/img/mainpage/pizza.svg" alt="Пицца"/></a>
            </div>
            <DescItem msg="Пицца"/>
          </div>
          <div class="iconsThemes flex flex-col items-center justify-between self-center">
            <div class="descImg flex justify-center items-center">
              <a href="/"><img class="imgIcon" src="../../assets/img/mainpage/paste.svg" alt="Пасты"/></a>
            </div>
            <DescItem msg="Пасты"/>
          </div>
          <div class="iconsThemes flex flex-col items-center justify-between self-center">
            <div class="descImg flex justify-center items-center">
              <a href="/"><img class="imgIcon" src="../../assets/img/mainpage/soups.svg" alt="Супы"/></a>
            </div>
            <DescItem msg="Супы"/>
          </div>
          <div class="iconsThemes flex flex-col items-center justify-between self-center">
            <div class="descImg flex justify-center items-center">
              <a href="/"><img class="imgIcon" src="../../assets/img/mainpage/hots.svg" alt="Горячие блюда"/></a>
            </div>
            <DescItem msg="Горячие блюда"/>
          </div>
          <div class="iconsThemes flex flex-col items-center justify-between self-center">
            <div class="descImg flex justify-center items-center">
              <a href="/"><img class="imgIcon" src="../../assets/img/mainpage/salats.svg" alt="Салаты и закуски"/></a>
            </div>
            <DescItem msg="Салаты и закуски"/>
          </div>
          <div class="iconsThemes flex flex-col items-center justify-between self-center">
            <div class="descImg flex justify-center items-center">
              <a href="/"><img class="imgIcon" src="../../assets/img/mainpage/drinks.svg" alt="Десерты и напитки"/></a>
            </div>
            <DescItem msg="Десерты и напитки"/>
          </div>
        </div>
      </div>
      <MenuBottom/>
    </div>
    <div class="LogFrame LogInDesc Insert-full w-full h-full flex flex-wrap justify-center">
      <div class="LogFrameGet__item LogFrameGet__itemDesc self-center">
        <a href="/">
          <X/>
        </a>
        <HeaderTwo msg="Вход на сайт"/>
        <InputPhone/>
        <InputCode/>
        <p class="Ag-text14-to-1070 fw700 newCode">Получить новый код</p>
      </div>
    </div>
  </div>
</template>
<style>
.LogInDesc {
  position: absolute;
}

.LogInDesc {
  background-color: #00000061;
  position: fixed;
  top: 0;
}

.LogFrameGet__itemDesc {
  background-color: #FFFFFF;
  padding: 2rem;
}
</style>
<script>

import MenuTop from '../menutop/Index'
import DescItem from '../descimg/DescItem'
import MenuBottom from '../menubottom/Index'
import X from "../popupbluda/X"
import HeaderTwo from "../partpage/HeaderTwo";
import InputPhone from "../partpage/InputPhone";
import InputCode from "../partpage/InputCode";


export default {
  name: 'App',
  components: {
    MenuBottom,
    DescItem,
    MenuTop,
    X,
    HeaderTwo,
    InputPhone,
    InputCode
  }
}
</script>