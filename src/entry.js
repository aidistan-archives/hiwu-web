var Vue = require('vue');
var Router = require('vue-router');
var Resource = require('vue-resource');

// Install router
Vue.use(Router);
Vue.use(Resource);

// Routing
var router = new Router();

router.map({
  '/':          { component: require('./views/Home.vue')  },
  '/items/:id': { component: require('./views/Item.vue') }
});

router.beforeEach(function() {
  window.scrollTo(0, 0);
});

// router.redirect({
//   '*': '/'
// });

router.start(require('./components/App.vue'), '#app');
