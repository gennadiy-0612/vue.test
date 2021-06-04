<template>
  <a class="categoryItem Ag-text14-to-1070 block" href="#">{{ msg }}</a>
</template>
<style>
.categorySet :first-child .categoryItem {
  background: #465500;
  color: #FFFFFF;
}

.categoryItem {
  color: #7E7E7E;
  background-color: #C4C4C4;
  padding: 4px 15px;
  margin: 0 10px 0 0;
}
</style>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>