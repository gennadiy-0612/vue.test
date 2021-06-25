<template>
  <div class="comboNabori">
    <ComboSetTop/>
    <ComboSetsBottom/>
  </div>
</template>
<script>
import ComboSetTop from './ComboSetTop'
import ComboSetsBottom from './ComboSetsBottom'

export default {
  name: 'App',
  components: {
    ComboSetTop,
    ComboSetsBottom
  }
}
</script>