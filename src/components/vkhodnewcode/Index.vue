<template>
  <div class="popUpFrame">
    <X/>
    <HederTwo msg="Вход на сайт"/>
  </div>
</template>
<script>
import HederTwo from "../partpage/HederTwo";
import X from "../popupbluda/X";

export default {
  name: 'App',
  components: {
    HederTwo,
    X
  }
}
</script>