<template>
	<view class="bg-[#f5f5f5] min-h-screen">
		<view class="custom-nav">
			<common-nav-bar>
				<template #content>
					<text class="text-lg font-bold">记录</text>
				</template>
			</common-nav-bar>
		</view>

		<view class="px-4 py-4">
			<!-- 体重追踪卡片 -->
			<view class="bg-white rounded-2xl p-5 mb-4 shadow-sm">
				<view class="flex items-center justify-between mb-4">
					<view class="text-center flex-1">
						<text class="text-xs text-gray-500 block mb-1">初始</text>
						<text class="text-base font-semibold">{{ initialWeight }} 公斤</text>
					</view>
					<view class="flex-1 flex justify-center">
						<view class="relative w-32 h-32">
							<!-- 环形进度条区域 -->
							<view
								class="w-32 h-32 rounded-full border-8 border-gray-100 flex items-center justify-center">
								<view class="text-center">
									<text class="text-xs text-gray-500 block">已增重(公斤)</text>
									<text class="text-2xl font-bold"
										:class="weightChange >= 0 ? 'text-red-500' : 'text-green-500'">
										{{ weightChange >= 0 ? '+' : '' }}{{ weightChange.toFixed(2) }}
									</text>
									<text class="text-xs text-blue-500 block mt-1" @click="viewPlan">查看方案 ></text>
								</view>
							</view>
						</view>
					</view>
					<view class="text-center flex-1">
						<text class="text-xs text-gray-500 block mb-1">目标</text>
						<text class="text-base font-semibold">{{ targetWeight }} 公斤</text>
					</view>
				</view>
			</view>

			<!-- 饮食运动记录卡片 -->
			<view class="bg-white rounded-2xl p-5 mb-4 shadow-sm">
				<view class="mb-4">
					<text class="text-base font-semibold">饮食运动记录</text>
				</view>

				<view class="flex items-center justify-between mb-4">
					<view class="text-center flex-1">
						<text class="text-3xl font-bold"
							:class="calorieExceed >= 0 ? 'text-red-500' : 'text-green-500'">
							{{ Math.abs(calorieExceed) }}
						</text>
						<text class="text-xs text-gray-500 block mt-1">已{{ calorieExceed >= 0 ? '超出' : '剩余'
						}}(千卡)</text>
					</view>
					<view class="flex gap-3">
						<view class="bg-green-50 rounded-xl p-3 text-center min-w-[80rpx]">
							<text class="text-xl font-bold text-green-500 block">{{ todayCalorieIntake }}</text>
							<text class="text-xs text-gray-500">饮食</text>
						</view>
						<view class="bg-yellow-50 rounded-xl p-3 text-center min-w-[80rpx]">
							<text class="text-xl font-bold text-yellow-500 block">{{ todayCalorieBurned }}</text>
							<text class="text-xs text-gray-500">运动</text>
						</view>
					</view>
				</view>

				<!-- 快速记录按钮 -->
				<view class="flex justify-around pt-4 border-t border-gray-100">
					<view v-for="meal in quickRecordTypes" :key="meal.type" class="flex flex-col items-center"
						@click="addRecord(meal.type)">
						<view class="w-12 h-12 rounded-full flex items-center justify-center mb-2"
							:style="{ backgroundColor: meal.bgColor }">
							<text class="text-2xl">{{ meal.icon }}</text>
						</view>
						<text class="text-xs text-gray-600">{{ meal.name }}</text>
					</view>
				</view>
			</view>

			<!-- 体重记录卡片 -->
			<view class="bg-white rounded-2xl p-5 mb-4 shadow-sm">
				<view class="flex items-center justify-between mb-4">
					<text class="text-base font-semibold">体重记录</text>
					<view class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center" @click="addWeight">
						<text class="text-white text-xl">+</text>
					</view>
				</view>
				<view v-if="weightRecords.length === 0" class="text-center py-8 text-gray-400">
					<text class="text-sm">暂无记录</text>
				</view>
				<view v-else>
					<text class="text-xs text-gray-500 block mb-2">公斤</text>
					<view v-for="record in weightRecords" :key="record._id"
						class="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
						<view>
							<text class="text-base font-medium">{{ record.weight }} 公斤</text>
							<text class="text-xs text-gray-400 block">{{ record.date }}</text>
						</view>
						<text class="text-xs text-gray-400">BMI: {{ record.bmi?.toFixed(1) || '--' }}</text>
					</view>
				</view>
			</view>

			<!-- 今日饮食详情 -->
			<view class="bg-white rounded-2xl p-5 mb-4 shadow-sm">
				<view class="flex items-center justify-between mb-4">
					<text class="text-base font-semibold">今日饮食</text>
					<text class="text-xs text-blue-500" @click="searchFood">搜索食物 ></text>
				</view>

				<view class="space-y-3">
					<view v-for="meal in mealTypes" :key="meal.type"
						class="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
						<view class="flex items-center justify-between mb-2">
							<view class="flex items-center gap-2">
								<text class="text-lg">{{ meal.icon }}</text>
								<text class="text-sm font-medium">{{ meal.name }}</text>
							</view>
							<text class="text-xs text-gray-400">{{ getMealCalorie(meal.type) }} 大卡</text>
						</view>
						<view v-if="getMealFoods(meal.type).length === 0" class="text-xs text-gray-400 pl-7"
							@click="addFood(meal.type)">
							点击添加食物
						</view>
						<view v-else class="space-y-1 pl-7">
							<view v-for="food in getMealFoods(meal.type)" :key="food._id"
								class="flex items-center justify-between text-xs">
								<text>{{ food.food_name }} × {{ food.quantity }}g</text>
								<text class="text-gray-400">{{ food.calorie }} 大卡</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import dayjs from "dayjs";

const db = uniCloud.database();
const todayDate = ref(dayjs().format('YYYY-MM-DD'));
const initialWeight = ref(60.0); // 初始体重
const targetWeight = ref(55.0); // 目标体重
const currentWeight = ref(60.0); // 当前体重
const todayCalorieIntake = ref(0); // 今日摄入
const todayCalorieBurned = ref(0); // 今日消耗
const calorieTarget = ref(1500); // 卡路里目标
const todayFoodRecords = ref([]); // 今日饮食记录
const weightRecords = ref([]); // 体重记录

// 快速记录类型
const quickRecordTypes = [
	{ type: 1, name: '早餐', icon: '🌅', bgColor: '#FFE5E5' },
	{ type: 2, name: '午餐', icon: '🍔', bgColor: '#E5F3FF' },
	{ type: 3, name: '晚餐', icon: '🍜', bgColor: '#FFF5E5' },
	{ type: 4, name: '加餐', icon: '🍎', bgColor: '#E5FFE5' },
	{ type: 5, name: '运动', icon: '🏃', bgColor: '#F0E5FF' }
];

// 餐次类型
const mealTypes = [
	{ type: 1, name: '早餐', icon: '🌅' },
	{ type: 2, name: '午餐', icon: '☀️' },
	{ type: 3, name: '晚餐', icon: '🌙' },
	{ type: 4, name: '加餐', icon: '🍎' }
];

// 计算体重变化
const weightChange = computed(() => {
	return currentWeight.value - initialWeight.value;
});

// 计算卡路里超出/剩余
const calorieExceed = computed(() => {
	return todayCalorieIntake.value - calorieTarget.value;
});

// 获取某餐的卡路里
const getMealCalorie = (mealType) => {
	const mealRecords = todayFoodRecords.value.filter(item => item.meal_type === mealType);
	return mealRecords.reduce((sum, item) => sum + (item.calorie || 0), 0);
};

// 获取某餐的食物列表
const getMealFoods = (mealType) => {
	return todayFoodRecords.value.filter(item => item.meal_type === mealType);
};

// 获取今日饮食记录
const getTodayFoodRecords = async () => {
	try {
		const res = await db.collection('food_record')
			.where({
				date: todayDate.value
			})
			.orderBy('createTime desc')
			.get();

		if (res.result.errCode === 0) {
			todayFoodRecords.value = res.result.data;
			todayCalorieIntake.value = res.result.data.reduce((sum, item) => sum + (item.calorie || 0), 0);
		}
	} catch (error) {
		console.error('获取饮食记录失败', error);
	}
};

// 获取体重记录
const getWeightRecords = async () => {
	try {
		const res = await db.collection('weight_record')
			.orderBy('date desc')
			.limit(10)
			.get();

		if (res.result.errCode === 0) {
			weightRecords.value = res.result.data;
			if (res.result.data.length > 0) {
				currentWeight.value = res.result.data[0].weight;
			}
		}
	} catch (error) {
		console.error('获取体重记录失败', error);
	}
};

// 添加记录
const addRecord = (type) => {
	if (type === 5) {
		// 运动
		uni.showToast({
			title: '运动功能开发中',
			icon: 'none'
		});
	} else {
		// 饮食
		addFood(type);
	}
};

// 添加食物
const addFood = (mealType) => {
	uni.navigateTo({
		url: `/pages/food_category/list?mealType=${mealType}&date=${todayDate.value}`
	});
};

// 搜索食物
const searchFood = () => {
	uni.navigateTo({
		url: `/pages/food_category/list?date=${todayDate.value}`
	});
};

// 添加体重
const addWeight = () => {
	uni.showModal({
		title: '记录体重',
		editable: true,
		placeholderText: '请输入体重（公斤）',
		success: async (res) => {
			if (res.confirm && res.content) {
				const weight = parseFloat(res.content);
				if (isNaN(weight) || weight <= 0) {
					uni.showToast({
						title: '请输入有效的体重',
						icon: 'none'
					});
					return;
				}

				// 计算BMI（需要身高，这里假设为170cm）
				const height = 170 / 100; // 转换为米
				const bmi = weight / (height * height);

				try {
					await db.collection('weight_record').add({
						weight: weight,
						bmi: bmi,
						date: todayDate.value
					});

					uni.showToast({
						title: '记录成功',
						icon: 'success'
					});

					getWeightRecords();
				} catch (error) {
					console.error('记录体重失败', error);
					uni.showToast({
						title: '记录失败',
						icon: 'none'
					});
				}
			}
		}
	});
};

// 查看方案
const viewPlan = () => {
	uni.showToast({
		title: '方案功能开发中',
		icon: 'none'
	});
};

onLoad((options) => {
	if (options.mealType) {
		addFood(parseInt(options.mealType));
	}
});

onMounted(() => {
	getTodayFoodRecords();
	getWeightRecords();
});
</script>

<style lang="scss" scoped></style>
