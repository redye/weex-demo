<template>
  <div>
    <text>个人</text>
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