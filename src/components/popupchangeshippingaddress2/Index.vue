<template>
  <div class="popUpFrame popUpFrame1 popUpFrame2 popUpReady flex justify-center items-center h-full w-full">
    <div class="popUpFrameInner">
      <div class="xl:hidden">
        <router-link to="/">
          <X/>
        </router-link>
      </div>
      <HeaderPopUp msg="Вы собираетесь изменить адрес доставки"/>
      <div class="popUpFrame__pSet">
        <ParaGraph msg="Позиции добавленные корзину будут удалены."/>
      </div>
      <div class="xl:hidden">
        <GreenButton msg="Готово"/>
      </div>
      <div class="DeskButtonsSet MobHide flex justify-between">
        <GreenButton msg="Продолжить"/>
        <BlackButton msg="Отменить"/>
      </div>
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
import BlackButton from '../addtocardblack/Index'
import HeaderPopUp from '../partpage/HeaderPopUp'
import ParaGraph from '../partpage/ParaGraph'

export default {
  name: 'App',
  components: {
    X,
    GreenButton,
    BlackButton,
    HeaderPopUp,
    ParaGraph
  }
}
</script>