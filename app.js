$(document).ready(function () {

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


  // Add autoplay attribut on mobile

  function updateVideoAutoplay() {
    $(".video-thumb").each(function () {
      if ($(window).width() < 992) {
        $(this).prop("autoplay", true); // Add the autoplay attribute
      } else {
        $(this).removeProp("autoplay") // Remove the autoplay attribute
      }
    });
  }

  // Initial check when the page loads
  $(document).ready(function () {
    updateVideoAutoplay();
  });

  // Update on window resize
  $(window).on("resize", function () {
    updateVideoAutoplay();
  });
