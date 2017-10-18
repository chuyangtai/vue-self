<template>
	<div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo"><img src="../../assets/logo.png" alt="" width="46"></div>
        <div class="price">￥0</div>
        <div class="describe">另需配送费￥{{deliveryPrice}}元</div>
      </div>
      <div class="content-right">去结算{{minPrice}}</div>
    </div>
	</div>

</template>

<script type="text/ecmascript-6">
  export default{
    props: {
        deliveryPrice: {
          default: 0
        },
        minPrice: {
          default: 0
        }
      }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
.shopcart
  position fixed
  left 0
  bottom 0
  z-index 50
  width 100%
  background-color: #141d27
  .content
    display flex
    background: #141d27
    .content-left
      flex 1
      .logo
        display inline-block
        position relative
        margin-top -10px
        border-radius 50%
        padding: 6px
        box-sizing border-box
        background-color #141d27
      .price
        display inline-block
        vertical-align top
        line-height 24px
        font-size 16px
        margin-top 12px
        padding-right 12px
        border-right 1px solid rgba(255,255,255,0.1)
        font-weight 700
        color rgba(255,255,255,0.4)
      .describe
        display inline-block
        vertical-align top
        margin 12px 0 0 12px
        line-height 24px
        padding-left 12px
        font-weight 700
        font-size 10px
        color rgba(255,255,255,0.4)
    .content-right
      flex 0 0 105px
      width 105px

</style>
