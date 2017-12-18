<template>
	<div class="cartcontrol">
    <transition name="movex">
      <div class="cart-decrease" @click="cartDecrease()" v-show="food.count>0"><span class="inner">-</span></div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add" @click="cartAdd($event)">+</div>
	</div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  export default{
    props: {
      food: {}
    },
    methods: {
      cartAdd (event) {
        // 防止多次点击？
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
        // 给父组件传参数
        this.$emit('addElem', event.target);
        // console.log(this.food.count);
      },
      cartDecrease () {
        if (this.food.count > 1) {
          this.food.count--;
        } else {
          this.food.count = 0;
        }
        // console.log(this.food.count);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cartcontrol
    font-size 14px
    font-weight 700
    .cart-decrease,.cart-add
      background-color rgb(0,160,220)
      color #fff
      border-radius 50%
      height 20px
      width 20px
      text-align center
      display inline-block
      transition all 0.4s
      &.movex-enter-active, &.movex-leave-active
        opacity 1
        transform:translate3d(0,0,0)
        .inner
          display inline-block
          line-height:20px
          transition all 0.4s linear
          transform rotate(0deg)
      &.movex-enter, &.movex-leave-active
        transform:translate3d(30px,0,0)
        opacity 0
        .inner
          display inline-block
          line-height:20px
          transition all 0.4s linear
          transform rotate(180deg)
    .cart-count
      display inline-block
      color #000
      border-radius 50%
      padding 0 4px
      text-align center
      height 20px
      vertical-align top
</style>
