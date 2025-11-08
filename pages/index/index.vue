<template>
  <view class="bg-[#f5f5f5] min-h-screen">
    <view class="custom-nav">
      <common-nav-bar>
      </common-nav-bar>
    </view>
    <!-- section1 -->
    <view class="px-4 ">
      <!-- 搜索栏 -->
      <view class="bg-white rounded-full mb-4 shadow-sm ">
        <view class="flex items-center bg-gray-50 rounded-full px-4 py-[10px]  border-[#67d967]" @click="searchFood">
          <uni-icons type="search" size="18" color="#999"></uni-icons>
          <text class="text-sm text-gray-400 ml-2">搜索食物热量和营养</text>
          <view class="ml-auto">
            <uni-icons type="scan" size="18" color="#999"></uni-icons>
          </view>
        </view>
      </view>
      <!-- section2 -->
      <!-- 功能网格 -->
      <view class="bg-white rounded-2xl p-4 mb-4 shadow-sm">
        <feature-grid :list="gridList"></feature-grid>
      </view>
      <!-- section3 -->
      <!-- 每日一答和话题PK -->
      <view class="bg-white rounded-2xl p-4 mb-4 shadow-sm">
        <view class="flex items-center justify-between mb-4" @click="goToDailyQuestion">
          <view class="flex items-center gap-3 flex-1">
            <view class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center overflow-hidden">
              <image class="w-[80%] h-[80%]" src="/static/images/layout/s2Questions.png" mode="aspectFit"></image>
            </view>
            <view class="flex-1">
              <text class="text-sm font-medium block mb-1">每日一答</text>
              <text class="text-xs text-gray-400">{{ dailyQuestion }}</text>
            </view>
          </view>
          <uni-icons type="right" size="16" color="#999"></uni-icons>
        </view>

        <view class="flex items-center justify-between pt-4 border-t border-gray-100" @click="goToTopicPk">
          <view class="flex items-center gap-3 flex-1">
            <view class="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
              <text class="text-red-500 text-sm font-bold">PK</text>
            </view>
            <view class="flex-1">
              <text class="text-sm font-medium block mb-1">话题PK</text>
              <text class="text-xs text-gray-400">你站哪一边</text>
            </view>
          </view>
          <uni-icons type="right" size="16" color="#999"></uni-icons>
        </view>
      </view>
      <!-- section4 -->
      <!-- 减肥问答 -->
      <view class="bg-white rounded-2xl p-4 mb-4 shadow-sm">
        <view class="flex items-center justify-between mb-3">
          <view>
            <text class="text-base font-semibold block">减肥问答</text>
            <text class="text-xs text-gray-400 mt-1">解答你的减肥困扰</text>
          </view>
          <text class="text-xs text-green-500">更多</text>
        </view>
        <view class="space-y-2">
          <view v-for="(item, index) in qaList" :key="index" class="flex items-center gap-3 py-2"
            @click="goToQADetail(item)">
            <image v-if="item.img" :src="item.img" class="w-16 h-16 rounded-lg"></image>
            <view v-else class="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center">
              <text class="text-gray-400 text-xs">图片</text>
            </view>
            <view class="flex-1">
              <text class="text-sm text-gray-700">{{ item.question }}</text>
            </view>
            <uni-icons type="right" size="14" color="#999"></uni-icons>
          </view>
        </view>
      </view>

      <!-- 精选食谱 -->
      <view class="bg-white rounded-2xl p-4 shadow-sm">
        <view class="flex items-center justify-between mb-3">
          <view>
            <text class="text-base font-semibold block">精选食谱</text>
            <text class="text-xs text-gray-400 mt-1">健康轻卡片 每天不重样</text>
          </view>
          <text class="text-xs text-green-500">更多</text>
        </view>
        <view class="space-y-2">
          <view v-for="(item, index) in recipeList" :key="index" class="flex items-center gap-3 py-2"
            @click="goToRecipeDetail(item)">
            <image v-if="item.img" :src="item.img" class="w-16 h-16 rounded-lg"></image>
            <view v-else class="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center">
              <text class="text-gray-400 text-xs">图片</text>
            </view>
            <view class="flex-1">
              <text class="text-sm text-gray-700">{{ item.title }}</text>
              <text v-if="item.calorie" class="text-xs text-gray-400 block mt-1">{{ item.calorie }}大卡</text>
            </view>
            <uni-icons type="right" size="14" color="#999"></uni-icons>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted } from "vue";

// 每日一答问题
const dailyQuestion = ref('100大卡等于几个泡芙?');

// 减肥问答列表
const qaList = ref([
  { question: '为什么减肥会脱发?', img: '' },
  { question: '弹性素食减肥效果好吗?', img: '' },
  { question: '减1kg需要消耗多少热量?', img: '' }
]);

// 精选食谱列表
const recipeList = ref([
  { title: '不开火快手食谱:鲜菇鸡胸肉...', calorie: '300大卡', img: '' },
  { title: '500大卡肥牛菌菇麻辣烫', calorie: '500大卡', img: '' },
  { title: '低卡又控糖,多肉柠香菠菠苏打', calorie: '150大卡', img: '' }
]);

// 功能网格 - 图标路径由用户自己填充
const gridList = [
  {
    path: "/pages/cookbookRecom/cookbookRecom",
    img: "/static/images/layout/s3Grid-canteenRank.svg", // 推荐食谱 
    text: "推荐食谱",
  },
  {
    path: "/pages/cookbookRecom/cookbookRecom",
    img: "/static/images/layout/s3Grid-foodRank.svg", // 食物排行
    text: "食物排行",
  },
  {
    img: "/static/images/layout/s3Grid-redBlack.svg", // 红黑榜 
    text: "红黑榜",
  },
  // {
  //   img: "", // 查奶茶 - 用户自己填充图标
  //   text: "查奶茶",
  // },

  {
    path: "/pages/food_category/list",
    img: "/static/images/layout/s3Grid-menuList.svg", // 食物分类
    text: "食物分类",
  },

  // {
  //   img: "", // 食物估重 - 用户自己填充图标
  //   text: "食物估重",
  // },
  {
    img: "/static/images/layout/s3Grid-BMI.svg", // 体重测试 
    text: "体重测试",
  },

];

// 搜索食物
const searchFood = () => {
  uni.navigateTo({
    url: '/pages/food_category/list'
  });
};

// 每日一答
const goToDailyQuestion = () => {
  uni.navigateTo({
    url: '/pages/dailyQuestion/dailyQuestion'
  });
};

// 话题PK
const goToTopicPk = () => {
  uni.navigateTo({
    url: '/pages/topicPk/topicPk'
  });
};

// 问答详情
const goToQADetail = (item) => {
  uni.showToast({
    title: '问答详情开发中',
    icon: 'none'
  });
};

// 食谱详情
const goToRecipeDetail = (item) => {
  uni.showToast({
    title: '食谱详情开发中',
    icon: 'none'
  });
};

onMounted(() => {
  // 可以在这里加载数据
});
</script>

<style lang="scss" scoped></style>
