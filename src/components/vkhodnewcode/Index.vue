<template>
  <div class="LogFrame Insert-full w-full h-full flex flex-wrap justify-center">
    <div class="LogFrameGet__item self-center">
      <router-link to="/">
        <X/>
      </router-link>
      <HeaderTwo msg="Вход на сайт"/>
      <InputPhone/>
      <InputCode/>
      <p class="Ag-text14-to-1070 font-bold newCode">Получить новый код</p>
    </div>
  </div>
</template>
<style>
.Insert-full .phoneOpt {
  margin: 20px 0 5px;
}

.Insert-full .searchButton {
  margin-bottom: 8px;
}

.Insert-full .codeSMS {
  margin: 5px 0 10px;
}

.newCode {
  color: #8D8D8D;
}
</style>
<script>
import X from '../popupbluda/X'
import HeaderTwo from '../partpage/HeaderTwo'
import InputPhone from '../partpage/InputPhone'
import InputCode from '../partpage/InputCode'

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