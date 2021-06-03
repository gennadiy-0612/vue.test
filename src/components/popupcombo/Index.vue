<template>
  <div>
    <X/>
    <Photo msg="Photo"/>
    <Descriptor/>
    <DescriptionItem/>
    <DescriptionItem/>
    <DescriptionItem/>
    <DescriptionItem/>
    <LoadBar/>
    <OrderMore/>
    <AddCard/>
  </div>
</template>
<script>
import X from '../popupbluda/X.vue'
import Photo from '../popupbluda/Photo.vue'
import Descriptor from './Descriptor.vue'
import DescriptionItem from './DescriptionItem.vue'
import LoadBar from '../popupbluda/LoadBar.vue'
import OrderMore from '../popupbluda/OrderMore.vue'
import AddCard from './AddCard.vue'

export default {
  name: 'App',
  components: {
    X,
    Photo,
    Descriptor,
    DescriptionItem,
    OrderMore,
    LoadBar,
    AddCard
  }
}
</script>