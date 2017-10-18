<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue';
  export default {
    data () {
      return {
        seller: {}
      };
    },
    components: {
      'v-header': header
    },
    created: function () {
      this.axios.get('/api/seller').then((response) => {
        console.log(response);
        if (response.data.errno === 0) {
          this.seller = response.data.data;
        }
      });
    },
    mounted () {
      console.log(this.goods);
    }
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

</style>
