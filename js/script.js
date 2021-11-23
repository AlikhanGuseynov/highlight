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
    })


    const indexSlider = $(".index-slider")
    indexSlider.owlCarousel({
        dots: false,
        margin: 10,
        nav: false,
        loop: true,
        center: true,
        autoWidth: false,
        lazyLoad: true,
        items: 1,
        responsive: {
            700: {
                items: 1.5,
                autoWidth: true,
            }
        }
    });
    $('.slider-btn.next').click(function () {
        indexSlider.trigger('next.owl.carousel');
    })

    $('.slider-btn.prev').click(function () {
        indexSlider.trigger('prev.owl.carousel', [300]);
    })

    indexSlider.on('changed.owl.carousel', function (event) {
        console.log(event.item.index)
    })


    $('.scroll-btn-link').on('click', function (e) {
        let href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 370,
            easing: "linear"
        });
        return false;
    });

    $('.success-certificates-item').click(function (e) {
        $(".carousel-popup-wrapper").addClass('active');
        const carousel = $(".popup-carousel")
        carousel.owlCarousel({
            dots: false,
            margin: 10,
            nav: true,
            items: 1,
        });
    })

})

function certificateClick(index) {
    $(".carousel-popup-wrapper").addClass('active');
    const carousel = $(".popup-carousel")
    carousel.owlCarousel({
        dots: false,
        margin: 10,
        nav: true,
        items: 1,
    });
    carousel.trigger('to.owl.carousel', index);
}
