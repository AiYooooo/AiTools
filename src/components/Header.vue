<template>
  <div class="head">
    <img src="@/assets/logo.png">
    <router-link to="/home"><h1>Tools</h1></router-link>
    <small v-if="title">- [ {{title}} ]</small>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: function(){
    return {
      title: ''
    }
  },
  watch: {
    '$route'(to) {
      this.title = to.meta.title ? to.meta.title : '';
    }
  }
}
</script>

<style scoped lang="scss">
  .head {
    width: 100%;
    height: 70px;
    padding-left: calc(50% - 680px);
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
      height: 40px;
      margin-right: 5px;
    }
    h1 {
      font-size: 20px;
      user-select: none;
      cursor: pointer;
    }
    a {
      text-decoration: none;
    }
    small {
      margin-left: 40px;
      font-size: 20px;
      font-weight: bold;
    }
  }
</style>
