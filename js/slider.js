document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type: 'loop',
    perPage: 2,
    autoplay: true,
    breakpoints: {
      1100: {
        perPage: 1,
        gap: '1rem',
      },
    },
  }).mount();
});
