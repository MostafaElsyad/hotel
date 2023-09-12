// Side Navigation
const navBTN = document.getElementById('navBTN');
const sideNav = document.getElementById('sideNav');
const sideNavBlur = document.getElementById('sideNavBlur');

let turnSideNav = 0;

navBTN.onclick = function() {
    if(turnSideNav == 0) {
        sideNav.style.transform = 'translateX(0)';
        sideNavBlur.style.display = 'flex';
        turnSideNav = 1;
    }
}

sideNavBlur.onclick = function() {
    if(turnSideNav == 1) {
        sideNav.style.transform = 'translateX(-100%)';
        sideNavBlur.style.display = 'none';
        turnSideNav = 0;
    }
}

// Sign Button
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
        loginBorder.style.transform = 'translateX(-100%)';
        registerBorder.style.transform = 'translateX(0)';
        translate = true;
    } else {
        loginBorder.style.transform = 'translateX(0)';
        registerBorder.style.transform = 'translateX(100%)';
        translate = false;
    }
}