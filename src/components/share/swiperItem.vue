<template>
  <div id="swipe">
    <mt-swipe :auto="4000">
  		<mt-swipe-item v-for='item in swiperImg'>
  			<img v-bind:src="item.src" alt="">
  		</mt-swipe-item>
	</mt-swipe>
   </div>
</template>
 
<script>
// 引入vue对象
import Vue from 'vue'
// 1.引入mint的组件(js的引入)
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// 2.css的引入
import 'mint-ui/lib/style.css'
export default {
	props:['swiperImg'],
  data () {
    return {
      
    }
  }
}
</script>


<style  lang='stylus' scoped>
@import '../../assets/common/stylus/common.styl'
#swipe
	height pxtorem(450px)
	img
		width 100%
		height 100%

		  
</style>
