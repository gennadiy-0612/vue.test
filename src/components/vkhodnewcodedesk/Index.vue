<template>
  <div class="LogFrameGet fixed top-0 LogInDesc back-05 h-full w-full flex flex-wrap justify-center">
    <div class="LogFrameGet__item LogFrameGet__itemDesc self-center">
      <div class="h2Papa text-left flex justify-center items-center">
        <h2 class="h2Papa__h2 text-left Ag-h2-to-1070">
          Вход на сайт</h2>
      </div>
      <div class="InputPhone">
        <div class="phoneOpt flex flex-wrap justify-between">
          <label for="phone" class="Ag-text1421-to-1070 fw400 text-2xl PhoneNumber">Номер телефона</label>
          <div class="ChangePhone flex justify-between">
            <div>
              <input placeholder="+7" type="tel" id="phone" name="phone" class="searchButton bg-E4E4E4 w-full">
              <p class="Ag-text14-to-1070 fw400 ChangePhone">Изменить</p>
            </div>
          </div>
        </div>
      </div>
      <div class="InfoSMS flex w-full justify-between">
        <label for="tentacles" class="Ag-text1421-to-1070 LabelSMS">Код из СМС</label>
        <div class="GetPhone">
          <input type="number" id="tentacles" name="tentacles" min="10" max="100"
                 class="searchButton codeSMS bg-E4E4E4 border-solid border-0 w-full block">
          <p class="Ag-text14-to-1070 fw400 newCode">Получить новый код</p>
        </div>
      </div>
      <a href="/" class="Ag-text14-to-1070 fw400 closeLog">Закрыть</a>
    </div>
  </div>
</template>
<style scoped>

.h2Papa__h2 {
  margin-bottom: 39px;
}

.LogFrameGet__itemDesc {
  background-color: #FFFFFF;
  padding: 2.8rem 4rem 1.5rem;
  min-width: 700px;
  min-height: 400px;
}

.PhoneNumber {
  font-size: 1.5rem;
  margin: 19px 0 0;
  flex: 1 1 10%;
}

.searchButton {
  height: 40px;
  text-indent: 1.8rem;
}

.ChangePhone, .LabelSMS {
  font-size: 1.5rem;
  font-weight: 400;
}

.ChangePhone {
  margin: 0.6rem 0 0 1.7rem;
  flex: 1 1 27%;
  color: #8D8D8D;
}

.LabelSMS {
  flex: 1 1 10%;
  margin: 10px 0 0;
}

.InputPhone {
  flex: 1 1 15%;
}

.InfoSMS {
  margin: 48px 0 0;
}

.GetPhone {
  flex: 1 1 23%;
}

.newCode {
  font-size: 1.5rem;
  margin: 11px 0 0 30px;
}

.closeLog {
  display: block;
  margin-top: 36px;
  font-size: 1.5rem;
  font-weight: 400;
  color: #8D8D8D;
}
</style>