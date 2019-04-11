layui.use(['layer', 'form', 'table', 'ztree', 'laydate', 'admin', 'ax','upload','element'], function () {
    var layer = layui.layer;
    var form = layui.form;
    var table = layui.table;
    var $ZTree = layui.ztree;
    var $ax = layui.ax;
    var laydate = layui.laydate;
    var admin = layui.admin;


    element = layui.element;
    upload = layui.upload;

    //指定允许上传的文件类型
    upload.render({
        elem: '#uploadExcel'
        ,url: Feng.ctxPath+'/mgr/imp'
        ,accept: 'file' //普通文件
        ,multiple: true
        ,done: function(res){
            console.log(res);
        }
    });
    /**
     * 下载导入模板
     */

   /* $(document).on('click','#impExcelTemplate',function(){
        alert("ok");
        window.open(Feng.ctxPath+"/other/用户表.xlsx");
    });*/
    $("#impExcelTemplate").bind("click", function () {
        alert("ok");
        window.open(Feng.ctxPath+"/other/用户表.xlsx");
    });
});
