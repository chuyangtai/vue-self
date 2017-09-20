<template>
  <div class="tab">
    <div class="tab-item active"><router-link :to="{path:'goods',activeClass: 'active'}">商品</router-link></div>
    <div class="tab-item"><router-link :to="{path:'ratings',activeClass: 'active'}">评论</router-link></div>
    <div class="tab-item"><router-link :to="{path:'seller',activeClass: 'active'}">商家</router-link></div>
  </div>
</template>

<script type="text/ecmascript-6">
  module.exports = {
    data: function () {
      return {
        title: 'this is a todo list'
      };
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header {
    height: 20px
  }
  .active{
    background-color: #42b983
  }
  .active a{color:#ffffff;display:block}
</style>
