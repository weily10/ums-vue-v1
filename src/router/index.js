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
import PersonalTagUpload from '../pages/PersonalTagUpload.vue'
import Backtrace from '../pages/Backtrace.vue'
import SMSMarketingConfig from '../pages/SMSMarketingConfig.vue'
import MarketingConfigView from '../pages/MarketingConfigView.vue'
import DailynewsTrrafficOverview from '../pages/DailynewsTrrafficOverview.vue'
import TransferOrderNews from '../pages/TransferOrderNews.vue'
import MemberArrivalOverviewDay from '../pages/MemberArrivalOverviewDay.vue'
import ListAnalysis from '../pages/ListAnalysis.vue'
import ListAnalysisView from '../pages/ListAnalysisView.vue'
import SpecificListAnalysis from '../pages/SpecificListAnalysis.vue'
import MarketingEmailResponseAnalysisReport from '../pages/MarketingEmailResponseAnalysisReport.vue'
import AppMarketingReview from '../pages/AppMarketingReview.vue'
import MarketingSenderConfig from '../pages/MarketingSenderConfig.vue'
import GamVolumeQuery from '../pages/GamVolumeQuery.vue'
import GamListUploadQuery from '../pages/GamListUploadQuery.vue'
import GamLineItemManagement from '../pages/GamLineItemManagement.vue'
import GamLineItemPerformance from '../pages/GamLineItemPerformance.vue'
import AdvertisingListGeneration from '../pages/AdvertisingListGeneration.vue'
import MemberTrendOverview from '../pages/MemberTrendOverview.vue'
import MembershipMonthlyOverview from '../pages/MembershipMonthlyOverview.vue'
import MaterialAnalysis from '../pages/MaterialAnalysis.vue'
import SmartContentDashboardEconomicDailyVip from '../pages/SmartContentDashboardEconomicDailyVip.vue'
import UnitedNewsNetwork from '../pages/UnitedNewsNetwork.vue'
import SmartSearchNumber from '../pages/SmartSearchNumber.vue'


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
        name: "AddTheme",
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
    {
        path: "/backtrace",
        name: "Backtrace",
        component: Backtrace

    },
    {
        path: "/sms-marketing-config",
        name: "SMSMarketingConfig",
        component: SMSMarketingConfig

    },
    {
        path: "/marketing-config-view",
        name: "MarketingConfigView",
        component: MarketingConfigView

    },
    {
        path: "/dailynews-traffic-overview",
        name: "DailynewsTrrafficOverview",
        component: DailynewsTrrafficOverview

    },
    {
        path: "/transfer-order-news",
        name: "TransferOrderNews",
        component: TransferOrderNews

    },
    {
        path: "/member-arrival-overview-day",
        name: "MemberArrivalOverviewDay",
        component: MemberArrivalOverviewDay
    },
    {
        path: "/member-arrival-overview-month",
        name: "MemberArrivalOverviewMonth",
        component: MemberArrivalOverviewDay

    },
    {
        path: "/member-arrival-overview-week",
        name: "MemberArrivalOverviewWeek",
        component: MemberArrivalOverviewDay

    },
    {
        path: "/list-analysis",
        name: "ListAnalysis",
        component: ListAnalysis

    },
    {
        path: "/list-analysis-view",
        name: "ListAnalysisView",
        component: ListAnalysisView

    },
    {
        path: "/specific-list-analysis",
        name: "SpecificListAnalysis",
        component: SpecificListAnalysis

    },
    {
        path: "/marketing-email-response-analysis-report",
        name: "MarketingEmailResponseAnalysisReport",
        component: MarketingEmailResponseAnalysisReport

    },
    {
        path: "/sms-marketing-review",
        name: "SMSMarketingReview",
        component: MarketingReview
    },
    {
        path: "/app-marketing-review",
        name: "AppMarketingReview",
        component: AppMarketingReview
    },
    {
        path: "/marketing-sender-config",
        name: "MarketingSenderConfig",
        component: MarketingSenderConfig
    },
    {
        path: "/gam-volume-query",
        name: "GamVolumeQuery",
        component: GamVolumeQuery
    },

    {
        path: "/gam-list-upload-query",
        name: "GamListUploadQuery",
        component: GamListUploadQuery
    },
    {
        path: "/gam-line-item-management",
        name: "GamLineItemManagement",
        component: GamLineItemManagement
    },
    {
        path: "/gam-line-item-performance",
        name: "GamLineItemPerformance",
        component: GamLineItemPerformance
    },
    {
        path: "/advertising-list-generation",
        name: "AdvertisingListGeneration",
        component: AdvertisingListGeneration
    },
    {
        path: "/member-trend-overview",
        name: "MemberTrendOverview",
        component: MemberTrendOverview
    },
    {
        path: "/membership-monthly-overview",
        name: "MembershipMonthlyOverview",
        component: MembershipMonthlyOverview
    },
    {
        path: "/material-analysis",
        name: "MaterialAnalysis",
        component: MaterialAnalysis
    },
    {
        path: "/smart-content-dashboard-economic-daily-vip",
        name: "SmartContentDashboardEconomicDailyVip",
        component: SmartContentDashboardEconomicDailyVip
    },
    {
        path: "/smart-content-dashboard-united-daily-news-digital-version",
        name: "SmartContentDashboardUnitedDailyNewsDigitalVersion",
        component: SmartContentDashboardEconomicDailyVip
    },
    {
        path: "/united-news-network",
        name: "UnitedNewsNetwork",
        component: UnitedNewsNetwork
    },
    {
        path: "/economic-daily-network",
        name: "economic-daily-network",
        component: UnitedNewsNetwork
    },
    {
        path: "/united-daily",
        name: "united-daily",
        component: UnitedNewsNetwork
    },
    {
        path: "/model-evaluation",
        name: "model-evaluation",
        component: UnitedNewsNetwork
    },
    {
        path: "/smart-search-number",
        name: "SmartSearchNumber",
        component: SmartSearchNumber
    }

]


const history = createWebHistory();
const router = createRouter({
    history,
    routes
})


export default router