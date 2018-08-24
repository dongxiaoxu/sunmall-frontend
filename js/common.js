/**
 * Created by dongxu on 2018/8/24.
 */
var userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
var url = window.location.href;
if (!url.endsWith("/login.html") && !userInfo) {
    sessionStorage.clear();
    window.location.href = "login.html";
};

var baseFiles = [
    "easyui/jquery.min.js",
    "easyui/locale/easyui-lang-zh_CN.js",
    "easyui/jquery.easyui.min.js",
    "js/application.js",
    "js/md5.js",

    "easyui/themes/material/easyui.css",
    "easyui/themes/icon.css",

    "icon/application.ico"
];
var fileName;
for (var i = 0, length = baseFiles.length; i < length; i++) {
    fileName = baseFiles[i];
    if (fileName.endsWith(".js")) {
        fileName = '<script src="'+fileName + '"></script>';
    } else if (fileName.endsWith(".css")) {
        fileName = '<link rel="stylesheet" type="text/css" href="'+fileName + '">';
    } else if (fileName.endsWith(".ico")) {
        fileName = '<link rel="icon" type="image/x-ico" href="'+fileName + '"/>';
    } else {
        continue;
    }
    document.write(fileName);
}


