import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import signup from '@/components/signup'
import login from '@/components/login'
import buy from '@/components/buy'
    
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path: '/signup',
        name: 'signup',
        component: signup
    },
      {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/buy',
        name: 'buy',
        component: buy
    }
  ]
})
