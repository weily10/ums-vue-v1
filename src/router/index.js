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
import PersonalTagMaintain from '../pages/PersonalTagMaintain.vue'
import MemberRegisterAct from '../pages/MemberRegisterAct.vue'
import AccountQuery from '../pages/AccountQuery.vue'
import AccIssuance from '../pages/AccIssuance.vue'
import MarketingConfig from '../pages/MarketingConfig.vue'
import AppMarketingConfig from '../pages/AppMarketingConfig.vue'
import AppMarketingConfigAdd from '../pages/AppMarketingConfigAdd.vue'
import MatchmakingAnalysis from '../pages/MatchmakingAnalysis.vue'
import MarketingReview from '../pages/MarketingReview.vue'
import MarketingSendingTest from '../pages/MarketingSendingTest.vue'
import MarketingSendingTestDetail from '../pages/MarketingSendingTestDetail.vue'
import PersonalTagAdd from '../pages/PersonalTagAdd.vue'
import InsightAnalysisListPath from '../pages/InsightAnalysisListPath.vue'
import AccInssuanceAdd from '../pages/AccInssuanceAdd.vue'
import SmartAnalysisReport from '../pages/SmartAnalysisReport.vue'
import ViewArticle from '../pages/ViewArticle.vue'
import ViewFullArticle from '../pages/ViewFullArticle.vue'
import RFVconfirm from '../pages/RFVconfirm.vue'
import  PersonalTagUpload from '../pages/PersonalTagUpload.vue'





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

    },
    {
        path: "/personal-tag-maintain",
        name: "PersonalTagMaintain",
        component: PersonalTagMaintain

    },
    {
        path: "/member-register-activation",
        name: "MemberRegisterAct",
        component: MemberRegisterAct
    },
    {
        path: "/account-query",
        name: "AccountQuery",
        component: AccountQuery
    },
    {
        path: "/acc-issuance",
        name: "AccIssuance",
        component: AccIssuance
    },
    {
        path: "/marketing-config",
        name: "MarketingConfig",
        component: MarketingConfig
    },
    {
        path: "/app-marketing-config",
        name: "AppMarketingConfig",
        component: AppMarketingConfig
    },
    {
        path: "/app-marketing-config-add",
        name: "AppMarketingConfigAdd",
        component: AppMarketingConfigAdd
    },
    {
        path: "/matchmaking-analysis",
        name: "MatchmakingAnalysis",
        component: MatchmakingAnalysis

    },
    {
        path: "/marketing-review",
        name: "MarketingReview",
        component: MarketingReview

    },
    {
        path: "/marketing-sending-test",
        name: "MarketingSendingTest",
        component: MarketingSendingTest
    },
    {
        path: "/marketing-sending-test-detail",
        name: "MarketingSendingTestDetail",
        component: MarketingSendingTestDetail
    },
    {
        path: "/personal-tag-maintain",
        name: "PersonalTagAdd",
        component: PersonalTagAdd
    },
    {
        path: "/insight-analysis-list-path",
        name: "InsightAnalysisListPath",
        component: InsightAnalysisListPath
    },
    {
        path: "/acc-inssuance-add",
        name: "AccInssuanceAdd",
        component: AccInssuanceAdd
    },
    {
        path: "/smart-analysis-report",
        name: "SmartAnalysisReport",
        component: SmartAnalysisReport
        
    },
    {
        path: "/view-article",
        name: "ViewArticle",
        component: ViewArticle
    },
    {
        path: "/view-full-article",
        name: "ViewFullArticle",
        component: ViewFullArticle
    },
    {
        path: "/personal-rfv-confirm",
        name: "RFVconfirm",
        component: RFVconfirm
    },
    {
        path: "/trend-overview",
        name: "OverviewAndRules2",
        component: OverviewAndRules
    },
    {
        path: "/personal-tag-upload",
        name: "PersonalTagUpload",
        component: PersonalTagUpload
    },
]


const history = createWebHistory();
const router = createRouter({
    history,
    routes
})


export default router