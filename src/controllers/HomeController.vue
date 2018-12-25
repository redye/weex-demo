<template>
  <div class="home-container">
    <nav-bar @item-click="onItemClick" @search="onSearch"></nav-bar>
    <channel @click="onClick" :channels="channels"></channel>
  </div>
</template>

<style scoped>
  .home-container {
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
  }
</style>

<script>

import NavBar from '../components/NavBar';
import Channel from '../components/Channel';

const modal = weex.requireModule('modal');
const navigation = weex.requireModule('navigtion');

export default {
  components: {
    NavBar,
    Channel
  },
  data: function() {
    const channelList = ['推荐', '限时购', '新品', '居家', '餐厨', '配件', '服装', '电器', '洗护', '杂货', '饮食', '婴童', '志趣', '更多'].map((item, i) => {
        return {
          title: item,
          value: 10 + i
        }
      });
    return {
      channels: channelList
    }
  },
  methods: {
    onClick: function(event) {
      const data = event.data;
    },
    onSearch: function() {

    },
    onItemClick: function (event) {
      modal.toast({
        message: `item click => ${event.index}`,
        duration: 3
      });
    }
  }
}
</script>
