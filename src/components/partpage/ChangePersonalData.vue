<template>
  <ol class="flex flex-wrap justify-between afterLine afterLine-PersonData">
    <router-link to="#" class="Ag-text14-to-1070 activeOption afterLine block Option changeDataPerson relative">
      <div class="DeskLimit text-center">Личные данные</div>
    </router-link>
    <router-link to="#"
       class="Ag-text14-to-1070 block Option afterLine-change changeDataAddress relative">
      <div class="DeskLimit text-center">Адреса доставки</div>
    </router-link>
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