<template>
  <div class="comboNabori pageWithCats">
    <div class="Header flex justify-between">
      <Address/>
      <BurgMenu/>
    </div>
    <div class="tryIt">
      <HeaderThree msg="Попробуйте"/>
      <div class="SeeIt__all flex swipe">
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
      </div>
      <div class="tryIt">
        <HeaderThree msg="Рекомендуем заказать"/>
        <div class="SeeIt__all flex swipe">
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
        </div>
        <div>
          <h3 class="Ag4001624">Корзина</h3>
        </div>
        <MenuBottom/>
      </div>
    </div>
  </div>
</template>
<style>
.Header {
  padding: 0 0 30px;
}

.SeeIt__all {
  margin: 16px 0 29px;
  width: calc(100% + 16px);
}
</style>
<script>
import BurgMenu from '../burgmenu/Index'
import Address from '../address/Index'
import HeaderThree from '../partpage/HeaderThree'
import SeeIt from "./SeeIt";
import MenuBottom from '../menubottom/Index'

export default {
  name: 'App',
  components: {
    BurgMenu,
    Address,
    HeaderThree,
    SeeIt,
    MenuBottom
  }
}
</script>