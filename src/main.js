import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Starships from './Starships.vue'
import Card from './Card.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(VueRouter);

let router = new VueRouter({
	routes: [
		{ path: '/', component: App },
		{ path: '/starships', component: Starships},
		{ path: '/starships/:id/', component: Card }
	]
})


new Vue({
  el: '#app',
  router: router
})
