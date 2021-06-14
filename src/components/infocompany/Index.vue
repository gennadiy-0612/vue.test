<template>
  <div class="comboNabori">
    <div class="Header flex justify-between">
      <Address/>
      <BurgMenu/>
    </div>
    <div class="w-180px">
      <HeaderTwo msg="Информация о компании"/>
    </div>
    <div class="infoCompText">
      <p class="Ag-text14-to-1070">Общество с ограниченной ответственностью «Формула» (630120,
        г. Новосибирск, ул. Титова, 184/1, офис 7), именуемое
        в дальнейшем «Служба доставки Перчини» предлагает любому
        лицу произвести заказ блюд, заключив на нижеприведенных
        условиях.

        ООО «Формула» является лицом, уполномоченным
        на прием заказов через Интернет, а также на прием безналичных
        платежей за заказы, сделанные через Интернет-магазин.
        В течение пяти минут после размещения клиентом заказа, заказ</p>
    </div>
    <MenuBottom/>
  </div>
</template>
<style>.w-180px {
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