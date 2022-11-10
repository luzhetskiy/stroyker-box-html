$(document).ready(function() {
    if (window.innerWidth < 767){
        $('.product-item.product-item--wide').removeClass('product-item--wide');
    }
    var sysMessages = $('#system-messages');
    if (sysMessages) {
        $.fancybox.open(sysMessages);
    }
    // phone mask init
    $('.phone').mask('+7 (000) 000-00-00')
    $('input.phone, input[name="phone"]')
        .on('focus', function(e) {
            if (this.value === '') {
                $(this).unmask().off(e);
            }

        })
        .on('input', function(e) {
            var initVal = (this.value === '8' || this.value === '7') ? '+7' : this.value;
            this.value = '';
            $(this).mask('+7 (000) 000-00-00').val(initVal).off(e)
        });

    externalLinksInit();
});


function externalLinksInit() {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        if (links[i].href.startsWith('http') && linkIsExternal(links[i])) {
            links[i].setAttribute('target', '_blank');
        }
    }
}

function linkIsExternal(link_element) {
    return (link_element.host !== window.location.host);
}
