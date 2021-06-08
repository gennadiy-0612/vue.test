<template>
  <div id="MenuContent" class="MenuContent hidden fixed w-full h-full left-0 top-0">
    <a href="#" class="closeX fixed right-2 z-2 block top-0">
      <X/>
    </a>
    <ol class="flex flex-col justify-center text-center absolute bg-white left-0 top-0 w-full h-full z-1 E4E4E4 overflow-y-scroll">
      <li class="MenuContent__li"><a class="Ag6001417" href="/vkhodoldcode">Вход на сайт</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/vkhodnewcode">Вход на сайт новый</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/viborrest">Выберите ресторан, где вы хотите сделать заказ</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/poisk">Выберите город</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/main">Главная</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/pagewithcategory">Страница с категориями</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/combonabori">Комбо-наборы</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/popupbluda">Поп-ап блюда</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/popupcombo">Поп-ап комбо</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/events">Акции</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/lkmobdannie">ЛК Изменить данные</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/lkmobdannie1">ЛК Изменить данные 1</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/lkmobdannie2">ЛК Изменить данные 2</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/card">Шаблон</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/main">main</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/search">search</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/vkhodnewcode">vkhodnewcode</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/infocompany">Информация о компании</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/infousage">Условия использования</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/contacts">Контакты</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/cardmob">Корзина</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/oformzakaza">Оформление заказа</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/oformzakaza1">Оформление заказа1</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/popuptime">Попап выбор времени</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/popupchangeshippingaddress">Изменить адрес доставки</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/popupchangeshippingaddress1">Изменить адрес доставки1</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/popupchangeshippingaddress2">Изменить адрес доставки2</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/popupchangeshippingaddress3">Изменить адрес доставки3</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/oformsamovivoza">Оформление самовывоза</a></li>
      <li class="MenuContent__li"><a class="Ag6001417" href="/oformdostavki">Оформление доставки</a></li>
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