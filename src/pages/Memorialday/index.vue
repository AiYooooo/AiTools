<template>
	<div class="home">
		<div class="item" v-for="(item, index) in days" :key="index">
			<img :src="item.icon" />
			<h3>{{item.name}}</h3>
            <h4>{{item.time}}</h4>
			<small>距第<strong>{{item.count}}</strong>次纪念还有</small>
            <p><span>{{item.day}}</span>天 <span>{{item.hour}}:{{item.minute}}:{{item.second}}</span></p>
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
                    count: 0,
                    lunar: false,
                    day: 0, hour: 0, minute: 0, second: 0
                },{
                    icon: require("../../assets/others/wedding.png"),
                    name: '结婚纪念日',
                    time: '2020-08-30',
                    count: 0,
                    lunar: false,
                    day: 0, hour: 0, minute: 0, second: 0
                },{
                    icon: require("../../assets/others/birthday.png"),
                    name: '艾宝生日',
                    time: '1992-06-17',
                    count: 0,
                    lunar: false,
                    day: 0, hour: 0, minute: 0, second: 0
                },{
                    icon: require("../../assets/others/birthday.png"),
                    name: '华宝生日',
                    time: '1991-11-06',
                    count: 0,
                    lunar: true,
                    day: 0, hour: 0, minute: 0, second: 0
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
                    item.hour = this.double(parseInt(lasttime % (24*60*60000) / (60*60000)));
                    item.minute = this.double(parseInt(lasttime % (60*60000) / 60000));
                    item.second = this.double(parseInt(lasttime % 60000 / 1000));
                })
            },
            double(num) {
                return num > 9 ? num : '0'+num;
            }
		},
		mounted() {
            let now = new Date().getTime();
			this.days.map(item => {
                let day = new Date(item.time).getTime();
                item.count = parseInt((now - day) / (365*24*60*60000)) + 1;
            })
            this.refreshTime();
            setInterval(this.refreshTime, 1000);
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
                }
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
