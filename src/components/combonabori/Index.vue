<template>
  <div class="comboNabori">
    <ComboSetTop/>
    <ComboSetsBottom/>
  </div>
</template>
<script>
import ComboSetTop from './ComboSetTop.vue'
import ComboSetsBottom from './ComboSetsBottom.vue'

export default {
  name: 'App',
  components: {
    ComboSetTop,
    ComboSetsBottom
  }
}
</script>