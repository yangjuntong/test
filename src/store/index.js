import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 引入其他的js文件
import getters from "./getters.js";
import actions from "./actions.js";
import mutations from "./mutations.js";  



let state = {
	 goodListMes:'',
	 detailList:'', 
	 shopCar:[],
	 buyShop:[],
	 address:[],
	 city:'广东省'
};
 
 

// 导出去
export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})