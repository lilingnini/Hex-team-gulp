$(function() {
  console.log('Hello Bootstrap5');
});


var swiper = new Swiper(".learn-swiper", {
  autoplay: {
      delay:1200,
      disableOnInteraction: false,
  },
  speed: 1200,
  loop: true,
  spaceBetween: 24,
  slidesPerView: 3,
  //多欄
  breakpoints: {
      768: {
          slidesPerView: 6
      },
      992: {
          slidesPerView: 9
      }
  }

});


const swiper2 = new Swiper('.feedback-swiper', {
  // Optional parameters
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


var swiper = new Swiper(".lesson-swiper", {
  autoplay: {
      delay:1200,
      disableOnInteraction: false,
  },
  speed: 1200,
  loop: true,
  spaceBetween: 16,
  slidesPerView: 3,
  //多欄
  breakpoints: {
      768: {
          slidesPerView: 3
      },
      992: {
          slidesPerView: 6
      }
  }

});