import Vue from 'vue'
import Router from 'vue-router'
import WebHeader from '@/components/web-header'
import Home from '@/pages/home'
import SearchResults from '@/pages/searchResults'
import ProductInfo from '@/pages/productInfo'
import Login from '@/pages/login'
import Register from '@/pages/register'
import ConfirmOrder from '@/pages/confirm-order'
import Pay from '@/pages/pay'
import PaySuccess from '@/pages/paySuccess'
import ShoppingCart from '@/pages/shoppingCart'
import MyOrder from '@/pages/myOrder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'heaeder',
      component: WebHeader,
      redirect: '/home',
      children: [{
        path: '/home',
        name: 'home',
        component: Home
      }, {
        path: '/searchResults',
        name: 'searchResults',
        component: SearchResults
      }, {
        path: '/productInfo',
        name: 'productInfo',
        component: ProductInfo
      }, {
        path: '/confirm-order',
        name: 'confirm-order',
        component: ConfirmOrder
      }, {
        path: '/pay',
        name: 'pay',
        component: Pay
      }, {
        path: '/paySuccess',
        nama: 'paySuccess',
        component: PaySuccess
      }, {
        path: '/shoppingCart',
        name: 'shoppingCart',
        component: ShoppingCart
      }, {
        path: '/myOrder',
        name: 'myOrder',
        component: MyOrder
      }]
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
