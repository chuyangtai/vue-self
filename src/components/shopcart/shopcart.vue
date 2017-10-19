<template>
	<div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo" :class="{'highlight':totleCount > 0}">
          <img src="../../assets/logo.png" alt="" width="46">
          <span class="number" v-show="totleCount>0">{{totleCount}}</span>
        </div>
        <div class="price">￥{{totlePrice}}</div>
        <div class="describe">另需配送费￥{{deliveryPrice}}元</div>
      </div>
      <div class="content-right">
        <div class="pay" :class="{'highlight':totlePrice > 0,'enough':totlePrice >= minPrice}">{{payDesc}}
        </div>
      </div>
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
        },
      selectFoods: {
        default () {
            return [
              {price: 2.9, count: 10}
            ];
        }
       }
      },
    computed: {
        totlePrice () {
          let total = 0;
          this.selectFoods.forEach((food) => {
              total += food.price * food.count;
          });
          return total;
        },
      totleCount () {
        let count = 0;
        this.selectFoods.forEach((food) => {
          count += food.count;
        });
        return count;
      },
      payDesc () {
        if (this.totlePrice === 0) {
          return '￥' + this.minPrice + '元起送';
        } else if (this.totlePrice < this.minPrice) {
          return '还差￥' + (this.minPrice - this.totlePrice) + '元起送';
        } else {
            return '去结算';
        }
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
        &.highlight
          background-color rgb(0,160,220)
        .number
          position absolute
          right 0px
          top 0
          width 24px
          height 16px
          line-height 16px
          text-align center
          border-radius 16px
          font-size 9px
          font-weight 700px
          color #ffffff
          background-color #f00
          box-shadow 0px 4px 8px 0px rgba(0,0,0,0.4)
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
        margin 12px 0 0 0
        line-height 24px
        padding-left 12px
        font-weight 700
        font-size 10px
        color rgba(255,255,255,0.4)
    .content-right
      flex 0 0 100px
      width 100px
      .pay
        height 48px
        line-height: 48px
        font-size 12px
        text-align center
        font-weight 700
        color rgba(255,255,255,0.4)
        background-color #2b333b
        &.highlight
          background-color rgb(0,160,220)
          color #fff
        &.enough
          background-color #42b983


</style>
