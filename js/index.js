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
// 
// In & Out Articles & Form effect
// (index page)
// 
const articles = document.querySelectorAll('.index-section article');
const form = document.querySelector('form');
const footer = document.querySelector('footer');

// Test resize Trigger
window.addEventListener('resize', resetArticleTransformForSmartphone);
function resetArticleTransformForSmartphone(){
    if (window.innerWidth < 768){
    // Smartphone mode
    articles.forEach(e => e.style.transform = 'none')    
} else {
    // Large screen Mode
    articles.forEach(e => checkArticlePosition(e));
}};

// Test Scoll Trigger
// Article & Form in out
window.addEventListener("scroll", () => {
if (window.matchMedia("(min-width: 768px)").matches) {
    checkFormPosition();
    articles.forEach(e => checkArticlePosition(e));
}
});


function checkArticlePosition(article){
    let fromTop = article.getBoundingClientRect().top;
    let hWindow = window.innerHeight;
    let hPercent = Math.floor((fromTop / hWindow) * 100);
    if (hPercent < 80 && hPercent > 20) {
        articleIn(article);
    } else {
        articleOut(article);
    };
}
function articleIn(article){
    article.classList.contains('article-right') ? article.style.transform = 'translate(-100%, -50%)' : article.style.transform = 'translate(100%, -50%)';
}
function articleOut(article){
    article.style.transform = 'translate(0, -50%)';
}

// 
// In & Out Form Scrolling effect
// 
function checkFormPosition(){
//     const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
//     if (scrollTop+clientHeight === scrollHeight) {
//         form.style.transform = 'translate(0, -100%)';
//     }
// }
let fromTop = footer.getBoundingClientRect().top;
    let hWindow = window.innerHeight;
    let hPercent = Math.floor((fromTop / hWindow) * 100);
    if (hPercent < 95) {
        form.style.transform = 'translate(0, 0)';
    } else {
        form.style.transform = 'translate(0, 100%)';
    }
};