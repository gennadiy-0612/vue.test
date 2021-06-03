<template>
  <div class="Description relative">
    <a class="showPopUp block absolute right-0" href="#info"></a>
    <div id="info" class="lightbox">
      <a href="#" class="closePopUp block absolute right-0"></a>
      <p>Пепперони</p>
      <p>Пищевая ценность на 100 г</p>
      <div>
        <table>
          <tr>
            <td>Энерг. ценность</td>
            <td>253,4 ккал</td>
          </tr>
        </table>
      </div>
    </div>
    <h3 class="Ag-h3-to-1070 m-top14">{{ msg }}</h3>
    <p class="Ag-text12-to-1070 m-top11">Средняя 30 см, традиционное тесто, 700 г</p>
    <p class="Ag-text14-to-1070 m-top16 m-r16">Пикантная колбаса Пепперони, свежие томаты, маслины, каперсы, сыр
      Моцарелла и соус Помадоро</p>
    <h3 class="Ag-h3-to-1070 m-top14">610.-</h3>
  </div>
</template>

<script>
export default {
  name: 'Description',
  props: {
    msg: String
  }
}
</script>
