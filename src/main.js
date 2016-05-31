import Vue from 'vue'
import Utils from './utils'
import Router from 'vue-router'
import Resource from 'vue-resource'

Vue.use(Utils)
Vue.use(Router)
Vue.use(Resource)

let router = new Router({
  history: process.env.NODE_ENV !== 'development'
})

router.map({
  '/': {
    name: 'home',
    component: require('views/Home')
  },
  '/archive': {
    name: 'archive',
    component: require('views/Archive')
  },
  '/today': {
    name: 'today',
    component: require('views/Today')
  },
  '/galleries/:gallery_id': {
    name: 'gallery',
    component: require('views/Gallery')
  },
  '/items/:item_id': {
    name: 'item',
    component: require('views/Item')
  }
})

router.redirect({
  '*': '/'
})

router.beforeEach(function () {
  window.$(window).smoothScroll()
})

router.afterEach(function (transition) {
  window._hmt.push(['_trackPageview', window.location])
})

router.start(require('./App.vue'), '#app')
