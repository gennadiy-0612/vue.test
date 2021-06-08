<template>
  <div id="closeContentMenu" class="closeContentMenuBottom fixed bottom-0 w-full left-0 bg-white">
    <ul class="BottomMenu flex justify-between">
      <li class="BottomMenu__item menu">
        <a class="BottomMenu__a menu flex justify-between flex-col" href="#ContentMenuBottom">
          <img class="closeContentMenu__icon" src="../../assets/img/menubottom/menubottom.svg">
          <span class="closeContentMenu__text text-center block">Меню</span>
        </a>
      </li>
      <li class="BottomMenu__item actions">
        <a class="BottomMenu__a actions flex justify-between flex-col" href="events">
          <img class="closeContentMenu__icon" src="../../assets/img/menubottom/actions.svg">
          <span class="closeContentMenu__text text-center block">Акции</span>
        </a>
      </li>
      <li class="BottomMenu__item combo">
        <a class="BottomMenu__a combo flex justify-between flex-col" href="#">
          <img class="closeContentMenu__icon" src="../../assets/img/menubottom/combo.svg">
          <span class="closeContentMenu__text text-center local">Комбо</span>
        </a>
      </li>
      <li class="BottomMenu__item login">
        <a class="BottomMenu__a login flex justify-between flex-col" href="#">
          <img class="closeContentMenu__icon" src="../../assets/img/menubottom/login.svg">
          <span class="closeContentMenu__text text-center block">Войти</span>
        </a>
      </li>
      <li class="BottomMenu__item card">
        <a class="BottomMenu__a card flex justify-between flex-col" href="#">
          <img class="closeContentMenu__icon" src="../../assets/img/menubottom/card.svg">
          <span class="closeContentMenu__text text-center block">Корзина</span>
        </a>
      </li>
    </ul>
    <div class="ContentMenu flex-col" id="ContentMenuBottom">
      <a href="#closeContentMenu" class="closeMenuBottom absolute top-0 right-0 block m-r16">
        <X/>
      </a>
      <router-link to="popupbluda">ПопАпБлюда</router-link>
      <router-link to="popupcombo">ПопАпКомбо</router-link>
      <router-link to="events">Акции</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.closeContentMenuBottom {
  border-top: 2px solid #7E7E7E;
  padding: 12px 16px 27px;
}

.BottomMenu__a {
  height: 41px;
  width: 51px;
}

.ContentMenu {
  display: none;
  opacity: 0;
  transition-duration: .7s;
  transition-property: opacity;
}

.ContentMenu:target {
  opacity: 1;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
}

.closeContentMenu__text {
  color: #465500;
  font: normal 600 11px/14px 'Montserrat';
  margin: 7px 0 0;
}
.closeContentMenu__icon{
  height: 26px;
}

</style>
<script>
import X from '../popupbluda/X'

export default {
  name: 'App',
  components: {
    X
  }
}
</script>