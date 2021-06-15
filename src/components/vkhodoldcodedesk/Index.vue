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
              <a href="/"><img class="imgIcon" src="../../assets/img/mainpage/drinks.svg"
                               alt="Десерты и напитки"/></a>
            </div>
            <DescItem msg="Десерты и напитки"/>
          </div>
        </div>
      </div>
    </div>
    <div class="LogFrame LogInDesc Insert-full w-full h-full flex flex-wrap justify-center">
      <div class="LogFrameGet LogFrameGet__itemDesc LogOld back-05 h-full w-full flex flex-wrap justify-center">
        <div class="LogFrameGet__item self-center">
          <a href="/">
            <div class="DescHide">
              <X/>
            </div>
          </a>
          <HederTwo msg="Вход на сайт"/>
          <div class="oldPhone">
            <InputPhone/>
          </div>
          <BlackButton msg="Выслать код"/>
          <div class="MobHide Ag-text14-to-1070 closeLog">Закрыть</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.LogOld {
  padding: 2rem;
  position: fixed;
  top: 0;
}

.LogFrameGet__item {
  max-width: 100%;
  max-height: 54%;
  min-width: 256px;
  padding: 2rem;
  background-color: #FFFFFF;
}
</style>
<script>

import X from '../popupbluda/X'
import HederTwo from '../partpage/HeaderTwo'
import InputPhone from '../partpage/InputPhone'
import BlackButton from '../addtocardblack/Index'


export default {
  name: 'App',
  components: {
    X,
    HederTwo,
    InputPhone,
    BlackButton
  }
}
</script>