$(document).ready(function() {
    var $jjim = $('.jjim_list li .jjim');
    $jjim.on('click', function(){
        $(this).toggleClass('on');
    });
    var $like = $('.jjim_list li .like');
    $like.on('click',function(){
        $(this).toggleClass('on');
    });
});