<template>
  <p class="mainItem text-center">{{msg}}</p>
</template>

<style>
.mainItem{
  max-width: 53%;
}
</style>

<script>
export default {
  name: 'descitem',
  props: {
    msg: String
  }
}
</script>