<template>
  <div class="comboNabori FrameDesk">
    <ComboSetTop/>
    <div
        class="OrderMoveAddresses bg-white CenteringOneItem MobHide xl:h-full flex flex-col justify-center items-center xl:items-start">

    </div>
    <div class="mainEat xl:flex xl:flex-wrap">
      <div class="MobHide InfoGraphics">
        <AddreesTime/>
        <EatMenu/>
      </div>
      <ComboSetsBottom/>
      <MyOrder/>
    </div>
    <FooterDesk/>
  </div>
</template>
<script>
import ComboSetTop from './ComboSetTop'
import AddreesTime from '../partpage/AddressTime'
import EatMenu from '../partpage/EatMenu'
import ComboSetsBottom from './ComboSetsBottom'
import MyOrder from '../partpage/MyOrder'
import FooterDesk from '../partpage/FooterDesk'

export default {
  name: 'App',
  components: {
    ComboSetTop,
    AddreesTime,
    EatMenu,
    ComboSetsBottom,
    MyOrder,
    FooterDesk,
  }
}

function shch(Select, add) {
  this.takeTag = function () {
    this.TagEl.classList.toggle(add);
  };
  this.addE = function () {
    this.TagEl = document.querySelector(Select);
    this.TagEl.addEventListener('click', this.takeTag.bind(this));
  };
}

if (window.location.pathname === '/combonabori' || window.location.pathname === '/') {
  let AddressesList__main = new shch('.AddressesList__main', 'showIt');
  window.addEventListener('load', AddressesList__main.addE.bind(AddressesList__main));
}
</script>