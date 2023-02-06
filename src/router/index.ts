/*
Copyright (C) 2022 Catedra Sngular polo Impulso da Ciencia Aberta
                   a través do Software

This program is free software: you can redistribute it and/or modify it 
under the terms of the GNU General Public License as published by the Free 
Software Foundation, either version 3 of the License, or (at your option) 
any later version.

This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS 
FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with 
this program. If not, see <https://www.gnu.org/licenses/>. 
*/

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
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
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
})

export default router
