<template>
  <div class="flex justify-between flex-wrap mainPage__icons">
    <div class="iconsThemes flex flex-col items-center justify-between self-center">
      <div class="descImg flex justify-center items-center">
        <a href="/"><img class="imgIcon" src="../../assets/img/mainpage/pizza.svg" alt="Пицца"/></a>
      </div>
      <DescItem msg="Пицца"/>
    </div>
    <div class="iconsThemes flex flex-col items-center justify-between self-center">
      <div class="descImg flex justify-center items-center">
        <a href="/"><img class="imgIcon" src="../../assets/img/mainpage/paste.svg" alt="Пасты"/></a>
      </div>
      <DescItem msg="Пасты"/>
    </div>
    <div class="iconsThemes flex flex-col items-center justify-between self-center">
      <div class="descImg flex justify-center items-center">
        <a href="/"><img class="imgIcon" src="../../assets/img/mainpage/soups.svg" alt="Супы"/></a>
      </div>
      <DescItem msg="Супы"/>
    </div>
    <div class="iconsThemes flex flex-col items-center justify-between self-center">
      <div class="descImg flex justify-center items-center">
        <a href="/"><img class="imgIcon" src="../../assets/img/mainpage/hots.svg" alt="Горячие блюда"/></a>
      </div>
      <DescItem msg="Горячие блюда"/>
    </div>
    <div class="iconsThemes flex flex-col items-center justify-between self-center">
      <div class="descImg flex justify-center items-center">
        <a href="/"><img class="imgIcon" src="../../assets/img/mainpage/salats.svg" alt="Салаты и закуски"/></a>
      </div>
      <DescItem msg="Салаты и закуски"/>
    </div>
    <div class="iconsThemes flex flex-col items-center justify-between self-center">
      <div class="descImg flex justify-center items-center">
        <a href="/"><img class="imgIcon" src="../../assets/img/mainpage/drinks.svg" alt="Десерты и напитки"/></a>
      </div>
      <DescItem msg="Десерты и напитки"/>
    </div>
  </div>
</template>
<script>
import DescItem from "@/components/descimg/DescItem";

export default {
  components:{
    DescItem
  }
}
</script>