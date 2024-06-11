import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/Home.vue'
import SmartAdv from '../pages/SmartAdv.vue'
import SmartAdvkeyword from '../pages/SmartAdvkeyword.vue'


const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView,
    },
    {
        path: "/smart-ad-theme-advertising",
        name: "SmartAdv",
        component: SmartAdv,
    },
    {
        path: "/smart-ad-keyword-advertising",
        name: "SmartAdvkeyword",
        component: SmartAdvkeyword,
    }

]



const history = createWebHistory();
const router = createRouter({
    history,
    routes
})








export default router