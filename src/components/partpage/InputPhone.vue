<template>
  <div class="InputPhone">
    <label class="Ag-text1421-to-1070" for="phone">Номер телефона</label>

    <input class="searchButton bg-E4E4E4 border-solid border-0 w-full block" placeholder="+7" type="tel" id="phone" name="phone"
           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
           required>
    <BlackButton/>
  </div>
</template>