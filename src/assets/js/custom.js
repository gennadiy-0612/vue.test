"use strict"
let funcSHCH1 = {
    element: '#GetInfoAboutOrder',
    takeTag: function () {
        let elem = document.querySelector(funcSHCH1.element)
        elem.classList.toggle('showIt')
    },
    adds: function () {
        document.querySelector(funcSHCH1.element).addEventListener('click', funcSHCH1.takeTag)
    },
    LetIsWork: function () {
        window.addEventListener('load', funcSHCH1.adds)
    }
};
funcSHCH1.element = '#GetInfoAboutOrder';
funcSHCH1.LetIsWork()