import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Asteroids from "@/components/pages/Asteroids"

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'Home',
		component: Home
    },
    {
    	path: '/asteroids',
    	name: 'Asteroids',
    	component: Asteroids,
    }
  ],
  mode: 'history',
})
