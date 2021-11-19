$('.header-search-btn').click(() => {
    $('.header-search-input').toggleClass('active')
})

$('.sidebar-menu-toggle-btn').click(() => {
    $('.sidebar-menu').toggleClass('active')
})

$('.sidebar-nav-link').click((e) => {
    $(e.target).siblings('.sidebar-submenu').toggleClass('active');
})

$(document).ready(function () {


    const blogDetailCarousel = $(".blog-detail-carousel")
    if ($(window).width() > 700) {
        blogDetailCarousel.removeClass('owl-carousel')
    } else {
        blogDetailCarousel.owlCarousel({
            dots: true,
            margin: 10,
            nav: true,
            items: 1,
        });
    }

    $('.close-carousel-btn').click((e) => {
        $(".carousel-popup-wrapper").removeClass('active')
    })

    $('.carousel-item').click((e) => {
        $(".carousel-popup-wrapper").addClass('active');
        const asd = $(".popup-carousel")
        asd.owlCarousel({
            dots: false,
            margin: 10,
            nav: true,
            items: 1,
        });
        // asd.trigger('open.owl.carousel', 2);

    })


})
