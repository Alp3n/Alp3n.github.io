$('.scroll-down-button').on('click', function() {
    var scrollIndex = $(window).scrollTop(); // current page position
    $(window).scrollTop(800); // scroll down 800px
}
);