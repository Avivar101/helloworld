import Home from './components/home'
const Menu = () => import('./components/menu')
const Contact = () => import(/* webpackChunkName: "menuGroup" */ './components/Contact')
const About = () => import(/* webpackChunkName: "menuGroup" */ './components/About')
//import Menu from './components/menu'
//import Contact from './components/Contact'
//import About from './components/About'
import Admin from './components/Admin'
import History from './components/History'
import Delivery from './components/Delivery'
import OrderingGuide from './components/OrderingGuide'


export const routes= [
    { path: '/', name: 'homeLink', components: {
        default: Home,
        'ordering-guide': OrderingGuide,
        'delivery': Delivery,
        'history': History
    }},
    { path: '/menu', name: 'menuLink', component: Menu},
    { path: '/contact', name: 'contactLink', component: Contact},
    { 
      path: '/admin', 
      name: 'adminLink', 
      component: Admin,
      beforeEnter: (to, from, next) => {
        alert('the session is for authorized users only, pls login befor continue')
        next()
      }
    },
    { 
      path: '/about', name: 'aboutLink', component: About, children: [
      {path: '/history', name: 'historyLink', component: History},
      {path: '/delivery', name: 'deliveryLink', component: Delivery },
      {path: '/ordering-guide', name: 'orderingGuideLink', component: OrderingGuide}
      ]
    },
    { path: '*', redirect: '/'}
  ]