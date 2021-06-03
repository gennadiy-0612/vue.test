<template>
  <div id="info" class="LightBoxGreen">
    <a href="#" class="closePopUp block absolute right-0"></a>
    <p class="Ag-h3-to-1070 text-white">Пепперони</p>
    <p class="Ag-text12-to-1070 color7E7E7E p-tb5">Пищевая ценность на 100 г</p>
      <table class="w-full">
        <tr><td class="text-white Ag-text14-to-1070 line-h">Энерг. ценность</td><td class="text-white text-right">253,4 ккал</td></tr>
        <tr><td class="text-white Ag-text14-to-1070 line-h">Белки</td><td class="text-white text-right">9,4 г</td></tr>
        <tr><td class="text-white Ag-text14-to-1070 line-h">Жиры</td><td class="text-white text-right">7,1 г</td></tr>
        <tr><td class="text-white Ag-text14-to-1070 line-h">Углеводы</td><td class="text-white text-right">36,3 г</td></tr>
        <tr><td class="text-white Ag-text14-to-1070 line-h">Вес</td><td class="text-white text-right">700 г</td></tr>
      </table>
  </div>
</template>

<style>

/* Закрываем lightbox */
.LightBoxGreen {
  display: none;
  padding: 16px 16px 10px;
}

.closePopUp {
  top: -26px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: url("../../assets/img/infoGreen.svg") center center no-repeat;
}

/* Открываем lightbox */
.LightBoxGreen:target {
  position: absolute;
  left: 0;
  top: 26px;
  width: 100%;
  display: block;
  align-items: center;
  justify-content: center;
  background-color: #465500;
}
</style>