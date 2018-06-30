import Vue from 'vue'

import Vuetify from 'vuetify'
import Router from 'vue-router'

import Home from '@/components/Home'
import MyAddresses from '@/components/addresses/MyAddresses'
import AroundMe from '@/components/AroundMe'
import Lines from '@/components/lines/Lines'
import LiveView from '@/components/arliveview/LiveView'
import ModernizrView from '@/components/modernizr/ModernizrView'

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
    },
    {
      path: '/lines',
      name: 'TCL Lines',
      component: Lines
    },
    {
      path: '/liveview',
      name: 'Live View',
      component: LiveView
    },
    {
      path: '/modernizr',
      name: 'Modernizr',
      component: ModernizrView
    }
  ]
})
