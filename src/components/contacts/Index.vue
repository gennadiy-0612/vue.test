<template>
  <div class="comboNabori Contacts">
    <div class="Header flex justify-between">
      <Address/>
      <BurgMenu/>
    </div>
    <HeadTwo msg="Контакты"/>
    <div class="HeadSet">
      <HeaderPopUp msg="Новосибирск"/>
    </div>
    <ConactItem head3="Первомайский сквер" street="Площадь Ленина" house="Ул. Красный проспект, 25/1"/>
    <ConactItem head3="ТРЦ “Аура”" street="Площадь Ленина" house="Ул. Военная, 5"/>
    <ConactItem head3="ТРЦ “Галерея”" street="Красный проспект" house="Ул. Гоголя, 13"/>
    <ConactItem head3="ТРЦ “Роял Парк”" street="Площадь Ленина" house="Ул. Красный проспект, 25/1"/>
    <MenuBottom/>
  </div>
</template>
<style>.Contacts .HeadFrame {
  justify-content: left;
}

.Contacts .HeadSet {
  margin: 10px 0 -20px;
}

.Contacts .h2Papa {
  justify-content: flex-start;
}

.Contacts .h3 {
  margin: 0 0 30px;
}
</style>
<script>
import BurgMenu from '../burgmenu/Index'
import HeaderPopUp from '../partpage/HeaderPopUp'
import HeadTwo from '../partpage/HeaderTwo'
import Address from '../address/Index'
import ConactItem from './ContactItem'
import MenuBottom from '../menubottom/Index'

export default {
  name: 'App',
  components: {
    BurgMenu,
    Address,
    HeaderPopUp,
    HeadTwo,
    ConactItem,
    MenuBottom
  }
}
</script>