<template>
  <div id="app">
    <leftNavi></leftNavi>
<!--     <img src="./assets/logo.png"> -->
    <div class="main">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import leftNavi from './components/common/leftNav.vue'

export default {
  name: 'app',
  components: {
    leftNavi
  }
}
</script>

<style>
  #app{
    font-family: 'Microsoft YaHei','Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    text-align: left;
    color: #2C3E50;
    display: flex;
  }
  .main{
    flex: 1;
    width: 95%;
    background-color: #EFF2F7;
    height: 100%;
    overflow: auto;
  }
</style>
