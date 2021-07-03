<template>
  <ol class="flex flex-wrap justify-between afterLine afterLine-PersonData">
    <li class="Ag-text14-to-1070 activeOption afterLine block Option OptLi changeDataPerson relative">
      <router-link to="#" class="DeskLimit xl:text-center block">Личные данные</router-link>
    </li>
    <li class="Ag-text14-to-1070 block Option OptLi afterLine-change changeDataAddress relative">
      <router-link to="#" class="DeskLimit text-right xl:text-center block">Адреса доставки</router-link>
    </li>
  </ol>
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