import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsesView from '../views/UsesView.vue'
import NotFNotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/uses',
            name: 'uses',
            component: UsesView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFNotFoundView
        }
    ]
})

export default router