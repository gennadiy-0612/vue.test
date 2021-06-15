<template>
  <div class="ChoicePopUp h-full w-full flex justify-center items-center back-05">
    <div class="poiskTop popUpFrame bg-white">
      <h2 class="MobHide ChoiceIt">Выберете город, в котором вы хотите сделать заказ</h2>
      <a class="DescHide" href="/">
        <X/>
      </a>
      <Poisk/>
      <div class="letters flex flex-wrap justify-between relative">
        <div class="letters__items">
          <h3 class="Ag-h3-to-1070 h3Letter">А</h3>
          <div class="letters__Set">
            <p class="Ag-text14-to-1070 letters__text afterLine">Абакан</p>
            <p class="Ag-text14-to-1070 letters__text afterLine">Абакан</p>
            <p class="Ag-text14-to-1070 letters__text afterLine">Абакан</p>
          </div>
        </div>
        <div class="letters__items">
          <h3 class="Ag-h3-to-1070 h3Letter">Б</h3>
          <div class="letters__Set">
            <p class="Ag-text14-to-1070 letters__text afterLine">Балаково</p>
            <p class="Ag-text14-to-1070 letters__text afterLine">Балашиха</p>
            <p class="Ag-text14-to-1070 letters__text afterLine">Балтийск</p>
          </div>
        </div>
        <div class="letters__items">
          <h3 class="Ag-h3-to-1070 h3Letter">В</h3>
          <div class="letters__Set">
            <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
            <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
            <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
          </div>
        </div>
        <div class="letters__items">
          <h3 class="Ag-h3-to-1070 h3Letter">Г</h3>
          <div class="letters__Set">
            <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
            <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
            <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
          </div>
        </div>
        <div class="letters__items">
          <h3 class="Ag-h3-to-1070 h3Letter">Г</h3>
          <div class="letters__Set">
            <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
            <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
            <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
          </div>
        </div>
        <div class="letters__items">
          <h3 class="Ag-h3-to-1070 h3Letter">Г</h3>
          <div class="letters__Set">
            <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
            <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
            <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
          </div>
        </div>
        <div class="letters__items">
          <h3 class="Ag-h3-to-1070 h3Letter">Г</h3>
          <div class="letters__Set">
            <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
            <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
            <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
          </div>
        </div>
        <div class="letters__items">
          <h3 class="Ag-h3-to-1070 h3Letter">Г</h3>
          <div class="letters__Set">
            <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
            <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
            <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
          </div>
        </div>
        <div class="letters__items">
          <h3 class="Ag-h3-to-1070 h3Letter">Г</h3>
          <div class="letters__Set">
            <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
            <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
            <p class="Ag-text14-to-1070 letters__text afterLine">Великие луки</p>
          </div>
        </div>
        <div class="absolute z-10 bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white pointer-events-none"></div>
      </div>
    </div>
  </div>
</template>
<style>
.poiskTop .afterLine::after {
  background-color: #E4E4E4;
}

.ChoiceIt {
  font-size: 27px;
  line-height: 30px;
  font-weight: 500;
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
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #555555;
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #363636;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #232323;
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