function giveBackground(origScrollTop) {
	var nowScroll = $(document).scrollTop();
	var homeTop = Number($('.intro-body').css('height').slice(0,-2));
	var navheight = Number($('.navbar').css('height').slice(0,-2));

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
			// console.log('scrollup no bg');
			// $('.navbar-custom a').css('color', 'white');
			$('.navbar-custom a').stop().animate({color: 'white'});
		} else if (!bool) {
		//Give background to the navbar on scroll down
			$('.navbar').stop().css('background', 'rgba(204, 204, 204, 0.8)');
			$('.navbar').stop().css('opacity', '10%');
			$('.navbar-custom a').stop().animate({color: 'black'});
			// $('.navbar-custom a').css('color', 'black');
		}
}


$(document).ready( function() {
	
	var origScrollTop = {top: 0}
	origScrollTop.top = $(document).scrollTop();

	//Calculations for if screen starts at content
	var homeTop = Number($('.intro-body').css('height').slice(0,-2));	//content position
	var navheight = Number($('.navbar').css('height').slice(0,-2));		//Height of navbar as string

	if (origScrollTop.top > homeTop-navheight) {						//if start in content...
		bg(false);	
	}

	$(document).scroll( function() {
		giveBackground(origScrollTop);
	} );
})