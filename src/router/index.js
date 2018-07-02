import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '../components/HomePage/HomePage'
import CityList from '../components/HomePage/CityList'
import seach from '../components/HomePage/seach'
import ClassifyPage from '../components/ClassifyPage/ClassifyPage'
import ShopcarPage from '../components/ShopcarPage/ShopcarPage'
import MyPage from '../components/MyPage/MyPage'
import MyAdress from '../components/MyPage/MyAdress'
import redact from '../components/MyPage/redact'
import Mine from '../components/MyPage/Mine'
import myOrder from '../components/MyPage/myOrder'
import detail from '../components/share/detail'
import pay from '../components/share/pay'
import pay1 from '../components/share/pay1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/classify',
      component: ClassifyPage
    },
    {
      path: '/shopCar',
      component: ShopcarPage
    },
    {
      path: '/my',
      component: Mine
    }, 
    {
      path: '/myPage',
      component: MyPage
    },
    {
      path: '/detail',
      component: detail
    },
    {
      path: '/pay',
      component: pay
    },
    {
      path: '/pay1',
      component: pay1
    },
    {
      path: '/adress',
      component: MyAdress
    },
    {
      path: '/redact',
      component: redact
    },
    {
      path: '/myOrder',
      component: myOrder
    },
    {
      path: '/seach',
      component: seach
    },
    {
      path: '/city',
      component: CityList
    }
  ]
})
