<template>
	<view class="layout">
		<view class="nav-bar">
			<view class="statusBarHeight" :style="{ height: getStatusBarHeight() + 'px' }"></view>
			<view class="textHeight" :style="{ height: getNavBarHeight() + 'px', marginLeft: getLeftIcon() + 'px' }">
				<view class="content">
					<slot name="content"></slot>
				</view>
			</view>


		</view>
		<view class="fill" :style="{ height: + getStatusBarHeight() + getNavBarHeight() + 'px' }"></view>
	</view>
</template>

<script setup>
import { ref } from 'vue'
import { getStatusBarHeight, getNavBarHeight, getLeftIcon } from '@/utils/system.js'

</script>


<style scoped lang="scss">
.layout {

	.nav-bar {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;


		.textHeight {
			padding: 10rpx;
			display: flex;
			align-items: center;
			gap: 10rpx;

			.content {
				color: #222;
				font-weight: 600;
			}
		}
	}

	.fill {
		position: relative;
	}
}
</style>
