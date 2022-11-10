const filterForm = $('#catalog_filter_form');

jQuery(document).ready(function($){
    updRangeSliders();

    filterForm.on('keyup change paste', 'input, select, textarea', function() {
        handleFilterChange(this);
    });

    // Remove empty fields from GET forms
    filterForm.submit(function() {
        var $this = $(this);
        $this.find(":input").filter(function(){ return !this.value; }).attr("disabled", "disabled");

        prepareFilterForm();
        return true;
    });

    // Un-disable form fields when page loads, in case they click back after submission
    filterForm.find(":input").not('.range-input').prop("disabled", false);

    $('.found-cheaper-panel').on('click', '.close-panel', function() {
        document.cookie = 'found_chaper_panel_closed=1; path=/';
    });


    const questionFormBoxId = 'question-main';

    $('[href="#' + questionFormBoxId + '"]').click(function() {

        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 80
        }, 300, function(){
        });

        var $this = $(this),
            message;
        if ($this.hasClass('smoothScroll')) {
            prepareQestionForm(questionFormBoxId, 'Нашли дешевле?', 'Где дешевле?');
        } else if ($this.hasClass('not-available')) {
            message = 'Когда будет в наличии товар "' +
                $this.data('product-name') + '", актикул "' +
                $this.data('product-code') + '"?';
            prepareQestionForm(questionFormBoxId, 'Узнать о наличии товара',
                'Ваш вопрос', message);
        } else if ($this.hasClass('not-price')) {
            message = 'Хочу узнать цену на товар "' +
                $this.data('product-name') + '", актикул "' +
                $this.data('product-code') + '".';
            prepareQestionForm(questionFormBoxId, 'Узнать о цене на товар',
                'Ваш вопрос', message);
        }

    });

    function prepareQestionForm(form_id, title, placeholder, message='') {
        const questionFormBox = $('#' + form_id);
        if (questionFormBox.length) {
            if (title) {
                $('.content-title', questionFormBox).text(title);
            }
            if (placeholder) {
                $('label[for="message"] .content-name', questionFormBox).text(placeholder);
            }
            $('textarea', questionFormBox).text(message);
        }

    }

    // catalog product list sort (mobile mode)
    const sortingList = $('.dropdown-select-ul[data-role="products-header-sort-mobile"]');
    sortingList.on('DOMSubtreeModified', 'li.selected', function () {
        var url = $(this).data('value');
        if (url.length > 0) {
            location = url;
        }
    });

    // scroll to target tag
    $('a[rel^="tab"]').click(function() {
        var targetTab = $('.tabs li[rel="' + $(this).attr('rel') + '"]:visible');

        if (!targetTab.length) {
            targetTab = $('.tab_drawer_heading[rel="' + $(this).attr('rel') + '"]:visible');
        }

        if (targetTab.length) {
            $("body,html").animate(
                {
                    scrollTop: targetTab.offset().top
                },
                800 //speed
            );
        }
    });

    $('.view-sort-item').on('click', function() {
        if ($(this).is('[data-list-view-mode]')) {
            Cookies.set('list_view_mode', this.dataset.listViewMode)
        }
    });

});

function prepareFilterForm() {
    // clear price_range values
    var rangeInputs = document.querySelectorAll('.range-input');
    rangeInputs.forEach(function (item) {
        if(!item.disabled) {
            item.value = item.value.replace(/[^0-9]+/g, "");
        }
    });
}

function handleFilterChange(elem) {
    var $this = $(elem);
    filterForm.find(":input").not('button').filter(function(){
        // if (this.classList.contains('range-input')) {
        //     return parseInt(this.dataset.initValue) === parseInt(this.value);
        // }
        return !this.value;
    }).attr("disabled", "disabled");
    prepareFilterForm();
    var formData = filterForm.serialize();
    var url = filterForm.attr('action');
    if (formData.length) {
        url +=  '?' + formData;
    }
    $.getJSON(url, function (response) {
        var filterShowAll = $('.filter-show-all');
        if (filterShowAll.length > 0) {
            filterShowAll.hide();
            filterShowAll.show();
            filterShowAll.insertAfter($this.parent());
            if (response.count) {
                filterShowAll.html('<a href="' + url + '">Показать ' +
                    response.count + '</a>');
            } else {
                filterShowAll.html('<a href="#">Найдено 0</a>');
            }
            // setTimeout(function() { filterShowAll.not(':hover').fadeOut('fast'); }, 5000);
        }
    });
}

function updRangeSliders() {
    $('.filter-range').each( function() {
        var filter = this,
            keypressSliders = $('.range-slider');

        $(keypressSliders).each( function(index, keypressSlider) {
            if (keypressSlider !== null && keypressSlider.noUiSlider) {
                var rangeInputs = filter.querySelectorAll('.range-input');
                keypressSlider.noUiSlider.on('update', function () {
                    var minInput = (rangeInputs[0].value.replace(/[^0-9]+/g, "") === rangeInputs[0].dataset.minValue);
                    var maxInput = (rangeInputs[1].value.replace(/[^0-9]+/g, "") === rangeInputs[1].dataset.maxValue);
                    for (var i = 0; i < rangeInputs.length; i++) {
                        rangeInputs[i].disabled = minInput && maxInput;
                    }
                });
                keypressSlider.noUiSlider.on('set', function() {
                    handleFilterChange(keypressSlider);
                });
            }
        });
    });

}
