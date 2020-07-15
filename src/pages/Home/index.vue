<template>
	<div class="home">
		<div class="item" @click="gotoPage('color')">
			<img src="@/assets/image/icon-color.png" />
			<h3>颜色转换工具</h3>
			<small>用来进行RGB颜色和16进制颜色的转换。</small>
		</div>
		<div class="item" @click="gotoPage('excel')">
			<img src="@/assets/image/icon-excel.png" />
			<h3>Excel解析工具</h3>
			<small>用来进行Excel文档的解析。</small>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		props: {
			
		},
		methods: {
			gotoPage(name) {
				this.$router.push({name: name});
			}
		}
	}
</script>

<style scoped lang="scss">
	.home {
		width: 100%;
		height: auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: flex-start;

		.item {
			width: 210px;
			height: 280px;
			background-color: #fff;
			cursor: pointer;
			margin: 0 30px 30px 0;
			border-radius: 2px;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			transition: all .3s;
			padding-top: 50px;

			img {
				width: 70px;
				margin-bottom: 25px;
			}
			h3 {
				margin-bottom: 20px;
			}
			small {
				width: 80%;
				text-align: center;
			}
		}
		.item:hover {
			transform: translateY(-5px);
		}
	}
</style>
