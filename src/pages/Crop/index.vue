<template>
	<div class="crop">
        <div class="crop-item">
            <h2>依赖</h2>
            <pre>npm install cropperjs --save</pre>
        </div>
        <div class="crop-item">
            <h2>基于cropperjs实现</h2>
            <cropperWrap></cropperWrap>
        </div>
	</div>
</template>

<script>
    import cropperWrap from './cropper.vue';
	export default {
        name: 'Crop',
        components: {
            cropperWrap
        },
		data: function(){
			return {
                
            }
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.crop {
		width: 100%;
		height: auto;

        .crop-item {
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
	}
</style>
