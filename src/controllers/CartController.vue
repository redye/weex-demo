<template>
  <div>
    <text>购物车</text>
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