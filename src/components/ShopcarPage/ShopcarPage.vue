<template>
  <div class="wrap">
  		<my-header title="购物车">
        <span slot="left">
            <img src="../../assets/img/back.png" @click="backFn">
        </span>   
      </my-header> 
      <div id="car">
        <p>您的购物车空空如也...</p>
        <img src="../../assets/img/car.jpg">
        <button @click="goFn">去逛逛</button>
      </div>
      <div v-for="(item,index) in $store.state.shopCar" class="shopCar">
          <img src="../../assets/img/chose.png" class="small" ref='src' @click="changeFn(index,item.getDetail.mon)">
          <img v-bind:src="item.getDetail.src" class="big">
          <div>
            <p>{{item.getDetail.txt}}</p>
            <p>￥{{item.getDetail.mon}}</p>
          </div>
          <div class="div2">
            <button id="sub" @click="subFn(index,item.getDetail.mon)">-</button>
            <input id="sum" :value="item.getDetail.many" ref='num'>
            <button id="add" @click="addFn(index,item.getDetail.mon)">+</button>
            <img src="../../assets/img/de.png" @click="deleteFn(index)">
          </div>
      </div>
      <div class="finish">
            <img src="../../assets/img/chose.png" @click="finishFn" class="all">
            <span>全选</span>
            <strong>金额￥<span id="sum1">{{all}}</span></strong>
            <button @click="goPayFn">结算</button>
      </div>
    	<my-nav></my-nav>
  </div>
</template>

<script>
import Nav from "../share/Nav"
import Header from "../share/header.vue"
import {mapGetters,mapActions} from "vuex"
import { MessageBox } from 'mint-ui';
export default {
  data () {
    return {
       bol:"",
       num:0,
       all:0
    }
  },
  components:{
  	"my-nav":Nav,
    "my-header":Header
  },
  computed:{
    ...mapGetters({
      getShopCar:'getShopCar'//在getters中定义的方法
     })
  },
  methods:{
    ...mapActions([//展开mapActions
      "setDetail",//在actions中定义的方法
      ]),
    goFn:function(){
      this.$router.push({path:"./classify"});
      },
  subFn:function(index,num) {
      var sum1 = document.querySelector('#sum1');
      var num1 = this.$store.state.shopCar[index].getDetail.many;
      var sum = parseInt(this.$refs.num[index].value)
      sum--;
      num1 = sum;
      this.$refs.src[index].src = require("../../assets/img/chose_s.png");
      if (num1<=0){
        num1=0; 
        this.getShopCar.splice(index,1)
        this.calculateFn();
      }else {
        this.$store.state.shopCar[index].getDetail.many=num1
        // this.calculateFn();
      }
      this.$refs.num[index].value = num1;  
      this.togFn();
    }, 
  addFn:function(index,num) {
      var sum1 = document.querySelector('#sum1');
      var num1 = this.$store.state.shopCar[index].getDetail.many;
      var sum = parseInt(this.$refs.num[index].value)
      sum++;
      num1 = sum 
      this.$store.state.shopCar[index].getDetail.many = num1
      this.$refs.num[index].value = num1;
      this.$refs.src[index].src = require("../../assets/img/chose_s.png");
      this.calculateFn(); 
    },
  deleteFn:function(index) {
      this.getShopCar.splice(index,1);
      this.calculateFn(); 
      this.togFn();
  },
  changeFn:function(index,cout){
    var sum = document.querySelector('#sum1');
    if (this.$refs.src[index].src==require('../../assets/img/chose.png')){
      this.$refs.src[index].src= require("../../assets/img/chose_s.png");
      this.$store.state.shopCar[index].getDetail.srv = require("../../assets/img/chose_s.png")
      this.calculateFn();
    }else{
      this.$refs.src[index].src= require("../../assets/img/chose.png");
      this.$store.state.shopCar[index].getDetail.srv = require("../../assets/img/chose.png")
      this.calculateFn();
    }    
  },
  finishFn:function(){
      if (this.$store.state.shopCar=="") {
        MessageBox('提示', '您的购物车还没有商品哦！赶紧去选购吧！');
        return
      }
      var small = document.querySelectorAll('.small');
      var all = document.querySelector('.all');
      var sum = document.querySelector('#sum1');
      var num =0;
      this.bol = !this.bol;
      if (this.bol){
        all.src = require("../../assets/img/chose_s.png");
        for (var i = 0; i < small.length; i++) {
        small[i].src= require("../../assets/img/chose_s.png");
        }
        this.calculateFn();
      }else {
        all.src = require("../../assets/img/chose.png");
        for (var i = 0; i < small.length; i++){
        small[i].src= require("../../assets/img/chose.png");
        }
        this.calculateFn();
      }
    },
    backFn:function() {
        this.$router.push({path:"./classify"});
    },
    goPayFn:function(){
      if (this.$store.state.shopCar=="") {
        MessageBox('提示', '您的购物车还没有商品哦！赶紧去选购吧！');
        return
      }
        this.$router.push({path:"./pay"});
    },
    calculateFn:function(){
      // 每次进来先让变量等于0，循环之后再赋值给all显示在页面
      // 相当于每次有操作价格或数据的时候就遍历所有数据
      var num1 = 0;
      var cars = this.$store.state.shopCar;
      for (var i = 0; i < cars.length; i++) {
        if (this.$refs.src[i].src == require("../../assets/img/chose_s.png")) {
          num1+=Number(cars[i].getDetail.mon*cars[i].getDetail.many)
        }   
      }
      this.all = num1
    },
    togFn:function(){
      if (this.$store.state.shopCar=="") {
            document.querySelector('#car').style.display ='block'  
     }else{
           document.querySelector('#car').style.display ='none';
           for (var i = 0; i < this.$store.state.shopCar.length; i++) {
              this.$refs.src[i].src == require("../../assets/img/chose_s.png")
           }
           this.calculateFn();
     }
   }
  },
  mounted: function(){
    this.togFn();
  }
}
</script>


<style lang='stylus' scoped>
@import '../../assets/common/stylus/common.styl'
.wrap
  padding-top pxtorem(100px)
  padding-bottom pxtorem(200px)
  #car
    text-align center
    p
      margin-top pxtorem(200px)
      font-size pxtorem(40px)
    img
      width 60%
      margin-top pxtorem(20px)
    button
      width 80%
      color white
      outline none
      box-shadow: 2px 2px 2px rgba(0, 0, 0, .4)
      border-radius pxtorem(60px)
      font-size pxtorem(60px)
      margin-top pxtorem(100px)
      background-color rgba(255,193,7,0.8)
  .shopCar
      border 1px solid black
      margin-top pxtorem(10px)
      background-color rgba(255,193,7,0.08)
      box-shadow: 2px 2px 2px rgba(0, 0, 0, .4)
      .small
        width pxtorem(60px)
        vertical-align middle
      .big
        width 30%
        vertical-align middle
      div
        display inline-block
        width 60%
        vertical-align middle
        margin-top pxtorem(-40px)
        font-size pxtorem(32px)
      div p:nth-child(2)
        color red
        width pxtorem(200px)
        font-size pxtorem(40px)
        margin-top pxtorem(20px)
      .div2
        float right
        width pxtorem(350px)
        text-align center
        margin-right pxtorem(20px)
        margin-top pxtorem(-80px)
        vertical-align middle
        input
          font-size pxtorem(50px)
          width pxtorem(40px)
          text-align center
          background-color rgba(255,193,7,0.02)
        button
          position relative
          height pxtorem(60px)
          width pxtorem(60px)
          line-height pxtorem(60px)
          padding 0 
          border 0
          text-align center
          font-size pxtorem(40px)
          background-color rgba(255,193,7,0.22)
          outline none
        img
          width pxtorem(50px)
          position relative
          left pxtorem(0px)
          top pxtorem(10px)
          
  .finish
      position fixed
      left 0 
      bottom pxtorem(100px)
      width 100%
      background-color rgba(255,193,7,1)
      font-size pxtorem(32px)
      .all
        width pxtorem(60px)
        vertical-align middle
        margin-left pxtorem(20px)
      button
        width pxtorem(240px)
        height pxtorem(80px)
        font-size pxtorem(52px)
        float right
        outline none
        background-color orange
        color white
      strong
        line-height pxtorem(80px)
        margin-left pxtorem(60px)
        span
          color red
          font-weight bold

</style>
