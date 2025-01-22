$(document).ready(function () {
  // Video play on hover
  $(".video-hover").hover(
    function () {
      $(this).find(".video-desktop")[0].play();
    },
    function () {
      const video = $(this).find(".video-desktop")[0];
      video.pause();
      video.currentTime = 0;
    }
  );
});
