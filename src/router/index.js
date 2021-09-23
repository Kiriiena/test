import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catalog/:catagory',
    name: 'Catalog',
    component: () => import( '../views/Catalog.vue')
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import( '../views/Product.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import( '../views/Cart.vue')
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: () => import( '../views/Delivery.vue')
  },
  {
    path: '/payments',
    name: 'Payments',
    component: () => import( '../views/Payments.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
