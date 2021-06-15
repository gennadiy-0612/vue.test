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

    <div class="LogFrameGet LogInDesc back-05 h-full w-full flex flex-wrap justify-center">
      <div class="LogFrameGet__item LogFrameGet__itemDesc self-center"><a href="/"></a>
        <div class="h2Papa flex justify-center items-center"><h2 class="h2Papa__h2 Ag-h2-to-1070">
          Вход на сайт</h2>
        </div>
        <div class="ChangePhone xl:flex xl:w-full xl:justify-between">
          <div class="order-2">
            <div class="InputPhone">
              <div class="phoneOpt flex flex-wrap justify-between"><label for="phone" class="Ag-text1421-to-1070 fw400">Номер
                телефона</label>
                <p class="switchVision Ag-text14-to-1070 fw700">Изменить</p></div>
              <input placeholder="+7" type="tel" id="phone" name="phone" class="searchButton bg-E4E4E4 w-full"></div>
          </div>
          <p class="order-1">Изменить</p></div>
        <div class="xl:flex xl:w-full xl:justify-between">
          <div class="InputPhone"><label for="tentacles" class="Ag-text1421-to-1070">Код из
            СМС</label><input type="number" id="tentacles" name="tentacles" min="10" max="100"
                              class="searchButton codeSMS bg-E4E4E4 border-solid border-0 w-full block"></div>
          <p class="Ag-text14-to-1070 fw700 newCode">Получить новый код</p></div>
        <div class="MobHide Ag-text14-to-1070 closeLog">Закрыть</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.LogInDesc {
  position: fixed;
  top: 0;
}

.LogFrameGet__itemDesc {
  background-color: #FFFFFF;
  padding: 2.5rem 4rem;
  min-width: 700px;
  min-height: 400px;
}

.ChangePhone {

}

.closeLog {
  width: 30px;
}
</style>
<script>

import MenuTop from '../menutop/Index'
import DescItem from '../descimg/DescItem'
import MenuBottom from '../menubottom/Index'


export default {
  name: 'App',
  components: {
    MenuBottom,
    DescItem,
    MenuTop,
  }
}
</script>