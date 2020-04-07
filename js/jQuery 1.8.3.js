$(function() {
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop != 0)
			$('.menu').stop().animate({'opacity':'0.2'},400);
		else	
			$('.menu').stop().animate({'opacity':'1'},400);
	});
	
	$('.menu').hover(
		function () {
			var scrollTop = $(window).scrollTop();
			if(scrollTop != 0){
				$('.menu').stop().animate({'opacity':'1'},400);
			}
		},
		function () {
			var scrollTop = $(window).scrollTop();
			if(scrollTop != 0){
				$('.menu').stop().animate({'opacity':'0.2'},400);
			}
		}
	);
});