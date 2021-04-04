import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
//import Signup from '../views/Signup.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		redirect : "/messagerie"
	},
	{
		path: '/documentation',
		name: '',
		component: Home
	},
	{
		path: '/documentation/:id',
		name: 'Documentation',
		component: Home
	},
	{
		path: '/messagerie/:id',
		name: 'Messagerie',
		component: Home
	},
	{
		path: '/messagerie/',
		name: '',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{		path: '/signup',name: 'Signup',		component: () => import('../views/Signup.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue')
	},
	{
		path: '/confirmation',
		name: 'Confirmation',
		component: () => import('../views/Confirm.vue')
	},
	{
		path: "/:catchAll(.*)",
		redirect : "/"
	}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
