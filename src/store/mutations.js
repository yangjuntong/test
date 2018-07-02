const LIST = 'LIST'
const DETAIL = "DETAIL"
const SHOPCAR = "SHOPCAR"
const BUYSHOP = "BUYSHOP"
const ADDRESS = "ADDRESS"
const CITY = "CITY"
export default{
	[LIST](state,datas){
		state.goodListMes = datas.data.goodListMes
	},
	[DETAIL](state,data){
		// console.log(data)
		state.detailList = data
	},
	[SHOPCAR](state,data){
		// 判断上一条数据和加进来的下一条数据是否一样，一样的话样数量增加
		// 不一样则放进数组中
		var bol=true
		for(var i=0;i<state.shopCar.length;i++){
				if(data.getDetail.src==state.shopCar[i].getDetail.src){					
					state.shopCar[i].getDetail.many++
					bol=false
				} 
		}
		if(bol){
			state.shopCar.push(data)
		}
	}, 
	[BUYSHOP](state,data){
		state.buyShop = data
	}, 
	[ADDRESS](state,data){
		state.address.push(data)
	}, 
	[CITY](state,data){
		state.city = data
	}
}  