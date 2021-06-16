<template>
  <div>
    <div class="mainPage w-full h-full">
      <div class="mainBack bg-no-repeat bg-cover bg-center">
        <MenuTop/>
      </div>
      <div class="CenteringOneItem h-full flex flex-col justify-center items-center items-start">
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
              <router-link to="/"><img class="imgIcon" src="../../assets/img/mainpage/pizza.svg" alt="Пицца"/></router-link>
            </div>
            <DescItem msg="Пицца"/>
          </div>
          <div class="iconsThemes flex flex-col items-center justify-between self-center">
            <div class="descImg flex justify-center items-center">
              <router-link to="/"><img class="imgIcon" src="../../assets/img/mainpage/paste.svg" alt="Пасты"/></router-link>
            </div>
            <DescItem msg="Пасты"/>
          </div>
          <div class="iconsThemes flex flex-col items-center justify-between self-center">
            <div class="descImg flex justify-center items-center">
              <router-link to="/"><img class="imgIcon" src="../../assets/img/mainpage/soups.svg" alt="Супы"/></router-link>
            </div>
            <DescItem msg="Супы"/>
          </div>
          <div class="iconsThemes flex flex-col items-center justify-between self-center">
            <div class="descImg flex justify-center items-center">
              <router-link to="/"><img class="imgIcon" src="../../assets/img/mainpage/hots.svg" alt="Горячие блюда"/></router-link>
            </div>
            <DescItem msg="Горячие блюда"/>
          </div>
          <div class="iconsThemes flex flex-col items-center justify-between self-center">
            <div class="descImg flex justify-center items-center">
              <router-link to="/"><img class="imgIcon" src="../../assets/img/mainpage/salats.svg" alt="Салаты и закуски"/></router-link>
            </div>
            <DescItem msg="Салаты и закуски"/>
          </div>
          <div class="iconsThemes flex flex-col items-center justify-between self-center">
            <div class="descImg flex justify-center items-center">
              <router-link to="/"><img class="imgIcon" src="../../assets/img/mainpage/drinks.svg" alt="Десерты и напитки"/></router-link>
            </div>
            <DescItem msg="Десерты и напитки"/>
          </div>
        </div>
      </div>
      <MenuBottom/>
    </div>

    <div class="LogFrameGet fixed top-0 LogInDesc back-05 h-full w-full flex flex-wrap justify-center">
      <div class="LogFrameGet__item LogFrameGet__itemDesc self-center">
        <div class="h2Papa text-left flex justify-center items-center">
          <h2 class="h2Papa__h2 text-left Ag-h2-to-1070">
            Вход на сайт</h2>
        </div>
        <div class="InputPhone">
          <div class="phoneOpt flex flex-wrap justify-between">
            <label for="phone" class="Ag-text1421-to-1070 fw400 text-2xl PhoneNumber">Номер телефона</label>
            <div class="ChangePhone flex justify-between">
              <div>
                <input placeholder="+7" type="tel" id="phone" name="phone" class="searchButton bg-E4E4E4 w-full">
                <p class="Ag-text14-to-1070 fw400 ChangePhone">Изменить</p>
              </div>
            </div>
          </div>
        </div>
        <div class="InfoSMS flex w-full justify-between">
          <label for="tentacles" class="Ag-text1421-to-1070 LabelSMS">Код из СМС</label>
          <div class="GetPhone">
            <input type="number" id="tentacles" name="tentacles" min="10" max="100"
                   class="searchButton codeSMS bg-E4E4E4 border-solid border-0 w-full block">
            <p class="Ag-text14-to-1070 fw400 newCode">Получить новый код</p>
          </div>
        </div>
        <a href="/" class="Ag-text14-to-1070 fw400 closeLog">Закрыть</a>
      </div>
    </div>
  </div>
</template>
<style scoped>

.h2Papa__h2 {
  margin-bottom: 39px;
}

.LogFrameGet__itemDesc {
  background-color: #FFFFFF;
  padding: 2.8rem 4rem 1.5rem;
  min-width: 700px;
  min-height: 400px;
}

.PhoneNumber {
  font-size: 1.5rem;
  margin: 19px 0 0;
  flex: 1 1 10%;
}

.searchButton {
  height: 40px;
  text-indent: 1.8rem;
}

.ChangePhone, .LabelSMS {
  font-size: 1.5rem;
  font-weight: 400;
}

.ChangePhone {
  margin: 0.6rem 0 0 1.7rem;
  flex: 1 1 27%;
  color: #8D8D8D;
}

.LabelSMS {
  flex: 1 1 10%;
  margin: 10px 0 0;
}

.InputPhone {
  flex: 1 1 15%;
}

.InfoSMS {
  margin: 48px 0 0;
}

.GetPhone {
  flex: 1 1 23%;
}

.newCode {
  font-size: 1.5rem;
  margin: 11px 0 0 30px;
}

.closeLog {
  display: block;
  margin-top: 36px;
  font-size: 1.5rem;
  font-weight: 400;
  color: #8D8D8D;
}
</style>
<script>
import MenuTop from '../menutop/Index'
import DescItem from '../descimg/DescItem'
import MenuBottom from '../menubottom/Index'


export default {
  name: 'App',
  components: {
    DescItem,
    MenuTop,
    MenuBottom
  }
}
</script>