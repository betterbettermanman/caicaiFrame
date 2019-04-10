layui.use(['form', 'upload', 'element', 'ax', 'laydate'], function () {
    var $ = layui.jquery;
    var form = layui.form;
    var upload = layui.upload;
    var element = layui.element;
    var $ax = layui.ax;
    var laydate = layui.laydate;

    //渲染时间选择框
    laydate.render({
        elem: '#birthday'
    });

    //获取用户详情
    var ajax = new $ax(Feng.ctxPath + "/system/currentUserInfo");
    var result = ajax.start();

    //用这个方法必须用在class有layui-form的元素上
    form.val('userInfoForm', result.data);

    //表单提交事件
    form.on('submit(userInfoSubmit)', function (data) {
        var ajax = new $ax(Feng.ctxPath + "/mgr/edit", function (data) {
            debugger;
            Feng.success("修改成功!!");
        }, function (data) {
            Feng.error("修改失败!!" + data.responseJSON.message + "!");
        });
        ajax.set(data.field);
        ajax.start();
    });

   /* upload.render({
        elem: '#imgHead',
        url: Feng.ctxPath+'/system/test', // 上传接口
        size: 1000,
        accept: 'file',
        size:'204800', //kb
        before: function(){
            console.log('接口地址：'+ this.url, this.item, {tips: 1});
        },
        done: function (res) {
            alert('ok');
            // 上传完毕回调
        },
        error: function () {
            alert('error');
            // 请求异常回调
        }
    });*/
});
layui.use('upload', function(){
    var upload = layui.upload;

    //执行实例
    var uploadInst = upload.render({
        elem: '#imgHead' //绑定元素
        ,url: '/system/test' //上传接口
        ,done: function(res){
            //上传完毕回调
        }
        ,error: function(){
            //请求异常回调
        }
    });
});