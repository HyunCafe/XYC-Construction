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

  // Lightbox for gallery
  var imageDialog = $('#imageDialog');
  var dialogImage = $('#dialogImage');
  var closeDialogButton = $('#closeDialog');

  $('.gallery-slider_wrapper').on('click', '.lightbox', function() {
      dialogImage.attr('src', $(this).attr('src'));
      imageDialog[0].showModal();
  });

  closeDialogButton.click(function() {
      imageDialog[0].close();
  });

  imageDialog.click(function(event) {
      if (event.target === imageDialog[0]) {
          imageDialog[0].close();
      }
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
