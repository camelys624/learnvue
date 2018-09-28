<template>
  <div id="app">
    <mt-header fixed title="第一个Vue Demo"></mt-header>
      <router-view></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/icon/home2.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="vip">
        <img slot="icon" src="./assets/icon/vip.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="shopCart">
        <img slot="icon" src="./assets/icon/购物车.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" src="./assets/icon/我.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      selected: ''
    }
  },
  watch: {
    selected (newV, oldV) {
      console.log(newV)
      this.$router.push({
        name: newV
      })
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
