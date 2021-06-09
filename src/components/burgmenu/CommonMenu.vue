<template>
  <div id="MenuContent"
       class="MenuContent h-full CommonMenu hidden flex flex-wrap items-start justify-items-start absolute top-0 left-0 w-full">
    <a href="#" class="closeX fixed right-2 z-2 block top-0 MenuContent__x">
      <X/>
    </a>
    <a class="ButtonMain block MobHide" href="/"></a>
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
    <ul class="logCard MobHide">
      <li class="logCard__li">
        <a class="logCard__a logCard__a-user" href="#"></a>
      </li>
      <li class="logCard__li">
        <a class="logCard__a logCard__a-card" href="#"></a>
      </li>
    </ul>
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

export default {
  name: 'App',
  components: {
    X
  }
}
</script>