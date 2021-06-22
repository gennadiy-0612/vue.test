<template>
  <div class="flex justify-center items-center">
    <p class="Ag-text14-to-1070 PopUpHead text-center fw600">{{ msg }}</p>
  </div>
</template>
<style>
.PopUpHead {
  margin: 5px 10px 0;
}
</style>
<script>
export default {
  name: 'PopUpParaGraph',
  props: {
    msg: String
  }
}
</script>