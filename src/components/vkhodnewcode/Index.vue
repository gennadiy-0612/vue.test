<template>
  <div class="popUpFrame">
    <X/>
    <HeaderTwo msg="Вход на сайт"/>
    <InputPhone/>
    <InputCode/>
    <p class="Ag-text14-to-1070 newCode">Получить новый код</p>
  </div>
</template>
<style>
.newCode{
  color: #8D8D8D;
}
</style>
<script>
import X from "../popupbluda/X";
import HeaderTwo from "../partpage/HeaderTwo";
import InputPhone from "../partpage/InputPhone";
import InputCode from "../partpage/InputCode";

export default {
  name: 'App',
  components: {
    X,
    HeaderTwo,
    InputPhone,
    InputCode
  }
}
</script>