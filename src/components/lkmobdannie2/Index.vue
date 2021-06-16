<template>
  <div class="comboNabori Order ChangePD">
    <div class="Header flex justify-between">
      <Address/>
      <BurgMenu/>
    </div>
    <ChangePersonalData/>
    <div class="myAddress ChangePD__address">
      <div class="DataItem">
        <p class="Ag-text14-to-1070 fs14px DataItem__address DataItem-point">Мой адрес</p>
        <div class="itemCity relative flex justify-between ">
          <p class="Ag-text14-to-1070 line-h17px fs14px block DataItem__address">г. Новосибирск, ул. Улица...</p>
          <a class="block Option activeOption DataItem__setting">Изменить</a>
        </div>
      </div>
      <div class="DataItem">
        <p class="Ag-text14-to-1070 fs14px DataItem__address DataItem-point">Мой адрес</p>
        <div class="itemCity relative flex justify-between ">
          <p class="Ag-text14-to-1070 line-h17px fs14px block DataItem__address">г. Новосибирск, ул. Улица...</p>
          <a class="block Option activeOption DataItem__setting">Сохранить</a>
        </div>
      </div>
    </div>
    <form class="ChangePD__where">
      <div class="raw flex">
        <input class="searchButton bg-E4E4E4 border-solid border-0 w-full block" placeholder="Город" type="text"
               id="city"
               name="city">
      </div>
      <div class="raw flex Flat">
        <input class="Flat__Street searchButton bg-E4E4E4 border-solid border-0 w-full block street" placeholder="Улица" type="text"
               id="street" name="street">
        <input class="House searchButton bg-E4E4E4 border-solid border-0 w-full block" placeholder="Дом" type="text"
               id="Flat__House" name="house">
      </div>
      <div class="raw flex">
        <input class="searchButton bg-E4E4E4 border-solid border-0 w-full block" placeholder="Кв" type="text" id="flat"
               name="flat">
        <input class="searchButton bg-E4E4E4 border-solid border-0 w-full block" placeholder="Подъезд" type="text"
               id="column" name="column">
        <input class="searchButton bg-E4E4E4 border-solid border-0 w-full block" placeholder="Этаж" type="text"
               id="level" name="level">
      </div>
      <div class="raw flex">
        <input class="searchButton bg-E4E4E4 Ag-text14-to-1070 border-solid border-0 w-full block"
               placeholder="Название адреса"
               type="text"
               id="address" name="address">
      </div>
      <div class="raw flex">
        <input class="searchButton bg-E4E4E4 Ag-text14-to-1070 border-solid border-0 w-full block"
               placeholder="Комментарий к адресу"
               type="text" id="detail" name="detail">
      </div>
    </form>
    <div class="Order__setButtons BlackButtonDesk">
      <BlackButton msg="Добавить"/>
    </div>
    <MenuBottom/>
  </div>
</template>
<style>.ChangePD__where {
  margin: 0 0 -5px;
}

.changeDataAddress.afterLine-change::after {
  background-color: #465502;
  content: '';
  width: 100%;
  position: absolute;
  height: 2px;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.ChangePD .activeOption::after {
  height: 0;
}

.ChangePD .changeDataPerson {
  font-weight: 400;
}

.ChangePD .changeDataAddress {
  font-weight: 700;
  color: #465502;
}

.ChangePD .raw {
  margin: 0 -5px -1px;
}

.ChangePD .Option {
  line-height: 17px;
}

.myAddress {
  margin: 0 0 -18px;
}

.Order .itemCity {
  margin: 3px 0 21px;
}

.ChangePD .afterLine-PersonData {
  margin: 2px 0 27px;
  align-items: flex-end;
  justify-content: flex-start;
}

.ChangePD.Order .itemCity {
  margin: 2px 0 6px;
}

.Order .Option.activeOption {
  line-height: 17px;
}

.ChangePD__address.myAddress {
  margin: 0 0 -5px;
}

.Order .searchButton {
  margin: 5px;
  padding: 10px;
  height: 34px;
  letter-spacing: -0.7px;
}

.street {
  flex: 1 1 137%;
}

.searchButton::placeholder {
  color: #000000;
}

.raw {
  margin: 0 -5px;
}

.Order__setButtons .OrderMore-add-to-card-black {
  margin: 20px 0 0;
}
</style>
<script>
import BurgMenu from '../burgmenu/Index'
import Address from '../address/Index'
import ChangePersonalData from '../partpage/ChangePersonalData'
import BlackButton from '../addtocardblack/Index'
import MenuBottom from '../menubottom/Index'

export default {
  name: 'App',
  components: {
    BurgMenu,
    Address,
    ChangePersonalData,
    BlackButton,
    MenuBottom
  }
}
</script>