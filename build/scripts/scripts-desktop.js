"use strict";

$('.product-slider--5 .owl-carousel').owlCarousel({
  loop: true,
  margin: 11,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 3
    },
    992: {
      items: 4
    }
  }
});
$('.product-slider--4:not(.product-slider--5) .owl-carousel').owlCarousel({
  loop: true,
  margin: 11,
  nav: true,
  dots: false,
  items: 5,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 3
    },
    992: {
      items: 4
    },
    1240: {
      items: 5
    }
  }
});
$('.product-slider--3 .owl-carousel').owlCarousel({
  loop: true,
  margin: 11,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    },
    1240: {
      items: 4
    }
  }
});

function goTo(selector) {
  var lastVisible = document.querySelector(selector);

  if (lastVisible) {
    var elemRect = lastVisible.getBoundingClientRect();
    var bodyRect = document.body.getBoundingClientRect();
    var offset = elemRect.bottom - bodyRect.top;
    window.scrollTo(0, offset);
  }
}

; //$(function () {
//  $(".articles-block .item").slice(0, 10).show();
//  $(".btn-download-5").on('click', function (e) {
//    e.preventDefault();
//    $(".articles-block .item:hidden").slice(0, 7).show();
//    goTo('.articles-block .item:nth-child(10)');
//    if ($(".articles-block .item:hidden").length == 0) {
//      $("#load").show();
//    }
//  });
//});
//# sourceMappingURL=maps/scripts-desktop.js.map
