<template>
  <div>
    <X/>
    <ul class="BottomMenu flex justify-between">
      <li class="BottomMenu__item menu"><a class="BottomMenu__a menu block" href="#"><img
          src="../../assets/img/menubottom/menubottom.svg"></a></li>
      <li class="BottomMenu__item actions"><a class="BottomMenu__a actions" href="#"><img
          src="../../assets/img/menubottom/actions.svg"></a></li>
      <li class="BottomMenu__item combo"><a class="BottomMenu__a combo" href="#"><img
          src="../../assets/img/menubottom/combo.svg"></a></li>
      <li class="BottomMenu__item login"><a class="BottomMenu__a login" href="#"><img
          src="../../assets/img/menubottom/login.svg"></a></li>
      <li class="BottomMenu__item card"><a class="BottomMenu__a card" href="#"><img
          src="../../assets/img/menubottom/combo.svg"></a></li>
    </ul>
    <router-link to="popupbluda">ПопАпБлюда</router-link>
    <router-link to="popupcombo">ПопАпКомбо</router-link>
    <router-view></router-view>
  </div>
</template>

<style>
.BottomMenu {
  background-color: #FFFFFF;
}

.BottomMenu__a {
  height: 45px;
  width: 51px;
}

.menu {
  background: url("../../assets/img/menubottom/menubottom.svg") center center no-repeat;
}
</style>