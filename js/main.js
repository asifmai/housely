// Owl
$('#owl-carousel-houses').owlCarousel({
    loop: true,
    margin: 12,
    nav: true,
    autoPlay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause:true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    }
});

// Owl
$('#owl-carousel-news').owlCarousel({
    loop: true,
    margin: 12,
    nav: true,
    autoPlay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause:true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    }
});

// 2
$('#owl-carousel-footer').owlCarousel({
    loop: true,
    margin: 12,
    dots: true,
    autoPlay: true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    items: 1,
});

$('.videoIcon').click(function (e) { 
    e.preventDefault();
    $('.videoImg').css('display', 'none');
    $('.main-video').css('display', 'block');
    
});