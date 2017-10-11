'use strict';
!(function ($) {
    var users = {
        init: function (container) {
            this.container = container;          
            this.event();
        },
        event: function () {
            var container = this.container;
            //新增成员
            container.on('click', '#addUser', function () {
                // container.find('.form-inline').removeClass('hide');
                $('#myModal').modal();
            })
            //保存成员
            container.on('click', '#subUser', function () {
                var data = $('form.form-inline').serializeArray(),
                    obj = {};
                $.each(data, function (i, val) {
                    obj[val.name] = val.value;
                });
                $.ajax({
                    type: 'get',
                    url: '/add',
                    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                    dataType: 'json',
                    data: obj,
                    success:function(data){
                        location.reload();
                    } 
                });
            })
        }
    }
    users.init($(document));
})(jQuery);