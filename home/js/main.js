var $over = false;

function main() {
	$('.header').hide();
    $('.header').slideDown('slow');
	$('.content').delay(800).css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 1500);
	$('.dropdown-content').hide();
	
	$('.dropdown h1').mouseenter(function() {
		$(this).fadeTo('fast',.6);
		$(this).next('.dropdown-content').slideDown('fast');
	});

	$('.dropdown h1').mouseleave(function(){
		$(this).fadeTo('fast',1);
	});
	
	$('.dropdown-content').mouseleave(function(){
		$(this).next('.dropdown h1').fadeTo('fast',1);
		$(this).slideUp('fast');
	});
	
}

$(document).ready(main);