<template>
  <div class="Events FrameDesk">
    <MenuTop/>
    <div
        class="OrderMoveAddresses bg-white CenteringOneItem xl:h-full flex flex-col justify-center items-center xl:items-start">
      <AddressTime/>
    </div>
    <h2 class="Ag-h2-to-1070 underHead EventsName">Акции</h2>
    <div class="Events__set xl:flex xl:flex-wrap xl:justify-between">
      <div class="Events__item">
        <Photo/>
        <h3 class="Ag-h3-to-1070 Presents">Подарки именинникам</h3>
        <div class="PresentsTo afterLine">
          <p class="Ag-text14-to-1070 PresentsP">Дарим в День рождения скидку 10% на весь
            заказ!</p>
          <p class="Ag-text14-to-1070 PresentsP">А так же сертификат на пиццу
            в ресторане!</p>
          <p class="Ag-text14-to-1070 PresentsP">Укажите кодовое слово “День
            рождения” при оформлении заказа!</p>
          <p class="Ag-text14-to-1070 PresentsPSmall">Скидка
            действует только на доставку
            и не суммируется с другими акциями.
            Сертификат дает право на получение большой
            пиццы из основного меню. Сертификат
            активируется при заказе от 1000 рублей.</p>
          <h3 class="MobHide">
            <router-link class="SeeMore block" to="/">Посмотреть</router-link>
          </h3>
        </div>
      </div>
      <div class="Events__item">
        <Photo/>
        <h3 class="Ag-h3-to-1070 Presents">Подарки именинникам</h3>
        <div class="PresentsTo afterLine">
          <p class="Ag-text14-to-1070 PresentsP">Пицца Пепперони в подарок от 1300 рублей
            При сумме заказа от 1300 р вы получаете пиццу Пепперони 23 см. в подарок! Если вы хотите принять участие в
            этой акции, то при оформлении заказа нажмите на кнопку "Получить подарок".
            *Акция действует только на доставке
            из ресторана "Перчини". Акции не суммируются.</p>
          <h3 class="MobHide">
            <router-link class="SeeMore block" to="/">Посмотреть</router-link>
          </h3>
        </div>
      </div>
      <div class="Events__item PresentsP">
        <Photo/>
        <h3 class="Ag-h3-to-1070 Presents">1 литр натурального морса в подарок</h3>
        <div class="PresentsTo afterLine">
          <p class="Ag-text14-to-1070 PresentsP">При сумме заказа отЮООр вы получаете
            1 литр натурального морса в подарок!
            Если вы хотите принять участие в этой акции, то при оформлении заказа нажмите на кнопку "Получить подарок".
            *Акция действует только на доставке из ресторана "Перчини".
            Акции не суммируются.
          </p>
          <h3 class="MobHide">
            <router-link class="SeeMore block" to="/">Посмотреть</router-link>
          </h3>
        </div>
      </div>
      <div class="Events__item">
        <Photo/>
        <h3 class="Ag-h3-to-1070 Presents">Скидка 10% на самовывоз из ресторана</h3>
        <div class="PresentsTo afterLine">
          <p class="Ag-text14-to-1070 PresentsP">
            Заказывая самовывоз из ресторана Перчини на нашем сайте или через мобильное приложение вы получаете
            преимущества:</p>
          <ol>
            <li class="PresentsP PresentsLi">Заказ к удобному для вас времени;</li>
            <li class="PresentsP PresentsLi">Онлайн оплата на сайте или приложении;</li>
            <li class="PresentsP PresentsLi">Скидка 10% + Подарки по нашим акциям;</li>
            <li class="PresentsP PresentsLi">Вы можете забрать заказ в выбранном вами ресторане Перчини.</li>
          </ol>
          <h3 class="MobHide">
            <router-link class="SeeMore block" to="/">Посмотреть</router-link>
          </h3>
        </div>
      </div>
    </div>
    <FooterDesk/>
    <MenuBottom/>
  </div>
</template>
<style>
.PresentsTo.afterLine::after {
  bottom: -20px;
  background-color: #E4E4E4;
}

.underHead {
  margin: 0 0 19px;
}

.Photo__img {
  height: 142px;
  width: 288px;
  object-fit: cover;
}

.Presents {
  margin: 20px 0 0;
}

.PresentsTo {
  margin: 10px 0 40px;
}

</style>
<script>

import MenuTop from '../menutop/Index'
import AddressTime from '../partpage/AddressTime'
import MenuBottom from '../menubottom/Index'
import FooterDesk from '../partpage/FooterDesk'
import Photo from '../popupbluda/Photo'

export default {
  name: 'App',
  components: {
    MenuBottom,
    AddressTime,
    MenuTop,
    FooterDesk,
    Photo
  }
}

function shch(Select, add) {
  this.takeTag = function () {
    this.TagEl.classList.toggle(add);
  };
  this.addE = function () {
    this.TagEl = document.querySelector(Select);
    this.TagEl.addEventListener('click', this.takeTag.bind(this));
  };
}

if (window.location.pathname === '/events') {
  let cardSwitcherE = new shch('.AddressesList__main', 'showIt');
  window.addEventListener('load', cardSwitcherE.addE.bind(cardSwitcherE));
}
</script>