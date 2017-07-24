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
                container.find('.form-inline').removeClass('hide');
            })
            //保存成员
            container.on('click', '#subUser', function () {
                var data = $('form.form-inline').serializeArray(),
                    obj = {};

                $.each(data, function (i, val) {
                    obj[val.name] = val.value;
                });
                // console.log(obj);
                // $.ajaxSetup({
                //     contentType: "application/x-www-form-urlencoded; charset=utf-8"
                // });
                // $.post('/add', obj, function (data) {
                //     console.log('=======callback=====')
                //     console.log(data);
                // },'json');
                $.ajax({
                    type: 'POST',
                    url: '/add',
                    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                    dataType: 'json',
                    data: JSON.stringify(obj),
                    success:function(data){
                        console.log('=======callback=====')
                        console.log(data);
                    } 
                });



            })
        }
    }
    users.init($(document));
})(jQuery);