//
// Hamburger menu
//
const navIcon = document.querySelector('#nav-icon');
const navMenu = document.querySelector('.nav-menu');

navIcon.addEventListener('click', () => navMenu.classList.toggle('display-on'));


window.addEventListener('click', function(e){
	if (!navMenu.contains(e.target) && (!navIcon.contains(e.target))){
        navMenu.classList.remove('display-on');
    }
});


// 
// NAVBAR SCROLL
//
// const navItems = document.getElementsByClassName('nav-item');
// console.log (navItems);



// Array.from(navItems).forEach(function(element, i) {
//     element.addEventListener('click', (e) => {
//         const btn = Array.prototype.indexOf.call(navItems,e);
//         console.log (e);
        
//     });
// });

function scrollFromMenu(e){
    let scrollY = e * window.innerHeight;
    window.scrollTo({top: scrollY, behavior: 'smooth'})
    }

// 
// 
// CAROUSEL
// from Splide
// 

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide',{
        type : 'loop',
        cover  : true,
        height : '100vh',
    } ).mount();
} );