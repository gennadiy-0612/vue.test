<template>
  <img class="mainPhoto absolute top-0 left-0" :src="image" :alt="'main phpto'"/>
</template>

<script>
import image from "../../assets/img/mainpage/main.png"


export default {
  data: function () {
    return {
      image: image
    }
  }
}
</script>