import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/hodnoceni-recenze',
			name: 'hodnoceni',
			component: () => import('../views/HodnoceniView.vue'),
		},

		{
			path: '/moje-zviratka',
			name: 'moje-zviratka',
			component: () => import('../views/MojeZviratkaView.vue'),
		},
		{
			path: '/moje-prodejna',
			name: 'moje-prodejna',
			component: () => import('../views/MojeProdejnaView.vue'),
		},

		{
			path: '/odber-novinek',
			name: 'novinky',
			component: () => import('../views/NovinkyView.vue'),
		},
		{
			path: '/faq',
			name: 'faq',
			component: () => import('../views/FAQView.vue'),
		},
		{
			path: '/objednavky',
			name: 'objednavky',
			component: () => import('../views/ObjednavkyView.vue'),
		},
		{
			path: '/automaticke-objednavky',
			name: 'automaticke-objednavky',
			component: () => import('../views/AutomatickeObjednavkyView.vue'),
		},
		{
			path: '/reklamace',
			name: 'reklamace',
			component: () => import('../views/ReklamaceView.vue'),
		},
		{
			path: '/oblibene',
			name: 'oblibene',
			component: () => import('../views/OblibeneView.vue'),
		},
		{
			path: '/akcni-letak',
			name: 'akcni-letak',
			component: () => import('../views/AkcniLetakView.vue'),
		},
		{
			path: '/zakaznicka-karta',
			name: 'zakaznicka-karta',
			component: () => import('../views/KartaView.vue'),
		},
		{
			path: '/kupony',
			name: 'kupony',
			component: () => import('../views/KuponyView.vue'),
		},

		{
			path: '/sledovani-objednavky',
			name: 'sledovani-objednavky',
			component: () => import('../views/SledovaniObjednavkyView.vue'),
		},
		{
			path: '/doprava-a-platba',
			name: 'doprava-a-platba',
			component: () => import('../views/DopravaView.vue'),
		},
	],
})

export default router
