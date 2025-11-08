<template>
  <view class="grid grid-cols-3 gap-[12rpx]">
    <view v-for="(item, index) in list" :key="index" @click="toPage(item.path)">
      <view class="flex flex-col  justify-center items-center">
        <image :src="item.img" class="w-[60rpx] h-[60rpx]"></image>
        <text>{{ item.text }}</text>
      </view>

    </view>
  </view>
</template>

<script setup>
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});

const toPage = (url) => {
  if (url) uni.navigateTo({
  	url
  })
}
</script>

<style></style>
