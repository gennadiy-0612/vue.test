<template>
  <div class="flex justify-center items-center">
    <h2 class="Ag-text18-to-1070 PopUpHead text-center fw600 afterLine">{{msg}}</h2>
  </div>
</template>
<style>
.PopUpHead{
  margin: 10px 0 0;
}
</style>
<script>
export default {
  name: 'PopUpHeader',
  props: {
    msg: String
  }
}
</script>