module.exports = {
  /**
   * 控制导航条的显示
   * @param {Boolean} hide 是否隐藏导航条
   */
  hideNavBar: function (hide) {
    weex.app && weex.app.ui && weex.app.ui.navBar && weex.app.ui.navBar.setVisible(!hide);
  }
}
