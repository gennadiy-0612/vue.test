<template>
  <div class="LogFrame">
    <X/>
    <HederTwo msg="Вход на сайт"/>
    <InputPhone/>
    <BlackButton msg="Выслать код"/>
  </div>
</template>
<style>
.LogFrame {
  padding: 40% 10% 10%;
}
</style>
<script>
import X from "../popupbluda/X";
import HederTwo from "../partpage/HeaderTwo";
import InputPhone from "../partpage/InputPhone";
import BlackButton from "../addtocardblack/Index";

export default {
  name: 'App',
  components: {
    X,
    HederTwo,
    InputPhone,
    BlackButton
  }
}
</script>