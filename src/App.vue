<template>
  <div id="app">
    <leftNavi></leftNavi>
<!--     <img src="./assets/logo.png">
    <span>icon text:</span>
    <i class="icon iconfont icon-hanbao"></i>
    <i class="icon iconfont icon-kafei"></i> -->
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
    height: 100%;
    text-align: center;
  }
  .main{
    float: left;
    width: 95%;
    background-color: #EFF2F7;
    height: 100%;
    overflow: hidden;
  }
</style>
