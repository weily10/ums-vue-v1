import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/Home.vue'
import SmartAdv from '../pages/SmartAdv.vue'
import SmartAdvkeyword from '../pages/SmartAdvkeyword.vue'
import PersRFVTracking from '../pages/PersRFVtracking.vue'
import PersRFVConfig from '../pages/PersRFVConfig.vue'


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
    },
    {
        path: "/personal-rfv-tracking",
        name: "PersRFVTracking",
        component: PersRFVTracking,
    },
    {
        path: "/personal-rfv-config",
        name: "PersRFVConfig",
        component: PersRFVConfig,
    }

]



const history = createWebHistory();
const router = createRouter({
    history,
    routes
})








export default router