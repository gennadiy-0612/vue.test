<template>
  <div class="comboNabori">
    <div class="Header flex justify-between">
      <BackButton/>
      <BurgMenu/>
    </div>
    <ol class="flex categorySet swipe">
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
<style>
.Header {
  padding: 0 0 30px;
}

.categorySet {
  margin: 1px 0 29px;
  width: calc(100% + 16px);
}

.comboNabori .LoadBar {
  margin: 24px 0 5px;
}

.toOrderPrice {
  align-items: flex-end;
}

.font-size14px {
  font-size: 14px;
}

.commonPrice.fs20 {
  font-size: 14px;
}
</style>
<script>
import BurgMenu from '../burgmenu/Index'
import BackButton from '../address/Index'
import CatItem from "./CategoryItem";
import ComboSetsBottom from "./ComboSetsBottom";

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