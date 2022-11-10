"use strict";

function goTo(selector) {
  var lastVisible = document.querySelector(selector);

  if (lastVisible) {
    var elemRect = lastVisible.getBoundingClientRect();
    var bodyRect = document.body.getBoundingClientRect();
    var offset = elemRect.bottom - bodyRect.top;
    window.scrollTo(0, offset);
  }
}

;
$(function () {
  $(".product-slider--3 .item").slice(0, 2).show();
  $(".btn-download-1").on('click', function (e) {
    e.preventDefault();
    $(".product-slider--3 .item:hidden").slice(0, 2).show();
    goTo('.product-slider--3 .item:nth-child(2)');

    if ($(".product-slider--3 .item:hidden").length == 0) {
      $("#load").show();
    }
  });
});
$(function () {
  $(".actions-content .item").slice(0, 4).show();
  $(".btn-download-4").on('click', function (e) {
    e.preventDefault();
    $(".actions-content .item:hidden").slice(0, 3).show();
    goTo('.actions-content .item:nth-child(3)');

    if ($(".actions-content .item:hidden").length == 0) {
      $("#load").show();
    }
  });
});
$(function () {
  $(".articles-block .item").slice(0, 4).show();
  $(".btn-download-5").on('click', function (e) {
    e.preventDefault();
    $(".articles-block .item:hidden").slice(0, 3).show();
    goTo('.articles-block .item:nth-child(5)');

    if ($(".articles-block .item:hidden").length == 0) {
      $("#load").show();
    }
  });
});
$(function () {
  $(".catalog-menu--search .catalog-menu-item").slice(0, 4).show();
  $(".btn-download-6").on('click', function (e) {
    e.preventDefault();
    $(".catalog-menu--search .catalog-menu-item:hidden").slice(0, 2).show();
    goTo('.catalog-menu--search .catalog-menu-item:nth-child(4)');

    if ($(".catalog-menu--search .catalog-menu-item:hidden").length == 0) {
      $("#load").show();
    }
  });
});
$(function () {
  $(".catalog-content--search-results .product-item").slice(0, 4).show();
  $(".btn-download-7").on('click', function (e) {
    e.preventDefault();
    $(".catalog-content--search-results .product-item:hidden").slice(0, 2).show();
    goTo('.catalog-content--search-results .product-item:nth-child(4)');

    if ($(".catalog-content--search-results .product-item:hidden").length == 0) {
      $("#load").show();
    }
  });
});
$(function () {
  $(".catalog-content .product-item").slice(0, 4).show();
  $(".btn-download-8").on('click', function (e) {
    e.preventDefault();
    $(".catalog-content .product-item:hidden").slice(0, 4).show();
    goTo('.catalog-content .product-item:nth-child(4)');

    if ($(".catalog-content .product-item:hidden").length == 0) {
      $("#load").show();
    }
  });
});
$('.city-selection__link').click(function () {
  $('.city-selection__list').toggle(0);
});
var $banners = $('.product-slider__banners.owl-carousel, .new-banners.owl-carousel');
$banners.each(function () {
  console.log($(this));
  var $this = $(this); //

  if ($this.find('.item').length > 2) {
    $this.owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      items: 2,
      responsive: {
        0: {
          nav: false,
          dots: true
        },
        768: {
          nav: false,
          dots: false
        }
      }
    });
  }
}); //$(function () {
//  $(".product-slider--third .item").slice(0, 2).show();
//  $(".btn-download-1").on('click', function (e) {
//    e.preventDefault();
//    $(".product-slider--third .item:hidden").slice(0, 2).show();
//    if ($(".product-slider--third .item:hidden").length == 0) {
//      $("#load").show();
//    }
//  });
//});
//

$(function () {
  $(".product-slider--4 .item").slice(0, 4).show();
  $(".btn-download-2").on('click', function (e) {
    e.preventDefault();
    $(".product-slider--4 .item:hidden").slice(0, 4).show();
    goTo('.product-slider--4 .item:nth-child(4)');

    if ($(".product-slider--4 .item:hidden").length == 0) {
      $("#load").show();
    }
  });
});
$('.actions-content .owl-carousel').owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: false,
  items: 3,
  responsive: {
    0: {
      nav: false,
      dots: true,
      items: 1
    },
    479: {
      nav: false,
      dots: true,
      items: 2
    }
  }
});
$('.articles-block .owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  dots: false,
  items: 3,
  responsive: {
    0: {
      nav: false,
      dots: true,
      items: 1
    },
    479: {
      nav: false,
      dots: true,
      items: 2
    }
  }
});

function moveBtnexitToLktop() {
  if (!document.querySelector(".page-head > .btn-exit")) {
    var btnexitBlock = document.querySelector(".btn-exit");
    var lktopBlock = document.querySelector(".page-head");

    if (lktopBlock && btnexitBlock) {
      lktopBlock.appendChild(btnexitBlock);
    }
  }
}

function moveCompareToHeadright() {
  if (!document.querySelector(".top-header__content-right > .header-compare")) {
    var compareBlock = document.querySelector(".header-compare");
    var headrightBlock = document.querySelector(".top-header__content-right");

    if (headrightBlock && compareBlock) {
      headrightBlock.appendChild(compareBlock);
    }
  }
}

function moveCartToHeadright() {
  if (!document.querySelector(".top-header__content-right > .header-cart")) {
    var cartBlock = document.querySelector(".header-cart");
    var headrightBlock = document.querySelector(".top-header__content-right");

    if (headrightBlock && cartBlock) {
      headrightBlock.appendChild(cartBlock);
    }
  }
}

function moveBtnToMobbtn() {
  if (!document.querySelector(".mobile-btn-container > .btn-form")) {
    var btnBlock = document.querySelector(".btn-form");
    var mobbtnBlock = document.querySelector(".mobile-btn-container");

    if (mobbtnBlock && btnBlock) {
      mobbtnBlock.appendChild(btnBlock);
    }
  }
}

function handleResize() {
  var width = window.innerWidth;

  if (width < 768) {
    moveBtnexitToLktop();
    moveCompareToHeadright();
    moveCartToHeadright();
    moveBtnToMobbtn();
    return;
  }
}

window.addEventListener("resize", handleResize);
handleResize();
//# sourceMappingURL=maps/scripts-mobile.js.map
