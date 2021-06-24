<template>
  <div class="DeskMapPage back-05">
    <div class="DeskTopMap bg-white">
      <div class="MapDescDesK">
        <div class="popUpFrame bg-white choseCity">
          <router-link to="/">
            <X/>
          </router-link>
          <HeaderTwo msg="Выберите ресторан, где вы хотите сделать заказ"/>
          <div class="whatCity whatCityDesk flex flex-wrap justify-between">
            <h3 class="Ag-h3-to-1070 whatCityDesk__h3 whatCityDesk__h3-act">Новосибирск</h3>
            <h3 class="Ag-green-to-1070 whatCityDesk__h3">Сменить город</h3>
          </div>
          <form class="addressOfCity" action="/action_page.php">
            <div class="itemCity relative flex afterLine">
              <input class="checkIt opacity-0" type="radio" id="address1" name="address1" value="Bike">
              <label class="addressGost Ag-text14-to-1070 fs17px flex" for="address1">Ул. Красный Проспект, 25/1</label>
            </div>
            <div class="itemCity relative flex afterLine">
              <input class="checkIt opacity-0" type="radio" id="address2" name="address2" value="Car">
              <label class="addressGost Ag-text14-to-1070 fs17px flex" for="address2">Ул. Военная, 5, ТРЦ “Аура”</label>
            </div>
            <div class="itemCity relative flex afterLine">
              <input class="checkIt opacity-0" type="radio" id="address3" name="address3" value="Boat">
              <label class="addressGost Ag-text14-to-1070 fs17px flex" for="address3">Ул. Красный Проспект, 101, ТРЦ
                “Роял
                Парк”</label>
            </div>
            <div class="itemCity relative flex afterLine">
              <input class="checkIt opacity-0" type="radio" id="address4" name="address4" value="Boat">
              <label class="addressGost Ag-text14-to-1070 fs17px flex" for="address4">Ул. Гоголя, 13, ТРЦ
                “Галерея”</label>
            </div>
          </form>
        </div>
      </div>
      <div class="MapDesK">
        <div class="map object-cover">
<img alt="alt"  class="w-full MAP" src="../../assets/img/map.png">
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.choseCity .afterLine::after {
  bottom: -15px;
  background-color: #E4E4E4;
}

.whatCity {
  margin: 30px 0 15px;
}

.choseCity .itemCity {
  margin: 18px 0 26px;
}

.choseCity .addressOfCity {
  margin: 0 0 43px;
}

.choseCity .addressGost {
  font-size: 14px;
}

.addressGost {
  margin-left: 5px;
  line-height: 20px;
}

.checkIt + .addressGost::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 0;
  height: 13px;
  width: 13px;
  border-radius: 50%;
  border: 1px solid #8D8D8D;
}

.showIt + .addressGost::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 3px;
  height: 7px;
  width: 7px;
  border-radius: 50%;
  background-color: #039305;
}
.showIt, .showIt::after{
  transition-duration: .7s;
  transition-property: all;
}
.showIt + .addressGost::after {
  border: 1px solid #039305;
}

.itemCity {
  margin: 3px 0 20px;
}

.map {
  width: calc(100% + 32px);
  margin: 0 16px -16px -16px;
}
</style>
<script>
import HeaderTwo from '../partpage/HeaderTwo'
import X from '../popupbluda/X'

export default {
  name: 'App',
  components: {
    HeaderTwo,
    X
  }
}
</script>