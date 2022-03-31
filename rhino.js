common.hookConstructor('java.net.URL', ['java.lang.String'], function (param) {
    var url = param.args[0];
    common.toast(url);
    common.log('java.net.URL: ' + url);
});
