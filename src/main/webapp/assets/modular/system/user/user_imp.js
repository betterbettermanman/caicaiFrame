layui.use(['layer', 'form', 'table', 'ztree', 'laydate', 'admin', 'ax','upload','element','jquery'], function () {
    var layer = layui.layer;
    var form = layui.form;
    var table = layui.table;
    var $ZTree = layui.ztree;
    var $ax = layui.ax;
    var laydate = layui.laydate;
    var admin = layui.admin;
    var $ = layui.$ //重点处

    element = layui.element;
    upload = layui.upload;
    var UserTableSuccess = {
        tableId: "userTableSuccess",    //表格id
        condition: {
            name: "",
            deptId: "",
            timeLimit: ""
        }
    };
    var UserTableFailure = {
        tableId: "userTableFailure",    //表格id
        condition: {
            name: "",
            deptId: "",
            timeLimit: ""
        }
    };
    /**
     * 初始化表格的列
     */
    UserTableSuccess.initColumn = function () {
        return [[
            {type: 'checkbox'},
            {field: 'account', sort: true, title: '账号'},
            {field: 'name', sort: true, title: '姓名'},
            {field: 'sex', sort: true, title: '性别'},
            {field: 'phone', sort: true, title: '电话'}
        ]];
    };

    UserTableFailure.initColumn = function () {
        return [[
            {type: 'checkbox'},
            {field: 'account', sort: true, title: '账号'},
            {field: 'name', sort: true, title: '姓名'},
            {field: 'sex', sort: true, title: '性别'},
            {field: 'phone', sort: true, title: '电话'}
        ]];
    };
    //指定允许上传的文件类型
    upload.render({
        elem: '#uploadExcel'
        ,url: Feng.ctxPath+'/mgr/imp'
        ,accept: 'file' //普通文件
        ,multiple: true
        ,done: function(res){
            debugger;
            var queryDataSuccess = {};
            var queryDataFailure= {};
            for(var i=0;i<res.data.length;i++){
                if(res.data[i].result=='success'){
                    queryDataSuccess['name']=res.data[i].name;
                    queryDataSuccess['account']=res.data[i].account;
                    queryDataSuccess['sex']=res.data[i].sex;
                    queryDataSuccess['phone']=res.data[i].phone;
                }else{
                    queryDataFailure['name']=res.data[i].name;
                    queryDataFailure['account']=res.data[i].account;
                    queryDataFailure['sex']=res.data[i].sex;
                    queryDataFailure['phone']=res.data[i].phone;
                }
            }
            table.reload('userTableSuccess', {where: queryDataSuccess});
           // table.reload('userTableFailure', {where: queryDataFailure});
        }
    });
    /**
     * 下载导入模板
     */
   $(document).on('click','#impExcelTemplate',function(){
        window.open(Feng.ctxPath+"/other/用户表.xlsx");
    });

});
