<template>
  <div class="comboNabori Order OrderAct OrderGive">
    <div class="Header flex justify-between">
      <Address/>
      <BurgMenu/>
    </div>
    <HeaderThree msg="Подтверждение"/>
    <div class="OrderAct-two">
      <HeaderThree msg="Заказ на самовывоз"/>
    </div>
    <div class="dataPerson">
      <div class="OrderAct__line flex justify-between">
        <p class="Ag-text14-to-1070">Имя</p>
        <p class="Ag-text1421-to-1070">Виктор</p>
      </div>
      <div class="OrderAct__line flex justify-between">
        <p class="Ag-text14-to-1070">Телефон</p>
        <p class="Ag-text1421-to-1070">+79998889778</p>
      </div>
      <div class="OrderAct__line flex items-center flex-wrap justify-between">
        <p class="OrderAct__item1 Ag-text14-to-1070">Адрес самовывоза</p>
        <p class="OrderAct__item2 Ag-text1421-to-1070 text-right">Улица Военная,<br/> 5, ТРЦ “Аура”</p>
      </div>
      <div class="OrderAct__line flex justify-between">
        <p class="Ag-text14-to-1070">Время самовывоза</p>
        <p class="Ag-text1421-to-1070">Ближайшее</p>
      </div>
    </div>
    <div class="OrderActChange">
      <BlackButton msg="Изменить"/>
    </div>
    <PromoCode/>
    <div class="PayWay">
      <HeaderThree msg="Способ оплаты"/>
    </div>
    <form class="myAddress OrderActCash" action="/action_page.php">
      <div class="itemCity relative flex">
        <input class="checkIt opacity-0" type="checkbox" id="address1" name="address1" value="Bike">
        <label class="addressGost flex Ag-text14-to-1070 line-h17px fs14px block" for="address1">Картой на сайте</label>
      </div>
      <div class="itemCity relative flex">
        <input class="checkIt opacity-0" type="checkbox" id="address2" name="address2" value="Car">
        <label class="addressGost flex Ag-text14-to-1070 line-h17px fs14px block" for="address2">Картой курьеру</label>
      </div>
      <div class="itemCity relative flex">
        <input class="checkIt opacity-0" type="checkbox" id="address3" name="address2" value="Car">
        <label class="addressGost flex Ag-text14-to-1070 line-h17px fs14px block" for="address3">Наличными
          курьеру</label>
      </div>
    </form>
    <div class="whatRest">
      <label class="Ag-text12-to-1070">С какой суммы подготовить сдачу?</label>
      <div class="whatRestDetails flex justify-center items-center">
        <input type="text" id="moneyPart" name="level"
               class="searchButton moneyRest bg-E4E4E4 border-solid border-0 w-full block text-center">
        <div class="itemCity relative flex moneyRestIs items-center">
          <input class="checkIt opacity-0" type="checkbox" id="address4" name="address2" value="Car">
          <label class="addressGost flex Ag-text12-to-1070 line-h17px block" for="address4">Без сдачи</label>
        </div>
      </div>
    </div>
    <div class="Order__setButtons">
      <GreenButton msg="Подтвердить заказ на 2000р"/>
      <BlackButton msg="Назад к оформлению заказа"/>
    </div>
    <MenuBottom/>
  </div>
</template>
<style>
.Header {
  padding: 0 0 30px;
}

.OrderAct-two {
  margin: 30px 0 20px;
}

.OrderAct .h2Papa {
  margin: 0 0 0;
}

.OrderAct .Promo__Head {
  flex: 1 1 56%;
}

.OrderAct .promoCode.PromoTemplate__item {
  margin: 0 0 0;
  padding: 22px;
  flex: 1 1 60%;
}

.OrderAct__line {
  margin: 0 0 11px;
}

.OrderAct__item1 {
  flex: 1 1 54%;
}

.OrderAct__item2 {
  flex: 1 1 46%;
}

.Order.OrderAct .itemCity {
  margin: 0 0 16px;
}

.myAddress {
  margin: 0 0 -18px;
}

.whatRest {
  margin: -30px 18px 20px;
}

.PayWay {
  margin: 30px 0 17px;
}

.OrderAct .OrderActCash {
  margin: 0 0 30px;
}

.Order.OrderGive .moneyRest {
  flex: 1 1 53%;
  margin: 0;
  padding: 3px;
  height: auto;
}

.OrderAct.OrderGive .moneyRestIs {
  flex: 1 1 40%;
  margin: 0 0 0 8px;
}

:checked + .addressGost {
  font-weight: 700;
}

.OrderGive.Order .moneyRest {
  flex: 1 1 40%;
  margin: 0;
}

.whatRestDetails {
  margin: 4px 0 31px;
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

.OrderActChange {
  margin: 19px 0 -8px;
}

.Order__setButtons .OrderMore-add-to-card-black {
  margin: 20px 0 0;
}

.Order__setButtons {
  padding: 0 0 30px;
}

.OrderAct .OrderActCash {
  padding: 0;
}
</style>
<script>
import BurgMenu from '../burgmenu/Index'
import Address from '../address/Index'
import HeaderThree from "../partpage/HeaderThree"
import PromoCode from '../partpage/PromoCode'
import GreenButton from '../addtocardgreen/Index'
import BlackButton from '../addtocardblack/Index'
import MenuBottom from '../menubottom/Index'

export default {
  name: 'App',
  components: {
    BurgMenu,
    Address,
    HeaderThree,
    PromoCode,
    GreenButton,
    BlackButton,
    MenuBottom
  }
}
</script>