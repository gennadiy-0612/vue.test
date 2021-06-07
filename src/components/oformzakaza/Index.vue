<template>
  <div class="comboNabori">
    <div class="Header flex justify-between">
      <Address/>
      <BurgMenu/>
    </div>
    <HeaderThree msg="Оформление заказа"/>
    <div class="flex oformZakaz">
      <GreenButton msg="Доставка"/>
      <GreyButton msg="Самовывоз"/>
    </div>
    <p class="Ag-text14-to-1070 fs17px">Мой адрес</p>
    <form action="/action_page.php">
      <div class="itemCity relative flex">
        <input class="checkIt opacity-0" type="checkbox" id="address1" name="address1" value="Bike">
        <label class="addressGost flex Ag-text14-to-1070 fs17px block" for="address1">г.  Новосибирск, ул. Улица, дом 123, квартира 45, подъезд 6 , этаж 7</label>
      </div>
      <div class="itemCity relative flex">
        <input class="checkIt opacity-0" type="checkbox" id="address2" name="address2" value="Car">
        <label class="addressGost flex Ag-text14-to-1070 fs17px block" for="address2">Добавить новый адрес</label>
      </div>
    </form>
    <GreenButton msg="Перейти к подтверждению"/>
    <BlackButton msg="Назад в корзину"/>
    <MenuBottom/>
  </div>
</template>
<style>
.Header {
  padding: 0 0 30px;
}
.oformZakaz .OrderMore-add-to-card-green, .oformZakaz .OrderMore-add-to-card-black{
  flex:1 1 50%;
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