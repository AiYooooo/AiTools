<template>
	<div class="cropper">
        <div class="canvas-wrap">
            <canvas id="cropper" ref="canvas"></canvas>
        </div>
        <div class="right-con">
            <div class="img-wrap" v-if="imgsrc">
                <div class="square" :style="{backgroundImage: 'url('+imgsrc+')'}"></div>
                <div class="circle" :style="{backgroundImage: 'url('+imgsrc+')'}"></div>
            </div>
            <div class="btn-wrap">
                <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    accept=".jpg,.jpeg,.png"
                    :on-change="upLoad"
                    :show-file-list="false"
                    :auto-upload="false">
                    <el-button type="primary">上传图片</el-button>
                </el-upload>
                <el-button type="default" v-if="imgsrc" style="margin-left: 20px" @click="downImage">下载截图</el-button>
            </div>
        </div>
	</div>
</template>

<script>
    import Cropper from 'cropperjs'
    import 'cropperjs/dist/cropper.min.css'
	export default {
		name: 'Cropper',
		data: function(){
			return {
                imgsrc: '',
            }
        },
        mounted() {
            this.drawImg();
        },
		methods: {
			drawImg (href) {
                var _self = this;
                this.$nextTick(() => {
                    let canvas = document.getElementById('cropper')
                    if (canvas) {
                        canvas.width = 400
                        canvas.height = 400
                        let ctx = canvas.getContext('2d')
                        ctx.clearRect(0, 0, canvas.width, canvas.height)
                        let img = new Image()
                        img.crossOrigin = 'Anonymous'
                        img.src = href || require('../../assets/pos.png')
                        let xdis = 0;
                        let ydis = 0;
                        let w = 400;
                        let h = 400;
                        img.onload = function () {
                            if(img.width/img.height >= 1){
                                h = img.height / (img.width / 400);
                                ydis = (400 - h) / 2;
                            }else{
                                w = img.width / (img.height / 400);
                                xdis = (400 - w) / 2;
                            }
                            ctx.drawImage(img, xdis, ydis, w, h)
                            if(href) {
                                _self.initCropper()
                            }
                        }
                    }
                })
            },
            upLoad(file){
                this.readImage({0:file.raw});
            },
            readImage(files){
                if(files.length <= 0){
                    return false
                }else if(!/\.(jpg|jpeg|png)$/.test(files[0].name.toLowerCase())){
                    this.$message.error('上传格式不正确，请上传jpg、jpeg或png格式');
                    return;
                }
                
                var fileReader = new FileReader();
                fileReader.onload = () => {
                    try {
                        this.drawImg(fileReader.result);
                    } catch (e) {
                        return false;
                    }
                }
                fileReader.readAsDataURL(files[0]);
            },
            initCropper() {
                let _self = this;
                let cropper = new Cropper(this.$refs.canvas, {
                    checkCrossOrigin: false,
                    viewMode: 2,
                    highlight: false,
                    background: false,
                    zoomable: false,
                    scalable: false,
                    autoCropArea: 0.4,
                    aspectRatio: 1,
                    crop() {
                        _self.sureCropper()
                    }
                })
                this.cropper = cropper
            },
            sureCropper () {
                // let _self = this;
                // this.cropper.getCroppedCanvas().toBlob(function (blob) {
                //     const href = window.URL.createObjectURL(blob)
                //     _self.imgsrc = href;
                // }, 'image/jpeg');
                this.imgsrc = this.cropper.getCroppedCanvas({
                    imageSmoothingQuality: 'high'
                }).toDataURL('image/jpeg')
            },
            downImage() {
                var alink = document.createElement("a");
                alink.href = this.imgsrc;
                alink.download = "截图";
                alink.click();
            }
		}
	}
</script>

<style scoped lang="scss">
	.cropper {
		width: 100%;
		height: 400px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        .canvas-wrap {
            width: 400px;
            height: 400px;

            canvas {
                width: 100%;
                height: 100%;
            }
        }
        .right-con {
            width: calc(100% - 440px);
            height: 100%;

            .btn-wrap {
                width: 100%;
                height: 100px;
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
            }
            .img-wrap {
                width: 100%;
                height: 240px;
                margin-bottom: 30px;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                div {
                    width: 240px;
                    height: 240px;
                    overflow: hidden;
                    background-size: cover;
                }
                .circle {
                    border-radius: 120px;
                    margin-left: 30px;
                }
            }
        }
	}
</style>
