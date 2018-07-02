<template>
  <div class="wrap"> 
      <my-header title="商城">
        <span slot="left" @click="goCityFn">
          <strong ref="name">{{city}}</strong>
          <img src="../../assets/img/down.png">
        </span>
        <span slot="right" @click="goSeachFn">
          <img src="../../assets/img/seach.png">
        </span>
      </my-header> 
      <!-- <input type="text" class="txt1" placeholder="搜索" @click="goSeachFn"> -->
  	  <my-swiper v-bind:swiperImg='changeImg'></my-swiper>
      <div class="div1">
        <div class="promise"> 
          <img src="../../assets/img/gou.png">
          <span>自营品牌</span>
        </div>
        <div class="promise"> 
          <img src="../../assets/img/gou.png">
          <span>无忧退货</span>
        </div> 
        <div class="promise">
          <img src="../../assets/img/gou.png">
          <span>48小时快速退款</span>
        </div>
      </div>
      <good-list v-bind:good="getGoodList"></good-list>
    	<my-nav></my-nav>
  </div>
</template>

<script>
import Nav from "../share/Nav.vue";
import SwiperItem from "../share/swiperItem.vue";
import Header from "../share/header.vue";
import goodList from "../share/goodList.vue";
import axios from 'axios';
import {mapGetters,mapActions} from "vuex"
export default {
  data () {
    return {
        changeImg:[
          {src:require("../../assets/img/swiper1.jpg")},
          {src:require("../../assets/img/swiper2.jpg")},
          {src:require("../../assets/img/swiper3.jpg")},
          {src:require("../../assets/img/swiper4.jpg")},
          {src:require("../../assets/img/swiper5.jpg")},
          {src:require("../../assets/img/swiper6.jpg")}
        ]
    }
  },
  components:{
  	"my-nav":Nav,
    "my-swiper":SwiperItem,
    "my-header":Header,
    goodList
  },
  computed:mapGetters({
    getGoodList:'getList',//在getters中定义的方法
    city:"getCity"
  }),
  methods:{
    ...mapActions([//展开mapActions
      "get",//在actions中定义的方法
      "setCity"
      ]),
    goSeachFn:function() {
      this.$router.push({path:"./seach"});
    },
    goCityFn:function(){
      this.setCity(this.$refs.name.innerText)
      this.$router.push({path:"./city"});
    }
  },
mounted: function () {
    this.get()//调用方法
 }
}
</script>


<style lang='stylus' scoped>
@import '../../assets/common/stylus/common.styl'
.wrap
  padding-top pxtorem(100px)
  .txt1
    width 100%
    font-size pxtorem(40px)
    height pxtorem(80px)
    position absolute
    left 0 
    top pxtorem(100px)
    background-color rgba(255,255,255,.4)
    outline none
    text-align center
    color white
    border-radius pxtorem(60px)
    z-index 888
  .div1
    display flex
    box-shadow: 2px 2px 2px rgba(0, 0, 0, .4)
    .promise
      flex: 1
      height pxtorem(80px)
      line-height pxtorem(80px)
      display inline-block
      text-align center
      img
        width pxtorem(50px)
        vertical-align middle
      span
        vertical-align: middle;

</style>
