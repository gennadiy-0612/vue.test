<template>
  <div class="Ag-back-to-1070 backButton relative xl:hidden">
    <router-link class="no-underlineMy" to="/">Назад</router-link>
  </div>
</template>
<style>
.backButton {
  text-indent: 26px;
}

.backButton::after {
  content: '';
  position: absolute;
  background: url("../../assets/img/backarrow.svg") center center no-repeat;
  height: 20px;
  width: 20px;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
</style>