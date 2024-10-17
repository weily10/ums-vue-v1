<script setup>
import { ref, onMounted, watch, onUnmounted, computed } from 'vue';
import { useRoute } from 'vue-router';

let menuItems = ref([])
const innerwidth = ref(window.innerWidth)
const routePath = useRoute()
const activeItem = ref(null)

menuItems.value = [{
	text: "使用者中心",
	icon: "bi bi-person",
	group: [
		{
			text: "智慧廣告",
			subgroup: [
				{
					text: "主題標籤廣告",
					route: "/smart-ad-theme-advertising"
				},
				{
					text: "關鍵字廣告",
					route: "/smart-ad-keyword-advertising"
				}
			]
		},
		{
			text: "智慧檢索",
			subgroup: [
				{
					text: "新增",
					route: "/add"
				},
				{
					text: "查詢",
					route: "/smart-search"
				},
				{
					text: "名單下載",
					route: "/smart-search-list-download"
				}
			]
		},
		{
			text: "名單篩選",
			subgroup: [
				{
					text: "篩選",
					route: "/filter"
				},
				{
					text: "追蹤",
					route: "/follow"
				}
			]
		},
		{
			text: "標籤管理",
			subgroup: [
				{
					text: "會員標籤總覽",
					route: "/overview-and-rules"
				},
				{
					text: "個人化標籤維護",
					route: "/personal-tag-maintain"
				}
			]
		},
		{
			text: "用戶經營",
			subgroup: [
				{
					text: "趨勢概覽",
					route: "/trend-overview"
				},
				{
					text: "個人化RFV追蹤",
					route: "/personal-rfv-tracking"
				}
			]
		}
	]
},
{
	text: "資料中心",
	icon: "bi bi-bar-chart fs-5",
	group: [
		{
			text: "平台綜合分析",
			subgroup: [
				{
					text: "經濟日報流量概覽",
					route: "/dailynews-traffic-overview"
				},
				{
					text: "經濟日報轉單新聞",
					route: "/transfer-order-news"
				}
			]
		},
		{
			text: "用戶趨勢分析",
			subgroup: [
				{
					text: "會員到站概覽(日) GA3",
					route: "/member-arrival-overview-day"
				},
				{
					text: "會員到站概覽(周) GA3",
					route: "/member-arrival-overview-week"
				},
				{
					text: "會員到站概覽(月) GA3",
					route: "/member-arrival-overview-month"
				}
			]
		},
		{
			text: "用戶洞察分析",
			subgroup: [
				{
					text: "名單路徑",
					route: "/insight-analysis-list-path"
				},
				{
					text: "分析清單",
					route: "/list-analysis"
				},
				{
					text: "特定名單分析",
					route: "/specific-list-analysis"
				},
				{
					text: "智慧檢索編號",
					route: "/smart-search-number"
				},
				{
					text: "主題洞察分析",
					route: "/topic-insight-analysis"
				}

			]
		},
		{
			text: "UDN 會員中心",
			subgroup: [
				{
					text: "會員即時概覽",
					route: "/member-overview"
				},
				{
					text: "會員趨勢概覽",
					route: "/member-trend-overview"
				},
				{
					text: "會員註冊與開通",
					route: "/member-register-activation"
				},
				{
					text: "會員單月概覽",
					route: "/membership-monthly-overview"
				}
			]
		},
		{
			text: "廣告素材分析",
			subgroup: [
				{
					text: "素材分析",
					route: "/material-analysis"
				}
			]
		},
		{
			text: "內容推薦成效",
			subgroup: [
				{
					text: "聯合新聞網",
					route: "/united-news-network"
				},
				{
					text: "經濟日報網",
					route: "/economic-daily-network"
				},
				{
					text: "聯合報",
					route: "/united-daily"
				},
				{
					text: "模型評估",
					route: "/model-evaluation"
				}
			]

		},
		{
			text: "智慧內容儀表板",
			subgroup: [
				{
					text: "聯合報數位版",
					route: "/smart-content-dashboard-united-daily-news-digital-version"
				},
				{
					text: "經濟日報VIP",
					route: "/smart-content-dashboard-economic-daily-vip"
				}
			]
		}
	]
}, {
	text: "行銷中心",
	icon: "bi bi-megaphone fs-5",
	group: [
		{
			text: "電子報行銷",
			subgroup: [
				{
					text: "設定",
					route: "/marketing-config"
				},
				{
					text: "審核",
					route: "/marketing-review"
				},
				{
					text: "測試寄發",
					route: "/marketing-sending-test"
				},
				{
					text: "寄件者設定",
					route: "/marketing-sender-config"
				}
			]
		},
		{
			text: "簡訊行銷",
			subgroup: [
				{
					text: "設定",
					route: "/sms-marketing-config"
				},
				{
					text: "審核",
					route: "/sms-marketing-review"
				},

			]
		},
		{
			text: "APP行銷",
			subgroup: [
				{
					text: "設定",
					route: "/app-marketing-config"
				},
				{
					text: "審核",
					route: "/app-marketing-review"

				}
			]
		},

	]
},
{
	text: " 廣告中心 ",
	icon: "bi bi-bezier",
	group: [
		{
			text: "廣告管理",
			subgroup: [
				{
					text: "GAM目標對象量體查詢",
					route: "/gam-volume-query"
				},
				{
					text: "GAM目標對象量體查詢",
					route: "/gam-list-upload-query"
				},
				{
					text: "GAM委刊項管理",
					route: "/gam-line-item-management"
				},
				{
					text: "GAM委刊項成效",
					route: "/gam-line-item-performance"
				},
				{
					text: "廣告名單生成",
					route: "/advertising-list-generation"
				}
			]
		},
	]
},
{
	text: "管理者權限",
	icon: "bi bi-person-gear",
	group: [
		{
			text: "權限管理",
			subgroup: [
				{
					text: "帳號核發",
					route: "/acc-issuance"
				}
			]
		},
		{
			text: "雲端資料庫管理",
			subgroup: [
				{
					text: "Bigquery Overview",
					route: "/bigquery-overview"
				},
				{
					text: "Usage Tracking",
					route: "/usage-tracking"
				},
				{
					text: "DataPipeline Status",
					route: "/datapipeline"
				},
				{
					text: "Create Sample Data",
					route: "/create-simple-data"
				}
			]
		},
		{
			text: "會員管理",
			subgroup: [
				{
					text: "會員資料查詢",
					route: "/account-query"
				},
			]
		}


	]
}]

const updatedMenuItems = menuItems.value.map(menuItem => ({
	...menuItem,
	group: menuItem.group.map(subgroup => ({
		...subgroup,
		subgroup: subgroup.subgroup.map(item => ({
			...item,
			highlight: false
		}))
	}))
}));

function getActiveItem(item) {

	for (let i of item.group) {
		const currentItem = i.subgroup.find(item2 => item2.route === routePath.path)
		if (currentItem) {
			return currentItem.route
		}
	}
}

function getActiveItem2(item2) {
	const currentItem = item2.subgroup.find(i => i.route === routePath.path)
	if (currentItem) {
		console.log(currentItem);
		return currentItem.route
	}
}

function isActivePage(item) {
 	return item.route === routePath.path ? true : false
}



onMounted(() => {
	window.addEventListener('resize', updateWidth)
	// getActiveItem()
})

onUnmounted(() => {
	window.removeEventListener('resize', updateWidth);
});

function updateWidth() {
	innerwidth.value = window.innerWidth;

}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

 
watch((innerwidth) => {
	innerwidth.value = window.innerWidth
	console.log(innerwidth);
})

</script>

<template>
	<div class="modal fade" id="confirm-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
		aria-labelledby="modalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header border-0 pb-0">
					<h3> 確認通知</h3>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body fs-6 fw-medium pb-2">
					確定刪除該筆資料?
				</div>
				<div class="modal-footer border-0">
					<button type="button" class="btn" data-bs-dismiss="modal">取消</button>
					<button type="button" class="btn primary" id="confirm-action">確定</button>
				</div>
			</div>
		</div>
	</div>
	<div class="page-content">
		<div id="spinner" class="position-fixed z-start-50 z-3  overlay d-flex justify-content-center align-items-center "
			style="width: 100%; height: 100%;">
			<div class="spinner-border text-white" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
		</div>


		<div class="d-flex position-fixed" style="z-index: 2">

			<button class="btn rounded-circle  m-3 text-light" type="button" data-bs-toggle="offcanvas"
				data-bs-target="#mainmenu" aria-controls="offcanvas">
				<i class="bi bi-list"></i>
			</button>
			<div :class="innerwidth <= 734 ? 'offcanvas offcanvas-start' : ''" id="mainmenu" data-bs-backdrop="false"
				data-bs-scroll="true">
				<div class="dashboard-nav position-fixed d-flex flex-column z-5 px-2 border-end">
					<header>
						<div class="d-flex justify-content-between align-items-center">
							<div>
								<RouterLink to="/">
									<img src="../public/logo.svg" alt="">
								</RouterLink>

							</div>
							<span class="ps-1 fs-2 fw-bolder " style="color:#0055AF">UMS</span>
							<div class="close-btn position-relative">
								<button type="button" class="btn-close" data-bs-dismiss="offcanvas"
									aria-label="Close"></button>
							</div>
						</div>
					</header>

					<nav id="navmenu" class="dashboard-nav-list ">
						<div class="accordion" id="menu">
							<div class="accordion-item" v-for="(item, index) in updatedMenuItems">
								<div class="accordion-header">

									<button class="dashboard-nav-item accordion-button"
										:class="getActiveItem(item) === routePath.path ? '' : 'collapsed'" type="button"
										data-bs-toggle="collapse" :data-bs-target="'#item' + index" aria-expanded="true"
										:aria-controls="'item' + index">
										<span class="nav-link-icon"><i :class="item.icon" alt=""></i></span> <span
											style="padding-left:30px">{{ item.text }}
										</span>
									</button>
								</div>
								<div class="accordion-collapse collapse position-relative"
									:class="getActiveItem(item) === routePath.path ? ' show' : ''" data-bs-parent="#menu"
									:id="'item' + index">

									<div class="accordion-body group" style="padding-inline:0">
										<div v-for="(item2, index2) in item.group" :key="index2">

											<div class="accordion" :id="'submenu' + index2">
												<div class="accordion-item">
													<div class="accordion-header">
														<button
															class="dashboard-nav-item accordion-button   position-relative"
															:class="getActiveItem2(item2) === routePath.path ? '' : 'collapsed'"
															style="padding-left:60px" type="button"
															data-bs-toggle="collapse" :data-bs-target="'#subitem' + index2"
															aria-expanded="true" :aria-controls="'#subitem' + index2">
															<span class="linespan"></span><span>
																{{ item2.text }}</span>
														</button>
													</div>
													<div :id="'subitem' + index2"
														class="accordion-collapse collapse subgroup"
														:class="getActiveItem2(item2) === routePath.path ? 'show' : ''"
														:data-bs-parent="'#submenu' + index2" style="position:relative">
														<div class="accordion-body subgroup" style="padding-inline:0">
															<div :id="'subbody' + index2">
																<div class="menu-accordion-item accordion-item"
																	v-for="(item3, index3) in item2.subgroup"
																	:key="'item' + index3">
																	<div class="accordion-header py-1 ">
																		<RouterLink :to="item3.route"
																			style="text-decoration: none; color: inherit;">

																			<button
																				class="dashboard-nav-item btn-last-child subchild"
																				:class="{ 'highlighted': isActivePage(item3) }"
																				style="padding-left:65px" type="button"
																				 >
																				<span class="subgroupLineSpan"></span>
																				{{ item3.text }}
																			</button>
																		</RouterLink>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</nav>
					<div class="position-sticky top-100 ">
						<div class="p-3 border-top">
							<a class="logout-btn rounded-pill" href="./login.html">登出 </a>
						</div>
					</div>
				</div>
			</div>

			<div id="searchbar" class="offcanvas offcanvas-start px-2"
				:class="innerwidth <= 734 ? 'offcanvas offcanvas-start' : ''" style="width: 250px;" data-bs-scroll="true"
				data-bs-backdrop="false" tabindex="-1" aria-labelledby="offcanvasScrollingLabel">
				<div class="offcanvas-body">
					<div class="font-b4-me">平台</div>
					<div class="btn-group mt-1 w-100">
						<button
							class="border-start border-top border-bottom bg-white btn-block rounded-end-0  w-100 text-start"
							type="button" data-bs-toggle="dropdown" aria-expanded="false">
							選擇平台
						</button>
						<button type="button"
							class="border-top border-bottom border-end bg-white  rounded-start-0 dropdown-toggle dropdown-toggle-split pe-3 w-100 "
							data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
							<span class="visually-hidden">Toggle</span>
						</button>

						<div class="dropdown-menu p-3 ">
							<div class="d-flex justify-content-between">
								<div class="form-check">
									<input id="selectall-chkbox" name="selectall" class="form-check-input  me-2"
										type="checkbox" value="" aria-label="Checkbox for following text input">
									<label class="form-check-label " for="selectall-chkbox">
										全部
									</label>
								</div>
								<div class="font-support">類別數量</div>
							</div>
							<hr class="dropdown-divider">
							<div class="input-group input-group-sm">
								<span class="input-group-text border-end-0 bg-white bi bi-search" id="basic-addon6"></span>
								<input type="text" class="form-control border-start-0 " id="tag-lvl-keyword"
									placeholder="輸入字詞以搜尋">
							</div>
							<div id="home-platform-dropdown">

							</div>
						</div>
					</div>

					<div class="mt-3 ">
						<div class="font-b4-me">開始日期
						</div>
						<div class="input-group mt-1">
							<input type="text" class="form-control border-end-0" placeholder="開始日期" aria-label="Username"
								aria-describedby="basic-addon1" id="startDate">
							<span class="input-group-text bg-white rounded-end "> <i class="icon-calendar"></i></span>
						</div>

					</div>
					<div class="mt-3">
						<div class="font-b4-me">結束日期
						</div>
						<div class="input-group mt-1">
							<input type="text" class="form-control border-end-0" placeholder="結束日期" aria-label="Username"
								aria-describedby="basic-addon1" id="endDate">
							<span class="input-group-text bg-white rounded-end "> <i class="icon-calendar"></i></span>
						</div>

					</div>
					<div class="mt-4  row px-2">
						<button class="btn primary text-light btn-block" onclick="">重設條件</button>
					</div>
				</div>

			</div>

			<button id="controlBtn"
				class="btn rounded-circle  bg-custom-grey shadow-sm d-flex position-absolute offcanvas-btn " type="button"
				data-bs-toggle="offcanvas" data-bs-target="#searchbar" aria-controls="offcanvasScrolling"><i
					class="bi bi-list"></i></button>

		</div>
		<header id="main-header" class="dashboard-toolbar">
			<div class="header-align-center me-auto ">
				<i class="icon-advert" style="margin: 0 6px 0 6px;"></i><span
					class="align-text-top ps-2">2023/5/24，凌晨00:00進行系統優化更新</span>
			</div>
			<div class="header-align-center">
				<div class="" style="padding-right:6px">
					<i class="icon-bell"></i>
				</div>
				<div>
					<div>
						GA4 ：2023.04.17 08:56:36
					</div>
					<div>
						DPMP：2023.04.17 12:56:36
					</div>
				</div>


			</div>
			<div class="avatar-place position-relative d-inline-block fw-semibold  hover-label">

				<img src="" alt="" class="avatar">
				<span class="custom-tooltip-2 tooltip-avatar" style=" top:106%;right: -10%;">
					黃小明
				</span>
			</div>
		</header>
		<div class="container-fluid mb-5">
			<div class="position-fixed bottom-0 p-3 start-50" style="z-index: 11">
				<div id="success-toast" class="toast hide bg-white border-0" role="alert" aria-live="assertive"
					aria-atomic="true">
					<div class="d-flex">
						<div class="toast-body d-flex justify-content-between">
							<div class="rounded-circle txt-success me-1 text-light px-auto d-flex justify-content-center align-items-center"
								style="width: 18px; height: 18px;">
								<i class="icon-done "></i>
							</div>
							<div id="toast-text">該電子報建立成功！
							</div>
						</div>
						<button type="button" class="btn-close  me-2 m-auto" data-bs-dismiss="toast"
							aria-label="Close"></button>

					</div>
				</div>
			</div>
			<div class="left pt-3">
				<div id="app">
					<router-view>
					</router-view>
				</div>
			</div>


			<div class="bottom-fixed z-2">
				<button class="rounded-circle btn primary shadow-sm text-light" @click="topFunction()">
					<i class="bi bi-arrow-up-short"></i>
				</button>
			</div>
			<div id="controlBtn1">
				<button class="rounded-circle btn bg-light shadow btn-lg" data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasRight">
					<i class="bi bi-sliders"></i>
				</button>
			</div>
			<div class="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
				<div class="offcanvas-header">
					<h5 class="offcanvas-title" id="offcanvasRightLabel">篩選條件</h5>
					<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<div class="offcanvas-body">
					<div class="d-flex justify-content-between  ">
						<div class="align-self-center">
							2023/04/01 - 2023/04/05
						</div>

						<div>
							<button class="btn primary text-body-light" style="width: 90px;">
								下載報表
							</button>
						</div>
					</div>
					<hr>

					<div class="font-b4-me">平台</div>
					<div class="btn-group mt-1 w-100">
						<button
							class="border-start border-top border-bottom bg-white btn-block rounded-end-0  w-100 text-start"
							type="button" data-bs-toggle="dropdown" aria-expanded="false">
							選擇平台
						</button>
						<button type="button"
							class="border-top border-bottom border-end bg-white d-flex justify-content-end align-items-center  rounded-start-0 dropdown-toggle dropdown-toggle-split pe-3 w-100 "
							data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
							<span class="visually-hidden">Toggle</span>
						</button>

						<div class="dropdown-menu p-3 ">
							<div class="d-flex justify-content-between">
								<div class="form-check">
									<input id="selectall-chkbox" name="selectall" class="form-check-input  me-2"
										type="checkbox" value="" aria-label="Checkbox for following text input">
									<label class="form-check-label " for="selectall-chkbox">
										全部
									</label>
								</div>
								<div class="font-support">類別數量</div>
							</div>
							<hr class="dropdown-divider">
							<div class="input-group input-group-sm">
								<span class="input-group-text border-end-0 bg-white bi bi-search" id="basic-addon6"></span>
								<input type="text" class="form-control border-start-0 " id="tag-lvl-keyword"
									placeholder="輸入字詞以搜尋">
							</div>
							<div id="home-platform-dropdown">

							</div>
						</div>
					</div>

					<div class="mt-3 ">
						<div class="font-b4-me">開始日期
						</div>
						<div class="input-group mt-1">
							<input type="text" class="form-control border-end-0" placeholder="開始日期" aria-label="Username"
								aria-describedby="basic-addon1" id="startDate">
							<span class="input-group-text bg-white rounded-end "> <i class="icon-calendar"></i></span>
						</div>

					</div>
					<div class="mt-3">
						<div class="font-b4-me">結束日期
						</div>
						<div class="input-group mt-1">
							<input type="text" class="form-control border-end-0" placeholder="結束日期" aria-label="Username"
								aria-describedby="basic-addon1" id="endDate">
							<span class="input-group-text bg-white rounded-end "> <i class="icon-calendar"></i></span>
						</div>

					</div>
					<div class="mt-4  row px-2">
						<button class="btn primary text-light btn-block" @click="">重設條件</button>
					</div>
				</div>

			</div>

		</div>
		<footer class="top-100 py-3 ">
			<div class="text-center">
				<small> 聯合報系
					著作權所有 © 2023
				</small>
			</div>
		</footer>
	</div>
</template>

<style scoped>
.highlighted {
	background-color: #DDEDF3;

}

.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}

.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}

/* texts */


h1 {
	font-size: 32px;
	line-height: 48px;
	font-weight: 400;
	color: #005FC3;
}

h2 {
	font-size: 24px;
	line-height: 36px;
	font-weight: 400;
	color: #005FC3;
}

h3 {
	font-size: 20px;
	line-height: 28px;
	font-weight: 400;
	color: #005FC3;
}

h4 {
	color: #232323;
	font-family: Noto Sans TC;
	font-size: 16px;
	font-weight: 500;
	line-height: 24px;
}
</style>
