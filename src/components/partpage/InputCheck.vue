<template>
  <div class="itemCity relative">
    <input class="checkIt opacity-0" type="checkbox" id="address3" name="address3" value="Boat">
    <label class="addressGost Ag-text14-to-1070 fs17px" for="address3">{{msg}}</label>
  </div>
</template>
  <script>
    export default {
      name: 'InputCheck',
      props: {
        msg: String
      }
    }
  </script>