(function ($) {
    $(document).ready(function() {
        // добавление товара в корзину
        // ссылка обновления кол-ва товара должна иметь класс add-to-cart
        $(document).on('click', '.add-to-cart', function (e) {
            e.preventDefault();
            var $this = $(this),
                qty = $('input', $this.prev()).val(),
                url = $this.attr('href');

            if (typeof qty !== 'undefined') {
                url += '?qty=' + qty;
            }

            $.getJSON(url, function (response) {
                $this.prev().not('.input-number--lg').hide();
                $this.replaceWith(`<a href="/cart/" class="btn btn-checkout button_style-2 button_xl product-card-v2__cart-button">
                                    <span class="icon"><svg class="icon-svg">
                                    <use xlink:href="#check-btn"></use>
                                    </svg></span>Оформить</a>`);
                if (response.result == 'success') {
                    if (window.location.pathname == URLS.cart) {
                        window.location.reload(true);
                    } else {
                        $('.cart-number').html(response.count);
                    }
                }
            });
        });

        // обновление кол-ва товара
        // ссылка обновления кол-ва товара должна иметь класс cart-qty-control
        $('.cart-qty-control').click(function (e) {
            var $this = $(this);
            updateQtyAjax($this, $this.data('qty-update-url'));
        });

        // обновление кол-ва товара при вводе в поле
        $('.cart-qty-control-input').on('input', function (e) {
            var $this = $(this),
                updateUrl = $this.data('qty-update-url') + '?qty=' + $this.val();
            updateQtyAjax($this, updateUrl);
        });

        function updateQtyAjax(element, url){
            $.getJSON(url, function (response) {
                element.notify(response.message, response.result);
                if (response.result == 'success') {
                    element.closest('span').next()
                        .html(response.product_price_total + ' <span class="rouble"> ₽</span>');
                    $('.cart-total-price').html(response.total_price + ' ₽');
                    $('.cart-total-weight').html(response.total_weight);
                    $('.cart-total-volume').html(response.total_volume);
                }
            });

        }

        $('.shopping-cart-item__delete').click(function(e) {
            var url = $(this).data('cart-delete-url');
            if (url) {
                window.location = url;
            }

        });

        showLoginFormCheckbox();
    });
})(jQuery);

function showLoginFormCheckbox(){
    $('#account-exists-checkbox').click(function() {
        var loginForm = $('#commerce-login-form');
        if (this.checked) {
            loginForm.show();
        } else {
            loginForm.hide();
        }
    });
}
