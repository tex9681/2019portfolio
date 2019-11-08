$(document).ready(function (){
	$(window).on('scroll', function() {
		var scrollT = $(this).scrollTop();
		console.log(scrollT);

		if (scrollT > 90) $('#subnav').addClass('scolled');
        else $('#subnav').removeClass('scolled');
	});
	        
	$('.btnTop').on('click', function (e) {
		e.preventDefault();
		$('html, body').stop().animate({scrollTop:0});
	});
});