<template>
  <div class="ContactsItem afterLine">
    <div class="flex justify-center items-center HeadFrame">
      <h3 class="h3 Ag-text18-to-1070 PopUpHeader PopUpHead text-center font-semibold ContactsItem__head">{{ head3 }}</h3>
    </div>
    <p class="BackM">
      <span class="BackM__p BackM__p-locate xl:relative">{{ street }}</span>
      <br/>
      <span class="BackM__p BackM__p-left xl:relative">{{ house }}</span>
    </p>
    <div class="TimeTableSet flex flex-wrap flex-col">
      <div class="TimeTable flex justify-between">
        <p class="Ag-text14-to-1070 TimeTable__p">Пн - Чт</p>
        <p class="Ag-text14-to-1070 TimeTable__p">10.00 - 01.00</p>
      </div>
      <div class="TimeTable flex justify-between">
        <p class="Ag-text14-to-1070 TimeTable__p">Пт - Сб</p>
        <p class="Ag-text14-to-1070 TimeTable__p">10.00 - 02.00</p>
      </div>
      <div class="TimeTable flex justify-between">
        <p class="Ag-text14-to-1070 TimeTable__p">Вс</p>
        <p class="Ag-text14-to-1070 TimeTable__p">10.00 - 02.00</p>
      </div>
    </div>
    <a class="Ag-text14-to-1070 block TimeTableSet__phone" href="tel:8-383-325-35-25">8 (383) 325-35-25</a>
  </div>
</template>
<style>
.Contacts .ContactsItem .h3 {
  margin: 0;
  padding: 0 0 10px;
}

.ContactsItem__head {
  margin: 0 0 10px;
}

.Contacts .HeadFrame {
  justify-content: left;
}

.TimeTableSet {
  margin: 3px 0 4px;
}

.TimeTable {
  margin: 4px 0 0
}

.BackM {
  position: relative;
  padding-left: 46px;
  line-height: 21px;
}

.BackM::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 24px;
  width: 36px;
  display: block;
  background: url("../../assets/img/contacts/m.svg") center center no-repeat;
  background-size: contain;
}

.ContactsItem {
  padding: 0 0 11px;
  margin: 0 0 42px;
}

.ContactsItem.afterLine::after {
  background-color: #E4E4E4;
  bottom: 0;
}
</style>

<script>
export default {
  name: 'ContactItem',
  props: {
    head3: String,
    street: String,
    house: String,
  }
}
</script>