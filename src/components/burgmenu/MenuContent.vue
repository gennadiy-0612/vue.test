<template>
  <div id="MenuContent"
       class="MenuContent hidden flex flex-wrap items-start justify-items-start absolute top-0 left-0 w-full">
    <a to="#" class="closeX fixed right-2 z-2 block top-0 MenuContent__x">
      <X/>
    </a>
    <ol class="MenuContent__ol flex flex-col justify-center text-center bg-white w-full h-full z-1 E4E4E4">
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/vkhodoldcode">Вход на сайт</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/vkhodoldcodedesc">Вход на сайт  Desk</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/vkhodnewcode">Вход на сайт новый</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/vkhodnewcodedesc">Вход на сайт новый Desk</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/viborrest">Выберите ресторан, где вы хотите
        сделать заказ</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/poisk">Выберите город</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/main">Главная</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/pagewithcategory">Страница с
        категориями</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/combonabori">Комбо-наборы</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/popupbluda">Поп-ап блюда</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/popupcombo">Поп-ап комбо</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/events">Акции</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/lkmobdannie">ЛК Изменить данные</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/lkmobdannie1">ЛК Изменить данные 1</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/lkmobdannie2">ЛК Изменить данные 2</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/card">Шаблон</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/main">main</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/search">search</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/vkhodnewcode">vkhodnewcode</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/infocompany">Информация о компании</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/infousage">Условия использования</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/contacts">Контакты</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/cardmob">Корзина</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/oformzakaza">Оформление заказа</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/oformzakaza1">Оформление заказа1</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/popuptime">Попап выбор времени</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/popupchangeshippingaddress">Изменить адрес
        доставки</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/popupchangeshippingaddress1">Изменить адрес
        доставки1</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/popupchangeshippingaddress2">Изменить адрес
        доставки2</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/popupchangeshippingaddress3">Изменить адрес
        доставки3</router-link></li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/oformsamovivoza">Оформление самовывоза</router-link>
      </li>
      <li class="MenuContent__li"><router-link class="Ag6001417 MenuContent__a" to="/oformdostavki">Оформление доставки</router-link></li>
    </ol>
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

export default {
  name: 'App',
  components: {
    X
  }
}
</script>