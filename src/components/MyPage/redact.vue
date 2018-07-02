<template>
  <div class="redact">
    <my-header title="收货地址">
        <span slot="left">
            <img src="../../assets/img/back.png" @click="backFn">
        </span>   
    </my-header>
    <div class="content">
        <p>收货人姓名:
          <input type="text" class="txt1" ref="txt1">
        </p>
        <p>联系电话:
          <input type="text" class="txt2" ref="txt2">
        </p>
        <p>城市:
          <input type="text" class="txt3" ref="txt3">
        </p>
        <input type="text" placeholder="小区、街道、门牌等信息" class="txt4" ref="txt4">
        <p>
          <span>设为默认地址</span>
          <img src="../../assets/img/close.png" @click='changeFn' ref='img'>
        </p>
    </div>
    <button @click="addFn">确认</button>
  </div>
</template>

<script>
import Header from "../share/header.vue"
import {mapGetters,mapActions} from "vuex"
export default {
  data () {
    return {
      bol:false
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
    ...mapActions([//展开mapActions
      "setAddress",//在actions中定义的方法
      ]),
    backFn:function () {
    	this.$router.push({path:"./adress"});
    },
    changeFn:function() {
      this.bol=!this.bol
      if (this.bol){
          this.$refs.img.src=require("../../assets/img/open.png")
      }else {
          this.$refs.img.src=require("../../assets/img/close.png")
      }
    },
    addFn:function() {
     this.setAddress({name:this.$refs.txt1.value,phone:this.$refs.txt2.value,adr:this.$refs.txt4.value,bol:this.$refs.img.src==require("../../assets/img/open.png")?true:false});
     this.$router.push({path:"./adress"});
   }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/common/stylus/common.styl'
.redact
    padding-top pxtorem(100px)
    .content
        .txt4
          width 100%
          text-overflow: ellipsis;/*文字隐藏后添加省略号*/
          white-space: nowrap;/*强制不换行*/
          padding-left 0
          text-indent 0.3rem
        p,input
          font-size pxtorem(40px)
          height pxtorem(100px)
          line-height pxtorem(100px)
          padding-left pxtorem(20px)
          border-bottom 1px solid black
          outline none
          .txt1,.txt2,.txt3
            float right
          img
            width pxtorem(80px)
            vertical-align middle
            float right
            margin-top pxtorem(30px)
            margin-right pxtorem(60px) 
    button
        margin-left 15%
        margin-top pxtorem(100px)
        font-size pxtorem(40px)
        height pxtorem(80px)
        background-color orange
        border-radius pxtorem(60px)
        width 70%
        outline none

</style>
