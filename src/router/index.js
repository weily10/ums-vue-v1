import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
]



const history = createWebHistory();
const router = createRouter({
    history,
    routes
})



router.beforeEach((to, from, next) => {



})


export default router