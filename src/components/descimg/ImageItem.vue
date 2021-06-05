<template>
  <img  class="imgIcon"  :src="image"/>
</template>

<script>
import image from "../../assets/img/mainpage/pizza.svg"


export default {
  data: function () {
    return {
      image: image
    }
  }
}
</script>