<template>
  <div class="Order lkmob2ChangePD ChangePD ChangePD2 FrameMob">
    <div class="Header flex justify-between">
      <Address/>
      <BurgMenu/>
    </div>
    <ChangePersonalData class="lkmobdannie2"/>
    <div class="myAddress ChangePD__address">
      <div class="DataItem xl:m-auto">
        <p class="Ag-text14-to-1070 fs14px DataItem__address DataItem-point">Мой адрес</p>
        <div class="itemCity relative flex justify-between ">
          <p class="Ag-text14-to-1070 line-h17px fs14px block DataItem__address">г. Новосибирск, ул. Улица...</p>
          <a class="block Option activeOption DataItem__setting text-center">Изменить</a>
        </div>
      </div>
      <div class="DataItem xl:m-auto">
        <p class="Ag-text14-to-1070 fs14px DataItem__address DataItem-point">Мой адрес</p>
        <div class="itemCity relative flex justify-between ">
          <p class="Ag-text14-to-1070 line-h17px fs14px block DataItem__address">г. Новосибирск, ул. Улица...</p>
          <a class="block Option activeOption DataItem__setting text-center">Сохранить</a>
        </div>
      </div>
    </div>
    <form class="ChangePD__where xl:m-auto">
      <div class="raw flex">
        <input class="searchButton bg-E4E4E4 border-solid border-0 w-full block" placeholder="Город" type="text"
               id="city"
               name="city">
      </div>
      <div class="raw flex Flat">
        <input class="Flat__Street searchButton bg-E4E4E4 border-solid border-0 w-full block street" placeholder="Улица"
               type="text"
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
    <div class="ButtonFrame xl:m-auto">
      <BlackButton class="lkmobdannie__setButtons lkm2B BlackButtonDesk xl:m-auto" msg="Добавить"/>
      <MenuBottom/>
    </div>
    <FooterDesk/>
  </div>
</template>
<style>.ChangePD__where {
  margin: 0 0 -5px;
}

.changeDataAddress.activeOption::after {
  background-color: #465502;
  content: '';
  width: 100%;
  position: absolute;
  height: 2px;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.ChangePD .changeDataPerson {
  font-weight: 400;
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
</style>
<script>
import BurgMenu from '../burgmenu/Index'
import Address from '../partpage/Address'
import ChangePersonalData from '../partpage/ChangePersonalData'
import BlackButton from '../addtocardblack/Index'
import MenuBottom from '../menubottom/Index'
import FooterDesk from '../partpage/FooterDesk'

export default {
  name: 'App',
  components: {
    BurgMenu,
    Address,
    ChangePersonalData,
    BlackButton,
    MenuBottom,
    FooterDesk
  }
}
</script>