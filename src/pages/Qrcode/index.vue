<template>
	<div class="qrcode">
        <div class="qrcode-in">
            <h2>输入信息生成二维码</h2>
            <div class="result-con">
                <div>
                    <el-input v-model="text" style="width: 500px;margin-right: 30px;" placeholder="等待输入"></el-input>
                </div>
                <el-button type="primary" @click="makeQrCode">生成</el-button>
            </div>
        </div>
        <div class="qrcode-in" v-show="qrcode">
            <h2>生成结果</h2>
            <div class="result-con qrcode-con">
                <div ref="qrCode"></div>
                <el-button type="default" @click="downQrCode">下载</el-button>
            </div>
        </div>
	</div>
</template>

<script>
    import QRCode from 'qrcodejs2'
	export default {
        name: 'Qrcode',
        data: function(){
            return {
                text: '',
                qrcode: null,
            }
        },
		props: {
			
		},
		methods: {
			makeQrCode() {
                if(!this.text){
                    this.$message.error('数据不全');
                    return;
                }
                if(this.$refs.qrCode.childNodes.length){
                    for(let i=this.$refs.qrCode.childNodes.length-1; i>=0; i--){
                        this.$refs.qrCode.removeChild(this.$refs.qrCode.childNodes[i]);
                    }
                }
                this.qrcode = new QRCode(this.$refs.qrCode, {
                    text: this.text,
                    width: 180,
                    height: 180,
                    colorDark: '#000000',
                    colorLight: '#ffffff',
                    correctLevel: QRCode.CorrectLevel.H
                })
            },
            downQrCode() {
                var alink = document.createElement("a");
                alink.href = this.$refs.qrCode.childNodes[1].src;
                alink.download = "qrcode";
                alink.click();
            }
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
            .qrcode-con {
                align-items: flex-end;

                div {
                    width: 200px;
                    height: 200px;
                    margin-right: 20px;
                    padding: 10px;
                    background-color: #f5f5f5;
                }
            }
        }
    }
</style>
