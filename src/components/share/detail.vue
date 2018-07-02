<template>
  <div class="detail">
    <my-header title="商品详情">
    	<span slot="left">
          	<img src="../../assets/img/back.png" @click="backFn">
        </span>   
    </my-header>
    <div class="detailmes">
    	<my-swiper v-bind:swiperImg='[{src:getDetail.src},{src:getDetail.src},{src:getDetail.src},{src:getDetail.src}]'></my-swiper>
		<p>{{getDetail.txt}}</p>
		<p class="money">¥{{getDetail.mon}}<span>包邮</span></p>
		<p>
			<img src="../../assets/img/jijia.png">
			<img src="../../assets/img/gold.png">
			<img src="../../assets/img/fuwu.png">
			<img src="../../assets/img/baoxian.png">
		</p>
    </div> 
    <img src="../../assets/img/hot.jpg" class="img">
    <div class="buy">
    	<button id="want" @click="wantFn(getDetail)">加入购物车</button>
    	<button id="buy" @click="buyFn(getDetail)">立即购买</button>
    </div>
  </div>
</template> 

<script>
import SwiperItem from "../share/swiperItem.vue";
import {mapGetters,mapActions} from "vuex"
import Header from "../share/header.vue";
export default {
  data () {
    return {
    	
    }
  },
  computed:mapGetters({
  		getDetail:'getDetail'//在getters中定义的方法
 	}),
  methods:{
	...mapActions([//展开mapActions
	    "setDetail",//在actions中定义的方法
	    "setShopCar",
	    "setBuyShop"
    	]),
	wantFn:function(getDetail){
		this.setShopCar({getDetail})
		this.$router.push({path:"./shopCar"});
		},
	buyFn:function(getDetail){
		this.setBuyShop({getDetail})
		this.$router.push({path:"./pay1"});
		},
	backFn:function() {
		this.$router.push({path:"./classify"});
		}
	},
  mounted: function (index) {
	    // this.setDetail()//调用方法
	},
	components:{
    "my-header":Header,
    "my-swiper":SwiperItem
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/common/stylus/common.styl'
.detailmes
	overflow hidden
	padding-top pxtorem(100px)
	#swipe
		height pxtorem(600px)
	.money
		color red
		width pxtorem(650px)
		margin-left pxtorem(50px)
		font-size pxtorem(40px)
		margin-top pxtorem(20px)
		margin-bottom pxtorem(20px)
		span
			display inline-block
			width pxtorem(80px)
			height pxtorem(36px)
			background-color red
			color white
			text-align center
			font-size pxtorem(32px)
			margin-left pxtorem(50px)
	p
		width pxtorem(650px)
		margin-left pxtorem(50px)
		font-size pxtorem(40px)
		margin-top pxtorem(20px)
		margin-bottom pxtorem(20px)	
		img
			width pxtorem(50px)
.buy
	position fixed
	bottom 0
	display flex
	width 100%
	button
		flex 1
		border none
		padding 0
		font-size pxtorem(28px)
		color white
		height pxtorem(100px)
	#want
		background-color #FF5722
	#buy
		background-color orange
.img
	float right
	width pxtorem(200px)
	margin-top pxtorem(-100px)
	margin-bottom pxtorem(100px)
	margin-right pxtorem(100px)
		
			

</style>
