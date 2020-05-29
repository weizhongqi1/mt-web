import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layout/default.vue'
import Index from '@/page/index.vue'
import ChangeCity from '@/page/changeCity.vue'
import GoodsList from '@/page/goodsList.vue'
import Blank from '@/layout/blank.vue'
import Login from '@/components/blank/login.vue'
import Register from '@/components/blank/register.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'default',
      component: Default,
      redirect: 'ChangeCity',
      children: [{
        path: '/index',
        name: 'index',
        component: Index
      }, {
        path: '/changeCity',
        name: 'changeCity',
        component: ChangeCity
      },
      {
        path: 's/:name',
        name: 'goods',
        component: GoodsList
      }
      ]
    },
    {
      path: '/blank',
      name: 'blank',
      component: Blank,
      children: [{
        path: 'login',
        name: 'login',
        component: Login
      },
      {
        path: 'register',
        name: 'register',
        component: Register
      }]
    }
  ]
})
