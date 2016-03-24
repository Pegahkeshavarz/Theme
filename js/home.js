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
function hoverSwing() {
	$('.cImage').hover( function(){$(this).addClass('animated swing')} , function(){$(this).removeClass('animated swing')} );
}

$(document).ready(function() {
	$(document).scroll( function() {
		onScreenLogo();
	})
	hoverSwing();
})