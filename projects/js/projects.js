$(document).ready(function(){
	$('.topper').hide();
    $('.topper').slideDown('slow');
	$('.contentlist').delay(500).css('visibility','hidden');
	$('.contentlist').delay(500).css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 1500);
	
	$('.main a').mouseenter(function(){
		$(this).fadeTo('fast',.6); 
	});
	$('.main a').mouseleave(function(){
		$(this).fadeTo('fast',1); 
	});
});