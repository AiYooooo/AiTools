<template>
	<div class="excel">
        <div class="excel-con">
            <h2>依赖</h2>
            <pre>npm install xlsx --save</pre>
        </div>
        <div class="excel-top">
            <el-upload
                class="upload-demo"
                accept=".xls,.xlsx"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="upLoad"
                :show-file-list="false"
                :auto-upload="false"
                >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text" v-if="!name">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__text" v-else>文件上传成功</div>
            </el-upload>
            <div class="excel-info" v-if="name">
                <h2>{{name}}</h2>
                <span>上传文件尺寸：{{size}}</span>
                <span>最后修改时间：{{time}}</span>
            </div>
        </div>
		<div class="excel-bottom" v-if="sheets.length">
            <el-tabs v-model="sheetchosen" @tab-click="handleTab">
                <el-tab-pane
                    v-for="(value, index) in sheets"
                    :key="index" :label="value" :name="''+index">
                    <el-table
                        :data="tableData"
                        style="width: 100%">
                        <el-table-column
                            v-for="(key, index) in keys" :key="index"
                            :prop="key"
                            :label="key">
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
        </div>
	</div>
</template>

<script>
    import XLSX from 'xlsx'
    import moment from 'moment'
	export default {
		name: 'Excel',
		data: function(){
			return {
                name: '',
                size: '',
                time: '',
                workbook: null,
                sheets: [],
                sheetchosen: 0,
                keys: [],
                tableData: []
            }
		},
		methods: {
			upLoad(file){
                this.getFileInfo(file.raw);
                let files = {0:file.raw};
                this.readExcel(files);
            },
            readExcel(files){
                if(files.length <= 0){
                    return false
                }else if(!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())){
                    this.$message.error('上传格式不正确，请上传xls或xlsx格式');
                    return;
                }
                
                var fileReader = new FileReader();
                fileReader.onload = (ev) => {
                    try {
                        var data = ev.target.result;
                        this.workbook = XLSX.read(data, {
                            type: 'binary'
                        });
                        this.sheets = [...this.workbook.SheetNames];
                        this.handleTab({label: this.sheets[0]});
                    } catch (e) {
                        return false;
                    }
                }
                fileReader.readAsBinaryString(files[0]);
            },
            handleTab(tab){
                let ws = XLSX.utils.sheet_to_json(this.workbook.Sheets[tab.label]);
                this.keys = [];
                for(let key in ws[0]){
                    this.keys.push(key);
                }
                this.tableData = [...ws];
            },
            getFileInfo(data) {
                this.name = data.name;
                let size = ( data.size / 1024).toFixed(2);
                let string = 'KB';
                if(size >= 1024){
                    size = ( size / 1024).toFixed(2);
                    string = 'MB';
                }
                this.size = '' + size + string;
                this.time = moment(data.lastModified).format("YYYY/MM/DD hh:mm:ss");
            }
		}
	}
</script>

<style scoped lang="scss">
	.excel {
		width: 100%;
		height: auto;

        .excel-con {
            width: 100%;
            height: auto;
            background-color: #fff;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            margin-bottom: 32px;

            h2 {
                padding-left: 20px;
                border-left: 5px solid #87CEFA;
                font-size: 20px;
                margin-bottom: 20px;
            }
            pre {
                width: 100%;
                height: auto;
                padding: 20px;
                background-color: #f5f5f5;
                border-radius: 10px;
                font-size: 18px;
                font-weight: bold;
            }
        }
        .excel-top {
            width: 100%;
            height: 220px;
            background-color: #fff;
            padding: 20px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;

            .excel-info {
                height: 100%;
                margin-left: 40px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;

                h2 {
                    padding-left: 20px;
                    border-left: 5px solid #87CEFA;
                    font-size: 20px;
                    margin-bottom: 20px;
                }
                span {
                    padding-left: 25px;
                    font-size: 16px;
                    line-height: 30px;
                }
            }
        }
        .excel-bottom {
            width: 100%;
            height: auto;
            padding: 20px;
            margin-top: 20px;
            background-color: #fff;
        }
	}
</style>
