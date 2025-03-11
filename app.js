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

  $(window).on("scroll", function () {
    let scrollY = $(window).scrollTop();
    $(".big-stone").css("transform", `translateX(10%) translateY(${scrollY * 0.4}px) rotate(33deg)`);
    $(".small-stone").css("transform", `translateX(0%) translateY(${scrollY * 0.2}px)`);
  });
});
