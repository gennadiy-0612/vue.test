<template>
  <div class="comboNabori ComboPage CatsPage FrameDesk">
    <div class="Header flex justify-between">
      <BackButton/>
      <BurgMenu/>
    </div>
    <ol class="DescHide flex categorySet swipe">
      <li>
        <CatItem msg="Пицца"/>
      </li>
      <li>
        <CatItem msg="Паста"/>
      </li>
      <li>
        <CatItem msg="Салаты"/>
      </li>
      <li>
        <CatItem msg="Супы"/>
      </li>
      <li>
        <CatItem msg="Супы"/>
      </li>
      <li>
        <CatItem msg="Супы"/>
      </li>
      <li>
        <CatItem msg="Супы"/>
      </li>
    </ol>
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
          <div class="MobHide vision">
            <img class="PresentPizza" alt="alt" src="../../assets/img/photo86x59px.svg">
            <p class="PresentText text-center">Пицца Вулкан в подаок!</p>
          </div>
        </div>
      </div>
    </div>
    <FooterDesk/>
  </div>
</template>
<style>
.categorySet {
  margin: 1px 0 29px;
  width: calc(100% + 16px);
}

.comboNabori .LoadBar {
  margin: 24px 0 5px;
}

.toOrderPrice {
  align-items: flex-end;
}

.font-size14px {
  font-size: 14px;
}

.commonPrice.fs20 {
  font-size: 20px;
}
</style>
<script>
import BurgMenu from '../burgmenu/Index'
import BackButton from '../partpage/Address'
import CatItem from './CategoryItem'
import ComboSetsBottom from './ComboSetsBottom'
import AddreesTime from "@/components/partpage/AddressTime";
import AddToCardGreen from "@/components/addtocardgreen/Index";
import EatMenu from "@/components/partpage/EatMenu";
import MyOrder from "@/components/partpage/MyOrder";
import LoadBar from "@/components/partpage/LoadBar";
import FooterDesk from "@/components/partpage/FooterDesk";

export default {
  name: 'App',
  components: {
    BurgMenu,
    BackButton,
    CatItem,
    MyOrder,
    LoadBar,
    FooterDesk,
    AddreesTime,
    AddToCardGreen,
    EatMenu,
    ComboSetsBottom
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