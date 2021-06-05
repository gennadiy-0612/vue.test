<template>
  <div class="mainPage">
    <MenuTop/>
    <div class="iconsThemes">
      <IconsThemes imageicon="./assets/img/mainpage/pizza.svg" name="Пицца"/>
    </div>
    <MenuBottom/>
  </div>
</template>
<script>

import MenuTop from '../menutop/Index.vue'
import IconsThemes from './SectionItem.vue'
import MenuBottom from '../menubottom/Index.vue'

export default {
  name: 'App',
  components: {
    MenuBottom,
    IconsThemes,
    MenuTop
  }
}
</script>