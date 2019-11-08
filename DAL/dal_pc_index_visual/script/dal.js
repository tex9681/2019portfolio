$(document).ready(function (){
    $("#visual > div").on('mouseenter', function () {
        $(this).stop().animate({width: '92%'}, 800, 'easeInOutCirc').siblings().stop().animate({width: '8%'}, 800, 'easeInOutCirc');
    });
    $("#visual").on('mouseleave', function () {
        $(this).children().stop().animate({width: '50%'});
    });
});