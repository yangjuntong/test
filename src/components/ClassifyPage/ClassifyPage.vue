<template>
  <div id="wrap">
      <my-header title="分类"></my-header>
    	<my-nav></my-nav>
      <div  class="btn">
        <button v-for="(item,index) in btnArr" @click="choseFn(index)">{{item}}</button>
      </div>
      <good-list v-bind:good="GoodList"></good-list>
  </div>
</template>

<script>
import Nav from "../share/Nav"
import Header from "../share/header.vue"
import {mapGetters,mapActions} from "vuex"
import goodList from "../share/goodList.vue";

export default { 
  data () {
    return {
      btnArr:['全部商品','家装建材','居家装饰','懒人沙发','家纺家饰','生活百货'],
      GoodList:''
    }
  },
  components:{
  	"my-nav":Nav,
    "my-header":Header,
    goodList

  }, 
  methods:{
    choseFn:function (index) {
      var btn =document.querySelectorAll('button');
      for (var i = 0; i < btn.length; i++) {
          btn[i].style.outline = 'none';
          btn[i].style.backgroundColor = 'rgba(255,193,7,0.4)';
      }
          btn[index].style.outline = '2px solid black';
          btn[index].style.backgroundColor = 'rgba(255,193,7,1)';
      if (index==0){
          this.GoodList = this.getGoodList;
          console.log(this.getGoodList)
      }else{
        // 定义一个空数组用来存储符合条件的数据
        var cout = [];
        // 遍历数组
        for (var i =0; i < this.getGoodList.length; i++) {
            if (index==this.getGoodList[i].cout){
                cout.push(this.getGoodList[i])
          }
        }
        // 把符合条件的数据传到data
        this.GoodList = cout ; 
      }
    },
    ...mapActions([//展开mapActions
      "get"//在actions中定义的方法
      ])
  },
  computed:{
    ...mapGetters({
    getGoodList:'getList'//在getters中定义的方法
  })
},
  mounted: function () {
      this.GoodList = this.getGoodList
      this.get();//调用方法
   }
}
</script>


<style lang='stylus' scoped>
@import '../../assets/common/stylus/common.styl'
#wrap
  padding-top pxtorem(100px)
  .btn
    width 100%
    box-shadow: 2px 2px 2px rgba(0, 0, 0, .4)
  .btn button:nth-child(2n)
    margin-left 2.5%
    margin-right 2%
  .btn button:nth-child(1)
    margin-left 2.5%
    background-color rgba(255,193,7,1)
    outline 2px solid black
  .btn button:nth-child(5)
    margin-bottom pxtorem(20px)
  button
    width 30%
    font-size pxtorem(34px)
    margin-top pxtorem(20px)
    border none
    background-color rgba(255,193,7,0.4)
</style>
