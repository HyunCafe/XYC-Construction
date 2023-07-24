(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
  
})(jQuery);

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      center: true,
      items:5,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:2000, //3 seconds
      autoplayHoverPause:true
    });
  });
  