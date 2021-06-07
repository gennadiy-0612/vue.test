<template>
  <div class="comboNabori">
    <div class="Header flex justify-between">
      <Address/>
      <BurgMenu/>
    </div>
    <div class="w-180px">
      <HeaderTwo msg="Условия использования"/>
    </div>
    <div class="infoCompText">
      <p class="Ag-text14-to-1070">г. Новосибирск
        <br>
        «30» апреля 2016 г.
        <br>
        Настоящая Политика
        конфиденциальности персональных данных (далее – Политика
        конфиденциальности) действует в отношении всей информации,
        которую Служба доставки Перчини, расположенная на доменном
        имени dostavka-perchini.ru, может получить о Пользователе во
        время использования сайта Службы доставки Перчини, программ
        и продуктов Службы доставки Перчини.
        1. ОПРЕДЕЛЕНИЕ ТЕРМИНОВ
        1.1. В настоящей Политике </p>
    </div>
    <MenuBottom/>
  </div>
</template>
<style>
.Header {
  padding: 0 0 30px;
}

.w-180px {
  width: 180px;
}
</style>
<script>
import BurgMenu from '../burgmenu/Index'
import Address from '../address/Index'
import HeaderTwo from '../partpage/HeaderTwo'
import MenuBottom from '../menubottom/Index'

export default {
  name: 'App',
  components: {
    BurgMenu,
    Address,
    HeaderTwo,
    MenuBottom
  }
}
</script>