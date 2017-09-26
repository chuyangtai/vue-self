<template>
    <div>
        <ul>
          <li v-for="good in goods">{{good.name}}</li>
        </ul>
    </div>

</template>

<script type="text/ecmascript-6">
const ERR_OK = 0;

export default{
  data () {
    return {
      goods: {}
    };
  },
  created () {
    this.axios.get('/api/goods').then((response) => {
      if (response.data.errno === ERR_OK) {
        this.goods = response.data.data;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
