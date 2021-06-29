<template>
  <ul class="AddressesList AddressLCombo MobHide">
    <li class="AddressesList__li AddressesList__main leading-8 relative">Красный проспект, 25/1
    </li>
    <li class="AddressesList__li flex justify-between times"><span class="day">Пн-Чс</span><span class="time">10.00 - 01.00</span>
    </li>
    <li class="AddressesList__li flex justify-between times"><span class="day">Пт-Сб</span><span class="time">10.00 - 02.00</span>
    </li>
    <li class="AddressesList__li flex justify-between times"><span class="day">Вс</span><span
        class="time">10.00 - 01.00</span></li>
    <li class="AddressesList__li flex justify-between">Бизнес-ланч в будни 10.00 -16.00</li>
    <li class="AddressesList__li flex justify-between AddressesList__phone">8 (383) 325-35-25</li>
  </ul>
</template>
<style>
.AddressesList__li {
  transition-property: opacity;
  transition-duration: .7s;
}

.AddressesList__main ~ .AddressesList__li {
  opacity: 0;
}

.AddressesList__main.showIt ~ .AddressesList__li {
  opacity: 1;
}

.CatsPage .AddressesList {
  padding-right: 0;
}

.AddressesList__main.showI::after {
  transform: rotate(0deg);
}

.AddressesList__li.showIt::after {
  transform: rotate(180deg);
}


</style>