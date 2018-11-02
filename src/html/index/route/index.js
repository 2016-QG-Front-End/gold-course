import Vue from 'vue'
import Router from 'vue-router'
import Index from './../component/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    }
  ]
})