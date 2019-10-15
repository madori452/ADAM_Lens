// debug = console.log.bind(console);

$(document).ready(function (){

	$('.go-top').on('click',function(){
		$('html,body').stop().animate({scrollTop: 0},500);
	});

	$.get("temp/header.html", function(data) {
		$(".header").replaceWith(data);
		
		$('.header .search a').on('click',function(){
			$('.box').slideToggle(300);
		});

		$('.header .mobile .nav_tri a').on('click',function(){
			$(this).toggleClass('on');
			$('.header').toggleClass('on');
			$('.header .list').slideToggle(400);
			$('body').toggleClass('overlap');
		});
	});
	
	$.get("temp/footer.html", function(data) {
		$(".footer").replaceWith(data);

		$('.footer .links .title').on('click',function(){
			var window_width = $(window).width();
			if ( window_width <= 767 ) {
				$(this).toggleClass('on');
				if ( $(this).next('.con').css('display') == 'none' ) {
					$(this).next('.con').slideDown(300);
				} else {
					$(this).next('.con').hide();
				}
			}
			
		});
		
		var url = window.location.href.replace(window.location.origin+"/","").replace(".html","");
		if ( url == 'lang' ) {
			$('.footer .lang').hide();
		}
	});
});