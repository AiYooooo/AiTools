<template>
	<div class="color">
		<div class="color-top">
            <div class="color-chose">
                <h2>RGB转16进制色值</h2>
                <div class="result-con">
                    <div>
                        <el-input v-model="red" style="width: 80px; margin-right: 10px;" placeholder="R"></el-input>
                        <el-input v-model="green" style="width: 80px; margin-right: 10px;" placeholder="G"></el-input>
                        <el-input v-model="blue" style="width: 80px; margin-right: 10px;" placeholder="B"></el-input>
                    </div>
                    <el-button type="primary" @click="dataRGBto16">转换</el-button>
                </div>
                <div class="result-con" v-if="result16">
                    <div><span :style="{backgroundColor: result16}"></span>{{result16}}</div>
                    <el-button type="default" v-clipboard:copy="result16" v-clipboard:success="onCopy">复制</el-button>
                </div>
                <div class="result-con" v-if="!result16">
                    <div>等待转换</div>
                </div>
            </div>
            <div class="color-chose">
                <h2>16进制转RGB色值</h2>
                <div class="result-con">
                    <div>
                        <el-input v-model="color16" style="width: 260px; margin-right: 10px;" placeholder="#RRGGBB"></el-input>
                    </div>
                    <el-button type="primary" @click="data16toRGB">转换</el-button>
                </div>
                <div class="result-con" v-if="resultRGB">
                    <div><span :style="{backgroundColor: resultRGB}"></span>{{resultRGB}}</div>
                    <el-button type="default" v-clipboard:copy="resultRGB" v-clipboard:success="onCopy">复制</el-button>
                </div>
                <div class="result-con" v-if="!resultRGB">
                    <div>等待转换</div>
                </div>
            </div>
            <div class="color-chose">
                <h2>自定义色值</h2>
                <div class="chose-con">
                    <div>
                        <span><el-color-picker v-model="chosen16" @change="chosenChange"></el-color-picker></span>
                        {{chosen16 || '16进制颜色值'}}
                    </div>
                    <el-button v-if="chosen16" type="default" v-clipboard:copy="chosen16" v-clipboard:success="onCopy">复制</el-button>
                </div>
                <div class="chose-con">
                    <div>
                        <span></span>
                        {{chosenRGB || 'RGBa颜色值'}}
                    </div>
                    <el-button v-if="chosenRGB" type="default" v-clipboard:copy="chosenRGB" v-clipboard:success="onCopy">复制</el-button>
                </div>
            </div>
        </div>
        <div class="color-bottom">
            <h2>常用颜色表</h2>
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    label="颜色"
                    width="160px">
                    <template slot-scope="scope">
                        <span :style="{backgroundColor: scope.row.data16, width: '60px', height: '20px', display: 'flex'}"></span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="enname"
                    label="英文代码"
                    width="360px">
                </el-table-column>
                <el-table-column
                    prop="cnname"
                    label="中文描述"
                    width="360px">
                </el-table-column>
                <el-table-column
                    prop="data16"
                    label="16进制"
                    width="220px">
                </el-table-column>
                <el-table-column
                    prop="dataRGBa"
                    label="RGBa格式"
                    width="220px">
                </el-table-column>
            </el-table>
        </div>
	</div>
</template>

<script>
    import datacolor from './colordata.js';
	export default {
        name: 'Color',
        data: function(){
            return {
                red: '',
                green: '',
                blue: '',
                result16: '',

                color16: '',
                resultRGB: '',

                chosen16: '',
                chosenRGB: '',

                tableData: []
            }
        },
		props: {
			
		},
		methods: {
			dataRGBto16() {
                if(!this.red || !this.green || !this.blue){
                    this.$message.error('数据不全');
                    return;
                }
                if(this.red>255 || this.green>255 || this.blue>255){
                    this.$message.error('数据超限');
                    return;
                }
                this.result16 = '#'+this.dataFormatter(this.red)+this.dataFormatter(this.green)+this.dataFormatter(this.blue)
            },
            dataFormatter(num) {
                var numnew = parseInt(num).toString(16);
                return numnew.length == '2' ? numnew : '0'+numnew
            },
            onCopy() {
                this.$message.success('复制成功');
            },
            data16toRGB() {
                if(!this.color16){
                    this.$message.error('数据不全');
                    return;
                }
                let color = this.color16.replace('#','');
                if(color.length!=6){
                    this.$message.error('数据格式错误');
                    return;
                }
                this.resultRGB = 'rgba('+parseInt(color.substr(0,2),16)+','+parseInt(color.substr(2,2),16)+','+parseInt(color.substr(4,2),16)+',1)';
            },
            chosenChange(colorchosen) {
                let color = colorchosen.replace('#','');
                this.chosenRGB = 'rgba('+parseInt(color.substr(0,2),16)+','+parseInt(color.substr(2,2),16)+','+parseInt(color.substr(4,2),16)+',1)';
            }
        },
        mounted() {
            this.tableData = [...datacolor];
        }
	}
</script>

<style scoped lang="scss">
	.color {
		width: 100%;
		height: auto;

        .color-top {
            width: 100%;
            height: 200px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 32px;

            .color-chose {
                width: 31%;
                height: 100%;
                background-color: #fff;
                padding: 0 20px;

                h2 {
                    padding-left: 20px;
                    border-left: 5px solid #87CEFA;
                    font-size: 20px;
                    margin: 25px 0;
                }
                .result-con {
                    display: flex;
                    justify-content: space-between;
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
                .chose-con {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;

                    div {
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;

                        span {
                            width: 80px;
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                        }
                    }
                }
            }
        }
        .color-bottom {
            width: 100%;
            height: auto;
            padding: 25px 20px 20px;
            background-color: #fff;

            h2 {
                padding-left: 20px;
                border-left: 5px solid #87CEFA;
                font-size: 20px;
                margin-bottom: 25px;
            }
        }
	}
</style>
