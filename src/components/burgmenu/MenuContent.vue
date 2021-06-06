<template>
  <div id="MenuContent" class="MenuContent hidden fixed w-full h-full left-0 top-0">
    <a href="#" class="closeX fixed right-2 z-2 block top-0">
      <X/>
    </a>
    <ol class="flex flex-col justify-center text-center absolute bg-white left-0 top-0 w-full h-full z-1 E4E4E4 2xl:overflow-y-scroll">
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
      <li class="MenuContent__li"><a class="Ag6001417" href="/vkhodnewcode">vkhodnewcode</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/infocompany">Информация о компании</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/infousage">Условия использования</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/contacts">Контакты</a></li>
    </ol>
  </div>
</template>
<style>
.MenuContent:target {
  display: flex;
}
.MenuContent__li:hover{
  background-color: #7E7E7E;
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