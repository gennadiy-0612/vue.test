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
    <InputCheck msg="г.  Новосибирск, ул. Улица, дом 123, квартира 45, подъезд 6 , этаж 7"/>
    <InputCheck msg="Добавить новый адрес"/>
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
import InputCheck from "../partpage/InputCheck";
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
    InputCheck,
    MenuBottom
  }
}
</script>