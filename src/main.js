import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/home'
import Menu from './components/menu'
import Contact from './components/Contact'
import Admin from './components/Admin'
import About from './components/About'
import History from './components/History'
import Delivery from './components/Delivery'
import OrderingGuide from './components/OrderingGuide'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes= [
  { path: '/', name: 'homeLink', component: Home},
  { path: '/menu', name: 'menuLink', component: Menu},
  { path: '/contact', name: 'contactLink', component: Contact},
  { path: '/admin', name: 'adminLink', component: Admin},
  { 
    path: '/about', name: 'aboutLink', component: About, children: [
    {path: '/history', name: 'historyLink', component: History},
    {path: '/delivery', name: 'deliveryLink', component: Delivery },
    {path: '/ordering-guide', name: 'orderingGuideLink', component: OrderingGuide}
    ]
  },
  { path: '*', redirect: '/'}
]

const router = new VueRouter ({
  routes,
  mode: 'history'
})

router.beforeEach((to) => {
  console.log(to)
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
