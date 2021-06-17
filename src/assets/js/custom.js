"use strict"

function shch(Select) {
    this.takeTag = function () {
        this.TagEl.classList.toggle('showIt');
        console.log(this)
    };
    this.addE = function () {
        this.TagEl = document.querySelector(Select);
        this.TagEl.addEventListener('click', this.takeTag.bind(this));
    };
}

let cardSwitcher = new shch('#GetInfoAboutOrder');
window.addEventListener('load', cardSwitcher.addE.bind(cardSwitcher));