const util = require('@/util/util');
const configure = require('@/util/configure');

const navigator = weex.requireModule('navigator');

module.exports = {
  /**
   * 入栈
   * @param {Object} options 路由信息
   * @param {Function} callback 回调函数
   */
  push: function (options, callback) {
    const url = options && options.url;
    if (url && url.length > 0) {
      const targetUrl = util.getTargetUrl(url);
      console.log(`targetUrl ===> ${targetUrl}`);
      configure.hideNavBar(false);
      navigator.push({
        url: targetUrl,
        animated: options.animated ? options.animated : 'true'
      }, callback);
    }
  },
  /**
   * 出栈
   * @param {Boolean} animated  是否有动画效果
   * @param {Function} callback 回调函数
   */
  pop: function (animated = 'true', callback) {
    navigator.pop({
      animated: animated
    }, callback);
  }
}
