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
    $(".big-stone").css(
      "transform",
      `translateX(10%) translateY(${scrollY * 0.4}px) rotate(33deg)`
    );
    $(".small-stone").css(
      "transform",
      `translateX(0%) translateY(${scrollY * 0.2}px)`
    );
  });

  // Handle tab switching
  $(".tab").on("click", function () {
    const target = $(this).data("tab");

    $(".tab").removeClass("active");
    $(this).addClass("active");

    $(".tab-content").removeClass("active");
    $("#" + target).addClass("active");

    resetCarousel(target);
  });

  function resetCarousel(tabId) {
    const $tab = $("#" + tabId);
    const $images = $tab.find(".carousel-image");
    $images.removeClass("active").css("opacity", 0);
    $images.first().addClass("active").css("opacity", 1);
    $tab.data("index", 0);
    updateStatus($tab, 0, $images.length);
  }

  function updateButtons($tab, index, length) {
    $tab.find(".prev-btn").prop("disabled", index === 0);
    $tab.find(".next-btn").prop("disabled", index === length - 1);
  }

  function updateStatus($tab, index, length) {
    updateButtons($tab, index, length);
    $tab.find(".carousel-counter").text(`${index + 1} of ${length}`);
  }

  function switchImage($tab, newIndex) {
    const $images = $tab.find(".carousel-image");
    const currentIndex = $tab.data("index") || 0;

    if (newIndex >= 0 && newIndex < $images.length) {
      $images.eq(currentIndex).removeClass("active").css("opacity", 0);
      $images.eq(newIndex).addClass("active").css("opacity", 1);
      $tab.data("index", newIndex);
      updateStatus($tab, newIndex, $images.length);
    }
  }

  $(".next-btn").on("click", function () {
    const $tab = $(this).closest(".tab-content");
    const index = $tab.data("index") || 0;
    switchImage($tab, index + 1);
  });

  $(".prev-btn").on("click", function () {
    const $tab = $(this).closest(".tab-content");
    const index = $tab.data("index") || 0;
    switchImage($tab, index - 1);
  });

  // Initialize first tab
  const firstTabId = $(".tab.active").data("tab");
  resetCarousel(firstTabId);
});
