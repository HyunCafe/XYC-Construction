(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });
})(jQuery);

$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000, //3 seconds
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  for (var i = 1; i <= 12; i++) {
    // Change 12 to the number of images you have
    owl
      .trigger("add.owl.carousel", [
        '<div class="single-gallery-carousel-content-box"><img src="img/gallery/project-' +
          ("000" + i).slice(-3) +
          '.webp" alt="Image description" /></div>',
      ])
      .trigger("refresh.owl.carousel");
  }
});
