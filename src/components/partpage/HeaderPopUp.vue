<template>
  <div class="flex justify-center items-center HeadFrame">
    <h3 class="h3 h3-oformZakaz1 Ag-text18-to-1070 PopUpHeader PopUpHead text-center fw600">{{ msg }}</h3>
  </div>
</template>
<style>
.PopUpHead {
  margin: 10px 0 0;
}

.h3-oformZakaz1 {
  font-size: 24px;
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