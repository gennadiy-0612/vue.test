<template>
  <div class="comboNabori">
    <div class="Header flex justify-between">
      <BackButton/>
      <BurgMenu/>
    </div>
    <ol class="flex categorySet swipe overflow-hidden w-full">
      <li>
        <CatItem msg="Пицца"/>
      </li>
      <li>
        <CatItem msg="Паста"/>
      </li>
      <li>
        <CatItem msg="Салаты"/>
      </li>
      <li>
        <CatItem msg="Супы"/>
      </li>
      <li>
        <CatItem msg="Супы"/>
      </li>
      <li>
        <CatItem msg="Супы"/>
      </li>
      <li>
        <CatItem msg="Супы"/>
      </li>
    </ol>
    <ComboSetsBottom/>
  </div>
</template>
<style scoped>
.swipe {
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-x: scroll;
}

.swipe::-webkit-scrollbar {
  display: none;
}

.Header {
  padding: 0 0 30px;
}
.categorySet{
  margin: 0 0 29px;
}
</style>
<script>
import BurgMenu from '../burgmenu/Index.vue';
import BackButton from '../address/Index.vue';
import CatItem from "./CategoryItem.vue";
import ComboSetsBottom from "../combonabori/ComboSetsBottom.vue";

export default {
  name: 'App',
  components: {
    BurgMenu,
    BackButton,
    CatItem,
    ComboSetsBottom
  }
}
</script>