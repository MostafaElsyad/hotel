const signIN = document.getElementById('signIN');
const loginBorder = document.getElementById('loginBorder');
const registerBorder = document.getElementById('registerBorder');
const loginBTN = document.getElementById('loginBTN');
const registerBTN = document.getElementById('registerBTN');
const accountBTN = document.getElementById('accountBTN');
const blurDIV = document.getElementById('blurDIV');

let turnSignBorder = 0;
let translate = false;

loginBTN.onclick = function() {
    if(turnSignBorder == 0) {
        signIN.style.display = 'flex';
        blurDIV.style.display = 'flex';
        turnSignBorder = 1;
    }
}

blurDIV.onclick = function() {
    if(turnSignBorder == 1) {
        signIN.style.display = 'none';
        blurDIV.style.display = 'none';
        turnSignBorder = 0;
    }
}

function turnBorder() {
    if(translate == false) {
        loginBorder.style.transform = 'translateX(-200%)';
        registerBorder.style.transform = 'translateX(0)';
        translate = true;
    } else {
        loginBorder.style.transform = 'translateX(0)';
        registerBorder.style.transform = 'translateX(200%)';
        translate = false;
    }
}