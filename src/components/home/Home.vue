<template>
  <div class="home">
    <a class="music" @click="toMusic()"></a>
    <div class="content-wrap">
      <div class="theme"></div>
      <!-- <div class="ink"></div> -->
      <a class="enter"></a>
      <a class="label-enter" @click="toEnter()"><i></i></a>
    </div>
    <div class="footer">
        <p>
          <a>常熟市委宣传部出品</a>
        </p>
        <p>苏州巨数技术支持</p>
      </div>
  </div>
</template>

<script>
import home from "./home.js";
export default home;
</script>

<style scoped>
@import url(./home.css);
</style>