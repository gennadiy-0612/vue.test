<template>
  <div class="mainPage__item">
    <img v-bind:src="imageicon" alt="alt"/>
    <p class="mainPage__name">{{name}}</p>
  </div>
</template>
<script>
export default {
  name: 'MainIcon',
  props: {
    imageicon: String,
    name: String
  }
}
</script>