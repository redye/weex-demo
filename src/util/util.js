const utilFunc = {
  initIconFont: function () {
    const dom = weex.requireModule('dom');
    dom.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': "url('http://at.alicdn.com/t/font_994062_vii4adjx5va.ttf')"
    });
  },
  getBaseUrl: function () {
    // const bundleUrl = weex.config.bundleUrl;
    // var nativeBase;
    // var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

    // var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
    // if (isAndroidAssets) {
    //   nativeBase = 'file://assets/dist/';
    // } else if (isiOSAssets) {
    //   nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
    // } else {
    //   var host = 'localhost:12580';
    //   var matches = /\/\/([^/]+?)\//.exec(bundleUrl);
    //   if (matches && matches.length >= 2) {
    //     host = matches[1];
    //   }

    //   // 此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
    //   // in Browser or WebView
    //   if (typeof window === 'object') {
    //     // nativeBase = isnav ? 'http://' + host + '/index.html?page=./dist/' : '/dist/';
    //     nativeBase = 'http://' + host + '/index.html?page=./dist/';
    //   } else {
    //     nativeBase = 'http://' + host + '/dist/';
    //   }
    // }

    // return nativeBase;

    const bundleUrl = weex.config.bundleUrl;
    let host = '';
    let path = '';
    let nativeBase;
    const isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
    const isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
    if (isAndroidAssets) {
      nativeBase = 'file://assets/dist';
    } else if (isiOSAssets) {
      nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
    } else {
      const matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
      const matchFirstPath = /\/\/[^\/]+\/([^\/\s]+)\//.exec(bundleUrl);
      if (matches && matches.length >= 2) {
        host = matches[1];
      }
      if (matchFirstPath && matchFirstPath.length >= 2) {
        path = matchFirstPath[1];
      }
      nativeBase = 'http://' + host + '/dist/';
    }
    const h5Base = './index.html?page=';
    // in Native
    let base = nativeBase;
    if (typeof navigator !== 'undefined' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko')) {
      // check if in weexpack project
      if (path === 'web' || path === 'dist') {
        base = h5Base + '/dist/';
      } else {
        base = h5Base + '';
      }
    } else {
      base = nativeBase + (path ? path + '/' : '');
    }
    return base;
  },
  getTargetUrl: function (jsFile) {
    const newUrl = utilFunc.getBaseUrl() + jsFile;
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

export default utilFunc;
