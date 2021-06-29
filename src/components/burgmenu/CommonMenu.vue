<template>
  <div id="MenuContent"
       class="MenuContent w-full h-full CommonMenu hidden flex flex-wrap items-start justify-items-start absolute xl:static top-0 left-0 xl:m-auto">
    <router-link to="#" class="DescHide closeX fixed right-2 z-2 block top-0 MenuContent__x">
      <X/>
    </router-link>
    <MainLinkLogo/>
    <ol class="MenuContent__ol relative flex items-center justify-end flex-row justify-end justify-center text-center w-full h-full z-1">
      <li class="MenuContent__li flex-auto">
        <router-link to="#" class="Ag6001417 MenuContent__a text-white text-white MenuContentJS">Меню</router-link>
      <li class="MenuContent__li flex-auto">
        <router-link to="/events" class="Ag6001417 MenuContent__a text-white">Акции</router-link>
      </li>
      <li class="MenuContent__li flex-auto">
        <router-link to="/vkhodoldcode" class="Ag6001417 MenuContent__a text-white">Доставка и оплата</router-link>
      </li>
      <li class="MenuContent__li flex-auto">
        <router-link to="/contacts" class="Ag6001417 MenuContent__a text-white">Контакты</router-link>
      </li>
      <li class="MenuContent__li flex-auto">
        <router-link to="/vkhodoldcode" class="Ag6001417 MenuContent__a text-white">Имя пользователя</router-link>
      </li>
    </ol>
    <LogIn/>
  </div>
</template>
<style>
.MenuContent__x {
  margin: 6px 8px 0 0;
}

.MenuContent__ol {
  padding: 31px 16px;
}

.MenuContent__li a:hover {
  color: #009200;
  transition-property: color;
  transition-duration: .7s;
}

.MenuContent__ol .MenuContent__a {
  display: block;
  line-height: 37px;
}
</style>
<script>
import X from '../popupbluda/X'
import MainLinkLogo from '../burgmenu/MainLinkLogo'
import LogIn from './LogIn'

export default {
  name: 'App',
  components: {
    X,
    MainLinkLogo,
    LogIn
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

let AllMenu = new shch('.MenuContentJS', 'menuJs', '#ContentMenuBottom');
window.addEventListener('load', AllMenu.addE.bind(AllMenu))
let AllMenuX = new shch('.X', '', '#ContentMenuBottom');
window.addEventListener('load', AllMenuX.addE.bind(AllMenuX))
</script>