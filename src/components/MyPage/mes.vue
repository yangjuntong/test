<template>
  <div class="mes">
    <div class="mymes" v-for="(item,index) in mymes" @click='alertFn(index)'>
    	<span>{{item.txt}}</span>
    	<img src="../../assets/img/jiantou.png" class="right-img">
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
  data () {
    return {
      mymes:[
      {txt:"我的订单"},
      {txt:"我的地址"},
      {txt:"联系客服"},
      {txt:"关于我们"}
      ]
    }
  },
  methods:{
    alertFn:function(index) {
      switch(index){
        case 0:
            this.$router.push({path:'/myOrder'});
            break;
        case 1:
             this.$router.push({path:'/adress'});
            break;
        case 2:
            MessageBox('提示', '操作成功');
            break;
        case 3:
            MessageBox('提示', '操作成功');
            break;
      }
    }
  }
}
</script>


<style lang='stylus' scoped>
@import '../../assets/common/stylus/common.styl'
.mint-msgbox
    font-size pxtorem(80px)!important
.mes div:last-child
	border-bottom 1px solid #ccc
	margin-bottom pxtorem(20px)
.mymes
	height pxtorem(100px)
	border-top 1px solid #ccc
	overflow hidden
	span
		font-size pxtorem(24px)
		float left
		margin-left 6%
		line-height pxtorem(100px)
	img
		float right
		width pxtorem(30px)
		margin-top pxtorem(35px)
		margin-right 0.6rem
		
</style>
