'use strict';
!(function($){
    var users = {
        init: function(container){
            this.container = container;
            this.event();
        },
        event: function(){
            var container = this.container;
            //新增成员
            container.on('click', '#addUser', function(){
                container.find('.form-inline').removeClass('hide');
            })
            //保存成员
            container.on('click','#subUser',function(){
                var data = $('form.form-inline').serializeArray(),
                    obj = {};

                $.each(data,function(i,val){
                    obj[val.name] = val.value;
                });

                


            })
        }
    }
    users.init($(document));
})(jQuery);