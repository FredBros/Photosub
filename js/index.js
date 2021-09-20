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