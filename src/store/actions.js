import axios from 'axios'
export default{
	get({commit,state}){
		axios.get('/goodList') 
		  .then(function (res) {
		    commit('LIST',res)
		  })  
	},
	setDetail({commit,state},data){
		commit('DETAIL',data)	
	},
	setShopCar({commit,state},data){
		commit('SHOPCAR',data)	
	},
	setBuyShop({commit,state},data){
		commit('BUYSHOP',data)
	},
	setAddress({commit,state},data){
		commit('ADDRESS',data)
	},
	setCity({commit,state},data){
		commit('CITY',data)
	} 
};   