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


// setTimeout(function(){
//   $('body').addClass('loaded');
// }, 2000);

$('body').ready(function() {
  $('#loader-wrapper').fadeOut();
});


$('body').ready(function() {
  $('.nav.navbar-nav li').removeClass('active');
});


$(document).ready(function () {
    $(document).on("scroll", onScroll);
 
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
 
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
 
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});
 
function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('.nav.navbar-nav li').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('.nav.navbar-nav li').removeClass("active");
            currentLink.addClass("active");
        }
        else{
            currentLink.removeClass("active");
        }
    });
}