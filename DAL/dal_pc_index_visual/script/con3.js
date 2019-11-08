$(document).ready(function() {
    $(window).scroll( function(){
        $('.hide').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'101px'},1000);
            } else {
                $(this).removeClass('.hide');
            }
        });
        $('.hide2').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'101px'},700);
            } else {
                $(this).removeClass('.hide2');
            }
        });
    });
});