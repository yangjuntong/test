<template>
	<!-- 导航栏 -->
  <div class="nav">
  	<ul>
  		<!-- 默认渲染a标签 -->
  		<!-- 更改router-link默认渲染标签 -->
  		<!-- 属性tag="标签名" -->
		<router-link tag="li" v-for='item in navArr' v-bind:to='item.url' class='txt'>
			<img v-bind:src='item.src' class="img1" ref='image'>
			<span ref='txt'>{{item.name}}</span>
		</router-link>
  	</ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	navArr:[
    	{'name':'首页','url':'/',src:require('../../assets/img/footer0.png')},
    	{'name':'分类','url':'/classify',src:require('../../assets/img/footer1.png')},
    	{'name':'购物车','url':'/shopCar',src:require('../../assets/img/footer2.png')},
    	{'name':'我的','url':'/my',src:require('../../assets/img/footer3.png')}
    	],
      pageArr:['/','/classify','/shopCar','/my'] 
    }
  }, 
  mounted:function(){
      var tag = this.pageArr.indexOf(this.$route.fullPath)
      if (tag<=0) {tag=0}
      this.$refs.image[tag].src=require('../../assets/img/footer0'+tag+'.png')
      this.$refs.txt[tag].style.color= 'orange';
  },
   methods:{

  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/common/stylus/common.styl'
.nav
  position fixed
  bottom 0
  left 0
  width 100%
  height pxtorem(100px)
  border-top pxtorem(1px) solid #ccc
  z-index 100
  background white
	ul
    display: flex
    height pxtorem(100px)
  ul li:last-child img
      width: 40%
	    li
         flex: 1
         text-align: center
         line-height: pxtorem(30px)
         font-size: pxtorem(20px)
         color: #808080
        img
          display: block
          margin: 0 auto
          width: pxtorem(30px)
          height: pxtorem(30px)
          margin-top: pxtorem(30px)
	ul li:last-child img
        width: 18%
</style>
