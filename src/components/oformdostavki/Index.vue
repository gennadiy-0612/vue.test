<template>
  <div class="comboNabori Order">
    <div class="Header flex justify-between">
      <Address/>
      <BurgMenu/>
    </div>
    <HeaderThree msg="Подтверждение"/>
    <HeaderThree msg="Заказ на самовывоз"/>
    <div class="dataPerson">
      <div class="dataPerson__line flex justify-between">
        <p class="Ag-text14-to-1070">Имя</p>
        <p class="Ag-text1421-to-1070">Виктор</p>
      </div>
      <div class="dataPerson__line flex justify-between">
        <p class="Ag-text14-to-1070">Телефон</p>
        <p class="Ag-text1421-to-1070">+79998889778</p>
      </div>
      <div class="dataPerson__line flex justify-between">
        <p class="Ag-text14-to-1070">Адрес самовывоза</p>
        <p class="Ag-text1421-to-1070">Улица Военная, 5, ТРЦ “Аура”</p>
      </div>
      <div class="dataPerson__line flex justify-between">
        <p class="Ag-text14-to-1070">Время самовывоза</p>
        <p class="Ag-text1421-to-1070">Ближайшее</p>
      </div>
    </div>
    <BlackButton msg="Изменить"/>
    <PromoCode/>
    <HeaderThree msg="Способ оплаты"/>
    <form class="myAddress" action="/action_page.php">
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
    <div>
      <label>С какой суммы подготовить сдачу?</label>
      <div class="flex justify-center">
        <input type="text" id="moneyPart" name="level"
               class="searchButton moneyRest bg-E4E4E4 border-solid border-0 w-full block">
        <div class="itemCity relative flex moneyRestIs items-center">
          <input class="checkIt opacity-0" type="checkbox" id="address4" name="address2" value="Car">
          <label class="addressGost flex Ag-text14-to-1070 line-h17px fs14px block" for="address4">Без сдачи</label>
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

.myAddress {
  margin: 0 0 -18px;
}

.Order .itemCity {
  margin: 3px 0 21px;
}
.moneyRest{
  flex: 1 1 50%;
}
.moneyRestIs{
  flex: 0 0 40%;
}
.flex.oformZakaz {
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

.street {
  flex: 1 1 137%;
}

.searchButton::placeholder {
  color: #000000;
}

.raw {
  margin: 0 -5px;
}

.choiceTime {
  margin: 13px 0 30px;
}

.timeButton {
  padding: 6px 0;
  flex: 1 1 40%;
}

.setTime {
  flex: 1 1 30%;
}

.Order__setButtons .OrderMore-add-to-card-black {
  margin: 20px 0 0;
}

.Order__setButtons {
  padding: 0 0 30px;
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