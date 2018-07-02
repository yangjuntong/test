<template>
  <div class="mine">
    <my-header title="我的"></my-header>
    <img src="../../assets/img/bg.png" class="bg">
    <div id="my">
      <div> 
        <img src="../../assets/img/footer3.png" class="num">
        <input type="number" placeholder="账号" autofocus ref='name'>
      </div>
      <div>
         <img src="../../assets/img/pwd.png" class="pwd">
         <input type="password" placeholder="密码" ref="pwd">
      </div>
      <p>找回密码?</p>
    </div>
    <button class="btn" @click="goMypage">登录</button>
    <my-nav></my-nav>
  </div>
</template>

<script>
import Nav from "../share/Nav"
import Header from "../share/header.vue"
import MyMes from "./mes.vue";
import { MessageBox } from 'mint-ui';
export default {
  data () {
    return {
      
    }
  },
  components:{
  	"my-nav":Nav,
    "my-header":Header,
    MyMes
  },
  methods:{
    goMypage:function(){
    	if (this.$refs.name.value=="") {
    		if (this.$refs.pwd.value=="") {
    			MessageBox('提示', '请输入账号密码');
    		}else {
    			if (this.$refs.name.value=="") {}
    			MessageBox('提示', '请输入账号密码');
    		}
    		return 
    	}else {
    		if (this.$refs.pwd.value=="") {
    			MessageBox('提示', '请输入账号密码');
    			return 
    		}else {
    			if (this.$refs.name.value=="") {}
    			MessageBox('提示', '登录成功');
    			this.$router.push({path:"./mypage"});
    		}
    	}
     	
    }
  }
}
</script>


<style lang='stylus' scoped>
@import '../../assets/common/stylus/common.styl'
.mine
  padding-top pxtorem(100px)
  .bg
    position fixed
    z-index -1
    width 100%
  #my
    width 80%
    margin-top 45%
    margin-left 10%
    div
      position relative
      .num
        position absolute
        top 32% 
        left 3%
        width 7%
      .pwd
        position absolute
        top 28% 
        left 2%
        width 10%
    input
      width 100%
      height pxtorem(100px)
      font-size pxtorem(36px)
      background-color rgba(255,193,7,0.08)
      margin-top pxtorem(8px)
      border 2px solid rgba(255,193,7,.4)
      text-indent 1rem
    p 
      color #ccc
      font-size pxtorem(32px)
      margin-top pxtorem(40px)
    
.btn
  font-size pxtorem(40px)
  height pxtorem(80px)
  color white
  border-radius pxtorem(60px)
  margin-top pxtorem(60px)
  background-color rgba(255,193,7,1)
  margin-left 10%
  width 80%




</style>
