<template>
  <div class="comboNabori CardPage FrameDesk">
    <div class="Header flex justify-between">
      <Address/>
      <BurgMenu/>
    </div>
    <div
        class="OrderMoveAddresses bg-white CenteringOneItem xl:h-full flex flex-col justify-center items-center xl:items-start">
      <AddressTime/>
    </div>
    <div class="OrderMoveFrame">
      <OrderMove/>
    </div>
    <div class="tryIt">
      <HeaderThree msg="Попробуйте"/>
      <div class="SeeIt__all flex swipe xl:relative">
        <div class="arrow arrow-right MobHide absolute right-0"></div>
        <SeeIt/>
        <SeeIt/>
        <SeeIt/>
        <SeeIt/>
        <SeeIt/>
        <SeeIt/>
        <SeeIt/>
        <SeeIt/>
        <SeeIt/>
        <SeeIt/>
        <div class="arrow arrow-left MobHide absolute"></div>
      </div>
      <div class="tryIt tryIt-second">
        <h3 class="Ag-h3-to-1070 Card__title DescHide">Корзина</h3>
        <div class="Card_description xl:flex xl:flex-wrap xl:justify-between">
          <Photo/>
          <div class="tryIt-second__descriptor xl:flex xl:flex-wrap xl:flex-col">
            <p class="Ag6001624 Card__item xl:text-center">Стейк из свиннины</p>
            <p class="Ag-text12-to-1070 Card__detail text-center">С запеченым картофелем</p>
          </div>
          <div class="flex justify-between SetControl afterLine items-center">
            <p class="Ag-text1421-to-1070 SetControl__price order-2">600р</p>
            <div class="control flex justify-between order-1">
              <p class="countEat Ag-text14-to-1070 sign">-</p>
              <p class="countEat Ag-text14-to-1070">1 <span class="DescHide">шт</span></p>
              <p class="countEat Ag-text14-to-1070 sign">+</p>
            </div>
            <img alt="alt" class="CardImg order-3" src="../../assets/img/trashbin.svg">
          </div>
        </div>
        <div class="Card_description xl:flex xl:flex-wrap xl:justify-between">
          <Photo/>
          <div class="tryIt-second__descriptor xl:flex xl:flex-wrap xl:flex-col">
            <p class="Ag6001624 Card__item xl:text-center">Стейк из свиннины</p>
            <p class="Ag-text12-to-1070 Card__detail text-center">С запеченым картофелем</p>
          </div>
          <div class="flex justify-between SetControl afterLine items-center">
            <p class="Ag-text1421-to-1070 SetControl__price order-2">600р</p>
            <div class="control flex justify-between order-1">
              <p class="countEat Ag-text14-to-1070 sign">-</p>
              <p class="countEat Ag-text14-to-1070">1 <span class="DescHide">шт</span></p>
              <p class="countEat Ag-text14-to-1070 sign">+</p>
            </div>
            <img alt="alt" class="CardImg order-3" src="../../assets/img/trashbin.svg">
          </div>
        </div>
        <div class="Card_description xl:flex xl:flex-wrap xl:justify-between MobHide">
          <Photo/>
          <div class="tryIt-second__descriptor xl:flex xl:flex-wrap xl:flex-col">
            <p class="Ag6001624 Card__item xl:text-center">Стейк из свиннины</p>
            <p class="Ag-text12-to-1070 Card__detail text-center">С запеченым картофелем</p>
          </div>
          <div class="flex justify-between SetControl afterLine items-center">
            <p class="Ag-text1421-to-1070 SetControl__price order-2">600р</p>
            <div class="control flex justify-between order-1">
              <p class="countEat Ag-text14-to-1070 sign">-</p>
              <p class="countEat Ag-text14-to-1070">1 <span class="DescHide">шт</span></p>
              <p class="countEat Ag-text14-to-1070 sign">+</p>
            </div>
            <img alt="alt" class="CardImg order-3" src="../../assets/img/trashbin.svg">
          </div>
        </div>
        <div class="recommend">
          <h3 class="recommend__head Ag-text18-to-1070 fw600">Ваш подарок к заказу</h3>
          <div class="YoursPresent flex flex-wrap">
            <Photo/>
            <div class="WhatAndHow">
              <p class="Ag6001624 Card__add">Пицца с лососем</p>
              <p class="Ag-text14-to-1070 CardWith">Со сливочным сыром и ломтиками слабосоленого лосося</p>
            </div>
            <div class="Card__more-discount"><p class="Ag6001624 Card__more">Закажи еще и заберите подарок</p>
              <div class="Card__load flex items-center">
                <LoadBar/>
                <p class="Ag4001624 fw600 LoadPrice relative">301.-</p></div>
            </div>
          </div>
        </div>
        <HeaderThree msg="Рекомендуем заказать"/>
        <div class="SeeIt__all flex swipe xl:relative">
          <div class="arrow arrow-left MobHide absolute"></div>
          <SeeIt/>
          <SeeIt/>
          <SeeIt/>
          <SeeIt/>
          <SeeIt/>
          <SeeIt/>
          <SeeIt/>
          <SeeIt/>
          <SeeIt/>
          <SeeIt/>
          <div class="arrow arrow-right MobHide absolute right-0"></div>
        </div>
        <div class="CompleteIt xl:flex xl:flex-wrap xl:justify-between">
          <div class="PromoAct xl:flex">
            <h3 class="Ag-h3-to-1070 InputPromo">Введите промокод:</h3>
            <input class="promoCode searchButton bg-E4E4E4 text-center border-solid w-full block" type="number"
                   id="tentacles" name="tentacles" min="10" max="100" placeholder="ПЕРЧИНИ">
          </div>
          <div class="CompleteIt__do xl:flex xl:flex-wrap flex-col">
            <div class="Card__all">
              <div class="Card__line flex justify-end text-right">
                <p class="Ag-h3-to-1070 CompleteIt__all">ИТОГО</p>
                <p class="Ag-h3-to-1070 Digit CompleteIt__all-digit">3400p</p>
              </div>
              <div class="Card__line Card__line2 flex justify-end text-right">
                <p class="Ag-h3-to-1070 CompleteIt__discount">Скидка</p>
                <p class="Ag-h3-to-1070 Digit CompleteIt__discount-digit">10%</p>
              </div>
            </div>
            <GreenButton msg="Оформить заказ"/>
          </div>
        </div>
        <FooterDesk/>
        <MenuBottom/>
      </div>
    </div>
  </div>
</template>
<style>
.SeeIt__all {
  margin: 16px 0 29px;
  width: calc(100% + 16px);
}

.countEat {
  color: #333333;
}

.Card__title {
  margin: 47px 0 20px;
}

.Card__item {
  margin: 5px 0 5px;
}

.SetControl {
  margin: 10px 0 15px;
  padding: 0 0 14px;
}

.control {
  min-width: 72px;
  margin-left: -50px;
}

.recommend {
  margin: 30px 0 0;
}

.recommend__head {
  margin-bottom: 18px;
}

.Card__add {
  margin: 6px 0 8px;
}

.Card__more {
  margin-top: 20px;
}

.Card__load {
  margin: 15px 0 30px;
}

.Card__load .LoadBar {
  height: 46px;
  flex: 1 1 auto;
  margin: 0 13px 0 0;
}

.promoCode {
  border-width: 1px;
  margin: 17px 0 30px;
  padding: 25px 0;
  letter-spacing: 0.3px;
}

.Card__all {
  margin: 0 0 30px;
}

.Card__line {
  margin: 0 0 11px 50%;
}

.Digit {
  padding-left: 10px;
}
</style>
<script>
import BurgMenu from '../burgmenu/Index'
import Address from '../partpage/Address'
import AddressTime from '../partpage/AddressTime'
import OrderMove from '../partpage/OrderMove'
import HeaderThree from '../partpage/HeaderThree'
import SeeIt from './SeeIt'
import Photo from '../popupbluda/Photo'
import LoadBar from '../popupbluda/LoadBar'
import GreenButton from '../addtocardgreen/Index'
import FooterDesk from '../partpage/FooterDesk'
import MenuBottom from '../menubottom/Index'

export default {
  name: 'App',
  components: {
    BurgMenu,
    Address,
    AddressTime,
    OrderMove,
    HeaderThree,
    SeeIt,
    Photo,
    LoadBar,
    GreenButton,
    FooterDesk,
    MenuBottom,
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

if (window.location.pathname === '/cardmob') {
  let AddressesList__main = new shch('.AddressesList__main', 'showIt');
  window.addEventListener('load', AddressesList__main.addE.bind(AddressesList__main));
  let cardSwitcher11 = new shch('.switchOpt1', 'showIt');
  window.addEventListener('load', cardSwitcher11.addE.bind(cardSwitcher11));
  let cardSwitcher12 = new shch('.switchOpt2', 'showIt');
  window.addEventListener('load', cardSwitcher12.addE.bind(cardSwitcher12));
  let cardSwitcher13 = new shch('.switchOpt3', 'showIt');
  window.addEventListener('load', cardSwitcher13.addE.bind(cardSwitcher13));
}
</script>