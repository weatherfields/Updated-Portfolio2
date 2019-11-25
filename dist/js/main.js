// Select Dom Items
const menuBtn = document.querySelector('.menu-btn');
// const menuBtnClose = document.querySelector('.close');

const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');

// set Initial State Of Menu

let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);
// disappear text and reappear text functions
// menuBtn.addEventListener('click', hideText);
// menuBtnClose.addEventListener('click', showText);

// function hideText() {
//     var fadeTarget = document.getElementById("h2-head");
//     var fadeEffect = setInterval(function () {
//         if (!fadeTarget.style.opacity) {
//             fadeTarget.style.opacity = 1;
//         }
//         if (fadeTarget.style.opacity > 0) {
//             fadeTarget.style.opacity -= 0.1;
//         } else {
//             clearInterval(fadeEffect);
//         }
//     }, 100);

// }

// function showText() {
//     var fadeTarget = document.getElementById("h2-head");
//     var op = 0; // initial opacity
//     fadeTarget.style.display = 'block';
//     var timer = setInterval(function () {
//         if (op >= 1) {
//             clearInterval(timer);
//         }
//         fadeTarget.style.opacity = op;
//         fadeTarget.style.filter = 'alpha(opacity=' + op * 100 + ")";
//         op += op * 0.1;
//     }, 10);
// }

function toggleMenu() {
    menuBtn.classList.toggle('close');
    menu.classList.toggle('show');
    menuNav.classList.toggle('show');
    menuBranding.classList.toggle('show');
    navItems.forEach(item => item.classList.toggle('show'));
    showMenu = !showMenu;

    // Old code
    // for menu button:
    // if (!showMenu) {
    //     menuBtn.classList.add('close');
    //     menu.classList.add('show');
    //     menuNav.classList.add('show');
    //     menuBranding.classList.add('show');
    //     navItems.forEach(item => item.classList.add('show'));

    //     // set menu state
    //     showMenu = true;
    // } else {
    //     menuBtn.classList.remove('close');
    //     menu.classList.remove('show');
    //     menuNav.classList.remove('show');
    //     menuBranding.classList.remove('show');
    //     navItems.forEach(item => item.classList.remove('show'));

    //     // set menu state
    //     showMenu = false;
    // }
}