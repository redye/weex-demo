<template>
  <div class="wrapper">
    <nav-bar :back="true" :title="title"></nav-bar>
    <web 
      class="web" 
      ref="webview"
      :src="url"
      @pagestart="onPageStart"
      @pagefinish="onPageFinish"
      @receivedtitle="onReceivedTitle"
      @error="onError"
    />
  </div>
</template>

<style scoped>
.wrapper {
  flex: 1;
  width: 750px;
}
.web {
  flex: 1;
}
</style>

<script>

import NavBar from '@/components/NavBar';

const webview = weex.requireModule("webview");
const navigator = require('@/util/navigator');
const util = require('@/util/util');

export default {
  components: {
    NavBar
  },
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data: function () {
    return { 
      title: 'Web'
    };
  },
  methods: {
    onPageStart: function(event) {
      console.log('onPageStart ===>', JSON.stringify(event));
    },
    onPageFinish: function(event) {
      console.log('onPageFinish ===>', JSON.stringify(event));
      this.title = event && event.title;
      const canGoForward = event && event.canGoForward;
      if (canGoForward) {
        
      }
    },
    onReceivedTitle: function(event) {
      console.log('onReceivedTitle ===>', JSON.stringify(event));
    },
    onError: function(event) {
      console.log('onError ===>', JSON.stringify(event));
    },
    goBack: function() {
      const webElement = this.$el('webview');
    },
    goForward: function() {

    },
    reload: function() {

    },
    postMessage: function() {

    }
  },
  created: function (event) {
    util.initIconFont();
    const bundleUrl = this.$getConfig().bundleUrl;
    const params = util.parseUrlQuery(bundleUrl);
    if (params && params.url) {
      this.url = params.url;
    }
  }
};
</script>