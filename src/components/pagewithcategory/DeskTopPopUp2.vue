<template>
  <div class="CardPop2 MobHide CardInfoBack fixed bottom-0 left-0 top-0 bottom-0 h-full w-full flex justify-center items-center hideIt">
    <div class="CardInfoBanner CardInfoDeskTop fixed bg-white flex">
      <div class="CardInfo">
        <h3 class="CardInfo__H3 xl:font-semibold">Pop2 Пицца Филадельфия</h3>
        <p class="CardInfo__para xl:font-semibold">Нежная пицца со сливочным сыром и ломтиками слабосоленого лосося, с сыром Моцарелла,
          сырным соусом и салатом Руккола.</p>
        <ul class="CardInfo__descriptor flex flex-wrap">
          <li class="CardInfo__li flex">
            <span class="CardInfo__dt CardInfo__text block">Калорийность:</span>
            <span class="CardInfo__dd CardInfo__text block"> 312 ккал</span>
          </li>
          <li class="CardInfo__li flex">
            <span class="CardInfo__dt CardInfo__text block">Вес :</span>
            <span class="CardInfo__dd CardInfo__text block">165 г</span>
          </li>
          <li class="CardInfo__li flex">
            <span class="CardInfo__dt CardInfo__text block">Белки :</span>
            <span class="CardInfo__dd CardInfo__text block"> 12,2 г</span>
          </li>
          <li class="CardInfo__li flex">
            <span class="CardInfo__dt CardInfo__text block">Жиры :</span>
            <span class="CardInfo__dd CardInfo__text block"> 9,6 г </span>
          </li>
          <li class="CardInfo__li flex">
            <span class="CardInfo__dt CardInfo__text block">Углеводы :</span>
            <span class="CardInfo__dd CardInfo__text block"> 44,3 г</span>
          </li>
        </ul>
        <div class="BLudoPrice flex flex-wrap justify-between items-center">
          <p class="BLudoPrice__digit xl:font-medium"> 610.-</p>
          <button class="text-center bg-black text-white GoOut xl:font-semibold">Добавить в корзину</button>
        </div>
        <p class="propagate">Вместе с этим также покупают</p>
        <div class="CardInfoAssort flex flex-wrap">
          <div class="CardInfoAssort__li flex flex-wrap">
            <img class="CardInfoAssort__img xl:object-cover" src="../../assets/img/Photo.svg">
            <div class="CardInfoAssort__description">
              <p class="CardInfoAssort__head">Морс<br/> в ассортименте</p>
              <p class="CardInfoAssort__price xl:font-bold">610.-</p>
            </div>
          </div>
          <div class="CardInfoAssort__li flex flex-wrap">
            <img class="CardInfoAssort__img xl:object-cover" src="../../assets/img/Photo.svg">
            <div class="CardInfoAssort__description">
              <p class="CardInfoAssort__head">Морс<br/> в ассортименте</p>
              <p class="CardInfoAssort__price xl:font-bold">610.-</p>
            </div>
          </div>
          <div class="CardInfoAssort__li flex flex-wrap">
            <img class="CardInfoAssort__img xl:object-cover" src="../../assets/img/Photo.svg">
            <div class="CardInfoAssort__description">
              <p class="CardInfoAssort__head">Морс<br/> в ассортименте</p>
              <p class="CardInfoAssort__price xl:font-bold">610.-</p>
            </div>
          </div>
        </div>
        <router-link to="#" class="Pop2 closeLog-popup xl:block Ag-text14-to-1070 font-normal closeLog font-normal block">Закрыть</router-link>
      </div>
      <img alt="alt" class="object-cover" src="../../assets/img/Photo.svg">
    </div>
  </div>
</template>