<template>
  <div class="InputPhone ">
    <label class="Ag-text14-to-1070" for="phone">Номер телефона</label>

    <input class="searchButton border-solid border-2 w-full block" type="tel" id="phone" name="phone"
           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
           required>
    <BlackButton/>
  </div>
</template>