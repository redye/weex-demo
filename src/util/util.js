const util = {
  initIconFont: function () {
    const dom = weex.requireModule('dom');
    dom.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': "url('http://at.alicdn.com/t/font_994062_zjm86fft68i.ttf')"
    });
  },
  getBaseUrl: function () {
    const bundleUrl = weex.config.bundleUrl;
    var nativeBase;
    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
    if (isAndroidAssets) {
      nativeBase = 'file://assets/dist/';
    } else if (isiOSAssets) {
      nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
    } else {
      var host = 'localhost:12580';
      var matches = /\/\/([^/]+?)\//.exec(bundleUrl);
      if (matches && matches.length >= 2) {
        host = matches[1];
      }

      // 此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
      // in Browser or WebView
      if (typeof window === 'object') {
        nativeBase = 'http://' + host + '/index.html?page=./dist/';
      } else {
        nativeBase = 'http://' + host + '/';
      }
    }

    return nativeBase;
  },
  getTargetUrl: function (jsFile) {
    const newUrl = util.getBaseUrl() + jsFile;
    return newUrl;
  },
  getUrlQuery: function (url, name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = url.slice(url.indexOf('?') + 1).match(reg);
    if (r != null) {
      try {
        return decodeURIComponent(r[2]);
      } catch (_e) {
        return null;
      }
    }
    return null;
  }
}

module.exports = util;
