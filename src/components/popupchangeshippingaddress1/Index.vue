<template>
  <div class="popUpFrame popUpFrame1 popUpReady flex justify-center items-center h-full w-full">
    <div class="popUpFrameInner Alldone">
      <div class="xl:hidden">
        <router-link to="/">
          <X/>
        </router-link>
      </div>
      <HeaderPopUp msg="Ваш заказ успешно оплачен!"/>
      <div class="popUpFrame__pSet">
        <ParaGraph class="OrderNumber" msg="Заказ № 000000 Ваш заказ будет доставлен по адресу: г. Новосибирск,"/>
        <div class="details">
          <ParaGraph msg="ул. Ленина, 5, квартира 4. Время "/>
          <ParaGraph msg="доставки 10:00 - 12:00."/>
        </div>
      </div>
      <GreenButton class="Alldone__Complete" msg="Готово"/>
    </div>
  </div>
</template>
<style>
.popUpReady .afterLine::after {
  content: none;
}

.popUpFrame__pSet {
  padding: 6px 0 30px;
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