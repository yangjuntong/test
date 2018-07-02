<template>
  <div class="seach">
    <my-header title="搜索">
    	<span slot="left">
            <img src="../../assets/img/back.png" @click="backFn">
        </span>  
    </my-header>
    <div class="div1">
    	<img src="../../assets/img/seach.png" class="img">
    	<input type="text" class="txt1" placeholder="搜索/关键字" @input="seachFn" ref="val">
    </div>
    <div class="div2">
    	<p>热门搜索</p>
		<button v-for="(item,index) in btnArr" @click="choseFn(index)" ref="btn">{{item}}</button>
    </div>
    <good-list v-bind:good="seachArr"></good-list>
  </div>
</template>

<script>
import Header from "../share/header.vue";
import goodList from "../share/goodList.vue";
import {mapGetters,mapActions} from "vuex"
import { MessageBox } from 'mint-ui';
export default {
  data () {
    return {
      seachArr:'',
      btnArr:['家装建材','居家装饰','懒人沙发','家纺家饰','生活百货','四件套	']
    }
  },
  components:{
  	"my-header":Header,
  	goodList
  },
  computed:mapGetters({
    getGoodList:'getList'//在getters中定义的方法
  }),
  methods:{
  	...mapActions([//展开mapActions
      "get"//在actions中定义的方法
      ]),	
    seachFn:function() {
      this.seachArr=""
      var arr=[];
      var shopArr = this.$store.state.goodListMes
      for (var i = 0; i < shopArr.length; i++) {
      		if (shopArr[i].txt.indexOf(this.$refs.val.value)==-1) {
      				
      		}else if(this.$refs.val.value==""){

      		}else {
      			arr.push(shopArr[i])
      			this.seachArr = arr
      		}
      }
    },
    choseFn:function(index) {
    	console.log(this.$refs.btn[index].innerHTML)
    	this.$refs.val.value=this.$refs.btn[index].innerText
    	this.seachFn();
    },
    backFn:function() {
    	this.$router.push({path:"./"});
    }
  },
mounted: function () {
    this.get()//调用方法
 }
}
</script>


<style lang='stylus' scoped>
@import '../../assets/common/stylus/common.styl'
.seach
	padding-top pxtorem(100px)
	.div1
		background-color rgba(155,155,151,.2)
		height pxtorem(140px)
		.img
			position relative
			left pxtorem(20px) 
			top pxtorem(40px)
			width pxtorem(60px)
		.txt1
			width 100%
			font-size pxtorem(40px)
			height pxtorem(80px)
			outline none
			text-indent 1.2rem
			margin-top pxtorem(-80px)
			border-radius pxtorem(60px)
	.div2
		width pxtorem(700px)
		margin-left pxtorem(25px)
		text-align center
		p
			font-size pxtorem(36px)
			margin-top pxtorem(20px)
			color #ccc
		button
			width pxtorem(230px)
			font-size pxtorem(28px)
			margin-top pxtorem(20px)
			border-radius pxtorem(40px)
			outline none
			background-color white
</style>
