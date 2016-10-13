
$(document).ready(function(){
	$('#about').on('click',function(){
		if($('#about').hasClass('active')){
			$('.about-info').slideUp();
			$('#about').removeClass('active');
		}
		else{
			$('#about').addClass('active');
			$('.about-info').slideDown();
		}
	});
	
});