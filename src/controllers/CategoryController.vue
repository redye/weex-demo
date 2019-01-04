<template>
  <div>
    <text>分类</text>
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
