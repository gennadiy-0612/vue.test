<template>
  <div class="oformsamovivoza oformdostavki Order OrderAct OrderGive FrameDesk xl:m-auto FrameMob">
    <div class="Header flex justify-between">
      <Address/>
      <BurgMenu/>
    </div>
    <div
        class="OrderMoveAddresses xl:h-auto float-left bg-white xl:items-end xl:flex-col CenteringOneItem xl:h-full flex flex-col justify-center items-center xl:items-start">
      <AddressTime/>
    </div>
    <div class="DescHide">
      <HeaderThree msg="Подтверждение"/>
    </div>
    <div class="OrderMoveFrame">
      <OrderMove/>
    </div>
    <div class="oformZakSam xl:m-auto">
      <div class="CenterContent xl:flex xl:justify-between">
        <div class="CenterContent__right">
          <div class="OrderAct-two">
            <HeaderThree msg="Заказ на доставку"/>
          </div>
          <div class="dataPerson">
            <div class="OrderAct__line flex justify-between">
              <p class="Ag-text14-to-1070 oformsamovivoza__Oreder">Имя</p>
              <p class="Ag-text1421-to-1070 OrderAct__data oformsamovivoza__Oreder">Виктор</p>
            </div>
            <div class="OrderAct__line flex justify-between">
              <p class="Ag-text14-to-1070 oformsamovivoza__Oreder">Телефон</p>
              <p class="Ag-text1421-to-1070 OrderAct__data oformsamovivoza__Oreder">+79998889778</p>
            </div>
            <div class="OrderAct__line flex items-center flex-wrap justify-between">
              <p class="OrderAct__item1 Ag-text14-to-1070 oformsamovivoza__Oreder">Адрес самовывоза</p>
              <p class="OrderAct__item2 Ag-text1421-to-1070 text-right OrderAct__data oformsamovivoza__Oreder">Улица
                Военная,<br class="DescHide"/> 5, ТРЦ “Аура”</p>
            </div>
            <div class="OrderAct__line flex justify-between oformZakSam__set">
              <p class="Ag-text14-to-1070 oformZakSam__button">Время самовывоза</p>
              <p class="Ag-text1421-to-1070 flex justify-center items-center OrderAct__data oformZakSam__button">
                Ближайшее</p>
            </div>
          </div>
          <div class="OrderActChange">
            <BlackButton msg="Изменить"/>
          </div>
        </div>
        <ol class="OrderAllPrice MobHide CenterContent__left relative">
          <li class="OrderAllPrice__li OrderAllPrice__h2 xl:font-medium afterLine relative">Мой заказ</li>
          <li class="OrderAllPrice__li flex justify-between"><p class="OrderAllPrice__p xl:font-medium">Пицца Пепперони</p>
            <p class="OrderAllPrice__count xl:font-medium">1</p>
          </li>
          <li class="OrderAllPrice__li flex justify-between"><p class="OrderAllPrice__p xl:font-medium">Пицца Филадельфия</p>
            <p class="OrderAllPrice__count xl:font-medium">2</p>
          </li>
          <li class="OrderAllPrice__li flex justify-between"><p class="OrderAllPrice__p xl:font-medium">Стейк из курицы</p>
            <p class="OrderAllPrice__count xl:font-medium">3</p>
          </li>
          <li class="OrderAllPrice__li flex justify-between"><p class="OrderAllPrice__p xl:font-medium">Пицца с лососем</p>
            <p class="OrderAllPrice__count xl:font-medium">4</p>
          </li>
          <li class="OrderAllPrice__li flex justify-between"><p class="OrderAllPrice__p xl:font-medium">Пицца Филадельфия</p>
            <p class="OrderAllPrice__count xl:font-medium">5</p>
          </li>
          <li class="OrderAllPrice__li OrderAllPrice__sum flex justify-between afterLine relative"><p
              class="OrderAllPrice__sumName xl:font-medium"> Итого:</p>
            <p class="OrderAllPrice__sumDigit xl:font-medium"> 679,-</p>
          </li>
        </ol>
      </div>
      <div class="PromoDetail">
        <PromoCode/>
        <div class="PayWay">
          <HeaderThree msg="Способ оплаты"/>
        </div>
        <form class="myAddress OrderActCash" action="/action_page.php">
          <div class="itemCity relative flex">
            <input class="checkIt opacity-0" type="radio" id="address1" name="address1" value="Bike">
            <label class="addressGost flex Ag-text14-to-1070 line-h17px fs14px block" for="address1">Картой на
              сайте</label>
          </div>
          <div class="itemCity relative flex">
            <input class="checkIt opacity-0" type="radio" id="address2" name="address2" value="Car">
            <label class="addressGost flex Ag-text14-to-1070 line-h17px fs14px block" for="address2">Картой
              курьеру</label>
          </div>
          <div class="itemCity relative flex">
            <input class="checkIt opacity-0" type="radio" id="address3" name="address2" value="Car">
            <label class="addressGost flex Ag-text14-to-1070 line-h17px fs14px block" for="address3">Наличными
              курьеру</label>
          </div>
        </form>
        <div class="whatRest xl:flex">
          <label class="Ag-text12-to-1070 whatRest__how">С какой суммы подготовить сдачу?</label>
          <div class="whatRestDetails flex justify-center items-center">
            <input type="text" id="moneyPart" name="level"
                   class="searchButton moneyRest bg-E4E4E4 border-solid border-0 w-full block text-center">
            <div class="itemCity relative flex moneyRestIs items-center">
              <input class="checkIt opacity-0" type="radio" id="address4" name="address2" value="Car">
              <label class="addressGost flex Ag-text12-to-1070 line-h17px block" for="address4">Без сдачи</label>
            </div>
          </div>
        </div>
        <div class="Order__setButtons DescHide flex flex-col xl:flex-row justify-between xl:items-center">
          <GreenButton msg="Подтвердить заказ на 2000р"/>
          <BlackButton msg="Назад к оформлению заказа"/>
        </div>
        <div class="Order__setButtons xl:items-center MobHide">
          <BlackButton msg="Назад в корзину"/>
          <GreenButton msg="Оформить заказ"/>
        </div>
      </div>
    </div>
    <FooterDesk/>
    <MenuBottom/>
  </div>
</template>
<style>.OrderAct-two {
  margin: 30px 0 20px;
}

.OrderAct .Promo__Head {
  flex: 1 1 56%;
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

.myAddress {
  margin: 0 0 -18px;
}

.whatRest {
  margin: -25px 18px 20px;
}

.PayWay {
  margin: 30px 0 17px;
}

.Order.OrderGive .moneyRest {
  flex: 1 1 42%;
  margin: 0;
  padding: 6px 3px;
  height: auto;
  min-width: 128px;
}

.OrderAct.OrderGive .moneyRestIs {
  flex: 1 1 40%;
  margin: 0 0 0 8px;
}

.showIt + .addressGost {
  font-weight: 700;
}

.whatRestDetails {
  margin: 4px 0 31px;
}

.oformZakaz .OrderMore-add-to-card-green xl:block, .oformZakaz .OrderMore-add-to-card-black {
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
</style>
<script>
import BurgMenu from '../burgmenu/Index'
import Address from '../partpage/Address'
import AddressTime from '../partpage/AddressTime'
import HeaderThree from "../partpage/HeaderThree"
import OrderMove from '../partpage/OrderMove'
import PromoCode from '../partpage/PromoCode'
import GreenButton from '../addtocardgreen/Index'
import BlackButton from '../addtocardblack/Index'
import FooterDesk from '../partpage/FooterDesk'
import MenuBottom from '../menubottom/Index'

export default {
  name: 'App',
  components: {
    BurgMenu,
    Address,
    AddressTime,
    HeaderThree,
    OrderMove,
    PromoCode,
    GreenButton,
    BlackButton,
    FooterDesk,
    MenuBottom
  }
}
</script>