<template>
  <div class="popUpFrame popUpFrame3 popUpReady h-full">
    <div class="map object-cover">
      <img class="w-full" src="../../assets/img/map.png">
    </div>
    <GreenButton msg="Закрыть"/>
  </div>
</template>
<style>
.popUpReady .afterLine::after {
  content: none;
}
.popUpFrame3 .OrderMore-add-to-card-green{
}
.popUpReady .PopUpHeader {
  width: 200px;
  text-align: center;
  margin: 0;
}

.popUpFrame__pSet {
  padding: 6px 0 30px;
}

.popUpFrame1 .popUpFrame__pSet .PopUpHead {
  padding-left: 0;
  padding-right: 0;
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