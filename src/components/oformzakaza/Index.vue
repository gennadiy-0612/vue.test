<template>
  <div class="comboNabori Order">
    <div class="Header flex justify-between">
      <Address/>
      <BurgMenu/>
    </div>
    <HeaderThree msg="Оформление заказа"/>
    <div class="flex oformZakaz">
      <GreenButton msg="Доставка"/>
      <GreyButton msg="Самовывоз"/>
    </div>
    <p class="Ag-text14-to-1070 fs14px">Мой адрес</p>
    <form class="myAddress" action="/action_page.php">
      <div class="itemCity relative flex">
        <input class="checkIt opacity-0" type="radio" id="address1" name="address1" value="Bike">
        <label class="addressGost flex Ag-text14-to-1070 line-h17px fs14px block" for="address1">г. Новосибирск, ул.
          Улица, дом
          123, квартира 45, подъезд 6 , этаж 7</label>
      </div>
      <div class="itemCity relative flex">
        <input class="checkIt opacity-0" type="radio" id="address2" name="address2" value="Car">
        <label class="addressGost flex Ag-text14-to-1070 line-h17px fs14px block" for="address2">Добавить новый
          адрес</label>
      </div>
    </form>
    <form class="where">
      <div class="raw flex">
        <input class="searchButton bg-E4E4E4 border-solid border-0 w-full block" placeholder="Город" type="text"
               id="city"
               name="city">
      </div>
      <div class="raw flex">
        <input class="searchButton bg-E4E4E4 border-solid border-0 w-full block street" placeholder="Улица" type="text"
               id="street" name="street">
        <input class="searchButton bg-E4E4E4 border-solid border-0 w-full block" placeholder="Дом" type="text"
               id="house" name="house">
      </div>
      <div class="raw flex">
        <input class="searchButton bg-E4E4E4 border-solid border-0 w-full block" placeholder="Кв" type="text" id="flat"
               name="flat">
        <input class="searchButton bg-E4E4E4 border-solid border-0 w-full block" placeholder="Подъезд" type="text"
               id="column" name="column">
        <input class="searchButton bg-E4E4E4 border-solid border-0 w-full block" placeholder="Этаж" type="text"
               id="level" name="level">
      </div>
      <div class="raw flex">
        <input class="searchButton bg-E4E4E4 Ag-text14-to-1070 border-solid border-0 w-full block" placeholder="Название адреса"
               type="text"
               id="address" name="address">
      </div>
      <div class="raw flex">
        <input class="searchButton bg-E4E4E4 Ag-text14-to-1070 border-solid border-0 w-full block" placeholder="Комментарий к адресу"
               type="text" id="detail" name="detail">
      </div>
    </form>
    <div class="choiceTime flex flex-wrap justify-between">
      <div class="setTime timeButton Ag-text14-to-1070 line-h17px text-center">Выберите время</div>
      <div class="nearTime timeButton Ag-text14-to-1070 line-h17px E4E4E4 text-center flex justify-center items-center">Ближайшее</div>
    </div>
    <div class="Order__setButtons">
      <GreenButton msg="Перейти к подтверждению"/>
      <BlackButton msg="Назад в корзину"/>
    </div>
    <MenuBottom/>
  </div>
</template>
<style>.myAddress {
  margin: 0 0 -18px;
}

.Order .itemCity {
  margin: 3px 0 21px;
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
import HeaderThree from "../partpage/HeaderThree";
import GreenButton from '../addtocardgreen/Index'
import GreyButton from '../addtocardgrey/Index'
import BlackButton from '../addtocardblack/Index'
import MenuBottom from '../menubottom/Index'

export default {
  name: 'App',
  components: {
    BurgMenu,
    Address,
    HeaderThree,
    GreenButton,
    GreyButton,
    BlackButton,
    MenuBottom
  }
}
</script>