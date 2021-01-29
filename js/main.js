//переменная свайпер
var swiper = new Swiper('.swiper-container', {
  // при прокрутке слайдера , если слайды закончатся , то отобразиться все равно первый 
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});