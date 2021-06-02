<template>
  <div>
    <X/>
    <Photo msg="Photo"/>
  </div>
</template>
<script>
import X from '../popupbluda/X.vue'
import Photo from '../popupbluda/Photo.vue'

export default {
  name: 'App',
  components: {
    X,
    Photo
  }
}
</script>

<style>
#app {
  margin: 16px;
}
</style>