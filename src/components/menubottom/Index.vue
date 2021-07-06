<template>
  <div>
    <div id="closeContentMenu" class="xl:hidden closeContentMenuBottom fixed bottom-0 w-full left-0 bg-white">
      <ul class="BottomMenu flex justify-between">
        <li class="BottomMenu__item menu">
          <a class="BottomMenu__a menu flex justify-between flex-col" href="#ContentMenuBottom">
            <img alt="alt" class="closeContentMenu__icon" src="../../assets/img/menubottom/menubottom.svg">
            <span class="closeContentMenu__text text-center block">Меню</span>
          </a>
        </li>
        <li class="BottomMenu__item actions">
          <a class="BottomMenu__a actions flex justify-between flex-col" href="events">
            <img alt="alt" class="closeContentMenu__icon" src="../../assets/img/menubottom/actions.svg">
            <span class="closeContentMenu__text text-center block">Акции</span>
          </a>
        </li>
        <li class="BottomMenu__item combo">
          <a class="BottomMenu__a combo flex justify-between flex-col" href="#">
            <img alt="alt" class="closeContentMenu__icon" src="../../assets/img/menubottom/combo.svg">
            <span class="closeContentMenu__text text-center local">Комбо</span>
          </a>
        </li>
        <li class="BottomMenu__item login">
          <a class="BottomMenu__a login flex justify-between flex-col" href="#">
            <img alt="alt" class="closeContentMenu__icon" src="../../assets/img/menubottom/login.svg">
            <span class="closeContentMenu__text text-center block">Войти</span>
          </a>
        </li>
        <li class="BottomMenu__item card">
          <a class="BottomMenu__a card flex justify-between flex-col" href="#">
            <img alt="alt" class="closeContentMenu__icon" src="../../assets/img/menubottom/card.svg">
            <span class="closeContentMenu__text text-center block">Корзина</span>
          </a>
        </li>
      </ul>
    </div>
    <ol class="ContentMenu xl:hidden flex-col" id="ContentMenuBottom">
      <a href="#closeContentMenu" class="closeMenuBottom absolute top-0 right-0 block m-r16">
        <X/>
      </a>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/poisk">Выберите город</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/viborrest">Выберите ресторан</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/events">Акции</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/main">Главная</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/infocompany">Информация о компании</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/vkhodoldcode">Вход на сайт</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/vkhodoldcodedesc">Вход на сайт Desk</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/vkhodnewcode">Вход на сайт новый</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/vkhodnewcodedesc">Вход на сайт новый Desk</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/main">Главная</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/combonabori">Комбо-наборы</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/contacts">Контакты</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/cardmob">Корзина</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/lkmobdannie">ЛК Изменить данные</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/lkmobdannie1">ЛК Изменить данные 1</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/lkmobdannie2">ЛК Изменить данные 2</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/oformzakaza">Оформление заказа</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/oformzakaza2">Оформление заказа1</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/oformzakaza2">Оформление заказа2</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/oformsamovivoza">Оформление самовывоза</router-link>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/oformdostavki">Оформление доставки</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/popupbluda">Поп-ап блюда</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/popupcombo">Поп-ап комбо</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/popuptime">Попап выбор времени</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/popupchangeshippingaddress">Изменить адрес доставки
        </router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/popupchangeshippingaddress1">Изменить адрес доставки1
        </router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/popupchangeshippingaddress2">Изменить адрес доставки2
        </router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/popupchangeshippingaddress3">Изменить адрес доставки3
        </router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/pagewithcategory">Страница с категориями</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/card">Шаблон</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/search">search</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/vkhodnewcode">vkhodnewcode</router-link>
      </li>
      <li class="MenuContent__li">
        <router-link class="Ag6001417 MenuContent__a" to="/infousage">Условия использования</router-link>
      </li>

      <router-view></router-view>
    </ol>
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
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  align-items: center;
  background-color: #FFFFFF;
  margin: auto;
  z-index: 1;
  height: 100%;
  justify-content: flex-start;
  overflow-y: scroll;
}

.closeContentMenu__text {
  color: #465500;
  font: normal 600 11px/14px 'Montserrat';
  margin: 7px 0 0;
}

.closeContentMenu__icon {
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