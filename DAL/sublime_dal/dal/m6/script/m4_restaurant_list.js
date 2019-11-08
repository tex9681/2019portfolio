$(document).ready(function() {
    var $jjim = $('.jjim_list li .jjim');
    $jjim.on('click', function(){
        $(this).toggleClass('on');
    });
    var $like = $('.jjim_list li .like');
    $like.on('click',function(){
        $(this).toggleClass('on');
    });

    $("button.filter").click(function(){
        $(".layer_bg").show();  
    });
            
    $(".layer_bg .close").click(function(e){
        e.preventDefault();
        $(".layer_bg").hide();  
    });

    $(document).ready(function (){
    var btn = $('button');
    btn.on('click', function(){
        $(this).toggleClass('active');
    });
});
    
});