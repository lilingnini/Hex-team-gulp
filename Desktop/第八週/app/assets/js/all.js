$(function() {
  console.log('Hello Bootstrap5');
});

      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

// 確保圖片都載入後，以免造成剛進入頁面時圖片會被覆蓋
$('.row').imagesLoaded().progress( function() {
  $('.row').masonry(); // 渲染整體畫面
});
