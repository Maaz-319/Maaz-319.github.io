$(function () {
    $(".pfp__div").hide();
    $(".background").hide();
    $(".background").fadeIn(2000);
    $(".pfp__div").fadeIn(500);

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 600, 'linear');
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#backToTopBtn').removeClass('hidden');
        } else {
            $('#backToTopBtn').addClass('hidden');
        }
    });

    // Scroll to top when the button is clicked
    $('#backToTopBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
        return false;
    });

    $(".navbar__toggle__button__btn").click(function () {
        $(".navbar__div").show();
    });
});