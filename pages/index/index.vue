<template>
  <!-- 自定义导航栏 -->
  <view class="custom-nav" 
        :style="{ paddingTop: statusBarHeight + 'px', height: navBarHeight + 'px' }">
    <view class="left">左</view>
    <view class="right">右</view>
    <view class="title">首页</view>
  </view>

  <!-- 页面内容 -->
  <view class="content">
    <text>这里是页面内容</text>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const statusBarHeight = ref(0)
const navBarHeight = ref(0)

onMounted(async () => {
	// #ifdef MP-WEIXIN
  const windowInfo = await wx.getWindowInfo()
  const menuButton = wx.getMenuButtonBoundingClientRect()

  statusBarHeight.value = windowInfo.statusBarHeight

  // 自定义导航栏高度 = 胶囊底部 + 顶部间距
  navBarHeight.value = menuButton.top + menuButton.height + (menuButton.top - windowInfo.statusBarHeight)
	// #endif
  console.log('状态栏高度:', statusBarHeight.value)
  console.log('自定义导航栏高度:', navBarHeight.value)
  console.log('胶囊位置:', menuButton)
  // #ifdef H5
  statusBarHeight = 20   // 浏览器可以写固定值模拟
  navBarHeight = 60      // 模拟导航栏高度
  // #endif
})
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
