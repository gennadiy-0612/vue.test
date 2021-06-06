<template>
  <div class="popUpFrame">
    <X/>
    <HederTwo msg="Вход на сайт"/>
    <InputPhone/>
    <BlackButton msg="Выслать код"/>
  </div>
</template>
<script>
import X from "../popupbluda/X";
import HederTwo from "../partpage/HederTwo";
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