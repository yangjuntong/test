<template>
  <div class="order">
    <my-header title="我的订单">
        <span slot="left">
            <img src="../../assets/img/back.png" @click="backFn">
        </span>   
    </my-header>
    <div v-for="(item,index) in $store.state.shopCar" class="shopCar">
          <img v-bind:src="item.getDetail.src" class="big">
          <div>
            <p>{{item.getDetail.txt}}</p>
            <p>￥{{item.getDetail.mon}}</p>
            <strong>总金额:{{item.getDetail.mon*item.getDetail.many}}</strong>
          </div>
          <p ref='num' class="num">x&nbsp{{item.getDetail.many}}</p>
          <button @click="deleteFn(index)">取消订单</button>
      </div>
  </div>
</template>

<script>
import Header from "../share/header.vue"
import {mapGetters,mapActions} from "vuex"
export default {
  data () {
    return {
      
    }
  },
  components:{
    "my-header":Header
  },
  computed:mapGetters({
    getGoodList:'getList'//在getters中定义的方法
  }),
  methods:{
    backFn:function () {
    	this.$router.push({path:"./mypage"});
    },
  deleteFn:function(index) {
      this.$store.state.shopCar.splice(index,1);
  	}
  }
}
</script>


<style lang='stylus' scoped>
@import '../../assets/common/stylus/common.styl'
.order
	padding-top pxtorem(100px)
	.shopCar
		border 1px solid black
		margin-top pxtorem(10px)
		background-color rgba(255,193,7,0.08)
		box-shadow: 2px 2px 2px rgba(0, 0, 0, .4)
		.big
			width 30%
			vertical-align middle
		div
			display inline-block
			width 60%
			vertical-align middle
			margin-top pxtorem(-10px)
			font-size pxtorem(32px)
			strong
				position relative
				left pxtorem(10px) 
				top pxtorem(20px)
				color orange
				font-weight bold
		div p:nth-child(2)
			color red
			width 50%
			font-size pxtorem(40px)
			margin-top pxtorem(20px)
		.num
			display inline-block
			font-size pxtorem(40px)
			margin-left pxtorem(-260px)
			margin-top pxtorem(74px)
			vertical-align middle
		button
			position absolute
			left 70%
			top pxtorem(280px)
			font-size pxtorem(32px)
			background-color rgba(244,21,5,.8)
			border-radius pxtorem(60px)
			color white
			width 30%
			vertical-align middle
			
</style>
