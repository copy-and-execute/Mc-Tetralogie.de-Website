var clicked;
clicked = false;

window.onload = function() {
    const header = document.querySelector('.dowheader');
    header.classList.add('play-animation');
}

function sleepm(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function loadStuff() {
	$('.hamburger-shell').click(async function () {
		if (!clicked){
			$('.hamburger-shell').toggleClass('blur');
			$('#menu').toggleClass('background');
		}
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
		if (clicked){
			await sleepm(400);
			$('#menu').toggleClass('background');
			$('.hamburger-shell').toggleClass('blur');
		}
		clicked = !clicked;
	});
}

$(document).ready(loadStuff);