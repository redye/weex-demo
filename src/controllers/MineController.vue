<template>
  <div>
    <nav-bar :back="false"></nav-bar>
    <text>个人</text>
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