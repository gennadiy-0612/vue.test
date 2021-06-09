<template>
  <div id="MenuContent"
       class="MenuContent hidden flex flex-wrap items-start justify-items-start absolute top-0 left-0 w-full">
    <a href="#" class="closeX fixed right-2 z-2 block top-0 MenuContent__x">
      <X/>
    </a>
    <ol class="MenuContent__ol flex flex-col justify-center text-center bg-white w-full h-full z-1 E4E4E4">
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/vkhodoldcode">Вход на сайт</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/vkhodnewcode">Вход на сайт новый</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/viborrest">Выберите ресторан, где вы хотите
        сделать заказ</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/poisk">Выберите город</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/main">Главная</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/pagewithcategory">Страница с
        категориями</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/combonabori">Комбо-наборы</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/popupbluda">Поп-ап блюда</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/popupcombo">Поп-ап комбо</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/events">Акции</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/lkmobdannie">ЛК Изменить данные</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/lkmobdannie1">ЛК Изменить данные 1</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/lkmobdannie2">ЛК Изменить данные 2</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/card">Шаблон</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/main">main</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/search">search</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/vkhodnewcode">vkhodnewcode</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/infocompany">Информация о компании</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/infousage">Условия использования</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/contacts">Контакты</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/cardmob">Корзина</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/oformzakaza">Оформление заказа</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/oformzakaza1">Оформление заказа1</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/popuptime">Попап выбор времени</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/popupchangeshippingaddress">Изменить адрес
        доставки</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/popupchangeshippingaddress1">Изменить адрес
        доставки1</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/popupchangeshippingaddress2">Изменить адрес
        доставки2</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/popupchangeshippingaddress3">Изменить адрес
        доставки3</a></li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/oformsamovivoza">Оформление самовывоза</a>
      </li>
      <li class="MenuContent__li"><a class="Ag6001417 MenuContent__a" href="/oformdostavki">Оформление доставки</a></li>
    </ol>
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