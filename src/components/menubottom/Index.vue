<template>
  <div>
    <div id="closeContentMenu" class="DescHide closeContentMenuBottom fixed bottom-0 w-full left-0 bg-white">
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
    <div class="ContentMenu DescHide flex-col" id="ContentMenuBottom">
      <a href="#closeContentMenu" class="closeMenuBottom absolute top-0 right-0 block m-r16">
        <X/>
      </a>
      <router-link to="popupbluda">ПопАпБлюда</router-link>
      <router-link to="popupcombo">ПопАпКомбо</router-link>
      <router-link to="events">Акции</router-link>
      <router-link to="vkhodoldcode">Вход на сайт</router-link>
      <router-link to="vkhodoldcodedesc">Вход на сайт Desc</router-link>
      <router-link to="vkhodnewcode">Вход на сайт новый</router-link>
      <router-link to="vkhodnewcodedesc">Вход на сайт новый Desk</router-link>
      <router-link to="viborrest">Выберите ресторан, где вы хотите сделать заказ</router-link>
      <router-link to="poisk">Выберите город</router-link>
      <router-link to="main">Главная</router-link>
      <router-link to="pagewithcategory">Страница с категориями</router-link>
      <router-link to="combonabori">Комбо-наборы</router-link>
      <router-link to="popupbluda">Поп-ап блюда</router-link>
      <router-link to="popupcombo">Поп-ап комбо</router-link>
      <router-link to="events">Акции</router-link>
      <router-link to="lkmobdannie">ЛК Изменить данные</router-link>
      <router-link to="lkmobdannie1">ЛК Изменить данные 1</router-link>
      <router-link to="lkmobdannie2">ЛК Изменить данные 2</router-link>
      <router-link to="card">Шаблон</router-link>
      <router-link to="main">main</router-link>
      <router-link to="search">search</router-link>
      <router-link to="vkhodnewcode">vkhodnewcode</router-link>
      <router-link to="infocompany">Информация о компании</router-link>
      <router-link to="infousage">Условия использования</router-link>
      <router-link to="contacts">Контакты</router-link>
      <router-link to="cardmob">Корзина</router-link>
      <router-link to="oformzakaza">Оформление заказа</router-link>
      <router-link to="oformzakaza1">Оформление заказа1</router-link>
      <router-link to="popuptime">Попап выбор времени</router-link>
      <router-link to="popupchangeshippingaddress">Изменить адрес доставки</router-link>
      <router-link to="popupchangeshippingaddress1">Изменить адрес доставки1</router-link>
      <router-link to="popupchangeshippingaddress2">Изменить адрес доставки2</router-link>
      <router-link to="popupchangeshippingaddress3">Изменить адрес доставки3</router-link>
      <router-link to="oformsamovivoza">Оформление самовывоза</router-link>
      <router-link to="oformdostavki">Оформление доставки</router-link>
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
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  flex-wrap: wrap;
  align-items: center;
  background-color: #FFFFFF;
  margin: auto;
  z-index: 1;
  height: 100%;
  justify-content: center;
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