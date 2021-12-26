"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

$(document).ready(function () {
  $('.catalog-filter-accordion a.opener').click(function () {
    $(this).parent().find("ul:first").slideToggle();
    $(this).parent().toggleClass('active');
    return false;
  });
});
$('.like-btn').on('click', function (event) {
  event.preventDefault();
  $(this).toggleClass('active');
});
$('.city-selection__link').click(function () {
  $('.city-selection__list').toggle(0);
});
$(window).click(function (e) {
  if (!e.target.classList.contains("city-selection__link")) {
    $('.city-selection__list').toggle(false);
  }
});
$('.burger-menu').click(function () {
  $('.mobile-menu').toggle(0);
});
$('.catalog-inner-btn').click(function (e) {
  e.preventDefault();
  $(this).toggleClass('open');
  $('.catalog-header-content').toggle(0);
});
$('.catalog-inner-btn,.catalog-menu__head a').click(function (e) {
  e.preventDefault();
  $('.catalog-menu').toggle(0);
});
$(".burger-catalog").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("open");
});
$('.share-btn').click(function () {
  $('.share-block__show').toggle(0);
});
$('.close-panel').click(function () {
  $('.bottom-panel').toggle(0);
});
$('.filter-btn, .close-btn-2').click(function () {
  $('.catalog-filter').toggle(0);
});
$('.catalog-side__title').click(function () {
  $('.catalog-side__content').toggle(0);
});
$('.catalog-opened').click(function () {
  $('.catalog-opened .submenu').toggle(0);
});
$(".burger-menu").click(function () {
  $(this).toggleClass("menu-on");
});
$('.catalog-inner').click(function () {
  $(this).toggleClass('open');
  $('.catalog-inner-content').toggle(0);
});
$(function () {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds

        return false;
      }
    }
  });
});
var bigSlides = $('.main-slider .owl-carousel'),
    autoPlayTimeoutSec = parseInt(bigSlides.data('autoplay-timeout'));
bigSlides.owlCarousel({
  loop: true,
  margin: 5,
  nav: true,
  dots: true,
  items: 1,
  autoplay: true,
  autoplayTimeout: autoPlayTimeoutSec * 1000,
  navText: ['<svg class="icon" viewBox="0 0 10.5 18.1"><path stroke="none" d="M9,0l1.4,1.4L2.8,9l7.6,7.6L9,18.1L0,9C0,9,9.1,0,9,0z"></path></svg>', '<svg class="icon" viewBox="0 0 10.5 18.1"><path stroke="none" d="M1.4,18.1L0,16.7l7.6-7.6L0,1.5L1.4,0l9,9.1C10.4,9.1,1.3,18.1,1.4,18.1z"></path></svg>']
});
var radioButtons = document.querySelectorAll('.delivery-selection input[type="radio"]');
var choices = document.querySelectorAll(".delivery-choice");
radioButtons.forEach(function (btn) {
  btn.addEventListener("change", function () {
    var clicked = this;
    choices.forEach(function (choice) {
      if (choice.classList.contains(clicked.id) || choice.classList.contains('delivery-type-' + clicked.value)) {
        choice.style.display = "block";
      } else {
        choice.style.display = "none";
      }
    });
  });
});
$(".shopping-cart-item__delete").click(function () {
  $(this).parent(".shopping-cart-item").remove();
});
$('.slider .owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  items: 1,
  nav: true
});
$('.news-slider .owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  items: 4,
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
    },
    768: {
      nav: true,
      dots: false,
      items: 3
    },
    992: {
      items: 4
    }
  }
});
$('.action-slider .owl-carousel').owlCarousel({
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
    },
    768: {
      nav: true,
      dots: false,
      items: 3
    }
  }
});
$('.partners-slider .owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  dots: false,
  items: 5,
  responsive: {
    0: {
      dots: true,
      nav: false,
      items: 1
    },
    566: {
      nav: false,
      dots: true,
      items: 2
    },
    768: {
      nav: false,
      dots: true,
      items: 3
    },
    900: {
      nav: false,
      dots: true,
      items: 4
    },
    950: {
      dots: false
    }
  }
});
$('.product-slider--full .owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  dots: false,
  items: 3,
  responsive: {
    0: {
      items: 2
    },
    992: {
      items: 3
    }
  }
});
$('.input-number').each(function () {
  var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.order-up'),
      btnDown = spinner.find('.order-down'),
      min = input.attr('min'),
      max = input.attr('max');
  btnUp.click(function () {
    var oldValue = parseFloat(input.val());
    var newVal = oldValue + 1;
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });
  input.change(function () {
    if (input.val() > 9 && input.val() <= 99) {
      btnDown.css('right', 57);
    } else if (input.val() > 99 && input.val() <= 999) {
      btnDown.css('right', 74);
    } else if (input.val() > 999) {
      btnDown.css('right', 90);
    } else {
      btnDown.css('right', 45);
    }
  });
  btnDown.click(function () {
    var oldValue = parseFloat(input.val()),
        newVal;

    if (oldValue <= min) {
      newVal = oldValue;
    } else {
      newVal = oldValue - 1;
    }

    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });
}); // $('.tabgroup > div').hide();
// $('.tabgroup > div:first-of-type').show();
// $('.tabs-lk a').click(function (e) {
//   e.preventDefault();
//   var $this = $(this),
//     tabgroup = '#' + $this.parents('.tabs-lk').data('tabgroup'),
//     others = $this.closest('li').siblings().children('a'),
//     target = $this.attr('href');
//   others.removeClass('active');
//   $this.addClass('active');
//   $(tabgroup).children('div').hide();
//   $(target).show();
// });
// $(document).ready(function () {
//   $('ul.accordion-lk a.opener').click(function () {
//     $(this).parent().find("ul:first").slideToggle();
//     $(this).parent().toggleClass('active');
//     return false;
//   });
// });

/* select */

(function ($) {
  var customSelect = $('select.custom-select'); // FIRST, create the custom select menus from the existing select

  customSelect.each(function () {
    var that = $(this);
    var listID = that.attr('id'),
        groups = that.children('optgroup'),
        theOptions = "",
        startingOption = "",
        customSelect = ""; //check if there are option groups

    if (groups.length) {
      groups.each(function () {
        var curGroup = $(this);
        var curName = curGroup.attr('label'); //Open the option group

        theOptions += '<li class="optgroup">' + curName + '</li>'; //get the options

        curGroup.children('option').each(function () {
          var curOpt = $(this);
          var curVal = curOpt.attr('value'),
              curHtml = curOpt.html(),
              isSelected = curOpt.attr('selected');

          if (isSelected === 'selected') {
            startingOption = curHtml;
            theOptions += '<li class="selected" data-value="' + curVal + '">' + curHtml + '</li>';
          } else {
            theOptions += '<li data-value="' + curVal + '">' + curHtml + '</li>';
          }
        }); //Close the option group
        //theOptions += '<li class="optgroup-close"></li>';
      }); //add options not in a group to the top of the list

      that.children('option').each(function () {
        var curOpt = $(this);
        var curVal = curOpt.attr('value'),
            curHtml = curOpt.html(),
            isSelected = curOpt.attr('selected');

        if (isSelected === 'selected') {
          startingOption = curHtml;
          theOptions = '<li class="selected" data-value="' + curVal + '">' + curHtml + '</li>' + theOptions;
        } else {
          theOptions = '<li data-value="' + curVal + '">' + curHtml + '</li>' + theOptions;
        }
      });
    } else {
      that.children('option').each(function () {
        var curOpt = $(this);
        var curVal = curOpt.attr('value'),
            curHtml = curOpt.html(),
            isSelected = curOpt.attr('selected');

        if (isSelected === 'selected') {
          startingOption = curHtml;
          theOptions += '<li class="selected" data-value="' + curVal + '">' + curHtml + '</li>';
        } else {
          theOptions += '<li data-value="' + curVal + '">' + curHtml + '</li>';
        }
      });
    } //build the custom select


    customSelect = '<div class="dropdown-container"><div class="dropdown-select entypo-down-open-big"><svg class="icon"><use xlink:href="#tab-arrow"></use></svg><span>' + startingOption + '</span></div><ul class="dropdown-select-ul" data-role="' + listID + '">' + theOptions + '</ul></div> <!-- .custom-select-wrapper -->'; //append it after the actual select

    $(customSelect).insertAfter(that);
  });
  var selectdd = $('.dropdown-select'),
      selectul = $('.dropdown-select-ul'),
      selectli = $('.dropdown-select-ul li'); //THEN make them work

  selectdd.on('click', function () {
    $(this).parent('.dropdown-container').toggleClass('active');
  }); //Hide it on mouseleave

  selectul.on('mouseleave', function () {
    $(this).parent('.dropdown-container').removeClass('active');
  }); //select the option

  selectli.on('click', function () {
    var that = $(this); //ensure clicking group labels does not cause change

    if (!that.hasClass('optgroup')) {
      var parentUl = that.parent('ul'),
          thisdd = parentUl.siblings('.dropdown-select'),
          lihtml = that.html(),
          livalue = that.attr('data-value'),
          originalSelect = '#' + parentUl.attr('data-role'); //close the dropdown

      parentUl.parent('.dropdown-container').toggleClass('active'); //remove selected class from all list items

      that.siblings('li').removeClass('selected'); //add .selected to clicked li

      that.addClass('selected'); //set the value of the hidden input

      $(originalSelect).val(livalue); //change the dropdown text

      thisdd.children('span').html(lihtml);
    }
  });
})(jQuery);
/* tabs */
// tabbed content
// http://www.entheosweb.com/tutorials/css/tabs.asp


$(".tab-content").hide();
$(".tab-content:first").show();
/* if in tab mode */

$("ul.tabs li,.product-card__review-link a,.schedule-btn a").click(function () {
  $(".tab-content").hide();
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn();
  $("ul.tabs li").removeClass("active");
  $(this).addClass("active");
  $(".tab_drawer_heading").removeClass("d_active");
  $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");
});
/* if in drawer mode */

$(".tab_drawer_heading").click(function () {
  var d_activeTab = $(this).attr("rel"),
      activeTabBlock = $("#" + d_activeTab + ":hidden"),
      $thisActive = $(this).not('.d_active');
  $(".tab-content").hide();
  activeTabBlock.fadeIn();
  $(".tab_drawer_heading").removeClass("d_active");
  $thisActive.addClass("d_active");
  $("ul.tabs li").removeClass("active");
  $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
});
/* Extra class "tab_last"
 to add border to right side
 of last tab */

$('ul.tabs li').last().addClass("tab_last");
jQuery(document).ready(function () {
  jQuery('.schedule-btn a').click(function () {
    jQuery(".schedule-link").toggleClass('active');
  });
});
jQuery(document).ready(function () {
  jQuery('.product-card__review-link a').click(function () {
    jQuery(".review-tab-link").toggleClass('active');
  });
}); //slideshow

$(document).ready(function () {
  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 3; //globaly define number of elements per page

  var syncedSecondary = true;
  sync1.owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: true,
    autoplay: false,
    dots: true,
    loop: true,
    responsiveRefreshRate: 200,
    margin: 10
  }).on('changed.owl.carousel', syncPosition);
  sync2.on('initialized.owl.carousel', function () {
    sync2.find(".owl-item").eq(0).addClass("current");
  }).owlCarousel({
    items: slidesPerPage,
    dots: true,
    nav: true,
    margin: 10,
    smartSpeed: 200,
    slideSpeed: 500,
    slideBy: slidesPerPage,
    //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    responsiveRefreshRate: 100
  }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;
    //if you disable loop you have to comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - .5);

    if (current < 0) {
      current = count;
    }

    if (current > count) {
      current = 0;
    } //end block


    sync2.find(".owl-item").removeClass("current").eq(current).addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();

    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }

    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }

  sync2.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });
});
;

(function ($) {
  var pluginName = 'cscrlb';

  function Plugin(element, options) {
    var el = element;
    var $el = $(element);
    var $scrollContentEl;
    var $contentEl = $el.find('.cscrlb-content');
    var $scrollbarEl;
    var $dragHandleEl;
    var dragOffset;
    var flashTimeout;
    var pageJumpMultp = 7 / 8;
    var scrollDirection = 'vert';
    var scrollOffsetAttr = 'scrollTop';
    var sizeAttr = 'height';
    var offsetAttr = 'top';
    options = $.extend({}, $.fn[pluginName].defaults, options);

    window.onload = function () {
      $contentEl.focus();
    };

    function init() {
      if ($el.hasClass('horizontal')) {
        scrollDirection = 'horiz';
        scrollOffsetAttr = 'scrollLeft';
        sizeAttr = 'width';
        offsetAttr = 'left';
      }

      $el.prepend('<div class="cscrlb-scrollbar"><div class="drag-handle"></div></div>');
      $scrollbarEl = $el.find('.cscrlb-scrollbar');
      $dragHandleEl = $el.find('.drag-handle');

      if (options.wrapContent) {
        $contentEl.wrap('<div class="cscrlb-scroll-content" />');
      }

      $scrollContentEl = $el.find('.cscrlb-scroll-content');
      resizeScrollContent();

      if (options.autoHide) {
        $el.on('mouseenter', flashScrollbar);
      }

      $dragHandleEl.on('mousedown', startDrag);
      $scrollbarEl.on('mousedown', jumpScroll);
      $scrollContentEl.on('scroll', onScrolled);
      resizeScrollbar();
      $(window).on('resize', function () {
        recalculate();
      });

      if (!options.autoHide) {
        showScrollbar();
      }
    }

    function startDrag(e) {
      e.preventDefault();
      var eventOffset = e.pageY;

      if (scrollDirection === 'horiz') {
        eventOffset = e.pageX;
      }

      dragOffset = eventOffset - $dragHandleEl.offset()[offsetAttr];
      $(document).on('mousemove', drag);
      $(document).on('mouseup', endDrag);
    }

    function drag(e) {
      e.preventDefault();
      var eventOffset = e.pageY;

      if (scrollDirection === 'horiz') {
        eventOffset = e.pageX;
      }

      var dragPos = eventOffset - $scrollbarEl.offset()[offsetAttr] - dragOffset;
      var dragPerc = dragPos / $scrollbarEl[sizeAttr]();
      var scrollPos = dragPerc * $contentEl[sizeAttr]();
      $scrollContentEl[scrollOffsetAttr](scrollPos);
    }

    function endDrag() {
      $(document).off('mousemove', drag);
      $(document).off('mouseup', endDrag);
    }

    function jumpScroll(e) {
      if (e.target === $dragHandleEl[0]) {
        return;
      }

      var jumpAmt = pageJumpMultp * $scrollContentEl[sizeAttr]();
      var eventOffset = scrollDirection === 'vert' ? e.originalEvent.layerY : e.originalEvent.layerX;
      var dragHandleOffset = $dragHandleEl.position()[offsetAttr];
      var scrollPos = eventOffset < dragHandleOffset ? $scrollContentEl[scrollOffsetAttr]() - jumpAmt : $scrollContentEl[scrollOffsetAttr]() + jumpAmt;
      $scrollContentEl[scrollOffsetAttr](scrollPos);
    }

    function onScrolled(e) {
      flashScrollbar();
    }

    function resizeScrollbar() {
      var contentSize = $contentEl[sizeAttr]();
      var scrollOffset = $scrollContentEl[scrollOffsetAttr](); // scrollTop() か scrollLeft()

      var scrollbarSize = $scrollbarEl[sizeAttr]();
      var scrollbarRatio = scrollbarSize / contentSize;
      var handleOffset = Math.round(scrollbarRatio * scrollOffset);
      /* + 2; */

      var handleSize = Math.floor(scrollbarRatio * (scrollbarSize + 2));
      /*  - 2)) - 2; */

      if (scrollbarSize < contentSize) {
        if (scrollDirection === 'vert') {
          $dragHandleEl.css({
            'top': handleOffset,
            'height': handleSize
          });
        } else {
          $dragHandleEl.css({
            'left': handleOffset,
            'width': handleSize
          });
        }

        $scrollbarEl.show();
      } else {
        $scrollbarEl.hide();
      }
    }

    function flashScrollbar() {
      resizeScrollbar();
      showScrollbar();
    }

    function showScrollbar() {
      $dragHandleEl.addClass('visible');

      if (!options.autoHide) {
        return;
      }

      if (typeof flashTimeout === 'number') {
        window.clearTimeout(flashTimeout);
      }

      flashTimeout = window.setTimeout(function () {
        hideScrollbar();
      }, 1000);
    }

    function hideScrollbar() {
      $dragHandleEl.removeClass('visible');

      if (typeof flashTimeout === 'number') {
        window.clearTimeout(flashTimeout);
      }
    }

    function resizeScrollContent() {
      if (scrollDirection === 'vert') {
        $scrollContentEl.width($el.width() + scrollbarWidth());
        $scrollContentEl.height($el.height());
      } else {
        $scrollContentEl.width($el.width());
        $scrollContentEl.height($el.height() + scrollbarWidth());
        $contentEl.height($el.height());
      }
    }

    function scrollbarWidth() {
      var tempEl = $('<div class="scrollbar-width-tester" style="width:50px;height:50px;overflow-y:scroll;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');
      $('body').append(tempEl);
      var width = $(tempEl).innerWidth();
      var widthMinusScrollbars = $('div', tempEl).innerWidth();
      tempEl.remove();

      if (width === widthMinusScrollbars && navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        return 17;
      }

      return width - widthMinusScrollbars;
    }

    function recalculate() {
      resizeScrollContent();
      resizeScrollbar();
    }

    function option(key, val) {
      if (val) {
        options[key] = val;
      } else {
        return options[key];
      }
    }

    function destroy() {
      $contentEl.insertBefore($scrollbarEl);
      $scrollbarEl.remove();
      $scrollContentEl.remove();
      $contentEl.css({
        'height': $el.height() + 'px',
        'overflow-y': 'scroll'
      });
      hook('onDestroy');
      $el.removeData('plugin_' + pluginName);
    }

    function hook(hookName) {
      if (options[hookName] !== undefined) {
        options[hookName].call(el);
      }
    }

    init();
    return {
      option: option,
      destroy: destroy,
      recalculate: recalculate
    };
  }

  ;

  $.fn[pluginName] = function (options) {
    if (typeof arguments[0] === 'string') {
      var methodName = arguments[0];
      var args = Array.prototype.slice.call(arguments, 1);
      var returnVal;
      this.each(function () {
        if ($.data(this, 'plugin_' + pluginName) && typeof $.data(this, 'plugin_' + pluginName)[methodName] === 'function') {
          returnVal = $.data(this, 'plugin_' + pluginName)[methodName].apply(this, args);
        } else {
          throw new Error(' ' + methodName + ' ' + pluginName);
        }
      });

      if (returnVal !== undefined) {
        return returnVal;
      } else {
        return this;
      }
    } else if (_typeof(options) === "object" || !options) {
      return this.each(function () {
        if (!$.data(this, 'plugin_' + pluginName)) {
          $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
        }
      });
    }
  };

  $.fn[pluginName].defaults = {
    onInit: function onInit() {},
    onDestroy: function onDestroy() {},
    wrapContent: true,
    autoHide: false
  };
})(jQuery);

$(function () {
  $('.cscrlb-scrollable').cscrlb();
}); // catalog

var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");
var button3 = document.querySelector(".button3");
var items = document.querySelectorAll(".product-item:not(.product-item--banner)");
var tableHeader = document.querySelector(".product-items-header");

function setActiveButton(btn) {
  [button1, button2, button3].forEach(function (b) {
    if (b === btn) {
      b.classList.add("current");
    } else {
      b.classList.remove("current");
    }
  });
}

function handleClickButton1() {
  setActiveButton(this);
  items.forEach(function (item) {
    item.className = "product-item";
  });
  tableHeader.classList.remove("open");
}

function handleClickButton2() {
  setActiveButton(this);
  items.forEach(function (item) {
    item.classList.add("product-item--wide");
    item.classList.remove("product-item--line");
  });
  tableHeader.classList.remove("open");
}

function handleClickButton3() {
  setActiveButton(this);
  var itemsContainer = document.querySelectorAll(".catalog-body.catalog-body--wide");

  if (itemsContainer.length) {
    itemsContainer[0].classList.add("list-mode");
  }

  items.forEach(function (item) {
    item.classList.add("product-item--line");
    item.classList.remove("product-item--wide");
  });
  tableHeader.classList.add("open");
}

if (button1 && button2 && button3) {
  button1.addEventListener("click", handleClickButton1);
  button2.addEventListener("click", handleClickButton2);
  button3.addEventListener("click", handleClickButton3);
}
/* range slider */


var keypressSliders = $('.range-slider');
$(keypressSliders).each(function (index, keypressSlider) {
  var field_name = $(keypressSlider).data('name');
  var input0 = document.getElementById('id_' + field_name + '_0');
  var input1 = document.getElementById('id_' + field_name + '_1');
  var inputs = [input0, input1];

  if (input0 && input1) {
    var startVal = parseInt(input0.dataset.currentValue),
        endVal = parseInt(input1.dataset.currentValue);
    var minVal = parseInt(input0.dataset.minValue),
        maxVal = parseInt(input1.dataset.maxValue);
  }

  var postfix = '';

  if (field_name == 'price_range') {
    postfix = ' ₽';
  }

  if (typeof noUiSlider !== 'undefined') {
    noUiSlider.create(keypressSlider, {
      start: [startVal, endVal],
      connect: true,
      range: {
        'min': minVal,
        'max': maxVal
      },
      format: wNumb({
        decimals: 0,
        thousand: ' ',
        postfix: postfix
      }),
      step: 1
    });
  }

  if (keypressSlider !== null && keypressSlider.noUiSlider) {
    keypressSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = values[handle];
    });
  }

  function setSliderHandle(i, value) {
    var r = [null, null];
    r[i] = value;
    keypressSlider.noUiSlider.set(r);
  } // Listen to keydown events on the input field.


  inputs.forEach(function (input, handle) {
    if (input === null) return;
    input.addEventListener('change', function () {
      setSliderHandle(handle, this.value);
    });
    input.addEventListener('keydown', function (e) {
      var values = keypressSlider.noUiSlider.get();
      var value = Number(values[handle]); // [[handle0_down, handle0_up], [handle1_down, handle1_up]]

      var steps = keypressSlider.noUiSlider.steps(); // [down, up]

      var step = steps[handle];
      var position; // 13 is enter,
      // 38 is key up,
      // 40 is key down.

      switch (e.which) {
        case 13:
          setSliderHandle(handle, this.value);
          break;

        case 38:
          // Get step to go increase slider value (up)
          position = step[1]; // false = no step is set

          if (position === false) {
            position = 1;
          } // null = edge of slider


          if (position !== null) {
            setSliderHandle(handle, value + position);
          }

          break;

        case 40:
          position = step[0];

          if (position === false) {
            position = 1;
          }

          if (position !== null) {
            setSliderHandle(handle, value - position);
          }

          break;
      }
    });
  });
});
//# sourceMappingURL=maps/scripts.js.map
