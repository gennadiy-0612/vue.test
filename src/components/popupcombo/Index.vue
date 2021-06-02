<template>
  <div>
    <X/>
    <Photo msg="Photo"/>
    <Descriptor/>
  </div>
</template>
<script>
import X from '../popupbluda/X.vue'
import Photo from '../popupbluda/Photo.vue'
import Descriptor from './Descriptor.vue'

export default {
  name: 'App',
  components: {
    X,
    Photo,
    Descriptor
  }
}
</script>

<style>
#app {
  margin: 16px;
}
</style>