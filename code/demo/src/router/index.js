import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home/Home.vue'
import Vip from '@/components/Vip/Vip.vue'
import ShopCart from '@/components/ShopCart/ShopCart.vue'
import Mine from '@/components/Mine/Mine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/vip',
      name: 'vip',
      component: Vip
    },
    {
      path: '/shopCart',
      name: 'shopCart',
      component: ShopCart
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    }
  ]
})
