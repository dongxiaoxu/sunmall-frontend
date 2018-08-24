/**
 * Created by dongxu on 2018/8/22.
 */


var ajaxRequest = function (url, params, success, failure) {
    $.ajax({
        url : url,
        method: 'post',
        //指定返回为json时,数据返回必须是json，否则走error分支，因此去除该类型
        // dataType : 'json',
        //ajax跨域必须指定该属性
        crossDomain: true,
        data : params,
        //ajax跨域必须指定该属性
        xhrFields: {
            withCredentials: true
        },
        success: function(result) {
            if (success) {
                success(result);
            }
        },
        error : function (result) {
            if (failure) {
                failure(result);
            } else {
                console.error(url + ' request failure!');
                // sessionStorage.clear();
                // window.location.href = 'login.html';
            }
//
        }
    });
}

var getBaseUrl = function () {
    return "http://192.168.102.142:8080/sunmall";
}
