var Vue = require('vue');
var Router = require('vue-router');

var App = require('./components/App.vue');
var HomeView = require('./components/HomeView.vue');
var LoginView = require('./components/LoginView.vue');

// Install router
Vue.use(Router);

// Routing
var router = new Router();

router.map({
  '/':      { component: HomeView  },
  '/login': { component: LoginView }
});

router.beforeEach(function() {
  window.scrollTo(0, 0);
});

// router.redirect({
//   '*': '/'
// });

router.start(App, '#app');
