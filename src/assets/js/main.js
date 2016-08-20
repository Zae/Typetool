'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Store from './vuex/store.js';

import App from './components/app.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    hashbang: false,
    history: true
});

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
    '/': {
        name: 'app',
        component: App
    }
});

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(Vue.extend({
    store: Store,
    components: {}
}), 'body');