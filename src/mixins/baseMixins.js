const baseMixins = {
  data: function () {
    return {
      themeColor: '#b4282d'
    }
  },
  methods: {
    isIpx: function () {
      const platform = weex && weex.config.env.platform;
      const scale = weex && weex.config.env.scale;
      const deviceHeight = weex && weex.config.env.deviceHeight;
      const screenHeight = deviceHeight / (scale > 0 ? scale : 1);
      return platform === 'iOS' && (screenHeight === 812 || screenHeight === 896);
    }
  }
};

export default baseMixins;
