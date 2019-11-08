$(document).ready(function (){
		$("#visual > div").on('mouseenter', function () {
			$(this).stop().animate({width: '92%'}, 800, 'easeInOutCirc').siblings().stop().animate({width: '8%'}, 800, 'easeInOutCirc');
		});
		$("#visual").on('mouseleave', function () {
			$(this).children().stop().animate({width: '50%'});
		});

		$(window).on('scroll', function() {
			var scrollT = $(this).scrollTop();
			var move = (100/$(window).height())*scrollT
			$('#content1 .cnt_wrap').css('transform', 'translateY('+move+'px)');

			console.log(move);
		});

    $.fn.moveIt = function () {
        var $window = $(window);
        var instances = [];

        $(this).each(function () {
            instances.push(new moveItItem($(this)));
        });

        window.addEventListener('scroll', function () {
            var scrollTop = $window.scrollTop();
            instances.forEach(function (inst) {
                inst.update(scrollTop);
            });
        }, {
            passive: true
        });
    }

    var moveItItem = function (el) {
        this.el = $(el);
        this.speed = parseInt(this.el.attr('data-scroll-speed'));
    };

    moveItItem.prototype.update = function (scrollTop) {
        this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
    };

    // Initialization
    $(function () {
        $('[data-scroll-speed]').moveIt();
    });
});