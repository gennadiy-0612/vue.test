<template>
  <div id="MenuContent" class="MenuContent w-full h-full CommonMenu hidden flex flex-wrap items-start justify-items-start absolute xl:static top-0 left-0 xl:m-auto">
    <a href="#" class="DescHide closeX fixed right-2 z-2 block top-0 MenuContent__x">
      <X/>
    </a>
    <MainLinkLogo/>
    <ol class="MenuContent__ol flex flex-col justify-center text-center bg-white w-full h-full z-1 E4E4E4">
      <li class="MenuContent__li">
        <a class="Ag6001417 MenuContent__a" href="/vkhodoldcode">Меню</a>
      </li>
      <li class="MenuContent__li">
        <a class="Ag6001417 MenuContent__a" href="/vkhodoldcode">Акции</a>
      </li>
      <li class="MenuContent__li">
        <a class="Ag6001417 MenuContent__a" href="/vkhodoldcode">Доставка и оплата</a>
      </li>
      <li class="MenuContent__li">
        <a class="Ag6001417 MenuContent__a" href="/vkhodoldcode">Контакты</a>
      </li>
      <li class="MenuContent__li">
        <a class="Ag6001417 MenuContent__a" href="/vkhodoldcode">Имя пользователя</a>
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
  padding: 31px 16px;;
}

.MenuContent:target {
  display: flex;
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
</script>