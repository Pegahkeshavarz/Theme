//Should swing the Logos on when the Logos appear in view **NOT WORKING**
function onScreenLogo(obj) {
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
			// $('.cImage:eq('+i+')').addClass('animated bounce').delay(500);
			if (obj.haveseen != true) {
				bounceLoop(0, true);
			}
			// console.log(obj.haveseen);
			obj.haveseen = true;
		} else {
			// $('.cImage:eq('+i+')').removeClass('animated bounce');
			if (obj.haveseen != false) {
				bounceLoop(0, false);
			}
			obj.haveseen = false;
			// console.log(obj.haveseen);
		}
	}
}

function bounceLoop(i, bool) {
	if (bool) {
		//While 'i' is < # of divs with class .cImage
		if (i < $('.cImage').length) {
			//Bounce specific div @ i
			$('.cImage:eq('+i+')').addClass('animated bounce').delay(100).queue( function() {
				console.log('bouncelooped: ',i);
				//Update i
				i++;
				//Recursive Call
				bounceLoop(i, true);
				//Dequeue this queue
				$(this).dequeue();
			})
			return;
		}
	} else {
		$('.animated.bounce').removeClass('animated bounce');
	}
}
function contentInView() {
	window.setInterval(function() {
		$(document).on('scroll', function() {
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
						//scroll to content
						// console.log('scroll');
						$('body').stop().animate({
							scrollTop: scrollTo
						})
					} else {
						//top page
						$('body').stop().animate({
							scrollTop: 0
						})
					}
			}
		}, 2000);
		// console.log('loop');
	}, 3000)

	return;
}

function hoverSwing() {
	$('.cImage').hover( function(){$(this).addClass('animated swing')} , function(){$(this).removeClass('animated swing')} );
}

$(document).ready(function() {
	var obj = {haveseen: false};

	$(document).scroll( function() {
		onScreenLogo(obj);
	})
	hoverSwing();
	contentInView();
})