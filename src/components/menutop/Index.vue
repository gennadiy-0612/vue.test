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

.topnav a {
  color: #000000;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: block;
  width: 50px;
  margin: 0 0 0 auto;
}

</style>
<script>
import BurgMenu from '../burgmenu/Index.vue'
import Address from '../address/Index.vue'

export default {
  name: 'App',
  components: {
    Address,
    BurgMenu
  }
}
</script>