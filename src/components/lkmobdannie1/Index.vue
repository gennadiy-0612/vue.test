<template>
  <div class="Order ChangePersonData FrameDesk xl:m-auto FrameMob">
    <div class="Header flex justify-between">
      <Address/>
      <BurgMenu/>
    </div>
    <ChangePersonalData class="lkmobdannie1"/>
    <div class="OptionLK xl:flex">
      <form action="/" class="relative flex flex-wrap items-center changeDataSet xl:flex xl:flex-col xl:align-baseline">
        <div class="optSet">
          <input placeholder="Пётр" type="text" id="name1" name="name1"
                 class="searchButton bg-E4E4E4 changeName">
          <a class="toChange Ag-text12-to-1070" href="#" for="name1">Изменить</a>
        </div>
        <div class="optSet">
          <input placeholder="+7(xxx) xxx-xx-xx" type="text" id="name2" name="name2"
                 class="searchButton bg-E4E4E4 changeName">
          <a class="toChange Ag-text12-to-1070" href="#" for="name2">Изменить</a>
        </div>
        <div class="optSet">
          <input placeholder="Email" type="text" id="name3" name="name3"
                 class="searchButton bg-E4E4E4 changeName">
          <a class="toChange Ag-text12-to-1070" href="#" for="name3">Изменить</a>
        </div>
        <div class="optSet">
          <input placeholder="День рождения" type="text" id="name4" name="name4"
                 class="searchButton bg-E4E4E4 changeName">
          <a class="toChange Ag-text12-to-1070" href="#" for="name4">Изменить</a>
        </div>
      </form>
      <div class="getNews xl:items-center relative flex">
        <input type="radio" id="address1" name="address1" value="Bike" class="checkIt opacity-0">
        <label for="address1" id="GetInfoAboutOrder"
               class="addressGost toChange flex Ag-text14-to-1070 line-h17px fs14px block">Получать
          информацию о заказе</label>
      </div>
    </div>
    <BlackButton class="lkmobdannie__setButtons" msg="Выйти"/>
    <FooterDesk/>
    <MenuBottom/>
  </div>
</template>
<style>

.changeDataSet {
  margin: 29px -6px 0;
}

.LogIcon {
  fill: #000000;
}

.changeName {
  max-width: 70%;
}

.Order .itemCity {
  margin: 3px 0 21px;
}

.oformZakaz .OrderMore-add-to-card-green, .oformZakaz .OrderMore-add-to-card-black {
  flex: 1 1 50%;
}

.Order .searchButton {
  margin: 5px;
  padding: 10px;
  height: 34px;
  letter-spacing: -0.7px;
}

.toChange {
  margin-left: 12px;
  line-height: 20px;
}

.getNews {
  padding: 14px 0;
}

.checkIt + .toChange::after {
  height: 20px;
  width: 20px;
}

.showIt + .toChange::before {
  left: 4px;
  height: 12px;
  width: 12px;
}

.searchButton::placeholder {
  color: #000000;
}

.raw {
  margin: 0 -5px;
}

.Order .foot {
  margin-top: 20px;
}
</style>
<script>
import BurgMenu from '../burgmenu/Index'
import Address from '../partpage/Address'
import ChangePersonalData from '../partpage/ChangePersonalData'
import BlackButton from '../addtocardblack/Index'
import FooterDesk from '../partpage/FooterDesk'
import MenuBottom from '../menubottom/Index'

export default {
  name: 'App',
  components: {
    BurgMenu,
    Address,
    ChangePersonalData,
    BlackButton,
    FooterDesk,
    MenuBottom
  }
}

function shch(Select) {
  this.takeTag = function () {
    this.TagEl.classList.toggle('showIt');
    console.log(this)
  };
  this.addE = function () {
    this.TagEl = document.querySelector(Select);
    this.TagEl.addEventListener('click', this.takeTag.bind(this));
  };
}

if (window.location.pathname === '/lkmobdannie1') {
  let cardSwitcher1 = new shch('#GetInfoAboutOrder');
  window.addEventListener('load', cardSwitcher1.addE.bind(cardSwitcher1));
}
</script>