import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  hashbang: true,
  history: true,
  saveScrollPosition: false,
  transionOnload: true
})
