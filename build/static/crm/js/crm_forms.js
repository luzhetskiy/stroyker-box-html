function ajax_send_crm_form(form) {
    var data = form.serializeArray();
    $.ajax({
        type: 'POST',
        url: form.attr('action'),
        data: data,
        dataType: 'json'
    }).done(function(response) {
        formDoneAction(form, response);
    });

}

// feedback message request form handler
//
$('#feedback-message-request-form').on('submit', function(event) {
    event.preventDefault();
    var form  = $(this);
    form.find('input[name="url"]').val(window.location.pathname);
    ajax_send_crm_form(form);
});

function feedback_form_ajax_submit() {
    var form = $('#feedback-message-request-form')
    form.find('input[name="url"]').val(window.location.pathname);
    ajax_send_crm_form(form);
}




// call-merequest form handler
$('form.callme-request-form').on('submit', function(event) {
    event.preventDefault();
    ajax_send_crm_form($(this));
});

function callme_form_ajax_submit(token) {
    let form = $('#crm-callme-request-form');
    ajax_send_crm_form(form);
}

function formDoneAction(form, response) {
    var msg;
    form.find('.error-text').each( function() {
        $(this).remove();
    });
    form.find('.form-group').each( function() {
        $(this).removeClass('form-group--error');
    });
    if (response.success) {
        form.find('input, textarea').val('');
        $.fancybox.close();
        msg = response.msg ? response.msg : '<h3>Ваше сообщение отправлено!</h3>';
        $.fancybox.open(msg);
    } else {
        for (var f in response.errors) {
            msg = '<span class="error-text">'+response.errors[f]+'</span>';
            var input = form.find('[name="' + f + '"]');
            var formGroup = input.parent('.form-group');
            formGroup.addClass('form-group--error');
            formGroup.append(msg);
        }
    }

}

// gift for phone form handler
$('form.git-for-phone-form').on('submit', function(event) {
    event.preventDefault();
    var form = $(this);
    var data = form.serializeArray();
    $.ajax({
        type: 'POST',
        url: form.attr('action'),
        data: data,
        dataType: 'json'
    }).done(function(response) {
        formDoneAction(form, response);
    });
});
