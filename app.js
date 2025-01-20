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
