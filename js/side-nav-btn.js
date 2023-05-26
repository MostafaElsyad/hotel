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