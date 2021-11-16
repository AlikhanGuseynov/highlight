$('.header-search-btn').click(() => {
    $('.header-search-input').toggleClass('active')
})

$('.sidebar-menu-toggle-btn').click(() => {
    $('.sidebar-menu').toggleClass('active')
})


$('.sidebar-nav-link').click((e) => {
    $(e.target).siblings('.sidebar-submenu').toggleClass('active');
})

