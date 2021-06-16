<template>
  <div class="popUpFrame popUpFrame1 popUpReady">
    <router-link to="/">
      <X/>
    </router-link>
    <HeaderPopUp msg="Вы собираетесь изменить адрес доставки"/>
    <div class="popUpFrame__pSet">
      <ParaGraph msg="Позиции добавленные корзину будут удалены."/>
    </div>
    <GreenButton msg="Готово"/>
  </div>
</template>
<style>
.popUpReady .afterLine::after {
  content: none;
}

.popUpReady .PopUpHeader {
  width: 200px;
  text-align: center;
  margin: 0;
}

.popUpFrame__pSet {
  padding: 6px 0 30px;
}

.popUpFrame1 .popUpFrame__pSet .PopUpHead {
  padding-left: 0;
  padding-right: 0;
}

.details .PopUpHead {
  margin: 0;
}
</style>
<script>
import X from '../popupbluda/X'
import GreenButton from '../addtocardgreen/Index'
import HeaderPopUp from '../partpage/HeaderPopUp'
import ParaGraph from '../partpage/ParaGraph'

export default {
  name: 'App',
  components: {
    X,
    GreenButton,
    HeaderPopUp,
    ParaGraph
  }
}
</script>