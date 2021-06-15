<template>
  <div class="Description relative">
    <a class="showPopUp block absolute right-0 bg-no-repeat bg-center" href="#info"></a>
    <LiteBoxGreen/>
    <h3 class="Ag-h3-to-1070 m-top14">Пепперони</h3>
    <p class="Ag-text12-to-1070 m-top11">Средняя 30 см, традиционное тесто, 700 г</p>
    <p class="Ag-text14-to-1070 m-top16 m-r16">Пикантная колбаса Пепперони, свежие томаты, маслины, каперсы, сыр
      Моцарелла и соус Помадоро</p>
    <h3 class="Ag-h3-to-1070 m-top14">610.-</h3>
  </div>
</template>

<style>
.showPopUp {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: url("../../assets/img/info.svg");
}
</style>
<script>
import LiteBoxGreen from '../litboxgreen/Index'

export default {
  name: 'App',
  components: {
    LiteBoxGreen
  }
}
</script>