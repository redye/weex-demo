<template>
  <div class="wrapper">
    <nav-bar :back="true" title="Web"></nav-bar>
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
    return {};
  },
  methods: {
    onPageStart: function(event) {

    },
    onPageFinish: function(event) {

    },
    onReceivedTitle: function(event) {

    },
    onError: function(event) {

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
  created: function () {

  }
};
</script>