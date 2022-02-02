import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Attributions from '../views/Attributions.vue'
import Contributions from '../views/Contributions.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/attributions',
        name: 'Attributions',
        component: Attributions,
    },
    {
        path: '/contributions',
        name: 'Contributions',
        component: Contributions,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
