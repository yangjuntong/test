<template>
  <div class="pay">
    <my-header title="确认订单">
    	<span slot="left">
          	<img src="../../assets/img/back.png" @click="backFn">
        </span> 
   	</my-header>
   	<div class="adress">
   		<img src="../../assets/img/adress.png">
   		<div>
   			<p>王尼玛&nbsp&nbsp&nbsp先生&nbsp&nbsp&nbsp158****8727</p>
        	<p><span>[默认]</span>北京大兴区亦庄经济开发区BDA国际广场K座</p>
   		</div>
   	</div>
   	<div class="buy">
   		<div>购买商品</div>
   		<div class="div2" v-for="item in getBuyShop">
   			<img v-bind:src="item.src">
   			<div class="div1">
   				<p>{{item.txt}}</p>
   				<span >￥<span class="money">{{item.mon}}</span></span>
   				<strong>x
   				<strong class="many">{{item.many}}</strong></strong>
   			</div>
   		</div>
   		<div class="div3">
   			备注：<input placeholder="请输入">
   		</div>
   		<div class="div4">
   			<strong>合计：￥</strong>
   			<span id="all"></span>
   			<button @click='alertFn'>立即支付</button>
   		</div>

   	</div>
  </div>
</template>

<script>
import Header from "../share/header.vue";
import {mapGetters,mapActions} from "vuex"
import { MessageBox } from 'mint-ui';
export default {
  data () {
    return {
      buyShop:''
    }
  }, 
  components:{
    "my-header":Header
  },
  computed:{
  	...mapGetters({
      getBuyShop:'getBuyShop'
  	}),
	},
  methods:{
  		...mapActions([//展开mapActions
      	"setBuyShop"
      	]),
  		backFn:function() {
			this.$router.push({path:"./shopCar"});
			},
		alertFn:function() {
      		MessageBox('提示', '支付成功');
    		}
		},
  mounted: function(){
  		this.buyShop = this.$store.state.buyShop
  		console.log(this.$store.state.buyShop)
  		var moneys = document.querySelectorAll('.money');
     	var manys = document.querySelectorAll('.many');
     	var all = document.querySelector('#all')
     	var num1,num = 0;
     	for (var i = 0; i < moneys.length; i++){
     		num1 = moneys[i].innerHTML * manys[i].innerHTML
     		num += num1	
     		all.innerHTML = num	
     	}
  }
}
</script>


<style lang='stylus' scoped>
@import '../../assets/common/stylus/common.styl'
.pay
	padding-top pxtorem(100px)
	.adress
		height pxtorem(140px)
		border-bottom 1px solid black
		box-shadow 2px 2px 2px rgba(0, 0, 0, .4)
		img
			vertical-align middle
			margin-top pxtorem(20px)
			margin-left pxtorem(20px)
		div
			display inline-block
			vertical-align middle
			span
				color orange
		div p:nth-child(1)
			font-size pxtorem(32px)
			margin-top pxtorem(28px)
			margin-bottom pxtorem(20px)
	.buy
		margin-top pxtorem(20px)
		border-top 1px solid black
	.buy div:nth-child(1)
		width 92%
		margin-left 4%
		height pxtorem(80px)
		line-height pxtorem(80px)
		font-size pxtorem(32px)
		margin-bottom pxtorem(20px)
	.div2
		width 92%
		margin-left 4%
		border-top 1px solid black
		vertical-align middle
		.div1
			vertical-align middle
			display inline-block
			width 60%
			height pxtorem(200px)
			border none
			margin-top pxtorem(50px)
			p
				margin-top pxtorem(-20px)
				font-size pxtorem(28px)
				margin-bottom pxtorem(30px)
			span
				color red
				font-size pxtorem(32px)
			strong
				float right
				font-size pxtorem(32px)
		img
			width pxtorem(200px)
			vertical-align middle
	.div3 
		height pxtorem(80px)
		line-height pxtorem(80px)
		font-size pxtorem(40px)
		border-top 1px solid black
		padding-bottom pxtorem(100px)
		input
			outline none
	.div4
		position fixed
		left 0 
		bottom 0
		width 100%
		height pxtorem(100px)
		/*background-color rgba(255,193,7,1)*/
		font-size pxtorem(40px)
		line-height pxtorem(100px)
		border-top 1px solid black
		span
			color red
		strong
			margin-left 4%
		button
			float right 
			width 40%
			margin-right 4%
			font-size pxtorem(40px)
			height pxtorem(80px)
			margin-top pxtorem(10px)
			background-color #f44336
			color white
	



</style>
