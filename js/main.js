//Should swing the Logos on when the Logos appear in view **NOT WORKING**
function swingLogo() {
	$(this).addClass('animated swing');
}

function giveBackground(origScrollTop) {
	var nowScroll = $(document).scrollTop();
	// console.log(origScrollTop.top);
	// console.log(nowScroll);
	var homeTop = $('#photoContainer').offset().top;

	var navheightString = $('.navbar').css('height');
	var navheight = 0;

	navheight = navheightString.slice(0, -2);

	console.log(homeTop-navheight);
	console.log(homeTop);
	console.log(navheight);

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
			console.log('scrollup no bg');
		} else if (!bool) {
		//Give background to the navbar on scroll down
			$('.navbar').stop().css('background', 'rgba(204, 204, 204, 0.8)');
			$('.navbar').stop().css('opacity', '10%');
		}
}

$(document).ready( function() {
	//Not Used currently...
	//For animating elements, take in the original elements properties first.
	var namePos = {
		height: $('.navbar-brand').css('height'),
		width: $('.navbar-brand').css('width'),
		margin: $('.navbar-brand').css('margin')
	};
	var isBackGround = {bool: false};

	var origScrollTop = {top: 0}
	origScrollTop.top = $(document).scrollTop();

	$(document).scroll( function() {giveBackground(origScrollTop)} );
})