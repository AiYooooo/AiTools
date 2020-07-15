<template>
  <div id="app">
    <Header></Header>
    <div class="app-wrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
  #app {
    font-family: '微软雅黑', Helvetica, Arial, sans-serif;
    color: #696969;
    width: 100%;
    height: auto;
    min-height: 100vh;
    background-color: #f5f5f5;

    .app-wrap {
      width: 1360px;
      height: auto;
      margin: 20px auto 0;
      padding-bottom: 40px;
    }
  }
</style>
