$(document).ready(function () {
    $('.category-slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        items: 5,
        responsive: {
            0: {
                nav: false,
                dots: true,
                items: 1
            },
            479: {
                nav: false,
                dots: true,
                items: 3
            },
            768: {
                nav: true,
                dots: false,
                items: 4
            },
            992: {
                nav: true,
                items: 5
            }
        }
    });

    const catalogMenu = document.getElementById('catalog-menu');
    let menuLimit = catalogMenu ? +catalogMenu.dataset.itemsLimit : null;

    if (menuLimit) {
        var items = $('.catalog-side__content > ul', catalogMenu).first().children('li'),
            lastEl = null;
        if (items.length > menuLimit){
            items.each(function(index, value) {
                if (index + 1 > menuLimit) {
                    $(this).addClass('hidden');
                }
                if (items.length == index + 1){
                    $(this).after(
                        '<li class="menu-item more"><a class="btn-border" href="/catalog/">Показать еще</a></li>'
                    );
                }
            });
        }
    }

});



