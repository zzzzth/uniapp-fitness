<template>
	<view v-if="detail">
		详情页
		<view>姓名{{ detail.name }}</view>
		<view>年龄{{ detail.age }}</view>
		<view>ip:{{ detail.ip }}</view>
		<view>创建时间:{{ dayjs(detail.createTime).format('YYYY-MM-DD HH:mm:ss') }}</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import dayjs from 'dayjs'

const detail = ref()
const db = uniCloud.database()


const getDetail = async (id) => {
	let res = await db.collection('food_category')
		.doc(id) //作用是 一条数据为id的数据
		.get({
			getOne: true //getOne: true 的作用是 获取一条数据
		})
	detail.value = res.result.data
}

onLoad((e) => {
	let { id } = e
	getDetail(id)
})



</script>

<style scoped></style>
