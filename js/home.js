//Should swing the Logos on when the Logos appear in view **NOT WORKING**
function onScreenLogo() {
	var currScrollTop = $(document).scrollTop();

	var logoScrollTop = $('#companies').offset().top;
	var logoHeight = Number($('#companies').css('height').slice(0,2));

	var winHeight = $(window).height();

	// console.log(currScrollTop);
	// console.log(logoScrollTop);
	// console.log(logoHeight);
	// console.log(logoScrollTop+logoHeight);


	if (currScrollTop+winHeight >= logoScrollTop+logoHeight) {
		$('.cImage').addClass('animated bounce');
	} else {
		$('.cImage').removeClass('animated bounce');
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