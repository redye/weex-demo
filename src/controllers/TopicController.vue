<template>
  <div>
    <text>专题</text>
  </div>
</template>

<script>

const configure = require('@/util/configure');
export default {
  created: function () {
    configure.hideNavBar(false);
  }
}
</script>