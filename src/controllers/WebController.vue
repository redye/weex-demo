<template>
  <div class="wrapper">
    <text>Web</text>
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
  background-color: red;
}
.web {
  flex: 1;
}
</style>

<script>

import util from "@/util/util";

const webview = weex.requireModule("webview");
const navigator = require('@/util/navigator');

export default {
  components: {},
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