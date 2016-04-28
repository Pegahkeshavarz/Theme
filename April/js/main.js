//Makes each container as tall as window height

function resizeContainers() {
    var landingTitle = $('.landing .title .twelve');
    var winHeight = $(window).height();
    var winWidth = $(window).width();
    var menuWidthHalf = $('#nav').width()/2*-1;

    $('.container').css('height', winHeight);
    landingTitle.css('marginTop', winHeight*0.3);
    $('#nav').css('marginLeft', menuWidthHalf);

    $(window).resize(function() {
        winHeight = $(window).height();
        winWidth = $(window).width();


        // $('#nav').css('marginLeft', menuWidthHalf);
        landingTitle.css('marginTop', winHeight*0.3);
        $('.container').css('height', winHeight);
    })
}

function navHandler() {
    //Prevents autoscroll when clicking on navbar
    $('.navbar').click(function(event) {
        event.stopPropagation();
    })

    //returns to top of website
    $('.logo').click(function() {
        $('body').animate({scrollTop: 0});
    })

    var menuHeight = $('#nav').height();
    //Places navbar on top of window upon scrolling down
    $(document).scroll( function(event) {
        if ($(document).scrollTop() > $(window).height()-menuHeight) {
            $('.logo').stop().fadeIn();
            $('#nav').css('position', 'fixed');
            $('#nav').css('top', 0);
        } else {
            $('.logo').stop().fadeOut();
            $('#nav').css('position', 'absolute');
            $('#nav').css('top', 'auto');
            $('#nav').css('bottom', 0);
        }
    })
}
function landingHandler() {
    //Clicking on landing page takes you to home page
    $('.landing').click(function() {
        var scrollTo = $('.home').offset().top;
        $('body').animate({scrollTop: scrollTo});
    })

    //Prevents autoscroll when clicking on navbar
    $('.navbar').click(function(event) {
        event.stopPropagation();
    })

    $('.menuButton').click(function() {
        var target = '.'+$(this).attr('data-target');
        var targetLoc = $(target).offset().top;

        $('body').animate({scrollTop: targetLoc});
    })
}

//On screen coming into view...
function aboutLiSpawning(i) {
    if ( i < $('.about li').length ) {
        $('.about li:eq('+i+')').animate({opacity: 1}).delay(100).queue(function() {
            aboutLiSpawning(i+1);
            $(this).dequeue;
        });
    }
}

function aboutCardHover() {
    $('.projectCard').hover(function() {
        
    }, function() {

    })
}

$(document).ready(function() {
    resizeContainers();
    landingHandler();
    navHandler();
    $('.logo').hide();

    $('.about li').css('opacity', '0');
    aboutLiSpawning(0);
})
