var Vue = require('vue');
var Router = require('vue-router');
var Resource = require('vue-resource');

var App = require('./components/App.vue');
var HomeView = require('./views/Home.vue');

// Install router
Vue.use(Router);
Vue.use(Resource);

// Routing
var router = new Router();

router.map({
  '/':      { component: HomeView  }
});

router.beforeEach(function() {
  window.scrollTo(0, 0);
});

// router.redirect({
//   '*': '/'
// });

router.start(App, '#app');
