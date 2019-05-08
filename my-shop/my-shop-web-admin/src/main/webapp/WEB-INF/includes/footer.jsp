<%--
  Created by IntelliJ IDEA.
  User: zheng
  Date: 19-5-5
  Time: 上午1:34
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>


<div class="modal fade" id="modal-details">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">查看详情</h4>
            </div>
            <div class="modal-body">
                <p id="modal-detail-body">&hellip;</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" onclick="$('#modal-details').modal('hide')">确定</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->

<!-- jQuery 3 -->
<script src="/static/assets/bower_components/jquery/dist/jquery.min.js"></script>
<!-- jQuery UI 1.11.4 -->
<script src="/static/assets/bower_components/jquery-ui/jquery-ui.min.js"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
    $.widget.bridge('uibutton', $.ui.button);
</script>
<!-- Bootstrap 3.3.7 -->
<script src="/static/assets/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<!-- Slimscroll -->
<script src="/static/assets/bower_components/jquery-slimscroll/jquery.slimscroll.min.js"></script>
<!-- FastClick -->
<script src="/static/assets/bower_components/fastclick/lib/fastclick.js"></script>
<!-- AdminLTE App -->
<script src="/static/assets/js/adminlte.min.js"></script>

<!-- jquery validation -->
<script src="/static/assets/plugins/jquery-validation-1.19.0/js/jquery.validate.min.js"></script>
<script src="/static/assets/plugins/jquery-validation-1.19.0/js/localization/messages_zh.js"></script>
<script src="/static/assets/plugins/jquery-validation-1.19.0/js/additional-methods.min.js"></script>

<!-- iCheck 1.0.1 -->
<script src="/static/assets/plugins/iCheck/icheck.min.js"></script>

<!-- DataTables -->
<script src="/static/assets/bower_components/datatables.net/js/jquery.dataTables.min.js"></script>
<script src="/static/assets/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>

<!-- App -->
<script src="/static/assets/app/validate.js"></script>
<script src="/static/assets/app/app.js"></script>