<template>
  <div class="Events">
    <MenuTop/>
    <h2 class="Ag-h2-to-1070 underHead">Акции</h2>
    <Photo/>
    <h3 class="Ag-h3-to-1070 Presents">Подарки именинникам</h3>
    <div class="PresentsTo afterLine">
      <p class="Ag-text14-to-1070">Дарим в День рождения скидку 10% на весь
        заказ! А так же сертификат на пиццу
        в ресторане! Укажите кодовое слово “День
        рождения” при оформлении заказа! Скидка
        действует только на доставку
        и не суммируется с другими акциями.
        Сертификат дает право на получение большой
        пиццы из основного меню. Сертификат
        активируется при заказе от 1000 рублей.</p>
    </div>
    <Photo/>
    <h3 class="Ag-h3-to-1070 Presents">Подарки именинникам</h3>
    <MenuBottom/>
  </div>
</template>
<style>
.PresentsTo.afterLine::after{
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
import MenuBottom from '../menubottom/Index'
import Photo from '../popupbluda/Photo'

export default {
  name: 'App',
  components: {
    MenuBottom,
    MenuTop,
    Photo
  }
}
</script>