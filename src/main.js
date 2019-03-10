import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import HomePage from './HomePage.vue'
import Listing from './ListingPage.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: Listing
            
        }
    ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
