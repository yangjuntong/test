<template>
  <div class="wrap">
      <my-header title="我的"></my-header>
      <div id="my">
        <img src="../../assets/img/head.jpg">
        <p>君莫笑</p>
      </div>
      <my-mes></my-mes>
      <button class="btn" @click="backFn">退出</button>
  </div>
</template>

<script>
import Header from "../share/header.vue"
import MyMes from "./mes.vue";
export default {
  data () {
    return {
      
    }
  },
  components:{
    "my-header":Header,
     MyMes
  },
  methods:{
    backFn:function() {
      this.$router.push({path:"./my"});
    }
  }
}
</script>


<style lang='stylus' scoped>
@import '../../assets/common/stylus/common.styl'
.wrap
  background-color rgba(253,253,253,1)
  padding-top pxtorem(100px)
  position relative
  #my
    text-align center
    padding-top pxtorem(100px)
    img
      width pxtorem(250px)
    p
      font-size pxtorem(40px)
      margin-top pxtorem(20px)
      margin-bottom pxtorem(20px)
  .btn
	    font-size pxtorem(20px)
	    width 100%
	    height pxtorem(100px)
	    background-color rgba(255,193,7,0.8) 
	    color white
	    outline none
	    font-size pxtorem(60px)
	    position fixed
	    bottom 0
	

</style>
