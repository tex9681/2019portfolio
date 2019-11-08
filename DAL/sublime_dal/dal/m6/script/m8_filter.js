$(document).ready(function (){
	var btn = $('button');
	btn.on('click', function(){
		$(this).toggleClass('on');
	});
});