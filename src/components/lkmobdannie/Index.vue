<template>
  <div class="comboNabori pageWithCats">
    <div class="Header flex justify-between">
      <Address/>
      <BurgMenu/>
    </div>
    <MenuBottom/>
  </div>
</template>
<style>
.Header {
  padding: 0 0 30px;
}

</style>
<script>
import BurgMenu from '../burgmenu/Index'
import Address from '../address/Index'
import MenuBottom from '../menubottom/Index'

export default {
  name: 'App',
  components: {
    BurgMenu,
    Address,
    MenuBottom
  }
}
</script>