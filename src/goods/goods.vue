<template>
    <div>
        我是goods
    </div>

</template>

<script type="text/ecmascript-6">
export default{
  data () {
    return {
      goods: {}
    };
  },
  created () {
    this.$http.get('/api/goods').then((response) => {
      console.log(response);
      response.json();
    });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
