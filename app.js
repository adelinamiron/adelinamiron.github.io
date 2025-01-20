$(document).ready(function () {

  // FAQ accordion logic
  $(".header").click(function () {
    $(".header").not(this).next().slideUp();
    $(".header").not(this).find(".cross-icon").removeClass("active");
    $(".header").not(this).parent().removeClass("active");
    $(this).next().slideToggle("slow");
    $(this).parent().toggleClass("active");
    $(this).find(".cross-icon").toggleClass("active");
  });

  // Open/Close mobile menu
  $(".hamburger-menu").click(function () {
    $(this).toggleClass("open");
    $(".navbar-nav").toggleClass("mobile");
    $("body").toggleClass("no-scroll");
  });

  // Close mobile menu when a link is clicked
  $(".nav-link").click(function () {
    if (window.innerWidth < 992) {
      $(".hamburger-menu").removeClass("open");
      $(".navbar-nav").removeClass("mobile");
      $("body").removeClass("no-scroll");
    }
  });

  // Video play on hover

  $('.location-item').hover(
    function () {
      // Find the video inside the hovered location-item and play it
      $(this).find('video')[0].play();
    },
    function () {
      // Find the video inside the hovered location-item, pause and reset it
      const video = $(this).find('video')[0];
      video.pause();
      video.currentTime = 0;
    }
  );
});
