<template>
  <div class="popUpFrame popUpFrame1 popUpReady">
    <a href="/"><X/></a>
    <HeaderPopUp msg="Ваш заказ успешно оплачен!"/>
    <div class="popUpFrame__pSet">
      <ParaGraph msg="Заказ № 000000 Ваш заказ будет доставлен по адресу: г. Новосибирск,"/>
      <div class="details">
        <ParaGraph msg="ул. Ленина, 5, квартира 4. Время "/>
        <ParaGraph msg="доставки 10:00 - 12:00."/>
      </div>
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
.popUpFrame1 .popUpFrame__pSet .PopUpHead{
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