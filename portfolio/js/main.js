$(document).ready(function() {
	var $win = $(window);
	var winHei=$win.height()
	var skillOffsetT = $('#skill').offset().top;
	var horTotal = $('#skill .skillwrap > ul > li').length;
	var moveBoxWid = $('#skill .skillwrap > ul > li').outerWidth(true);
	var validate = moveBoxWid * horTotal + parseInt($('#skill .skillwrap > ul').css('paddingLeft')) + parseInt($('#skill .skillwrap > ul').css('paddingRight'));

	console.log(', 카테고리개수: ' + horTotal + ', 카테고리 하나의 너비: ' + moveBoxWid + ', 움직일수 있는 유효한 최대거리: ' + validate);

	//main 내부 화살표 보여질 시간 지정
	setTimeout(function(){
			$('#main .arrow').stop().fadeIn(1000);
	}, 3000);

	//#skill 스크롤 처리전 하단에 여백주기 : 스크롤바가 움직이는 크기만큼 오른쪽에서 왼쪽으로 이동됨
	$('#skill').css('paddingBottom', validate);
	var project_txtOffsetT = $('#project_txt').offset().top;
	console.log('#skill 전역top위치: ' + skillOffsetT + ', #project_txt 전역top위치: ' + project_txtOffsetT); //1800 9049

	$(window).on('scroll', function () {
		scrollT = $(this).scrollTop();

		//#skill.on 에서만 텍스트가 왼쪽에서 오른쪽으로 애니메이트되어 보여진다
		if (scrollT>skillOffsetT - 900) $('#skill').addClass('on');
		else $('#skill').removeClass('on');

		//#skill ul 태그 애니메이트
		if (scrollT < skillOffsetT) {  //1850
			$('#skill').css({paddingTop: 0, paddingBottom: validate}).children().removeClass('fix');
		}
		else if (scrollT < project_txtOffsetT) { //9049
				$('#skill').css({paddingTop: 0, paddingBottom: validate}).children().addClass('fix');
				TweenMax.to('#skill .skillwrap > ul', 2, {marginLeft: -(scrollT-skillOffsetT), ease:Power1.easeOut});
		}
		else {
			$('#skill').css({paddingTop: validate, paddingBottom: 0}).children().removeClass('fix');
		}

		//My Sill h2텍스트 fixed 시키기 : //1800 ~ 9049 사이에서만 fixed를 가진다
		if (scrollT >= skillOffsetT && scrollT < project_txtOffsetT) {
			$('#skill .text').css({position: 'fixed', top: 0, left: 0});
			console.log(scrollT);
		}
		else $('#skill .text').css({position: 'static'});

		//#project_txt.on 에서만 텍스트가 하단에서 상단으로 애니메이트되어 보여진다
		if (scrollT>project_txtOffsetT - 500) $('#project_txt').addClass('on');
		else $('#project_txt').removeClass('on');
	});	//scroll

	var tgHei;		//outerHeight
	var tgTop;	//offset().top
	var start;
	var end;

	$win.on("scroll",function(){
		var $fade=$(".fade");
		var scrollT=$(this).scrollTop();
		var headHei=100;
		//console.log(scrollT);

		$fade.each(function  () {
			tgHei=$(this).outerHeight();
			tgTop=$(this).offset().top;

			start = tgTop+tgHei*0.5-winHei;
			end = tgTop+tgHei*0.5-headHei;
			//console.log(start, end);

			if (start < scrollT && end > scrollT) $(this).addClass("on");
			else $(this).removeClass("on");
		});
	});
});