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
        path: '/video',
        name: 'Video',
        // lazy-loaded
        component: () => import(/* webpackChunkName: "video" */ '../views/Video.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
