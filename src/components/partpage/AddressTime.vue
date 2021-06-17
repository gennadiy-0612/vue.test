<template>
  <ul class="AddressesList MobHide">
    <li class="AddressesList__li AddressesList__main leading-8 relative">Красный проспект, 25/1
    </li>
    <li class="AddressesList__li leading-8">Пн-Чс 10.00-01.00</li>
    <li class="AddressesList__li leading-8">Пт-Сб 10.00 - 02.00</li>
    <li class="AddressesList__li leading-8">Вс 10.00 - 01.00</li>
    <li class="AddressesList__li leading-8">Бизнес-ланч в будни 10.00 -16.00</li>
    <li class="AddressesList__li leading-8">8 (383) 325-35-25</li>
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

.AddressesList__main.showI::after {
  transform: rotate(0deg);
}

.AddressesList__li.showIt::after {
  transform: rotate(180deg);
}
</style>
<script>
// let funcSHCH = {
//   el: '.AddressesList__main',
//   say: function () {
//     let elem = document.querySelector(funcSHCH.el)
//     elem.classList.toggle('showIt')
//   },
//   adds: function () {
//     document.querySelector(funcSHCH.el).addEventListener('click', funcSHCH.say)
//   },
//   LetIsWork: function (elId) {
//     funcSHCH.el = elId;
//     window.addEventListener('load', funcSHCH.adds)
//   }
// };
// funcSHCH.LetIsWork('.AddressesList__main')

</script>