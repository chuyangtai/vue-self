<template>
    <div class="star" :class="starType">
        <span v-for="itemClass in itemClasses" class="star-item" :class="itemClass">
        </span>
    </div>
</template>

<script type="text/ecmascript-6">
  /* 评分组件 传入尺寸和得分 */
  const LENGTH = 5;
  const CLS_ONE = 'one';
  const CLS_HALF = 'half';
  const CLS_NO = 'no';
  export default{
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: {
      starType () {
        return 'star-' + this.size;
      },
      itemClasses () {
        let result = [];
        let score = Math.floor(this.score * 2) / 2;
        let hasDecimal = score % 1 !== 0;
        let integer = Math.floor(score);
        for (let i = 0; i < integer; i++) {
          result.push(CLS_ONE);
        }
        if (hasDecimal) {
          result.push(CLS_HALF);
        }
        /* 补齐长度 */
        while (result.length < LENGTH) {
          result.push(CLS_NO);
        }
        return result;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
.star
  text-align center
  .star-item
    display :inline-block
    background-repeat no-repeat
  &.star-48
    .star-item
      width 20px
      height 20px
      margin-right 16px
      background-size:20px 20px
      &.one
        background-image  url('one-score.png')
      &.half
        background-image  url('half-score.png')
      &.no
        background-image  url('no-score.png')
  &.star-36
    .star-item
      width 15px
      height 15px
      margin-right 10px
      background-size:15px 15px
      &.one
        background-image  url('one-score.png')
      &.half
        background-image  url('half-score.png')
      &.no
        background-image  url('no-score.png')
  &.star-24
    .star-item
      width 10px
      height 10px
      margin-right 3px
      background-size:10px 10px
      &.one
        background-image  url('one-score.png')
      &.half
        background-image  url('half-score.png')
      &.no
        background-image  url('no-score.png')

</style>
