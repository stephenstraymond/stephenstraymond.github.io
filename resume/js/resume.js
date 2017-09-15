var $pdf = false;

function main(){
	$('.topper').hide();
	$('.topper').slideDown('slow');
	$('.resume').hide();
	$('.textresume').css({opacity: 0});
	$('.textresume').delay(1000).animate({opacity: 1},500);
	$('.togglebut').on('click',function(){
		$(this).toggleClass('active p');
		if($pdf === true){
			$('.resume').hide();
			$('.textresume').slideToggle('fast');
			$pdf = false;
		} else{
			$('.resume').slideToggle('fast');
			$('.textresume').hide();
			$pdf = true;
		}
	});
	
	$('.togglebut').mouseenter(function(){
		$(this).fadeTo('fast',.6); 
    });
	$('.togglebut').mouseleave(function(){
		$(this).fadeTo('fast',1); 
	});
	
	$('.downloadbut a').mouseenter(function(){
		$(this).fadeTo('fast',.6); 
    });
	$('.downloadbut a').mouseleave(function(){
		$(this).fadeTo('fast',1); 
	});
	
	$('.printbut a').mouseenter(function(){
		$(this).fadeTo('fast',.6); 
    });
	$('.printbut a').mouseleave(function(){
		$(this).fadeTo('fast',1); 
	});
}

$(document).ready(main);