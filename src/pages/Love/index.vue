<template>
	<div class="love" v-loading.fullscreen.lock="fullscreenLoading">
		<div class="love-wrap">
            <h2 @click="getText">点我刷新吧</h2>
            <pre>{{text}}</pre>
        </div>
        <div class="love-wrap">
            <h2>数据来源</h2>
            <pre>https://api.66mz8.com/document/sweet.php</pre>
        </div>
	</div>
</template>

<script>
    import axios from 'axios'
	export default {
		name: 'Love',
		data: function(){
			return {
                fullscreenLoading: false,
                text: 'loading'
			}
		},
		methods: {
			getText() {
                var _self = this;
                this.fullscreenLoading = true;
                axios.get('https://api.66mz8.com/api/sweet.php?format=json')
                    .then(function (response) {
                        _self.text = response.data.sweet;
                        _self.fullscreenLoading = false;
                    })
                    .catch(function () {
                        _self.fullscreenLoading = false;
                    });
            }
		},
		mounted() {
			this.getText();
		}
	}
</script>

<style scoped lang="scss">
	.love {
		width: 100%;
		height: auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: flex-start;

		.love-wrap {
            width: 100%;
            height: auto;
            background-color: #fff;
            padding: 0 20px;
            margin-bottom: 32px;

            h2 {
                padding-left: 20px;
                border-left: 5px solid #87CEFA;
                font-size: 20px;
                margin: 25px 0;
                cursor: pointer;
            }
            pre {
                width: 100%;
                height: auto;
                padding: 20px;
                background-color: #f5f5f5;
                border-radius: 10px;
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
        }
	}
</style>
