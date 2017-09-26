<template>
  <div>
    <div class="banner">
      <div class="banner-top clearfix">
        <div class="pull-left">
          <img :src="seller.sellerHeaderImg" alt="" width="64" height="64">
        </div>
        <div class="pull-left seller-infor">
          <span class="brand">品牌</span>
          <span v-text="seller.name" class="seller-name"></span>
          <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
          <div class="discount" v-if="seller.discount">
            <span class="icon"></span><span class="" v-text="seller.discount[0].description"></span>
          </div>
        </div>
      </div>
      <div class="bulletin" @click="showDetail">
        <span>公告：</span>
        <span class="banner-bottom" v-text="seller.bulletin"></span>
      </div>
    </div>
    <div class="tab">
      <div class="tab-item active">
        <router-link :to="{path:'goods',activeClass: 'active'}">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path:'ratings',activeClass: 'active'}">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path:'seller',activeClass: 'active'}">商家</router-link>
      </div>
    </div>
    <div class="detail" v-show="detailShow" @click="hideDetail">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">

        </div>
      </div>
      <div class="detail-close"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  module.exports = {
    data: function () {
      return {
        seller: {},
        detailShow: false
      };
    },
    methods: {
      showDetail () {
        this.detailShow = true;
      },
      hideDetail () {
        this.detailShow = false;
      }
    },
    created: function () {
      this.axios.get('/api/seller').then((response) => {
        console.log(response);
        if (response.data.errno === 0) {
          this.seller = response.data.data;
        }
      });
    }
  };
</script>

<style>
  .header {
    height: 20px;
  }
  .tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height:40px;
  }
  .tab-item{
    flex:1;
    text-align: center;
  }
  .active {
    background-color: #42b983;
  }

  .active a {
    color: #ffffff;
    display: block;
  }

  .banner {
    background: url(../../assets/seller-bg.jpg) no-repeat center;
    color: #fff;
  }

  .brand {
    background-color: #f30;
    border-radius: 4px;
    padding: 2px;
    text-align: left;

  }
  .banner-top img{padding: 24px;box-sizing: content-box;border-radius: 2px}
  .banner-top .seller-infor{padding: 28px 0 0 12px;}
  .seller-name {
    color: #fff;
    font-size: 16px;
    font-weight: 600;
  }
  .bulletin{margin-bottom: 0px;}
  .detail{
    position: fixed;
    z-index:100;
    width:100%;
    height:100%;
    overflow: auto;
    background: rgba(7,17,27,0.8);
    top:0;
    left: 0;

  }
  .detail-wrapper{
    min-height: 100%;
  }
  .detail-main{
    margin-top:64px;
    padding-bottom:64px ;
  }
</style>
