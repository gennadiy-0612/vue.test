<template>
  <div class="popUpBluda">
    <a href="/">
      <X/>
    </a>
    <Photo msg="Photo"/>
    <DescriptionPrice msg="Пепперони"/>
    <AlsoBuy/>

    <div class="flex-auto justify-between flex flex-wrap">
      <AlsoItem/>
      <AlsoItem/>
      <AlsoItem/>
      <AlsoItem/>
      <AlsoItem/>
      <AlsoItem/>
    </div>

    <LoadBar/>
    <OrderMore/>
    <AddToCard msg="Добавить в корзину"/>
  </div>
</template>
<style>
.popUpBluda {
  padding: 6px 16px 16px;
}

.popUpBluda .Photo__img {
  height: 179px;
}
.popUpBluda .commonPrice{
  font-size: 20px;
}
</style>
<script>
import X from './X'
import Photo from './Photo'
import DescriptionPrice from './DescriptPrice'
import AlsoBuy from './AlsoBuy'
import AlsoItem from './AlsoItem'
import LoadBar from './LoadBar'
import OrderMore from './OrderMore'
import AddToCard from '../addtocardgreen/Index'

export default {
  name: 'App',
  components: {
    X,
    Photo,
    DescriptionPrice,
    AlsoBuy,
    AlsoItem,
    LoadBar,
    OrderMore,
    AddToCard
  }
}
</script>