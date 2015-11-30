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
  '/archive': {
    name: 'archive',
    component: require('./views/Archive.vue'),
    subRoutes: {
      '/galleries/:gallery_id': {
        name: 'archive_gallery',
        component: require('./views/Gallery.vue'),
        subRoutes: {
          '/items/:item_id': {
            name: 'archive_gallery_item',
            component: require('./views/Item.vue')
          }
        }
      }
    }
  },
  '/today': {
    name: 'today',
    component: require('./views/Today.vue'),
    subRoutes: {
      '/login': {
        name: 'today_login',
        component: require('./views/Login.vue')
      },
      '/galleries/:gallery_id': {
        name: 'today_gallery',
        component: require('./views/Gallery.vue'),
        subRoutes: {
          '/items/:item_id': {
            name: 'today_gallery_item',
            component: require('./views/Item.vue')
          }
        }
      },
      '/items/:item_id': {
        name: 'archive_item',
        component: require('./views/Item.vue')
      }
    }
  },
  '/galleries/:gallery_id': {
    name: 'gallery',
    component: require('./views/Gallery.vue'),
    subRoutes: {
      '/items/:item_id': {
        name: 'gallery_item',
        component: require('./views/Item.vue')
      }
    }
  },
  '/items/:item_id': {
    name: 'item',
    component: require('./views/Item.vue')
  },
  '/mine': {
    name: 'mine',
    component: require('./views/Mine.vue')
  }
});

router.beforeEach(function(transition) {
  if (/^\/mine/.test(transition.to.path)) {
    if (router.app.userId) {
      transition.next();
    } else {
      transition.abort();
    }
  } else {
    transition.next();
  }
});

router.redirect({
  '*': '/'
});

router.start(require('./components/App.vue'), '#app');
