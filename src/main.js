import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import routerMap from './routerMap'
import router from './router'
/* eslint-disable no-new */

Vue.use(VueRouter)

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

routerMap(router)

router.start(App, 'app')
