document.addEventListener('DOMContentLoaded', function () {
  var multipleCardCarousel = document.querySelector("#carousel_yt");

  if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
      wrap: false,
    });

    var carouselInner = $(".carousel-inner")[0];
    var carouselWidth = carouselInner.scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;

    $(".carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 3) {
        scrollPosition += cardWidth * 3;
      } else {
        scrollPosition = 0;
      }
      $(carouselInner).animate({ scrollLeft: scrollPosition }, 600);
    });

    $(".carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth * 3;
      } else {
        scrollPosition = carouselWidth - cardWidth * 3;
      }
      $(carouselInner).animate({ scrollLeft: scrollPosition }, 600);
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }
});
