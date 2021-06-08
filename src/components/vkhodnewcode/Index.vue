<template>
  <div class="LogFrameInsert">
    <a href="/"><X/></a>
    <HeaderTwo msg="Вход на сайт"/>
    <InputPhone/>
    <InputCode/>
    <p class="Ag-text14-to-1070 fw700 newCode">Получить новый код</p>
  </div>
</template>
<style>
.LogFrameInsert {
  margin: 34% 10%;
}

.LogFrameInsert .phoneOpt {
  margin: 20px 0 5px;
}

.LogFrameInsert .searchButton {
  margin-bottom: 8px;
}
.LogFrameInsert .codeSMS{
  margin: 5px 0 10px;
}
.newCode {
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