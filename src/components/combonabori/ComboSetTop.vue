<template>
  <div class="Header flex justify-between">
    <BackButton/>
    <BurgMenu/>
  </div>
</template>
<script>
import BurgMenu from '../burgmenu/Index.vue'
import BackButton from '../backtopbutton/Index.vue'

export default {
  name: 'App',
  components: {
    BurgMenu,
    BackButton
  }
}
</script>