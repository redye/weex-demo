<template>
  <div>
    <nav-bar :back="false" title="购物车"></nav-bar>
    <text>购物车</text>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar';

const configure = require('@/util/configure');
export default {
  components: {
    NavBar
  },
  created: function () {
    configure.hideNavBar(false);
  }
}
</script>