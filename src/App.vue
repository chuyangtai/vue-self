<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue';
  export default {
    components: {
      'v-header': header
    }
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
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
</style>
