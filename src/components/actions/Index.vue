<template>
  <div>
    <MenuTop/>
    <MenuBottom/>
  </div>
</template>
<script>

import MenuTop from '../menutop/Index.vue'
import MenuBottom from '../menubottom/Index.vue'

export default {
  name: 'App',
  components: {
    MenuBottom,
    MenuTop
  }
}
</script>