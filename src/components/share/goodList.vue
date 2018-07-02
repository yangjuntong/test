<template>
  <div class="goodList">
    	<div v-for="(item,index) in good" class="div1" @click="goDetail(good[index])">
    		<div>
    			<img v-bind:src="item.src" class="pro">
    		</div>
    		<p class="money">¥{{item.mon}}<span>包邮</span></p>
    		<p>{{item.txt}}</p>
    		<p>
				<img src="../../assets/img/jijia.png" class="small">
				<img src="../../assets/img/gold.png" class="small">
				<img src="../../assets/img/fuwu.png" class="small">
				<img src="../../assets/img/baoxian.png" class="small">
    		</p>
    	</div> 
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
props:['good'],
  data () {
    return {
    	
    }
  },
  methods:{
  	...mapActions([//展开mapActions
      "setDetail"//在actions中定义的方法
      ]),
  	goDetail:function(index){
  		this.$router.push({path:"./detail"});
  		this.setDetail(index);
  	}
  }
}
</script>


<style lang='stylus' scoped>
@import '../../assets/common/stylus/common.styl'
.goodList div:last-child
	margin-bottom pxtorem(120px)
.div1
	display inline-block
	width 47%
	margin-top pxtorem(20px)
	/*outline 1px solid black*/
	/*box-shadow: 2px 2px 2px rgba(0, 0, 0, .4)*/
	margin-left 2%
	div
		text-align center
		.pro
			width 100%
			margin auto
	p
		width 90%
		margin-left 5%
		margin-top pxtorem(10px)
		.small
			width pxtorem(50px)
	.money
		color red
		font-size pxtorem(40px)
		span
			display inline-block
			width pxtorem(80px)
			height pxtorem(36px)
			background-color red
			color white
			text-align center
			font-size pxtorem(32px)
			margin-left pxtorem(20px)
</style>
