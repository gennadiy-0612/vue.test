<template>
  <div class="Time  m-auto absolute m-auto overflow-y-scroll left-0 top-0 bottom-0 right-0">
    <a href="/">
      <X/>
    </a>
    <div class="Header__when afterLine flex justify-center">
      <HeaderPopUp msg="Ближайшее"/>
    </div>
    <Time from="00:00" to="00:30"/>
    <Time from="03:00" to="01:00"/>
    <Time from="01:00" to="01:30"/>
    <Time from="01:30" to="02:00"/>
    <Time from="02:00" to="02:30"/>
    <Time from="02:30" to="03:00"/>
    <Time from="03:00" to="03:30"/>
    <Time from="03:30" to="04:30"/>
  </div>
</template>
<style>
.Header__when {
  padding: 4px 0 17px;
}

.Header__when.afterLine::after {
  bottom: 10px;
}

.Header__when .afterLine::after {
  bottom: 10px;
}

.Time {
  background-color: #F2F2F2;
  padding: 0 16px 16px;
  width: 160px;
  height: 90%;
}
</style>
<script>
import X from '../popupbluda/X'
import HeaderPopUp from "../partpage/HeaderPopUp"
import Time from "./Time"

export default {
  name: 'App',
  components: {
    X,
    HeaderPopUp,
    Time
  }
}
</script>