//Should swing the Logos on when the Logos appear in view **NOT WORKING**
function onScreenLogo() {
	//Current scrollTop() position
	var currScrollTop = $(document).scrollTop();

	//ScrollTop of surrounding <ul> && Height of the <ul>
	var logoScrollTop = $('#companies').offset().top;
	var logoHeight = Number($('#companies').css('height').slice(0,2));

	//Height of the Window
	var winHeight = $(window).height();

	for (var i = 0; i < $('.company').length; i++) {
		//If current top + height of window (bottom of page) >=
		//		scrollTop of surrounding <ul> + Height of <ul>
		//	case true: 	add class --> bounces
		//  case false: remove class--> refreshes the bounce
		if (currScrollTop+winHeight >= logoScrollTop+logoHeight) {
			$('.cImage:eq('+i+')').addClass('animated bounce').delay(500);
		} else {
			$('.cImage:eq('+i+')').removeClass('animated bounce');
		}
	}
}
function contentInView() {
	window.setInterval(function() {
		// console.log('______________');

		var currScrollTop = $(document).scrollTop();
		var winHeight = $(window).height();
		// console.log('currScrollTop: ',currScrollTop,'\t\twinHeight: ',winHeight);

		var homeTop = Number($('.intro-body').css('height').slice(0,-2));	//content position
		var navheight = Number($('.navbar').css('height').slice(0,-2));		//Height of navbar as string

		var scrollTo = homeTop - navheight;

		var checker = winHeight*0.4;

		// NOT USED CURRENTLY, For more specific cases.
		// var boolish = $(window).width() > 991 && $(window).height() > 709;
		// var boolish2 = $(window).width() > 626 && $(window).height() > 862;
		// console.log(boolish, boolish2);

		if ($(window).width() > 991 && $(window).height() > 709) {
			if (currScrollTop >= checker) {
				console.log('scroll');
				$('body').delay(3000).stop().animate({
					scrollTop: scrollTo
				})
			} else {
				$('body').delay(3000).stop().animate({
					scrollTop: 0
				})
			}
		}
		// console.log('loop');
	}, 3000)

	return;
}

function hoverSwing() {
	$('.cImage').hover( function(){$(this).addClass('animated swing')} , function(){$(this).removeClass('animated swing')} );
}

$(document).ready(function() {
	$(document).scroll( function() {
		onScreenLogo();
	})
	hoverSwing();
	contentInView();
})