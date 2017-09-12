function main() {
  $('.header').hide();
  $('.header').slideDown('slow');
  $('.header img').delay(800).css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 1500);
  $('.header h1').delay(800).css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 1500);
  $('.butlist').delay(800).css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 1500);
  
  $('.butlist a').mouseenter(function(){
	 $(this).fadeTo('fast',.6); 
  });
  $('.butlist a').mouseleave(function(){
	 $(this).fadeTo('fast',1); 
  });
  
  $('.main a').mouseenter(function(){
	 $(this).fadeTo('fast',.6); 
  });
  $('.main a').mouseleave(function(){
	 $(this).fadeTo('fast',1); 
  });
  
  var $trig = 0;
  
  $(window).scroll(function(){
	  if($('#aboutme').offset().top <= ($(window).scrollTop()+ $(window).height())){
		$('#aboutme').css({opacity: 0, visibility: "visible"}).animate({opacity: 1},1000);
	  }
	  if($('#projects').offset().top <= ($(window).scrollTop()+ $(window).height())){
		$('#projects').css({opacity: 0, visibility: "visible"}).animate({opacity: 1},1000);
	  }
	  if($('#goals').offset().top <= ($(window).scrollTop()+ $(window).height())){
		$('#goals').css({opacity: 0, visibility: "visible"}).animate({opacity: 1},1000);
	  }
	  
  });
  
}

$(document).ready(main);