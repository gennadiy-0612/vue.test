<template>
  <div class="popUpReady h-full">
    <div class="w-full h-full object-cover">
<img alt="alt"  class="w-full h-full" src="../../assets/img/map.png">
    </div>
    <router-link to="/" class="block buttonMap absolute">
      <GreenButton msg="Закрыть"/>
    </router-link>
  </div>
</template>
<style>
.popUpReady .afterLine::after {
  content: none;
}

.buttonMap {
  bottom: 16%;
  left: 5%;
  right: 5%;
}

.popUpFrame__pSet {
  padding: 6px 0 30px;
}

.details .PopUpHead {
  margin: 0;
}
</style>
<script>
import GreenButton from '../addtocardgreen/Index'

export default {
  name: 'App',
  components: {
    GreenButton,
  }
}
</script>