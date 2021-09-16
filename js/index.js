const navIcon = document.querySelector('#nav-icon');
const navMenu = document.querySelector('.nav-menu');

navIcon.addEventListener('click', () => navMenu.classList.toggle('display-on'));


window.addEventListener('click', function(e){
	// var box = document.getElementById('box1');
	if (!navMenu.contains(e.target) && (!navIcon.contains(e.target))){
        navMenu.classList.remove('display-on');
    }
});