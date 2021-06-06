<template>
  <div id="MenuContent" class="MenuContent hidden fixed w-full h-full left-0 top-0">
    <a href="#" class="closeX fixed right-2 z-2 block top-0">
      <X/>
    </a>
    <ol class="flex flex-col justify-center text-center absolute bg-white left-0 top-0 w-full h-full z-1 E4E4E4 overflow-y-scroll">
      <li class="MenuContent__li"><a class="Ag6001417" href="/card">Шаблон</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/popupbluda">popupbluda</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/popupcombo">popupcombo</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/combonabori">combonabori</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/pagewithcategory">pagewithcategory</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/main">main</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/events">actions</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/search">search</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/viborrest">viborrest</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/vkhodoldcode">vkhodoldcode</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/vkhodnewcode">vkhodnewcode</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/lkmobdannie">lkmobdannie</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/lkmobdannie1">lkmobdannie1</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/lkmobdannie2">lkmobdannie2</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/vkhodnewcode">vkhodnewcode</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/infocompany">Информация о компании</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/infousage">Условия использования</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/contacts">Контакты</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/cardmob">Корзина</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/oformzakaza">Оформление заказа</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/oformzakaza1">Оформление заказа1</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/popuptime">Попап выбор времени</a></li>
    </ol>
  </div>
</template>
<style>
.MenuContent:target {
  display: flex;
}
.MenuContent__li a:hover{
  color: #009200;
  transition-property: color;
  transition-duration: .7s;
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