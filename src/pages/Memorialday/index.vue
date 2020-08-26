<template>
	<div class="home">
		<div class="item" v-for="(item, index) in days" :key="index">
			<img :src="item.icon" />
			<h3>{{item.name}}</h3>
            <h4>{{item.time}}</h4>
			<small>距第<strong>{{item.count}}</strong>次纪念还有</small>
            <p><span>{{item.day}}</span>天</p>
            <div class="tag" v-if="item.lunar">农历</div>
		</div>
	</div>
</template>

<script>
    import Lunar from './lunar.js'
	export default {
		name: 'Home',
		data: function(){
			return {
				days: [{
                    icon: require("../../assets/others/married.png"),
                    name: '领证纪念日',
                    time: '2019-07-29',
                    lunar: false,
                    count: 0, day: 0
                },{
                    icon: require("../../assets/others/wedding.png"),
                    name: '结婚纪念日',
                    time: '2020-08-30',
                    lunar: false,
                    count: 0, day: 0
                },{
                    icon: require("../../assets/others/birthday.png"),
                    name: '艾艾生日',
                    time: '1992-06-17',
                    lunar: false,
                    count: 0, day: 0
                },{
                    icon: require("../../assets/others/birthday.png"),
                    name: '华华生日',
                    time: '1991-11-06',
                    lunar: true,
                    count: 0, day: 0
                },{
                    icon: require("../../assets/others/country.png"),
                    name: '国庆',
                    time: '1992-10-01',
                    lunar: false,
                    count: 0, day: 0
                },{
                    icon: require("../../assets/others/newyear.png"),
                    name: '新年',
                    time: '1992-01-01',
                    lunar: true,
                    count: 0, day: 0
                }]
			}
		},
		methods: {
			refreshTime() {
                let now = new Date().getTime();
                this.days.map(item => {
                    let time = 0;
                    let newtime = item.time;
                    
                    for(let i= new Date().getFullYear();; i++){
                        if(item.lunar){
                            if(new Date(Lunar.toSolar(i+newtime.substr(4))) > now){
                                time = new Date(Lunar.toSolar(i+newtime.substr(4)));
                                break;
                            }
                        }else{
                            if(new Date(i+newtime.substr(4)) > now){
                                time = new Date(i+newtime.substr(4));
                                break;
                            }
                        }
                    }
                    let lasttime = time - now;
                    item.day = parseInt(lasttime / (24*60*60000));
                    // item.hour = this.double(parseInt(lasttime % (24*60*60000) / (60*60000)));
                    // item.minute = this.double(parseInt(lasttime % (60*60000) / 60000));
                    // item.second = this.double(parseInt(lasttime % 60000 / 1000));
                })
            },
            // double(num) {
            //     return num > 9 ? num : '0'+num;
            // }
		},
		mounted() {
            let now = new Date().getTime();
			this.days.map(item => {
                let day = new Date(item.time).getTime();
                item.count = parseInt((now - day) / (365*24*60*60000)) + 1;
            })
            this.refreshTime();
            // setInterval(this.refreshTime, 1000);
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
			padding-top: 30px;
            position: relative;
            overflow: hidden;

			img {
				height: 50px;
				margin-bottom: 20px;
			}
			h4 {
                font-size: 14px;
				margin: 5px auto 20px;
			}
			small {
				width: 80%;
				text-align: center;

                strong {
                    color: crimson;
                    margin: 0 5px;
                }
			}
            p {
                margin: 20px 0 0;
                font-weight: bold;
                font-size: 20px;

                span {
                    color: crimson;
                    font-size: 30px;
                    margin-right: 10px;
                }
            }
            .tag {
                width: 100px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #FFE4B5;
                color: #fff;
                font-size: 16px;
                position: absolute;
                transform: rotate(45deg);
                top: 0px;
                right: -30px;
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
