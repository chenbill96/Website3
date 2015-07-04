//Navbar fade-in
(function ($) {
    $(document).ready(function () {
        var fadeIn = $('#middleNav').offset().top;

        $(".navbar").hide();
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > fadeIn) {
                    $('.navbar').fadeIn();
                } else {
                    $('.navbar').fadeOut();
                }
            });
        });
    });
}(jQuery));