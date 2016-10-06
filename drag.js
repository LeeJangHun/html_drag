$(function(){

	$(".data-box").draggable({
		revert:"invalid", //drop하는 곳이 아니면 제자리로 돌아가게하는 속성 
		appendTo:"body",//설정한 곳의 마지막 부분에 쌓아준다  
		cursor:"move",//css drag 속성 
		helper: 'clone', // 복사 
		//revertDuration:0, : 사용시 드레그 되돌아가는 에니메이션 없이 바로 귀환 
		opacity:0.3 //클릭시 박스 투명도 지정 
	});

	$(".drop-box").droppable({
		
		tolerance: "intersect", //50% 이상 겹치면 Drop 되게 한다 
	    accept: ".data-box", //data-box라는 class를 가진것만 인식 
	    hoverClass: "droppable-active", // Drop상태일 때 css변경 가능  



		drop:function(event, ui){
			$(this).append($(ui.draggable));
			
			
		}
	});

});