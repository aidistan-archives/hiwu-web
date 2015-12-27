var Vue = require('vue');
var Router = require('vue-router');
var Resource = require('vue-resource');

// Install router
Vue.use(Router);
Vue.use(Resource);

// Routing
var router = new Router({
  history: process.env.NODE_ENV === 'development' ? false : true,
  saveScrollPosition: true
});

router.map({
  '/': {
    name: 'home',
    component: require('./views/Home.vue')
  },
  '/apply': {
    name: 'apply',
    component: require('./views/Apply.vue')
  },
  '/archive': {
    name: 'archive',
    component: require('./views/Archive.vue')
  },
  '/today': {
    name: 'today',
    component: require('./views/Today.vue')
  },
  '/galleries/:gallery_id': {
    name: 'gallery',
    component: require('./views/Gallery.vue')
  },
  '/items/:item_id': {
    name: 'item',
    component: require('./views/Item.vue')
  }
});

router.redirect({
  '*': '/'
});

router.start(require('./App.vue'), '#app');
