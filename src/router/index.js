import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/Home.vue'
import SmartAdv from '../pages/SmartAdv.vue'
import SmartAdvkeyword from '../pages/SmartAdvkeyword.vue'
import PersRFVTracking from '../pages/PersRFVtracking.vue'
import PersRFVConfig from '../pages/PersRFVConfig.vue'
import AddTheme from '../pages/AddTheme.vue'
import FilterList from '../pages/FilterList.vue'
import SmartAdThemeAdvertisingAdd from '../pages/SmartAdThemeAdvertisingAdd.vue'
import ListFollow from '../pages/ListFollow.vue'
import SmartSearch from '../pages/SmartSearch.vue'
import SmartSearchListDownload from '../pages/SmartSearchListDownload.vue'
import OverviewAndRules from '../pages/OverviewAndRules.vue'
import MemberOverview from '../pages/MemberOverview.vue'

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
    },
    {
        path: "/add",
        name: "add-theme",
        component: AddTheme,
    },
    {
        path: "/filter",
        name: "FilterList",
        component: FilterList,
    },
    {
        path: "/smart-ad-theme-advertising-add",
        name: "SmartAdThemeAdvertisingAdd",
        component: SmartAdThemeAdvertisingAdd,
    },
    {
        path: "/follow",
        name: "ListFollow",
        component: ListFollow,

    },
    {
        path: "/smart-search",
        name: "SmartSearch",
        component: SmartSearch
    },
    {
        path: "/smart-search-list-download",
        name: "SmartSearchListDownload",
        component: SmartSearchListDownload
    },
    {
        path: "/overview-and-rules",
        name: "OverviewAndRules",
        component: OverviewAndRules
    },
    {
        path: "/member-overview",
        name: "MemberOverview",
        component: MemberOverview
        
    }






]



const history = createWebHistory();
const router = createRouter({
    history,
    routes
})








export default router