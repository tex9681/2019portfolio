$(document).ready(function() {
	load('#reviewBox', '2');
	$('.btn .more').on('click', function () {
        //load(보여질 목록의 부모태그, 추가될 리스트 개수, 더보기 버튼을 담는 부모)
        load('#reviewBox', '2');
    })

    function load(id, cnt) {
        var more_list = id + ' .review:not(.active)';   //#js-load .js-load:not(.active) : 현재 남겨진 li 선택자
        var more_length = $(more_list).length;    //남겨진 리스트들의 개수
        var more_total_cnt;  //추가될 리스트 개수
    
        if (cnt < more_length) { //남겨진 리스트의 개수가 클릭시 보여질 개수보다 클 경우
            more_total_cnt = cnt;  //한번에 보여질 개수를 more_total_cnt에 대입 시키기
        } else {                 //남겨진 개수가 적다면
            more_total_cnt = more_length; //남겨진 개수를 more_total_cnt이란 변수에 대입 시켜라
            $('.btn .more').hide()   //남겨진 개수가 적으므로 더이상 more를 클릭할수 없도록 버튼을 제거
        }
    
        //클릭할때 마다 4개씩active란 class명 추가하기
        $(more_list + ':lt(' + more_total_cnt + ')').addClass('active');
        console.log('남겨진 리스트들의 개수 : ' + more_length, ', 추가될 리스트 개수 : ' +  more_total_cnt);
        }
});