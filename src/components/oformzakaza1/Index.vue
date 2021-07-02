<template>
  <div class="Order OrderMove FrameDesk xl:m-auto FrameMob oformzakaza">
    <div class="Header flex justify-between">
      <Address/>
      <BurgMenu/>
    </div>
    <div class="MobHide OrderMoveAddresses OrderMoveAddresses-e float-left bg-white xl:h-auto xl:items-end xl:flex-col CenteringOneItem xl:h-full flex flex-col justify-center items-center xl:items-start">
      <AddressTime/>
    </div>
    <div class="OrderMove__head">
      <div class="xl:hidden">
        <HeaderThree msg="Оформление заказа"/>
      </div>
    </div>
    <div class="OrderMoveFrame">
      <OrderMove/>
    </div>
    <div class="flex oformZakaz xl:justify-around ofZak1 xl:items-center">
      <GreenButton class="ofZak1_green" msg="Доставка"/>
      <GreyButton msg="Самовывоз"/>
    </div>
    <div><h3 class="inline xl:block Ag-h3-to-1070 whereTake xl:text-center">Ваш заказ можете забрать по адресу</h3>
      <div class="addressPoint">
        <p class="inline Ag-h3-to-1070 whereTake xl:text-center where-h3 PointFlat">Красный проспект, 25/1</p>
        <p class="BackM whereTake__graph xl:justify-center xl:inline-block">
          <span class="Ag-h3-to-1070 whereTake__address where-h3">Площадь ленина</span>
        </p>
      </div>
    </div>
    <div class="choiceTime flex flex-wrap justify-between">
      <div class="setTime timeButton Ag-text14-to-1070 line-h17px choiceTimeT xl:font-semibold text-center">Выберите время <span
          class="MobHide TwoDots">:</span></div>
      <div
          class="choiceTimeT xl:font-semibold TimeShow xl:relative w-full flex justify-center items-center nearTime timeButton Ag-text14-to-1070 line-h17px E4E4E4 text-center">
        Ближайшее
        <div class="MobHide oformZakaz1 absolute m-t15px">
          <div class="Time max-w-max m-auto absolute m-auto overflow-y-scroll left-0 top-0 h-auto right-0">
            <router-link to="/">
              <div class="xl:hidden">
                <X/>
              </div>
            </router-link>
            <div class="Header__when afterLine flex justify-center">
              <HeaderPopUp msg="Ближайшее"/>
            </div>
            <Time from="00:00" to="00:30"/>
            <Time from="03:00" to="01:00"/>
            <Time from="01:00" to="01:30"/>
            <Time from="01:30" to="02:00"/>
            <Time from="02:00" to="02:30"/>
            <Time from="02:30" to="03:00"/>
            <Time from="03:00" to="03:30"/>
          </div>
        </div>
      </div>
    </div>
    <div class="Order__setButtons flex flex-col xl:flex-row justify-between xl:items-center">
        <GreenButton class="xl:hidden" msg="Перейти к подтверждению"/>
      <div class="blackButtonStyled bigButtonStyled BackToCard">
        <BlackButton msg="Назад в корзину"/>
      </div>
      <div class="MobHide HeadOfZak-OtherSB1 greenButtonStyled bigButtonStyled">
        <GreenButton class="greenButtonStyled" msg="Далее"/>
      </div>
      <div class="MobHide Ag4001624 text-center SeeMap block bigButtonStyled SeeOnMap">
        <BlackButton msg="Посмотреть на карте"/>
      </div>
    </div>
    <a class="xl:hidden Ag4001624 text-center SeeMap block">Посмотреть на карте</a>
    <MenuBottom/>
    <FooterDesk/>
  </div>
</template>
<style>
.OrderMove__head {
  margin: 30px 0 0;
}

.myAddress {
  margin: 0 0 -18px;
}

.Order .itemCity {
  margin: 3px 0 21px;
}

.oformZakaz {
  margin: 20px 0 30px;
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

.whereTake {
  margin: 32px 0 12px;
}

.whereTake__graph {
  margin: 13px 0 31px;
}

.whereTake__address {
  margin-left: 6px;
}


.timeButton {
  padding: 6px 0;
  flex: 1 1 40%;
}

.setTime {
  flex: 1 1 36%;
}

.SeeMap {
  margin: -7px 0 27px;
}
</style>
<script>
import BurgMenu from '../burgmenu/Index'
import Address from '../partpage/Address'
import AddressTime from '../partpage/AddressTime'
import HeaderThree from '../partpage/HeaderThree'
import OrderMove from '../partpage/OrderMove'
import GreenButton from '../addtocardgreen/Index'
import GreyButton from '../addtocardgrey/Index'
import BlackButton from '../addtocardblack/Index'
import MenuBottom from '../menubottom/Index'

import X from '../popupbluda/X'
import HeaderPopUp from "../partpage/HeaderPopUp"
import Time from "../popuptime/Time"
import FooterDesk from '../partpage/FooterDesk'

export default {
  name: 'App',
  components: {
    BurgMenu,
    Address,
    AddressTime,
    HeaderThree,
    OrderMove,
    GreenButton,
    GreyButton,
    BlackButton,
    MenuBottom,
    X,
    HeaderPopUp,
    Time,
    FooterDesk
  }
}

function shch(Select, add) {
  this.takeTag = function () {
    this.TagEl.classList.toggle(add);
  };
  this.addE = function () {
    this.TagEl = document.querySelector(Select);
    this.TagEl.addEventListener('click', this.takeTag.bind(this));
  };
}

if (window.location.pathname === '/oformzakaza' || window.location.pathname === '/oformzakaza1') {
  let cardSwitcher = new shch('.switchOpt1', 'showIt');
  window.addEventListener('load', cardSwitcher.addE.bind(cardSwitcher));
  let cardSwitcher2 = new shch('.switchOpt2', 'showIt');
  window.addEventListener('load', cardSwitcher2.addE.bind(cardSwitcher2));
  let cardSwitcher3 = new shch('.switchOpt3', 'showIt');
  window.addEventListener('load', cardSwitcher3.addE.bind(cardSwitcher3));
  let AddressesListMain = new shch('.AddressesList__main', 'showIt');
  window.addEventListener('load', AddressesListMain.addE.bind(AddressesListMain));
  let TimeShow = new shch('.TimeShow', 'showIt');
  window.addEventListener('load', TimeShow.addE.bind(TimeShow));
}
</script>