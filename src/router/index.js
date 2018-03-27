import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import Home from '@/components/Home'
import MyAddresses from '@/components/MyAddresses'
import AroundMe from '@/components/AroundMe'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/aroundme',
      name: 'AroundMe',
      component: AroundMe
    },
    {
      path: '/myaddresses',
      name: 'MyAddresses',
      component: MyAddresses
    }
  ]
})
