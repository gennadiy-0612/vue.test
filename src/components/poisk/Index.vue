<template>
  <div class="poiskTop popUpFrame">
    <a href="/"><X/></a>
    <Poisk/>
    <div class="letters flex flex-wrap justify-between">
      <div class="letters__items">
        <h3 class="Ag-h3-to-1070">А</h3>
        <p class="Ag-text14-to-1070 letters__text afterLine">Абакан</p>
        <p class="Ag-text14-to-1070 letters__text afterLine">Абакан</p>
        <p class="Ag-text14-to-1070 letters__text afterLine">Абакан</p>
      </div>
      <div class="letters__items">
        <h3 class="Ag-h3-to-1070">Б</h3>
        <p class="Ag-text14-to-1070 letters__text afterLine">Балаково</p>
        <p class="Ag-text14-to-1070 letters__text afterLine">Балашиха</p>
        <p class="Ag-text14-to-1070 letters__text afterLine">Балтийск</p>
      </div>
      <div class="letters__items">
        <h3 class="Ag-h3-to-1070">В</h3>
        <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
        <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
        <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
      </div>
      <div class="letters__items">
        <h3 class="Ag-h3-to-1070">Г</h3>
        <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
        <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
        <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
      </div>
    </div>
  </div>
</template>
<style>
.poiskTop .afterLine::after{
  background-color: #E4E4E4;
}
.letters {
  padding: 10px 0 0;
}

.letters__items {
  flex: 1 1 46.6%;
  margin: 10px 0;
  max-width: 46.6%;
}

.letters__text {
  padding: 8px 0 13px;
}
</style>
<script>
import X from '../popupbluda/X'
import Poisk from './Poisk'

export default {
  name: 'App',
  components: {
    X,
    Poisk
  }
}
</script>