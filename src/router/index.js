import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LenguajesView from '../views/LenguajesView.vue'
import MusicaView from '../views/MusicaView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/lenguajes',
        name: 'lenguajes',
        component: LenguajesView

    },
    {
        path: '/musica',
        name: 'musica',
        component: MusicaView

    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
