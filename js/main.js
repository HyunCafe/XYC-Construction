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

  for (var i = 1; i <= 11; i++) {
    // Change 12 to the number of images you have
    owl
      .trigger("add.owl.carousel", [
        '<div class="single-gallery-carousel-content-box"><img src="img/gallery/indexGallery/project-' +
          ("000" + i).slice(-3) +
          '.webp" alt="Image description" /></div>',
      ])
      .trigger("refresh.owl.carousel");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the current pathname
  var path = window.location.pathname;
  var page = path.split("/").pop();

  // Remove 'active' class from all links
  var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  navLinks.forEach((link) => link.classList.remove("active"));

  // Add 'active' class to the link that corresponds to the current page
  switch (page) {
    case "index.html":
      if (window.location.hash === "#about-us") {
        document.querySelector(".nav-about-us").classList.add("active");
      } else if (window.location.hash === "#testimonials") {
        document.querySelector(".nav-testimonials").classList.add("active");
      } else if (window.location.hash === "#appointment") {
        document.querySelector(".nav-appointment").classList.add("active");
      } else {
        document.querySelector(".nav-home").classList.add("active");
      }
      break;
    case "process.html":
      document.querySelector(".nav-process").classList.add("active");
      break;
    case "gallery.html":
      document.querySelector(".nav-gallery").classList.add("active");
      break;
    case "faq.html":
      document.querySelector(".nav-faq").classList.add("active");
      break;
  }
});
