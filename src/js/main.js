$(".owl-carousel").owlCarousel({
  loop: true,
  responsiveClass: true,
  dots: false,

  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    320: {
      items: 3,
      nav: true,
      loop: false,
      margin: 0,
    },

    768: {
      items: 3,
      nav: false,
      loop: false,
      margin: 0,
    },

    1440: {
      loop: false,
      items: 6,
      margin: 0,
    },

    1920: {
      items: 6,
      loop: false,
      margin: 0,
    },
  },
});
