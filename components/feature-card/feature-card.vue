<template>
	<view class="bg-white p-3 rounded-[0.5rem] my-[16rpx]">
		<view class="flex justify-between items-center">
			<view>
				<view>{{title}}</view>
				<view>{{desc}}</view>
			</view>
			<view>{{moreText}}</view>
		</view>
	 <view  class="flex gap-2 my-[16rpx]" v-for='item in items'>
		 <view>{{item.img}}</view>
		 <view class="text-[#c4c4c4]">{{item.text}}</view>
	 </view>
	</view>
</template>

<script setup>
const props = defineProps({
	title:String,
	desc:String,
	moreText:String,
	items:Array
})
</script>

<style>

</style>