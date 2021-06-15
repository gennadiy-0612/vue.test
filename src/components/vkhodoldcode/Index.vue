<template>
  <div class="LogFrameGet h-full w-full flex flex-wrap justify-center">
    <div class="LogFrameGet__item self-center">
      <a href="/">
      <X/>
    </a>
      <HeaderTwo msg="Вход на сайт"/>
      <div class="oldPhone">
        <InputPhone/>
      </div>
      <BlackButton msg="Выслать код"/>
    </div>
  </div>
</template>
<style>
.LogFrameGet__item{
  max-width: 100%;
  max-height: 54%;
  min-width: 256px;
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
import X from '../popupbluda/X'
import HeaderTwo from '../partpage/HeaderTwo'
import InputPhone from '../partpage/InputPhone'
import BlackButton from '../addtocardblack/Index'

export default {
  name: 'App',
  components: {
    X,
    HeaderTwo,
    InputPhone,
    BlackButton
  }
}
</script>