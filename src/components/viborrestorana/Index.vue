<template>
  <div class="popUpFrame">
    <X/>
    <HederTwo msg="Выберите ресторан, где вы хотите сделать заказ"/>
    <div class="whatCity flex flex-wrap justify-between">
      <h3 class="Ag-h3-to-1070">Новосибирск</h3>
      <h3 class="Ag-green-to-1070">Сменить город</h3>
    </div>
    <form action="/action_page.php">
      <div class="itemCity relative">
        <input class="checkIt opacity-0" type="checkbox" id="address1" name="address1" value="Bike">
        <label class="addressGost Ag-text14-to-1070 fs17px" for="address1">Ул. Красный Проспект, 25/1</label>
      </div>
      <div class="itemCity relative">
        <input class="checkIt opacity-0" type="checkbox" id="address2" name="address2" value="Car">
        <label class="addressGost Ag-text14-to-1070 fs17px" for="address2">Ул. Военная, 5, ТРЦ “Аура”</label>
      </div>
      <div class="itemCity relative">
        <input class="checkIt opacity-0" type="checkbox" id="address3" name="address3" value="Boat">
        <label class="addressGost Ag-text14-to-1070 fs17px" for="address3">Ул. Красный Проспект, 101, ТРЦ “Роял Парк”</label>
      </div>
      <div class="itemCity relative">
        <input class="checkIt opacity-0" type="checkbox" id="address4" name="address4" value="Boat">
        <label class="addressGost Ag-text14-to-1070 fs17px" for="address4">Ул. Гоголя, 13, ТРЦ “Галерея”</label>
      </div>
    </form>
    <div class=" map object-cover">
      <img class="w-full" src="../../assets/img/map.png">
    </div>
  </div>
</template>
<style>
.whatCity {
  margin: 30px 0 15px;
}

.itemCity {
  margin: 0 0 24px;
}

.map {
  width: calc(100% + 32px);
  margin: 0 16px 0 -16px;
}
</style>
<script>
import HederTwo from "../partpage/HeaderTwo";
import X from "../popupbluda/X";

export default {
  name: 'App',
  components: {
    HederTwo,
    X
  }
}
</script>