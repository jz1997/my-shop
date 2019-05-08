/**
 * 初始化 ICheck
 * @type {{Init}}
 */

var App = function () {
    // 私有属性
    var _masterCheckbox = $('input[type="checkbox"].minimal.icheck_master');
    var _checkboxes = $('input[type="checkbox"].minimal');

    var _idArray;


    var handlerInitICheck = function () {
        // 激活
        $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
            checkboxClass: 'icheckbox_minimal-blue',
            radioClass   : 'iradio_minimal-blue'
        });

        // 获取顶部checkbox
        _masterCheckbox = $('input[type="checkbox"].minimal.icheck_master');

        // 获取全部checkbox
        _checkboxes = $('input[type="checkbox"].minimal')
    };

    /**
     * checkbox 的全选功能
     */
    var handlerCheckAll = function () {
        _masterCheckbox.on("ifClicked", function (e) {
            // console.log("click master checkbox")
            //  为true 代表未选中
            if (e.target.checked) {
                _checkboxes.iCheck("uncheck");
            }

            // 选中
            else {
                _checkboxes.iCheck("check");
            }

        })
    };

    var handlerMultiDelete = function (url) {
        _idArray = new Array();

        // 选中的ID放入数组
        _checkboxes.each(function () {
            var _id = $(this).attr("id");
            if (_id != null
                && _id != "undefine"
                && $(this).is(":checked")) {
                _idArray.push(_id);
            }
        });

        if (_idArray.length === 0) {
            $("#modal-message").html("您还没有选择数据");
        }

        else {
            $("#modal-message").html("您确定删除数据项吗");
        }

        $("#modal-default").modal("show");

        // 绑定事件
        $("#modalBtnOk").bind("click", function () {
            del();
        });

        /**
         * 删除函数  当前函数的私有函数
         */
        function del() {
            $("#modal-default").modal("hide");

            // 没有选择数据项 就关闭模态框
            if (_idArray.length == 0) {
                //.........
            }

            // 选择数据项 就进行数据项删除操作
            else {
                setTimeout(function () {
                    $.ajax({
                        "url": url,
                        "type": "POST" ,
                        "data": {"ids" : _idArray.toString()},
                        "datatype": "JSON",
                        "success": function (data) {
                            // console.log(data);
                            // 删除成功
                            if (data.status === 200) {
                                window.location.reload();
                            }
                            // 删除失败
                            else {
                                // 重新绑定事件 第二次可以关闭
                                $("#modalBtnOk").unbind("click");
                                // 绑定事件
                                $("#modalBtnOk").bind("click", function () {
                                    $("#modal-default").modal("hide");
                                });

                                $("#modal-message").html(data.message);
                                $("#modal-default").modal("show");


                            }
                        }
                    });
                }, 500);

            }
        }
    };
    
    return {
        Init: function () {
            handlerInitICheck();
            handlerCheckAll();
        },

        getCheckbox: function () {
            return _checkboxes;
        },

        deleteMulti: function (url) {
            handlerMultiDelete(url);
        }
    }
}();

$(document).ready(function () {
    App.Init();
});