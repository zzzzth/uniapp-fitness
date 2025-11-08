<template>
	<view class="bg-[#f5f5f5] min-h-screen">
		<view class="custom-nav">
			<common-nav-bar>
				<template #content>
					<text class="text-lg font-bold">我的</text>
				</template>
			</common-nav-bar>
		</view>

		<view class="px-4 py-4">
			<!-- 用户信息卡片 -->
			<view class="bg-white rounded-2xl p-5 mb-4 shadow-sm">
				<view class="mb-4">
					<text class="text-sm text-gray-500">{{ userInfo.nickname || '用户' }}</text>
				</view>
				<view class="flex justify-around">
					<view class="text-center">
						<text class="text-base font-semibold block">{{ currentWeight }} 当前(公斤)</text>
					</view>
					<view class="text-center">
						<text class="text-base font-semibold block">{{ targetWeight || '--' }} 目标(公斤)</text>
					</view>
					<view class="text-center">
						<text class="text-base font-semibold block">{{ bmi.toFixed(1) }} BMI</text>
					</view>
				</view>
			</view>

			<!-- 功能网格 -->
			<view class="bg-white rounded-2xl p-4 mb-4 shadow-sm">
				<view class="grid grid-cols-4 gap-4">
					<view v-for="item in featureGrid" :key="item.id" class="flex flex-col items-center"
						@click="handleFeatureClick(item.id)">
						<view class="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
							:style="{ backgroundColor: item.bgColor }">
							<text class="text-2xl">{{ item.icon }}</text>
						</view>
						<text class="text-xs text-gray-600">{{ item.name }}</text>
					</view>
				</view>
			</view>

			<!-- 健康测评 -->
			<view class="bg-white rounded-2xl mb-4 shadow-sm">
				<view class="p-4 border-b border-gray-100 flex items-center justify-between"
					@click="goToHealthAssessment">
					<view class="flex items-center gap-3">
						<view class="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
							<text class="text-green-500">✓</text>
						</view>
						<text class="text-sm">健康测评</text>
					</view>
					<uni-icons type="right" size="16" color="#999"></uni-icons>
				</view>
				<view class="p-4 flex items-center justify-between" @click="goToHealthPlan">
					<view class="flex items-center gap-3">
						<view class="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
							<text class="text-green-500">⏰</text>
						</view>
						<text class="text-sm">健康方案</text>
					</view>
					<uni-icons type="right" size="16" color="#999"></uni-icons>
				</view>
			</view>

			<!-- 建议反馈 -->
			<view class="bg-white rounded-2xl mb-4 shadow-sm">
				<view class="p-4 flex items-center justify-between" @click="goToFeedback">
					<view class="flex items-center gap-3">
						<view class="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
							<text class="text-green-500">ℹ️</text>
						</view>
						<text class="text-sm">建议反馈</text>
					</view>
					<uni-icons type="right" size="16" color="#999"></uni-icons>
				</view>
			</view>

			<!-- 设置 -->
			<view class="bg-white rounded-2xl mb-4 shadow-sm">
				<view class="p-4 flex items-center justify-between" @click="goToSettings">
					<view class="flex items-center gap-3">
						<view class="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
							<text class="text-green-500">⚙️</text>
						</view>
						<text class="text-sm">设置</text>
					</view>
					<uni-icons type="right" size="16" color="#999"></uni-icons>
				</view>
			</view>

			<!-- 切换账号 -->
			<view class="bg-white rounded-2xl mb-4 shadow-sm">
				<view class="p-4 flex items-center justify-between" @click="switchAccount">
					<view class="flex items-center gap-3">
						<view class="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
							<text class="text-green-500">🔄</text>
						</view>
						<text class="text-sm">切换账号</text>
					</view>
					<uni-icons type="right" size="16" color="#999"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import dayjs from 'dayjs';

const db = uniCloud.database();
const userInfo = ref({
	nickname: '健身达人',
	avatar: ''
});
const currentWeight = ref(60.0);
const targetWeight = ref(55.0);
const height = ref(170); // 身高（cm）
const bmi = computed(() => {
	if (height.value && currentWeight.value) {
		const heightInMeters = height.value / 100;
		return currentWeight.value / (heightInMeters * heightInMeters);
	}
	return 0;
});

// 功能网格
const featureGrid = [
	{ id: 1, name: '基本信息', icon: '👤', bgColor: '#E5F3FF' },
	{ id: 2, name: '收藏的食物', icon: '⭐', bgColor: '#E5FFE5' },
	{ id: 3, name: '上传的食物', icon: '📤', bgColor: '#FFF5E5' },
	{ id: 4, name: '我的故事', icon: '📖', bgColor: '#F0E5FF' }
];

// 获取用户信息
const getUserInfo = async () => {
	try {
		const res = await db.collection('user_profile')
			.get();

		if (res.result.errCode === 0 && res.result.data.length > 0) {
			const profile = res.result.data[0];
			userInfo.value = profile;
			currentWeight.value = profile.current_weight || 60.0;
			targetWeight.value = profile.target_weight || 55.0;
			height.value = profile.height || 170;
		}
	} catch (error) {
		console.error('获取用户信息失败', error);
	}
};

// 获取最新体重
const getLatestWeight = async () => {
	try {
		const res = await db.collection('weight_record')
			.orderBy('date desc')
			.limit(1)
			.get();

		if (res.result.errCode === 0 && res.result.data.length > 0) {
			currentWeight.value = res.result.data[0].weight;
		}
	} catch (error) {
		console.error('获取体重失败', error);
	}
};

// 功能点击
const handleFeatureClick = (id) => {
	switch (id) {
		case 1: // 基本信息
			uni.showToast({
				title: '基本信息功能开发中',
				icon: 'none'
			});
			break;
		case 2: // 收藏的食物
			uni.showToast({
				title: '收藏功能开发中',
				icon: 'none'
			});
			break;
		case 3: // 上传的食物
			uni.showToast({
				title: '上传功能开发中',
				icon: 'none'
			});
			break;
		case 4: // 我的故事
			uni.showToast({
				title: '故事功能开发中',
				icon: 'none'
			});
			break;
	}
};

// 健康测评
const goToHealthAssessment = () => {
	uni.showToast({
		title: '健康测评功能开发中',
		icon: 'none'
	});
};

// 健康方案
const goToHealthPlan = () => {
	uni.showToast({
		title: '健康方案功能开发中',
		icon: 'none'
	});
};

// 建议反馈
const goToFeedback = () => {
	uni.showToast({
		title: '反馈功能开发中',
		icon: 'none'
	});
};

// 设置
const goToSettings = () => {
	uni.showToast({
		title: '设置功能开发中',
		icon: 'none'
	});
};

// 切换账号
const switchAccount = () => {
	uni.showModal({
		title: '切换账号',
		content: '确定要切换账号吗？',
		success: (res) => {
			if (res.confirm) {
				uni.showToast({
					title: '切换账号功能开发中',
					icon: 'none'
				});
			}
		}
	});
};

onMounted(() => {
	getUserInfo();
	getLatestWeight();
});
</script>

<style lang="scss" scoped></style>
