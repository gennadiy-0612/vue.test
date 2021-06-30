<template>
  <div class="Header flex justify-between">
    <Address/>
    <BurgMenu/>
  </div>
</template>

<style>
.address {
  width: 200px;
  margin-top: -3px;
}

.burg-icon {
  width: 27px;
  margin: 0 0 0 auto;
}

.Header__img {
  width: 27px;
  height: 18px;
}
</style>
<script>
import BurgMenu from '../burgmenu/Index'
import Address from  '../partpage/Address'

export default {
  name: 'App',
  components: {
    Address,
    BurgMenu
  }
}
</script>