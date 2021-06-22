<template>
  <div class="popUpReady flex justify-center items-center h-full w-full">
    <div class="popUpFrame">
      <a href="/">
        <div class="DescHide">
          <X/>
        </div>
      </a>
      <HeaderPopUp msg="Ваш заказ успешно оплачен!"/>
      <div class="popUpFrame__pSet">
        <ParaGraph msg="Заказ № 000000 Вы можете забрать заказ по адресу: ул."/>
        <div class="details">
          <ParaGraph msg="Красный проспект, 25/1."/>
          <ParaGraph msg="Заказ будет готов в 15:30."/>
        </div>
      </div>
      <GreenButton msg="Готово"/>
    </div>
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