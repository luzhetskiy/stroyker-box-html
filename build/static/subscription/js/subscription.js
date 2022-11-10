$('#footer-subscription-form').on('submit', function(event) {
    event.preventDefault();
    var $this = $(this),
        msg = '';
    $.post($this.attr('action'), $this.serialize(), function(data) {
        if (data.success) {
            msg = '<p style="color: white">Поздравляем! Вы успешно подписались на нашу рассылку.</p>';
        } else if (data.errors) {

            for (var e in data.errors) {
                msg = msg + '<p style="color: white">' + data.errors[e] + '</p>';
            }
        }
        $this.html(msg);
    });
});
