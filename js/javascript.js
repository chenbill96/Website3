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
}($));


$(document).ready(function() {
    $('#loader-wrapper').fadeOut();
    $('#project2').hide();
    $('#project3').hide();

    $('#tab2').hide();
    $('#tab3').hide();
    $('#tab4').hide();

    $('.projectThumbnails a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
 
        // Show/Hide Project
        $('.projectContent ' + currentAttrValue).fadeIn(400).siblings().hide();
 
        // Change/remove current project to active
        // $(this).parent('li').addClass('activeProject').siblings().removeClass('activeProject');
    
        e.preventDefault();
    });


    $('.project ul li a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
 
        // Show/Hide Project
        $('.tabContent ' + currentAttrValue).fadeIn(400).siblings().hide();
 
        // Change/remove current project to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
    
        e.preventDefault();
    });

});


// setTimeout(function(){
//   $('body').addClass('loaded');
// }, 2000);


// //smoothscroll
// $(document).ready(function () {
//     $(document).on("scroll");
 
//     $('a[href^="#"]').on('click', function (e) {
//         e.preventDefault();
//         $(document).off("scroll");

//         var target = this.hash;
//         $target = $(target);
//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top+2
//         }, 500, 'swing', function () {
//             window.location.hash = target;
//             $(document).on("scroll");
//         });
//     });
// });