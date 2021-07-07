<template>
  <div class="ComboPage ComboSetPage CatsPage FrameDesk xl:m-auto FrameMob FrameMob">
    <div class="Header ComboPageContent flex justify-between">
      <BackTopButton/>
      <BurgMenu/>
    </div>
    <ol class="xl:hidden flex categorySet swipe">
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
        class="OrderMoveAddresses float-left bg-white xl:items-end xl:flex-col CenteringOneItem MobHide xl:h-full flex flex-col justify-center items-center xl:items-start">
    </div>
    <div class="mainEat xl:flex xl:flex-wrap">
      <div class="MobHide InfoGraphics">
        <AddreesTime/>
        <EatMenu/>
      </div>
      <ComboSetsBottom/>
      <div class="MobHide comboNabori__detail">
        <MyOrder/>
        <AddToCardGreen msg="Оформить заказ"/>
        <div class="ComboAdd">
          <div class="Card__more-discount xl:relative xl:left-0">
            <p class="Ag6001624 Card__more">Закажите еще и заберите подарок</p>
            <div class="flex items-center">
              <LoadBar class="LoadPresent"/>
              <p class="Ag4001624 font-semibold LoadPrice relative">301.-</p>
            </div>
          </div>
          <div class="MobHide vision">
            <img class="PresentPizza xl:object-cover xl:z-1" alt="alt" src="../../assets/img/photo86x59px.svg">
            <p class="PresentText text-center">Пицца Вулкан в подарок!</p>
          </div>
        </div>
      </div>
    </div>
    <FooterDesk/>
    <DeskTopPopUp/>
    <DeskTopPopUp2/>
  </div>
</template>
<script>
import BurgMenu from '../burgmenu/Index'
import BackTopButton from '../backtopbutton/Index'
import CatItem from '../pagewithcategory/CategoryItem'
import ComboSetsBottom from '../pagewithcategory/ComboSetsBottom'
import AddreesTime from "@/components/partpage/AddressTime";
import AddToCardGreen from "@/components/addtocardgreen/Index";
import EatMenu from "@/components/partpage/EatMenu";
import MyOrder from "@/components/partpage/MyOrder";
import LoadBar from "@/components/partpage/LoadBar";
import FooterDesk from "@/components/partpage/FooterDesk";
import DeskTopPopUp from "@/components/pagewithcategory/DeskTopPopUp";
import DeskTopPopUp2 from "@/components/pagewithcategory/DeskTopPopUp2";

export default {
  name: 'App',
  components: {
    BurgMenu,
    BackTopButton,
    CatItem,
    MyOrder,
    LoadBar,
    FooterDesk,
    AddreesTime,
    AddToCardGreen,
    EatMenu,
    ComboSetsBottom,
    DeskTopPopUp,
    DeskTopPopUp2
  }
}
function shch(Select, add, whoIsClosed) {
  this.takeTag = function () {
    if (whoIsClosed) document.querySelector(whoIsClosed).classList.toggle(add);
    else {
      this.TagEl.classList.toggle(add);
    }
  };
  this.addE = function () {
    this.TagEl = document.querySelector(Select);
    this.TagEl.addEventListener('click', this.takeTag.bind(this));
  };
}
if (window.location.pathname === '/combonabori') {
  let AddressesList__main = new shch('.AddressesList__main', 'showIt');
  window.addEventListener('load', AddressesList__main.addE.bind(AddressesList__main));
  let closeLog = new shch('.Pop', 'hideIt', '.CardPop');
  window.addEventListener('load', closeLog.addE.bind(closeLog));
  let closeLog2 = new shch('.Pop2', 'hideIt', '.CardPop2');
  window.addEventListener('load', closeLog2.addE.bind(closeLog2));
  let showEat = new shch('.DescriptionItem', 'hideIt', '.CardPop');
  window.addEventListener('load', showEat.addE.bind(showEat));
  let showEat1 = new shch('.DescriptionItem:nth-child(2)', 'hideIt', '.CardPop2');
  window.addEventListener('load', showEat1.addE.bind(showEat1));
}
</script>