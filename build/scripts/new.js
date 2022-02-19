"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1280
};
$(document).ready(function () {
  homeBanner();
  header();
  gallery();
  landing_sliders();
  up();
  chatBlock();
  toggle(); //interaction

  new СustomInteraction({
    targets: 'a, button, [data-custom-interaction], .image-zoom'
  }); //slider constructor

  document.querySelectorAll('.slider-constructor').forEach(function ($this) {
    new SliderConstructor($this).init();
  });
});

function throttle(func, interval, context) {
  var isCooldown = false;
  return function () {
    if (isCooldown) return;
    func.apply(context || this, arguments);
    isCooldown = true;
    setTimeout(function () {
      return isCooldown = false;
    }, interval);
  };
}

function debounce(func, interval, context) {
  var timeout = false;
  return function () {
    var _arguments = arguments,
        _this = this;

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(context || _this, _arguments);
    }, interval);
  };
}

function homeBanner() {
  var $slider = $('.home-banner .owl-carousel'),
      arrowPrev = '<svg class="icon" viewBox="0 0 10.5 18.1"><path stroke="none" d="M9,0l1.4,1.4L2.8,9l7.6,7.6L9,18.1L0,9C0,9,9.1,0,9,0z"></path></svg>',
      arrowNext = '<svg class="icon" viewBox="0 0 10.5 18.1"><path stroke="none" d="M1.4,18.1L0,16.7l7.6-7.6L0,1.5L1.4,0l9,9.1C10.4,9.1,1.3,18.1,1.4,18.1z"></path></svg>';

  if ($slider.length) {
    $slider.owlCarousel({
      loop: true,
      nav: true,
      smartSpeed: 500,
      dots: true,
      items: 1,
      lazyLoad: true,
      autoplay: true,
      autoplayTimeout: (+$slider.data('autoplay-timeout') || 5) * 1000,
      navText: [arrowPrev, arrowNext]
    });
  }
}

function header() {
  var $header = $('header'),
      height,
      scroll;
  check();
  $(window).scroll(function () {
    check();
  });

  function check() {
    if (!$header.hasClass('header_landing')) {
      scroll = $(window).scrollTop();
      height = $header.height();

      if (scroll > height) {
        $header.addClass('fixed');
      } else {
        $header.removeClass('fixed');
      }
    }
  }
} //gallery


function gallery() {
  if ($.fancybox) {
    $('.owl-item [data-fancybox]').on('click', function () {
      var $selector = $(this).parents('.owl-carousel').find('.owl-item:not(.cloned) [data-fancybox]');
      $.fancybox.open($selector, {
        selector: $selector,
        backFocus: false
      }, $selector.index(this));
      return false;
    });
  }
}

function landing_sliders() {
  var $sliders = $('.landing-slider .owl-carousel');

  if ($sliders.length) {
    $sliders.each(function () {
      var $this = $(this);
      var count1, count2, count3, count4;

      if ($this.is('.landing-slider_1 .owl-carousel')) {
        count1 = 2;
        count2 = 2;
        count3 = 3;
        count4 = 4;
      } else if ($this.is('.landing-slider_2 .owl-carousel')) {
        count1 = 1;
        count2 = 2;
        count3 = 3;
        count4 = 4;
      }

      $this.owlCarousel({
        loop: true,
        margin: 20,
        responsive: {
          0: {
            items: count1,
            margin: 16
          },
          576: {
            items: count2
          },
          768: {
            items: count3
          },
          992: {
            items: count4
          }
        }
      });
    });
  }
}

function toggle() {
  var $section = $('.toggle-section'),
      speed = 250;
  $section.each(function () {
    var $this = $(this),
        $toggle = $this.children('.toggle-section__trigger'),
        $content = $this.children('.toggle-section__content'),
        $close = $content.find('.toggle-section__close'),
        state = $this.hasClass('active') ? true : false,
        initialized;
    $toggle.on('click', function () {
      state = !state ? true : false;
      check();
    });
    $close.on('click', function () {
      state = false;
      check();
    });

    if ($this.is('[data-hover]')) {
      var timeout;
      $toggle.add($content).on('mouseenter', function (event) {
        if (!isTouch) {
          if (timeout) clearTimeout(timeout);
          state = true;
          check();
        }
      });
      $toggle.add($content).on('mouseleave', function (event) {
        if (!isTouch) {
          var delay;

          if ($(this).is($toggle)) {
            delay = 500;
          } else {
            delay = 100;
          }

          timeout = setTimeout(function () {
            state = false;
            check();
          }, delay);
        }
      });
    }

    if ($this.is('[data-out-hide]') || $this.is('[data-hover]')) {
      $(document).on('click touchstart', function (event) {
        var $target = $(event.target);

        if (!$target.closest($content).length && !$target.closest($toggle).length && state) {
          state = false;
          check();
        }
      });
    }

    function check() {
      if (state) {
        $this.add($content).add($toggle).addClass('active');

        if ($this.is('[data-slide]')) {
          $content.slideDown(speed);
        }
      } else {
        $this.add($toggle).add($content).removeClass('active');

        if ($this.is('[data-slide]')) {
          if (initialized) {
            $content.stop().slideUp(speed);
          } else {
            $content.hide(0);
          }
        }
      }
    }

    check();
    initialized = true;
  });
}

function up() {
  var $btn = $('.js-up');

  function check() {
    var scroll = $(window).scrollTop();

    if (scroll > 50) {
      $btn.addClass('visible');
    } else {
      $btn.removeClass('visible');
    }
  }

  $(window).on('scroll', function () {
    check();
  });
  check();
  $btn.on('click', function (event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, 500);
  });
}

function chatBlock() {
  var $block = $('.chat-block'),
      $open = $('[data-chat-open]'),
      $close = $('[data-chat-close]');
  $open.on('click', function () {
    $block.addClass('active');
  });
  $close.on('click', function () {
    $block.removeClass('active');
  });
}

var СustomInteraction = function СustomInteraction() {
  var _this2 = this;

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, СustomInteraction);

  this.targets = options.targets;
  this.touchendDelay = options.touchendDelay || 100; //ms

  var events = function events(event) {
    var $targets = [];
    $targets[0] = event.target !== document ? event.target.closest(_this2.targets) : null;
    var $element = $targets[0],
        i = 0;

    while ($targets[0]) {
      $element = $element.parentNode;

      if ($element !== document) {
        if ($element.matches($targets.value)) {
          i++;
          $targets[i] = $element;
        }
      } else {
        break;
      }
    } //touchstart


    if (event.type == 'touchstart') {
      _this2.touched = true;
      if (_this2.timeout) clearTimeout(_this2.timeout);

      if ($targets[0]) {
        var _iterator = _createForOfIteratorHelper($targets),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var $target = _step.value;
            $target.setAttribute('data-touch', '');
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    } //touchend
    else if (event.type == 'touchend' || event.type == 'contextmenu' && _this2.touched) {
        _this2.timeout = setTimeout(function () {
          _this2.touched = false;
        }, _this2.touchendDelay);

        if ($targets[0]) {
          setTimeout(function () {
            var _iterator2 = _createForOfIteratorHelper($targets),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _$target = _step2.value;

                _$target.removeAttribute('data-touch');
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }, _this2.touchendDelay);
        }
      } //mouseenter


    if (event.type == 'mouseenter' && !_this2.touched && $targets[0] && $targets[0] == event.target) {
      $targets[0].setAttribute('data-hover', '');
    } //mouseleave
    else if (event.type == 'mouseleave' && !_this2.touched && $targets[0] && $targets[0] == event.target) {
        $targets[0].removeAttribute('data-click');
        $targets[0].removeAttribute('data-hover');
      } //mousedown


    if (event.type == 'mousedown' && !_this2.touched && $targets[0]) {
      $targets[0].setAttribute('data-click', '');
    } //mouseup
    else if (event.type == 'mouseup' && !_this2.touched && $targets[0]) {
        $targets[0].removeAttribute('data-click');
      }
  };

  document.addEventListener('touchstart', events);
  document.addEventListener('touchend', events);
  document.addEventListener('mouseenter', events, true);
  document.addEventListener('mouseleave', events, true);
  document.addEventListener('mousedown', events);
  document.addEventListener('mouseup', events);
  document.addEventListener('contextmenu', events);
};

var SliderConstructor = /*#__PURE__*/function () {
  function SliderConstructor(element) {
    _classCallCheck(this, SliderConstructor);

    this.element = element;
  }

  _createClass(SliderConstructor, [{
    key: "init",
    value: function init() {
      var _this3 = this;

      this.params = {};
      this.params.autoplay = this.element.getAttribute('data-autoplay-timeout') !== null;
      this.params.autoplayTimeout = +this.element.getAttribute('data-autoplay-timeout') || 5000;
      this.params.arrows = this.element.getAttribute('data-no-arrows') === null ? true : false;
      this.params.adaptiveHeight = this.element.getAttribute('data-adaptive-height') !== null;
      this.params.count = {};
      this.params.count.xs = +this.element.getAttribute('data-slides') || 1;
      this.params.count.sm = +this.element.getAttribute('data-sm-slides') || this.params.count.xs;
      this.params.count.md = +this.element.getAttribute('data-md-slides') || this.params.count.sm;
      this.params.count.lg = +this.element.getAttribute('data-lg-slides') || this.params.count.md;
      this.params.count.xl = +this.element.getAttribute('data-xl-slides') || this.params.count.lg;
      this.params.rows = {};
      this.params.rows.xs = +this.element.getAttribute('data-rows') || 1, this.params.rows.sm = +this.element.getAttribute('data-sm-rows') || this.params.rows.xs, this.params.rows.md = +this.element.getAttribute('data-md-rows') || this.params.rows.sm, this.params.rows.lg = +this.element.getAttribute('data-lg-rows') || this.params.rows.md, this.params.rows.xl = +this.element.getAttribute('data-xl-rows') || this.params.rows.lg;
      this.params.state = {};
      Object.keys(breakpoints).forEach(function (key, index) {
        var breakpoint = index !== 0 ? '-' + key + '-' : '-';

        var attr = _this3.element.getAttribute("data".concat(breakpoint, "mounted"));

        if (attr === null && index !== 0) {
          var prevKey = Object.keys(breakpoints)[index - 1];
          _this3.params.state[key] = _this3.params.state[prevKey];
        } else if (attr === 'true' || index === 0 && attr !== 'false') {
          _this3.params.state[key] = true;
        } else {
          _this3.params.state[key] = false;
        }
      });
      this.slides = [];
      this.containsMobileHiddenSlides = false;
      this.element.childNodes.forEach(function (slide) {
        if (!slide.tagName) return;

        if (slide.getAttribute('data-slide-mobile-hidden') !== null) {
          _this3.containsMobileHiddenSlides = true;
        }

        _this3.slides.push(slide);
      });
      this.createIcons();
      this.checkSliderState();
      this.checkSliderStateDebounced = debounce(this.checkSliderState, 500, this);
      window.addEventListener('resize', this.checkSliderStateDebounced);
    }
  }, {
    key: "createIcons",
    value: function createIcons() {
      var leftIcon = "\n      <svg viewBox=\"0 0 11 19\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M1.4 18.1L0 16.7L7.6 9.10001L0 1.5L1.4 0L10.4 9.10001C10.4 9.10001 1.3 18.1 1.4 18.1Z\"/>\n      </svg>\n    ";
      var rightIcon = "\n      <svg viewBox=\"0 0 11 19\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M9.00039 7.24792e-05L10.4004 1.40007L2.80039 9.00009L10.4004 16.6001L9.00039 18.1001L0.000391006 9.00009C0.000391006 9.00009 9.10039 7.24792e-05 9.00039 7.24792e-05Z\"/>\n      </svg>\n    ";
      var leftIconClass = 'custom-icon-left';
      var rightIconClass = 'custom-icon-right';
      var customIcons = this.element.querySelectorAll(".".concat(leftIconClass, ", .").concat(rightIconClass));
      customIcons.forEach(function (icon) {
        var isLeftIcon = icon.classList.contains(leftIconClass);
        var isRightIcon = icon.classList.contains(rightIconClass);

        if (isLeftIcon) {
          icon.classList.remove(leftIconClass);
          leftIcon = icon.outerHTML;
        } else if (isRightIcon) {
          icon.classList.remove(rightIconClass);
          rightIcon = icon.outerHTML;
        }

        icon.remove();
      });
      this.nextArrow = "<button type=\"button\" class=\"button button_style-1 slick-next\">".concat(leftIcon, "</button>");
      this.prevArrow = "<button type=\"button\" class=\"button button_style-1 slick-prev\">".concat(rightIcon, "</button>");
    }
  }, {
    key: "checkSliderState",
    value: function checkSliderState() {
      if (this.mounted && this.savedWindowWidth === window.innerWidth) return;
      this.savedWindowWidth = window.innerWidth;

      if (this.mounted) {
        this.unmount();
      }

      var state;

      for (var breakpoint in breakpoints) {
        if (window.innerWidth >= breakpoints[breakpoint]) {
          state = this.params.state[breakpoint];
        }
      }

      if (state) {
        this.element.classList.remove('visible');

        if (this.containsMobileHiddenSlides) {
          this.checkSlidesVisibility();
        }

        this.mount();
      } else {
        this.element.classList.add('visible');
      }
    }
  }, {
    key: "checkSlidesVisibility",
    value: function checkSlidesVisibility() {
      var _this4 = this;

      this.slides.forEach(function (slide) {
        slide.remove();
      });
      this.slides.forEach(function (slide) {
        var shouldBeHidden = slide.getAttribute('data-slide-mobile-hidden') !== null;
        var breakpoint = window.innerWidth < breakpoints.sm;

        if (!(shouldBeHidden && breakpoint)) {
          _this4.element.insertAdjacentElement('beforeend', slide);
        }
      });
    }
  }, {
    key: "mount",
    value: function mount() {
      $(this.element).slick({
        autoplay: this.params.autoplay,
        autoplaySpeed: this.params.autoplayTimeout,
        mobileFirst: true,
        slidesToShow: this.params.count.xs,
        slidesToScroll: this.params.count.xs,
        rows: this.params.rows.xs,
        prevArrow: this.prevArrow,
        nextArrow: this.nextArrow,
        arrows: this.params.arrows,
        adaptiveHeight: this.params.adaptiveHeight,
        dots: true,
        accessibility: false,
        responsive: [{
          breakpoint: breakpoints.sm - 1,
          settings: {
            slidesToShow: this.params.count.sm,
            slidesToScroll: this.params.count.sm,
            rows: this.params.rows.sm
          }
        }, {
          breakpoint: breakpoints.md - 1,
          settings: {
            slidesToShow: this.params.count.md,
            slidesToScroll: this.params.count.md,
            rows: this.params.rows.md
          }
        }, {
          breakpoint: breakpoints.lg - 1,
          settings: {
            slidesToShow: this.params.count.lg,
            slidesToScroll: this.params.count.lg,
            rows: this.params.rows.lg
          }
        }, {
          breakpoint: breakpoints.xl - 1,
          settings: {
            slidesToShow: this.params.count.xl,
            slidesToScroll: this.params.count.xl,
            rows: this.params.rows.xl
          }
        }]
      });
      this.mounted = true;
    }
  }, {
    key: "unmount",
    value: function unmount() {
      $(this.element).slick('unslick');
      this.mounted = false;
    }
  }]);

  return SliderConstructor;
}();
//# sourceMappingURL=maps/new.js.map
