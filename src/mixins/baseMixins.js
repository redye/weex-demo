const baseMixins = {
  data: function () {
    return {
      themeColor: '#b4282d'
    }
  },
  methods: {
    isIpx: function () {
      return weex && (weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel === 'iPhone10,6');
    }
  }
};

export default baseMixins;
