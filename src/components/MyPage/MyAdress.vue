<template>
  <div class="adress">
    <my-header title="收货地址">
        <span slot="left">
            <img src="../../assets/img/back.png" @click="backFn">
        </span>   
    </my-header>
    <div v-for="item in getAddress" class="div1">
    	<div class="div2">
    		<span>{{item.name}}</span>
    		<strong>{{item.phone}}</strong>
    		<p><span v-show="item.bol">[默认]</span>{{item.adr}}</p>
    	</div>
    	<div class="left">
    		<img src="../../assets/img/de.png" @click="deleFn(index)">
    	</div>
    </div>
    <button class="btn" @click="goFn">添加地址</button>
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
    "my-header":Header,
  },
  computed:{
    ...mapGetters({
      getAddress:'getAddress'//在getters中定义的方法
     })
  },
  methods:{
    goFn:function() {
      this.$router.push({path:"./redact"});
    },
    backFn:function () {
    	this.$router.push({path:"./mypage"});
    },
    deleFn:function (index) {
    	 this.getAddress.splice(index,1)
    }
  }
}
</script>


<style lang='stylus' scoped>
@import '../../assets/common/stylus/common.styl'
.adress
	padding-top pxtorem(100px)
	.div1
		margin-top pxtorem(20px)
		height pxtorem(150px)
		font-size pxtorem(32px)
		background-color rgba(158,158,158,0.06)
		 box-shadow: 2px 2px 2px rgba(0, 0, 0, .4)
		.div2
			width 78%
			margin-top pxtorem(10px)
			height pxtorem(150px)
			display inline-block
			vertical-align middle
			span,strong
				margin-left pxtorem(50px)
				font-size pxtorem(40px)
			p
				margin-top pxtorem(20px)
				margin-left pxtorem(50px)
				span
					color orange
					font-size pxtorem(32px)
		.left
			width 20%
			height pxtorem(150px)
			display inline-block
			vertical-align middle
			img
				position relative
				left pxtorem(51) 
				top pxtorem(51)
	.btn 
		font-size pxtorem(40px)
		width 60%
		margin-top pxtorem(40px)
		margin-left 20%
		height  pxtorem(80px)
		background-color rgba(255,193,7,0.8)
		margin-bottom pxtorem(100px)
		border-radius pxtorem(60px)
		color white
		outline none

</style>
