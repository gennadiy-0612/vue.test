<template>
  <div class="MobHide flex flex-wrap justify-between afterLine afterLine-PersonData OrderMoving xl:mr-auto xl:ml-0">
    <router-link to="#" class="MobHide Ag-text14-to-1070 switchOpt1 showIt afterLine block Option changeDataPerson relative">
      <span class="DeskLimit bloc text-centerk">Корзина</span>
    </router-link>
    <router-link to="#" class="Ag-text14-to-1070 switchOpt2 block Option afterLine-change changeDataAddress relative">
      <span class="DeskLimit block text-center">Оформление заказа</span>
    </router-link>
    <router-link to="#" class="Ag-text14-to-1070 switchOpt3 block Option afterLine-change changeDataAddress relative">
      <span class="DeskLimit block text-center">Подтверждение</span>
    </router-link>
  </div>
</template>
<style>
.afterLine-PersonData.afterLine::after {
  background-color: #E4E4E4;
  z-index: -1;
}

.showIt.afterLine::after,
.activeOption.afterLine::after {
  background-color: #465502;
}

.afterLine-change::after {
  height: 2px;
  background: #E4E4E4;
  z-index: 2;
}

.afterLine-PersonData::after {
  height: 2px;
  background-color: #E4E4E4;
}

.Option {
  color: #2F3D49;
  padding: 0 0 6px;
}

.Option.showIt,
.Option.activeOption {
  color: #465502;
  font-weight: 700;
}
</style>