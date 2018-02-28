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
            // 查询一个成员
            container.on('click', '#getOneUser', function (){
                var id = $(this).data('id');
                $.ajax({
                    type: 'get',
                    url: '/users/findOne?id='+id,
                    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                    dataType: 'json',
                    success:function(data){
                        // console.log(data)
                        if(data && data._doc){
                            $('#myModal').modal();
                            $('#myModalLabel').html('修改');
                            //给表单赋值
                            $.each(data._doc,function(key,item){
                                $('[name="'+key+'"]').val(item);
                            })
                            $('#subUser').attr('data-id',id);
                        }
                    } 
                });
            })
            //保存成员
            container.on('click', '#subUser', function () {
                var data = $('form.form-horizontal').serializeArray(),
                    obj = {};
                $.each(data, function (i, val) {
                    obj[val.name] = val.value;
                });
                if(!$('#subUser').attr('data-id')){
                    $.ajax({
                        type: 'GET',
                        url: '/users/add',
                        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                        dataType: 'json',
                        data: obj,
                        success:function(data){
                            location.reload();
                        } 
                    });
                
                }else{
                    var id = $('#subUser').attr('data-id');
                    $.ajax({
                        type: 'GET',
                        url: '/users/updateOne?id='+id,
                        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                        dataType: 'json',
                        data: obj,
                        success:function(data){
                            console.log('=====after update====');
                            console.log(data)
                            location.reload();
                        } 
                    });
                }
            });
            //删除一个成员
            container.on('click','#delUser',function(){
                var id = $(this).data('id');
                $.ajax({
                    type: 'get',
                    url: '/users/delOne?id='+id,
                    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                    dataType: 'json',
                    success:function(data){
                        console.log(data)
                        location.reload();
                    } 
                });
            })
        }
    }
    users.init($(document));
})(jQuery);