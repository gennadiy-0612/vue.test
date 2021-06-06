<template>
  <div class="BurgerMenu z-1">
    <a href="#MenuContent" class="burg-icon flex justify-center">
      <div class="Header__img"></div>
    </a>
    <MenuContent/>
  </div>
</template>
<style>
.Header__img {
  background: url("../../assets/img/burger.svg") center center no-repeat;
}
</style>
<script>
import MenuContent from './MenuContent'

export default {
  name: 'App',
  components: {
    MenuContent
  }
}
</script>