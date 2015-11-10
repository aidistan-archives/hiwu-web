var Vue = require('vue');
var Router = require('vue-router');
var Resource = require('vue-resource');

// Install router
Vue.use(Router);
Vue.use(Resource);

// Routing
var router = new Router();

router.map({
  '/': {
    name: 'home',
    component: require('./views/Home.vue')
  },
  '/today': {
    name: 'today',
    component: require('./views/Today.vue')
  },
  '/galleries/:id': {
    name: 'gallery',
    component: require('./views/Gallery.vue')
  },
  '/items/:id': {
    name: 'item',
    component: require('./views/Item.vue')
  }
});

router.beforeEach(function() {
  window.scrollTo(0, 0);
});

router.redirect({
  '*': '/'
});

router.start(require('./components/App.vue'), '#app');
