<template>
	<div class="qrcode">
        <div class="qrcode-in">
            <h2>依赖</h2>
            <pre>npm install js-md5 --save</pre>
        </div>
        <div class="qrcode-in">
            <h2>输入要加密的信息</h2>
            <div class="result-con">
                <div>
                    <el-input v-model="text" style="width: 500px;margin-right: 30px;" placeholder="等待输入"></el-input>
                </div>
                <el-button type="primary" @click="doMD5">生成</el-button>
            </div>
        </div>
        <div class="qrcode-in" v-show="result">
            <h2>生成结果</h2>
            <div class="result-con">
                {{result}}
            </div>
        </div>
	</div>
</template>

<script>
    import md5 from 'js-md5'
	export default {
        name: 'Qrcode',
        data: function(){
            return {
                text: '',
                result: '',
            }
        },
		props: {
			
		},
		methods: {
			doMD5() {
                if(!this.text){
                    this.$message.error('数据不全');
                    return;
                }
                
                this.result = md5(this.text).toUpperCase();
            },
        }
	}
</script>

<style scoped lang="scss">
	.qrcode {
		width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        .qrcode-in {
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
            .result-con {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin-bottom: 20px;

                div {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;

                    span {
                        width: 80px;
                        height: 35px;
                        margin-right: 20px;
                        display: flex;
                    }
                }
            }
        }
    }
</style>
