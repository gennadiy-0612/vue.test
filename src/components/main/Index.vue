<template>
  <div class="mainPage xl:bg-cover xl:bg-no-repeat xl:bg-center xl:bg-cover xl:m-auto w-full h-full">
    <div class="mainBack bg-no-repeat bg-cover bg-center xl:bg-none xl:h-auto">
      <MenuTop/>
    </div>
    <div
        class="xl:items-end xl:flex-col CenteringOneItem xl:items-center xl:h-full flex flex-col justify-center items-center xl:items-start">
      <AddressesList xl:m-0 xl:relative xl:w-full class="MobHide mainPage__addresses xl:top-0"/>
      <p class="MobHide CarryMenu xl:flex xl:flex-col xl:align-baseline Ag-text14-to-1070 font-bold w-full text-center">
        Меню доставки</p>
      <div class="flex justify-between flex-wrap mainPage__icons">
        <div class="iconsThemes flex flex-col items-center justify-between self-center">
          <div class="descImg flex justify-center items-center">
            <router-link to="/">
              <img class="imgIcon" src="../../assets/img/mainpage/pizza.svg" alt="Пицца"/>
            </router-link>
          </div>
          <DescItem msg="Пицца"/>
        </div>
        <div class="iconsThemes flex flex-col items-center justify-between self-center">
          <div class="descImg flex justify-center items-center">
            <router-link to="/">
              <img class="imgIcon" src="../../assets/img/mainpage/paste.svg" alt="Пасты"/>
            </router-link>
          </div>
          <DescItem msg="Пасты"/>
        </div>
        <div class="iconsThemes flex flex-col items-center justify-between self-center">
          <div class="descImg flex justify-center items-center">
            <router-link to="/">
              <img class="imgIcon" src="../../assets/img/mainpage/soups.svg" alt="Супы"/>
            </router-link>
          </div>
          <DescItem msg="Супы"/>
        </div>
        <div class="iconsThemes flex flex-col items-center justify-between self-center">
          <div class="descImg flex justify-center items-center">
            <router-link to="/">
              <img class="imgIcon" src="../../assets/img/mainpage/hots.svg" alt="Горячие блюда"/>
            </router-link>
          </div>
          <DescItem msg="Горячие блюда"/>
        </div>
        <div class="iconsThemes flex flex-col items-center justify-between self-center">
          <div class="descImg flex justify-center items-center">
            <router-link to="/">
              <img class="imgIcon" src="../../assets/img/mainpage/salats.svg" alt="Салаты и закуски"/>
            </router-link>
          </div>
          <DescItem msg="Салаты и закуски"/>
        </div>
        <div class="iconsThemes flex flex-col items-center justify-between self-center">
          <div class="descImg flex justify-center items-center">
            <router-link to="/">
              <img class="imgIcon" src="../../assets/img/mainpage/drinks.svg"
                   alt="Десерты и напитки"/></router-link>
          </div>
          <DescItem msg="Десерты и напитки"/>
        </div>
      </div>
    </div>
    <div class="MainEat MobHide">
      <div class="MainEat__item MainEat__item-1 xl:ml-auto">
        <h4 class="MainEat__head xl:font-semibold">КОМБО-НАБОРЫ</h4>
        <a class="MainEat__link xl:font-bold block" href="#" title="Посмотреть">Посмотреть</a>
      </div>
      <div class="MainEat__item MainEat__item-2 xl:mb-auto">
        <h4 class="MainEat__head xl:font-semibold MainEat__head-2">
          <router-link to="/events">АКЦИИ</router-link>
        </h4>
        <a class="MainEat__link xl:font-bold MainEat__link xl:font-bold-2 block" href="#"
           title="Посмотреть">Посмотреть</a>
      </div>
    </div>
    <FooterDesk/>
    <MenuBottom/>
  </div>
</template>

<style>
.mainPage {
  min-height: 520px;
}

.mainBack .LogIcon {
  fill: #FFFFFF;
}

.mainPage .Header {
  padding: 33px 16px 175px;
}

.mainBack {
  height: 40.1%;
  background-image: url("../../assets/img/mainpage/main.png");
}

.CenteringOneItem {
  height: 59.9%;
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

.iconsThemes:hover .imgIcon {
  fill: #465500;
}

.iconsThemes:hover .mainItem {
  color: #465500;
}

.descImg {
  height: 52%;
}
</style>

<script>
import MenuTop from '../menutop/Index'
import DescItem from '../descimg/DescItem'
import AddressesList from '../partpage/AddressesList'
import FooterDesk from '../partpage/FooterDesk'
import MenuBottom from '../menubottom/Index'

export default {
  name: 'App',
  components: {
    MenuBottom,
    DescItem,
    AddressesList,
    FooterDesk,
    MenuTop
  }
}

function shch(Select, add, whoIsClosed) {
  this.takeTag = function () {
    if (whoIsClosed) document.querySelector(whoIsClosed).classList.toggle(add);
    else {
      this.TagEl.classList.toggle(add);
    }
  };
  this.addE = function () {
    this.TagEl = document.querySelector(Select);
    this.TagEl.addEventListener('click', this.takeTag.bind(this));
  };
}

let AddressesList__main = new shch('.BurgerMenu', 'showIt');
window.addEventListener('load', AddressesList__main.addE.bind(AddressesList__main));
let closeX = new shch('.closeX', 'showIt');
window.addEventListener('load', closeX.addE.bind(closeX));

let AddressesList__mainDesk = new shch('.AddressesList__main', 'showIt');
window.addEventListener('load', AddressesList__mainDesk.addE.bind(AddressesList__mainDesk));
</script>