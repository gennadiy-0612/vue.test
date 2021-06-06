<template>
  <div class="Header flex justify-between comboNabori__head">
    <BackButton/>
    <BurgMenu/>
  </div>
</template>
<style>

.comboNabori__head{
  margin:0;
}
</style>
<script>
import BurgMenu from '../burgmenu/Index'
import BackButton from '../backtopbutton/Index'

export default {
  name: 'App',
  components: {
    BurgMenu,
    BackButton
  }
}
</script>