<template>
	<div class="recommend">
		<div class="recommend-content">
			<div v-if="recommends.length" class="slider-wrapper">
				<slider>
					<div v-for="item in recommends">
						<a :href="item.linkUrl">
							<img :src="item.picUrl">
						</a>
					</div>
				</slider>
			</div>
		</div>
		<div class="recommend">
			<h1 class="listo-title">热门歌单推荐</h1>
		</div>
	</div>
</template>
<style lang="scss" scoped="">
	
</style>
<script type="text/javascript">
import Slider from "base/slider/slider"
import {getRecommend} from "../assets/recomment.js"
import {ERR_OK} from "../assets/config.js"
	export default{
		data(){
			return {
				recommends:[]
			}
		},
		created() {
			this._getRecommend()
		},
		methods: {
			_getRecommend() {
				getRecommend().then((res) => {
					if(res.code === ERR_OK){
						this.recommends = res.data.slider
					}
				})
			}
		},
		components:{
			Slider
		}
	}
</script>