$(document).ready(function(){

	$('.our_nav').slicknav({
		'prependTo':'.nav-bar-whole'
	});


	// carousel

	$('.carousel').owlCarousel({
		items:1,
		autoplay:true,
		autoplayTimeout:3000,
		loop:true,
		autoplayHoverPause:true,
		smartSpeed:1000,
		nav:true,
		navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
	});










});