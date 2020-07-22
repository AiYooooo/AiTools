<template>
	<div class="home" v-loading.fullscreen.lock="fullscreenLoading">
		<div class="item" v-for="(item, index) in menus" :key="index" @click="gotoPage(item.name)">
			<img :src="item.imgsrc" />
			<h3>{{item.meta.title}}</h3>
			<small>{{item.meta.des}}</small>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data: function(){
			return {
				fullscreenLoading: false,
				menus: []
			}
		},
		methods: {
			gotoPage(name) {
				this.fullscreenLoading = true;
				this.$router.push({name: name});
			}
		},
		mounted() {
			this.$router.options.routes.map(item => {
				if(item.meta.type && item.meta.type=='menu'){
					item.imgsrc=require("../../assets/image/icon-"+item.name+".png");
					this.menus.push(item);
				}
			})
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
			margin: 0 20px 20px 0;
			border-radius: 2px;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			transition: all .3s;
			padding-top: 50px;

			img {
				height: 70px;
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
		.item:nth-child(6n) {
			margin-right: 0;
		}
		.item:hover {
			transform: translateY(-5px);
		}
	}
</style>
