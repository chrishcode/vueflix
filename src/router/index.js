import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Netflix from '@/components/Netflix'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/netflix',
      name: 'Netflix',
      component: Netflix
    }
  ]
})
