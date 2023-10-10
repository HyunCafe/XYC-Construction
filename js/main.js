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

  // Carousel initialization
  var owl = $(".owl-carousel");
  owl.owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 4 },
      }
  });

  // Add images to carousel
  for (var i = 1; i <= 19; i++) {
      owl.trigger("add.owl.carousel", [
          '<div class="single-gallery-carousel-content-box"><img class="lightbox" src="img/gallery/indexGallery/project-' +
          ("000" + i).slice(-3) +
          '.webp" alt="Image description" /></div>'
      ]).trigger("refresh.owl.carousel");
  }

  // Handle autoplay after dragging or touching
  var autoplayTimeout;

  owl.on('dragged.owl.carousel', function(event) {
      clearTimeout(autoplayTimeout);
      owl.trigger('stop.owl.autoplay');
      autoplayTimeout = setTimeout(function() {
          owl.trigger('play.owl.autoplay');
      }, 3000);
  });

  // Navbar collapse
  $('.navbar-nav>li>a').on('click', function () {
      $('.navbar-collapse').collapse('hide');
  });
  
  $(document).ready(function() {
    // When an image in the carousel is clicked
    $('.owl-carousel img').on('click', function() {
        var src = $(this).attr('src');
        $('#enlargedImage').attr('src', src);      // Set the source for the enlarged image
        $('#enlargedImageContainer').show();      // Show the enlarged image container
    });

    // Close the enlarged image
    $('#closeEnlargedImage').on('click', function() {
        $('#enlargedImageContainer').hide();
    });

    // Close the enlarged image if you click outside the image
    $('#enlargedImageContainer').on('click', function(event) {
        if (event.target === document.getElementById("enlargedImageContainer")) {
            $('#enlargedImageContainer').hide();
        }
    });
});

  // Highlight active navbar link
  var path = window.location.pathname;
  var page = path.split("/").pop();
  var navLinks = $(".navbar-nav .nav-link");
  navLinks.removeClass("active");

  switch (page) {
      case "index.html":
          if (window.location.hash === "#about-us") {
              $(".nav-about-us").addClass("active");
          } else if (window.location.hash === "#testimonials") {
              $(".nav-testimonials").addClass("active");
          } else if (window.location.hash === "#appointment") {
              $(".nav-appointment").addClass("active");
          } else {
              $(".nav-home").addClass("active");
          }
          break;
      case "process.html":
          $(".nav-process").addClass("active");
          break;
      case "gallery.html":
          $(".nav-gallery").addClass("active");
          break;
      case "faq.html":
          $(".nav-faq").addClass("active");
          break;
  }

})(jQuery);
