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
    <div class="ball-container">
      <div v-for="ball in balls">
        <transition name="dropBall" @before-enter="beforeEnter" @enter="enter" @afterEnter="afterEnter">
          <div class="ball" v-show="ball.show">
            <div class="inner inner-hook"></div>
          </div>
        </transition>
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
    methods: {
      drop (el) {
        // 可以得到这个点击元素
        // console.log(el)
        // 把第一个隐藏的球做动画
        for (let i = 0; i < this.balls.length; i++) {
          let ball = this.balls[i];
          if (!ball.show) {
            ball.show = true;
            ball.el = el;
            this.dropBalls.push(ball);
            return;
          }
        }
      },
      beforeEnter (el) {
        let count = this.balls.length;
        while (count--) {
          let ball = this.balls[count];
          // 取到需要动的球,外层为纵向，内层为横向
          if (ball.show) {
              // 外层ball是隐藏的，inner是展现的
            let rect = ball.el.getBoundingClientRect();
            let x = rect.left - 32;
            let y = -(window.innerHeight - rect.top - 22);
            el.style.display = '';
            el.style.webkitTransform = `translate3d(0,${y}px,0)`;
            el.style.transform = `translate3d(0,${y}px,0)`;
            let inner = el.getElementsByClassName('inner-hook')[0];
            inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
            inner.style.transform = `translate3d(${x}px,0,0)`;
          }
        }
      },
      enter (el) {
          /* eslint-disable no-unused-vars */
        let rf = el.offsetHeight;
        this.$nextTick(() => {
          el.style.display = '';
          el.style.webkitTransform = `translate3d(0,0,0)`;
          el.style.transform = `translate3d(0,0,0)`;
          let inner = el.getElementsByClassName('inner-hook')[0];
          inner.style.webkitTransform = `translate3d(0,0,0)`;
          inner.style.transform = `translate3d(0,0,0)`;
          });
      },
      afterEnter (el) {
        let ball = this.dropBalls.shift();
        if (ball) {
          ball.show = false;
          el.style.display = 'none';
        }
      }
    },
    data () {
      return {
        balls: [
          {show: false},
          {show: false},
          {show: false},
          {show: false},
          {show: false}
        ],
        dropBalls: []
      };
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
  .ball-container
    .ball
      position fixed
      left 16px
      bottom 22px
      z-index 200
      transition all 0.5s cubic-bezier(0.49,-0.29,0.75,0.41)
      .inner
        width 16px
        height 16px
        border-radius 50%
        background rgb(0,160,220)
        transition all 0.5s linear
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
