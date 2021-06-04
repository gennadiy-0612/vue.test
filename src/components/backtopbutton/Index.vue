<template>
  <div class="backButton relative">
    Назад
  </div>
</template>
<style>
.backButton{
  text-indent: 30px;
}
.backButton::after{
  content: '';
  position: absolute;
  background:url("../../assets/img/backarrow.svg") center center no-repeat;
  height: 20px;
  width: 20px;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
</style>