function regulateHeight() {
	var eightHeight = $('.eight').css('height');
	console.log('.eight', eightHeight);
	console.log('.eight img', eightHeight);

	$('.fourFour').css('height', eightHeight);

	$(window).resize(function() {
		eightHeight = $('.eight').css('height');
		$('.fourFour').css('height', eightHeight);
	});
}
function changePage() {
	$('.menuButton').on('click', function() {
		if ($(this).attr('data-attr') == 0) {
			change('home');
			regulateHeight();
		} else if ($(this).attr('data-attr') == 1) {
			change('about');
		} else if ($(this).attr('data-attr') == 2) {
			change('contact');
		}
	})
}
function change(page) {
	$('.currPage').fadeOut();
	$('.currPage').removeClass('currPage');
	$('.'+page).fadeIn();
	$('.'+page).addClass('currPage');
	regulateHeight();
}

$(document).ready(function() {
	// $('.home').hide();
	$('.about').hide();
	$('.contact').hide();
	var divHeight = $('.eight').css('height');
	var eigHeight = $('.eightImg').css('height');
	var currPage = 'home';

	// console.log('.eight', divHeight);
	// console.log('.eight img', eigHeight);

	$('.fourFour').css('height', divHeight);
	setTimeout( function() {
		regulateHeight();
	}, 100);

	$('.menuButton').on('click', function() {
		$('.selected').removeClass('selected');
		currPage = Number($(this).attr('data-attr'));
		$(this).addClass('selected');
		console.log(currPage);
	})

	changePage();
	regulateHeight();
})