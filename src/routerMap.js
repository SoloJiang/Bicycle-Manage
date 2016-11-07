export default function (router) {
  router.map({
    '/': {
      component: require('components/gps.vue')
    },
    '*': {
      component: require('components/gps.vue')
    },
    '/myself': {
      component: require('./components/myself.vue')
    },
    '/register': {
      component: require('./components/register.vue')
    },
    '/borrow': {
      component: require('./components/borrow.vue')
    },
    '/myself': {
      component: require('./components/simple.vue')
    },
    '/myself/simple': {
      component: require('./components/simple.vue')
    },
    '/myself/sign': {
      component: require('./components/sign.vue')
    },
    '/myself/register': {
      component: require('./components/register.vue')
    },
    '/myself/forget': {
      component: require('./components/forget.vue')
    },
    'myself/reset': {
      component: require('./components/reset.vue')
    }
  })
}
