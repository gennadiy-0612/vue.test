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
    <h3 class="Ag-h3-to-1070 whereTake">Ваш заказ можете забрать по адресу Красный проспект, 25/1</h3>
    <p class="BackM whereTake__graph">
      <span class="Ag-h3-to-1070 whereTake__address">Площадь ленина</span></p>
    <div class="choiceTime flex flex-wrap justify-between">
      <div class="setTime timeButton Ag-text14-to-1070 line-h17px text-center">Выберите время</div>
      <div class="flex justify-center items-center nearTime timeButton Ag-text14-to-1070 line-h17px E4E4E4 text-center">Ближайшее</div>
    </div>
    <div class="Order__setButtons">
      <GreenButton msg="Перейти к подтверждению"/>
      <BlackButton msg="Назад в корзину"/>
    </div>
    <a class="Ag4001624 text-center SeeMap block">Посмотреть на карте</a>
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

.whereTake {
  margin: 32px 0 12px;
}

.whereTake__graph {
  margin: 0 0 31px;
}

.whereTake__address {
  margin-left: 6px;
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

.SeeMap {
  margin: -7px 0 27px;
}
</style>
<script>
import BurgMenu from '../burgmenu/Index'
import Address from '../address/Index'
import HeaderThree from '../partpage/HeaderThree'
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