<template>
  <div class="OrderMore">
    <div class="flex justify-between items-center">
      <h3 class="Ag-h3-to-1070">Закажите ещё и получите подарок</h3>
      <h3 class="Ag-h3-to-1070">301.-</h3>
    </div>
    <div class="flex justify-between sum">
      <p class="Ag-text16-to-1070">Сумма заказа</p>
      <p class="Ag-text16-to-1070 fs22">1 049.-</p>
    </div>
    <p class="OrderMore-add-to-card Ag-text18-to-1070">
      Добавить в корзину</p>
  </div>
</template>

<style scoped>
@media (max-width: 1069px) {
  .sum {
    margin: 6px 0 9px;
  }

  .OrderMore-add-to-card {
    background-color: #009200;
    color: #ffffff;
    text-align: center;
    line-height: 45px;
    font-weight: 600;
    transition-property: color, background-color;
    transition-duration: .7s;
  }

  .OrderMore-add-to-card:hover {
    color: #009200;
    background-color: #E6E6E6;
  }

  .fs22 {
    font-size: 20px;
    letter-spacing: -0.9px;
  }
}
</style>