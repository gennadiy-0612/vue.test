<template>
  <div class="BurgerMenu fixed z-1 h-full xl:w-full">
    <a href="#MenuContent" class="DescHide burg-icon flex justify-center">
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
import MenuContent from './CommonMenu'

export default {
  name: 'App',
  components: {
    MenuContent
  }
}
</script>