<template>
  <div class="Contacts xl:m-auto FrameMob">
    <div class="Header flex justify-between">
      <Address/>
      <BurgMenu/>
    </div>
    <div class="xl:hidden">
      <HeadTwo msg="Контакты"/>
    </div>
    <div class="HeadSet">
      <HeaderPopUp class="Contacts__h3 font-semibold" msg="Новосибирск"/>
    </div>
    <ul class="MobHide ContactList">
      <li class="ContactList__Item">
        <p class="ContactList__h1 xl:font-light">Телефон</p>
        <p class=" ContactList__link xl:font-semibold">8 800 383-55-51</p>
      </li>
      <li class="ContactList__Item">
        <p class="ContactList__h1 xl:font-light">Вопросы и предложения</p>
        <p class=" ContactList__link xl:font-semibold">feedback@perchini.com</p>
      </li>
    </ul>
    <div class="overflow-hidden">
      <div class="DeskContactSet xl:flex xl:justify-between xl:flex-wrap">
        <ConactItem head3="Первомайский сквер" street="Площадь Ленина" house="Ул. Красный проспект, 25/1"/>
        <ConactItem head3="ТРЦ “Аура”" street="Площадь Ленина" house="Ул. Военная, 5"/>
        <ConactItem head3="ТРЦ “Галерея”" street="Красный проспект" house="Ул. Гоголя, 13"/>
        <ConactItem head3="ТРЦ “Роял Парк”" street="Площадь Ленина" house="Ул. Красный проспект, 25/1"/>
        <ConactItem head3="ТРЦ “Роял Парк”" street="Площадь Ленина" house="Ул. Красный проспект, 25/1"/>
        <ConactItem head3="ТРЦ “Роял Парк”" street="Площадь Ленина" house="Ул. Красный проспект, 25/1"/>
      </div>
      <FooterDesk/>
      <MenuBottom/>
    </div>
  </div>
</template>
<style>
.Contacts .HeadFrame {
  justify-content: left;
}

.Contacts .HeadSet {
  margin: 10px 0 -20px;
}

.Contacts .h2Papa {
  justify-content: flex-start;
  margin-top: 30px;
}
</style>
<script>
import BurgMenu from '../burgmenu/Index'
import HeaderPopUp from '../partpage/HeaderPopUp'
import HeadTwo from '../partpage/HeaderTwo'
import Address from '../partpage/Address'
import ConactItem from './ContactItem'
import FooterDesk from '../partpage/FooterDesk'
import MenuBottom from '../menubottom/Index'

export default {
  name: 'App',
  components: {
    BurgMenu,
    Address,
    HeaderPopUp,
    HeadTwo,
    ConactItem,
    FooterDesk,
    MenuBottom
  }
}
</script>