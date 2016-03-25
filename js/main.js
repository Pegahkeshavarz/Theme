function giveBackground(origScrollTop,  homeTop, navheight) {
	var nowScroll = $(document).scrollTop();

	homeTop = Number($('.intro-body').css('height').slice(0,-2));	//content position
	navheight = Number($('.navbar').css('height').slice(0,-2));		//Height of navbar as string

	if (origScrollTop.top > nowScroll && nowScroll < homeTop-navheight) {
		//Scroll up, no background if not over content
		bg(true);
	} else if (origScrollTop.top < nowScroll) {
		bg(false);
	}

	origScrollTop.top = $(document).scrollTop();
}
function bg(bool) {
		//Remove background to the navbar on scroll up
		if (bool) {
			$('.navbar').stop().css('background', 'transparent');
			$('.navbar-custom a').stop().animate({color: 'white'});
		} else if (!bool) {
		//Give background to the navbar on scroll down
			$('.navbar').stop().css('background', 'rgba(204, 204, 204, 0.8)');
			$('.navbar').stop().css('opacity', '10%');
			$('.navbar-custom a').stop().animate({color: 'black'});
		}
}
function arrowDown () {
	if ( chkDown() ) {	//if div down exists
		//Code for click on down and stuff
		$('#down').on('click', function() {

			var homeTop = Number($('.intro-body').css('height').slice(0,-2));	//content position
			var navheight = Number($('.navbar').css('height').slice(0,-2));		//Height of navbar as string

			var scrollTo = homeTop - navheight;
			// console.log('click down', scrollTo);
			$('body').stop().animate({scrollTop: scrollTo})
		})
	}
}
function hideArrow (navheight, homeTop) {
	var currScrollTop = $(document).scrollTop();
	homeTop = Number($('.intro-body').css('height').slice(0,-2));	//content position
	navheight = Number($('.navbar').css('height').slice(0,-2));		//Height of navbar as string

	if ($(window).width() > 766) {
		if ( chkDown() ) {
			if (currScrollTop < homeTop- 2*navheight) {
				$('#down').fadeIn();
			} else {
				$('#down').fadeOut();
			}
		}
	} else {
		$('#down').hide();
	}
}
function chkDown() {
	if ($('#down').length) {
		return true;
	} else {
		return false;
	}
}

$(document).ready( function() {
	var origScrollTop = {top: 0}
	origScrollTop.top = $(document).scrollTop();

	//Calculations for if screen starts at content
	var homeTop = Number($('.intro-body').css('height').slice(0,-2));	//content position
	var navheight = Number($('.navbar').css('height').slice(0,-2));		//Height of navbar as string

	//Initializes Arrow Down function for Arrowdown and current page
	arrowDown();

	//Checks if it's already in content
	if (origScrollTop.top > homeTop-navheight) {						//if start in content...
		bg(false);
	}
	//On scroll, navbar background or not
	$(document).scroll( function() {
		giveBackground(origScrollTop, homeTop, navheight);
		hideArrow(navheight, homeTop);
	} )
	window.setInterval(function() {
		hideArrow(navheight,homeTop);
	}, 500);
})