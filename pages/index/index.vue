<template>
  <!-- 自定义导航栏 -->
  <view class="custom-nav" 
        :style="{height: (statusBarHeight + 40)+ 'px', paddingTop:statusBarHeight + 'px'}">
    <view class="left">左</view>
 
  </view>

  <!-- 页面内容 -->
  <view class="content">
    <text>这里是页面内容</text>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const SYSTEM_INFO = uni.getSystemInfoSync()
const statusBarHeight = ref(SYSTEM_INFO.statusBarHeight)
console.log(statusBarHeight.value);
const {top,height } = uni.getMenuButtonBoundingClientRect()
</script>

<style lang="scss" scoped>
.custom-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  
  .left, .right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 10px;
  }
  .left {
    left: 0;
  }
  .right {
    right: 0;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
  }
}

.content {
  margin-top: calc(var(--nav-height, 44px)); /* 如果想用 CSS 变量也行 */
  padding: 10px;
}
</style>
