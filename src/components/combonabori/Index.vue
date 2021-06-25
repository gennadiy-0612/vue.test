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
      <div class="comboNabori__detail">
        <MyOrder/>
        <AddToCardGreen msg="Оформить заказ"/>
        <div class="ComboAdd">
          <div class="Card__more-discount">
            <p class="Ag6001624 Card__more">Закажи еще и заберите подарок</p>
            <div class="Card__load flex items-center">
              <LoadBar/>
              <p class="Ag4001624 fw600 LoadPrice relative">301.-</p>
            </div>
          </div>
          <div class="vision">
            <img class="PresentPizza" alt="alt" src="../../assets/img/photo86x59px.svg">
            <p class="PresentText text-center">Пицца Вулкан в подаок!</p>
          </div>
        </div>
      </div>
    </div>
    <FooterDesk/>
  </div>
</template>
<script>
import ComboSetTop from './ComboSetTop'
import AddreesTime from '../partpage/AddressTime'
import EatMenu from '../partpage/EatMenu'
import AddToCardGreen from '../addtocardgreen/Index'
import ComboSetsBottom from './ComboSetsBottom'
import MyOrder from '../partpage/MyOrder'
import LoadBar from '../partpage/LoadBar'
import FooterDesk from '../partpage/FooterDesk'

export default {
  name: 'App',
  components: {
    ComboSetTop,
    AddreesTime,
    AddToCardGreen,
    EatMenu,
    ComboSetsBottom,
    MyOrder,
    LoadBar,
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