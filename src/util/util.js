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
    let baseUrl;
    const isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

    const isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
    if (isAndroidAssets) {
      baseUrl = 'file://assets/dist/';
    } else if (isiOSAssets) {
      baseUrl = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
    } else {
      let host = 'localhost:12580';
      const matches = /\/\/([^/]+?)\//.exec(bundleUrl);
      if (matches && matches.length >= 2) {
        host = matches[1];
      }

      // 此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
      // in Browser or WebView
      if (typeof window === 'object') {
        baseUrl = 'http://' + host + '/index.html?page=./dist/';
      } else {
        baseUrl = 'http://' + host + '/';
      }
    }

    return baseUrl;
  },
  getTargetUrl: function (url) {
    const baseUrl = util.getBaseUrl();
    let path = url;
    if (url.indexOf('?') > -1) {
      path = url.split('?')[0];
    }
    const newUrl = baseUrl + path;
    return newUrl;
  },
  parseUrlQuery: function (url) {
    let result = {};
    const paramstring = url.slice(url.indexOf('?') + 1);
    const params = paramstring.split('&');
    for (let i = 0; i < params.length; i++) {
      let temp = params[i].split('=');
      result[temp[0]] = decodeURIComponent(temp[1]);
    }
    return result;
  },
  formatQueryString: function (query) {
    let queryPattern = [];
    for (let key in query) {
      queryPattern.push(`${key}=${query[key]}`);
    }
    return queryPattern.join('&');
  }
}

module.exports = util;
