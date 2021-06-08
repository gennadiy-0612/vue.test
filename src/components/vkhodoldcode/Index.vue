<template>
  <div class="LogFrameGet">
    <a href="/"><X/></a>
    <HederTwo msg="Вход на сайт"/>
    <div class="oldPhone">
      <InputPhone/>
    </div>
    <BlackButton msg="Выслать код"/>
  </div>
</template>
<style>
.LogFrameGet {
  padding: 40% 10%;
}

.oldPhone {
  margin: 19px 0;
}

.oldPhone .searchButton {
  margin: 7px 0 -3px;
}

.LogFrameGet .switchVision {
  display: none;
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