<script setup>
import { ref } from 'vue';
// import HelloWorld from './components/HelloWorld.vue'
let menuItems = ref([])

menuItems.value = [{
	text: "使用者中心",
	icon: "icon-user",
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
	icon: "icon-data",
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
					route: "/model-evaluation.html"
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
	icon: "icon-advert",
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
	icon: "icon-hub",
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
	icon: "icon-login_person",
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
},
{
	text: "404",
	icon: "icon-iconsvg20",
	group: [
		{
			text: "404",
			subgroup: [{
				text: "404",
				route: "/404"
			}]
		}]
}]


function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}


function createPlatformDropdown() {
	let data = [{
		item: 'Web',
	},
	{
		item: 'App(IOS)',
	},
	{
		item: 'App(Android)',
	}]
	let div = "#home-platform-dropdown"

}

function createPieChart() {


	let brandColors = ['#CDF2C8', '#8CD7DA', '#3DA4D0', '#ee6666', '#005FC3', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'];
	let pieChartData1 = {
		divId: "piechart1",
		subtext: "",
		title: "瀏覽量佔比",
		data: [
			{
				name: "WEB",
				value: 88.6
			},
			{
				name: "APP(IOS)",
				value: 7.9
			},
			{
				name: "APP(ANDROID)",
				value: 3.5
			},
		],
	}
	let pieChartData2 = {
		divId: "piechart2",
		subtext: "",
		title: "文章瀏覽量占比",
		data: [
			{
				name: "WEB",
				value: 88.6
			},
			{
				name: "APP(IOS)",
				value: 7.9
			},
			{
				name: "APP(ANDROID)",
				value: 3.5
			},
		],
	}
	let pieChartData3 = {
		divId: "piechart3",
		subtext: "",
		title: "互動事件占比",
		data: [
			{
				name: "WEB",
				value: 88.6
			},
			{
				name: "APP(IOS)",
				value: 7.9
			},
			{
				name: "APP(ANDROID)",
				value: 3.5
			},
		],
	}
}

// generatePieCharts(pieChartData1, brandColors)
// generatePieCharts(pieChartData2, brandColors)
// generatePieCharts(pieChartData3, brandColors)

</script>

<!-- let brandColors = ['#CDF2C8', '#8CD7DA', '#3DA4D0', '#ee6666', '#005FC3', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'];
  let barchartdata = {
    divId: 'daily-trend-bar-chart',
    title: '',
    subtext: '',
    source: [
      ['product', '瀏覽量', '文章瀏覽量', '互動事件量'],
      ['2023年11月27日', 103010, 75000, 230654],
      ['2023年11月28日', 810300, 730004, 230654],
      ['2023年11月29日', 23864, 65214, 42145],
      ['2023年11月30日', 633219, 74249, 421412],
    ],
    xAxis: { type: 'category' },
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  }

  let barchartdata1 = {
    divId: 'udn-member-points',
    title: '',
    subtext: '',
    source: [
      ['product', '瀏覽量', '文章瀏覽量', '互動事件量'],
      ['2023年11月27日', 103010, 75000, 230654],
      ['2023年11月28日', 810300, 730004, 230654],
      ['2023年11月29日', 23864, 65214, 42145],
      ['2023年11月30日', 633219, 74249, 421412],
    ],
    xAxis: { type: 'category' },
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  }

  let barchartdata2 = {

    divId: 'views',
    title: '',
    subtext: '',
    source: [
      ['product', '瀏覽量', '文章瀏覽量', '互動事件量'],
      ['2023年11月27日', 103010, 75000, 230654],
      ['2023年11月28日', 810300, 730004, 230654],
      ['2023年11月29日', 23864, 65214, 42145],
      ['2023年11月30日', 633219, 74249, 421412],
    ],
    xAxis: { type: 'category' },
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]

  }

  let barchartdata3 = {

    divId: 'event-day-trends-barchart',
    title: '事件日趨勢',
    subtext: '',
    source: [
      ['product', '瀏覽量', '文章瀏覽量', '互動事件量'],
      ['2023年11月27日', 103010, 75000, 230654],
      ['2023年11月28日', 810300, 730004, 230654],
      ['2023年11月29日', 23864, 65214, 42145],
      ['2023年11月30日', 633219, 74249, 421412],
    ],
    xAxis: { type: 'category' },
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]

  }




  let articleTableData = {
    divId: '#article-rank-table-body',
    data: [{
      number: '1',
      articleID: '7601391',
      articleTitle: '「柯文哲走了最錯的一步！」 郭正亮揭硬傷：趙少康講對了',
      website: '新聞網',
      accessQtd: 455861,
    },
    {
      number: '2',
      articleID: '7602253',
      articleTitle: '鄭文燦被控開房影片鑑定結果出爐...她揪刑事局1句話 網：豁然開朗',
      website: '新聞網',
      accessQtd: 355861,
    },
    {
      number: '3',
      articleID: '7602648',
      articleTitle: 'Lulu癱倒後台畫面曝光！主持金馬前夕狂吐暴瘦',
      website: '噓星聞',
      accessQtd: 199941,
    },
    ]
  }
  let memberarticleTableData = {
    divId: '#member-article-rank-table-body',
    data: [{
      number: '1',
      articleID: '7601391',
      articleTitle: '「柯文哲走了最錯的一步！」 郭正亮揭硬傷：趙少康講對了',
      website: '新聞網',
      accessQtd: 455861,
    },
    {
      number: '2',
      articleID: '7602253',
      articleTitle: '鄭文燦被控開房影片鑑定結果出爐...她揪刑事局1句話 網：豁然開朗',
      website: '新聞網',
      accessQtd: 355861,
    },
    {
      number: '3',
      articleID: '7602648',
      articleTitle: 'Lulu癱倒後台畫面曝光！主持金馬前夕狂吐暴瘦',
      website: '噓星聞',
      accessQtd: 199941,
    },
    ]
  }

  let subsarticleTableData = {
    divId: '#subs-article-rank-table-body',
    data: [{
      number: '1',
      articleID: '7601391',
      articleTitle: '「柯文哲走了最錯的一步！」 郭正亮揭硬傷：趙少康講對了',
      website: '新聞網',
      accessQtd: 455861,
    },
    {
      number: '2',
      articleID: '7602253',
      articleTitle: '鄭文燦被控開房影片鑑定結果出爐...她揪刑事局1句話 網：豁然開朗',
      website: '新聞網',
      accessQtd: 355861,
    },
    {
      number: '3',
      articleID: '7602648',
      articleTitle: 'Lulu癱倒後台畫面曝光！主持金馬前夕狂吐暴瘦',
      website: '噓星聞',
      accessQtd: 199941,
    },
    ]
  }

  init()

  listenHomeTab()

  function init() {
    createBarChart(barchartdata, brandColors)
    createBarChart(barchartdata1, brandColors)
    createBarChart(barchartdata2, brandColors)
  }

  function listenHomeTab() {
    $(document).on('shown.bs.tab', 'a[data-bs-toggle="pill"]', function (e) {
      if ($(this).attr("data-bs-target") == "#home-overview") {
        resizeChart()
        createBarChart(barchartdata, brandColors)
        createBarChart(barchartdata1, brandColors)
        createBarChart(barchartdata2, brandColors)
      }
      if ($(this).attr("data-bs-target") == "#events-details") {
        resizeChart()
        createBarChart(barchartdata3, brandColors)
        createDevicesBarCharts()
      }

      if ($(this).attr("data-bs-target") == "#article-details") {
        resizeChart()
      }

    })
  }


  createTagTableBody(articleTableData)
  createTagTableBody(memberarticleTableData)
  createTagTableBody(subsarticleTableData)
  createPieChart()


  createMenu();



  function createDevicesBarCharts() {
    let brandColors = ['#fc8452', '#3DA4D0', '#ee6666', '#005FC3', '#8CD7DA', '#CDF2C8', '#3ba272', '#9a60b4', '#ea7ccc'];
    let data = {
      divId: 'encodechart-1',
      title: '瀏覽器偏好',
      yAxis: ['Chrome', 'Safari', 'Safari (in-app)', 'Android Webview', 'Edge', 'Samsung Internet', 'Firefox', 'Opera', 'Internet Explorer', '未定義'],
      bardata: [210, 129, 98, 35, 34, 24, 20, 15, 10, 9, 8, 5, 3]
    }
    let data2 = {
      divId: 'encodechart-2',
      title: 'Android 裝置偏好',
      yAxis: ['Samsung', 'Xiaomi', 'OPPO', 'Asus', 'Edge', 'Google', 'Vivo', 'Sony', '未定義', 'Realme'],
      bardata: [210, 129, 98, 35, 34, 24, 20, 15, 10, 9, 8, 5, 3]
    }
    let data3 = {
      divId: 'encodechart-3',
      title: 'Apple 裝置偏好',
      yAxis: ['iPhone', 'iPhone 11', 'iPhone 13', 'iPhone 14 Pro', 'iPhone 12', 'iPhone 14 Pro Max', 'iPhone 13 Pro Max', 'iPhone 13 Pro'],
      bardata: [210, 129, 98, 35, 34, 24, 20, 15, 10, 9, 8, 5, 3]
    }
    horBarChart(data, brandColors)
    horBarChart(data2, brandColors)
    horBarChart(data3, brandColors)
  }
  // createPlatformDropdown()
  const start = datepicker('#startDate', {
    onSelect: (instance, date) => {
      let startDate = document.getElementById('startDate')
      startDate.value = Intl.DateTimeFormat('zh-TW').format(date)
    }
  })

  const end = datepicker('#endDate', {
    onSelect: (instance, date) => {
      let endDate = document.getElementById('endDate')
      endDate.value = Intl.DateTimeFormat('zh-TW').format(date)
    }
  }) -->

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
				data-bs-target="#mainmenu" aria-controls="offcanvasExample">
				<i class="icon-openMenu"></i>
			</button>
			<div class="" id="mainmenu" data-bs-backdrop="false">
				<div class="dashboard-nav position-fixed d-flex flex-column z-5 px-2 border-end">
					<header>
						<div class="d-flex justify-content-between">
							<div>
								<a href="index.html">
									<img src="./public/img/umsLogo.svg" alt="">
								</a>
							</div>
							<div class="close-btn position-relative">
								<button type="button" class="btn-close" data-bs-dismiss="offcanvas"
									aria-label="Close"></button>
							</div>
						</div>
					</header>
					<nav id="navmenu" class="dashboard-nav-list ">
						<div class="accordion" id="menu">
							<div class="accordion-item" v-for="(item, index) in menuItems">
								<div class="accordion-header">
									<button class="dashboard-nav-item accordion-button collapsed" type="button"
										data-bs-toggle="collapse" :data-bs-target="'#item' + index" aria-expanded="true"
										:aria-controls="'item' + index">
										<span class="nav-link-icon"><i :class="item.icon" alt=""></i></span> <span
											style="padding-left:30px">{{ item.text }}
										</span>
									</button>
								</div>
								<div class="accordion-collapse collapse position-relative" data-bs-parent="#menu"
									:id="'item' + index">
									<div class="accordion-body group" style="padding-inline:0">
										<div v-for="(item2, index2) in item.group" :index="index2">

											<div class="accordion" :id="'submenu' + index2">
												<div class="accordion-item">
													<div class="accordion-header">
														<button
															class="dashboard-nav-item accordion-button collapsed  position-relative"
															style="padding-left:60px" type="button"
															data-bs-toggle="collapse" :data-bs-target="'#subitem' + index2"
															aria-expanded="true" :aria-controls="'#subitem' + index2">
															<span class="linespan"></span><span>
																{{ item2.text }}</span>
														</button>
													</div>
													<div :id="'subitem' + index2"
														class="accordion-collapse collapse subgroup"
														:data-bs-parent="'#submenu' + index2" style="position:relative">
														<div class="accordion-body subgroup " style="padding-inline:0">
															<div :id="'subbody' + index2" style="">
																<div class="menu-accordion-item accordion-item"
																	v-for="(item3, index3) in item2.subgroup" :index="'item'+index3">
																	<div class="accordion-header py-1 ">
																		<a href="`+ menuItems[i].group[j].subgroup[k].route + `"
																			id="menu-btn-` + i + j + k + `">
																			<button
																				class="dashboard-nav-item btn-last-child subchild"
																				style="padding-left:65px" type="button">
																				<span class="subgroupLineSpan"></span> 
																				{{ item3.text }}
																			</button>
																		</a>
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

			<div id="searchbar" class="offcanvas offcanvas-start px-2" style="width: 250px;" data-bs-scroll="true"
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
								<span class="input-group-text border-end-0 bg-white icon-search" id="basic-addon6"></span>
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
				class="btn rounded-circle primary bg-custom-grey shadow-sm d-flex position-absolute offcanvas-btn "
				type="button" data-bs-toggle="offcanvas" data-bs-target="#searchbar" aria-controls="offcanvasScrolling"><i
					class="icon-openMenu"></i></button>

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

				<img src="./public/img/profile-circle.svg" alt="" class="avatar">
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
					<div class="ps-2">
						<div class=" d-flex border-bottom gap-3 d-flex flex-wrap py-2">
							<div class="pb-2 me-auto">
								<ul class="d-flex nav gap-2 fw-semibold " role="tablist">
									<li class="nav-item" role="presentation">
										<a class="tab-button-1 rounded-1 active" aria-current="page"
											data-bs-target="#home-overview" data-bs-toggle="pill" aria-selected="false"
											role="tab" tabindex="-1">
											<span>總攬</span>
										</a>
									</li>
									<li class="nav-item" role="presentation">
										<a class="tab-button-1 rounded-1 px-1 " data-bs-target="#events-details"
											data-bs-toggle="pill" aria-selected="true" role="tab">
											<span>​事件詳情</span>
										</a>
									</li>
									<li class="nav-item" role="presentation">
										<a class="tab-button-1 rounded-1 px-1" data-bs-target="#article-details"
											data-bs-toggle="pill" aria-selected="true" role="tab">
											<span>​文章詳情</span>
										</a>
									</li>
								</ul>
							</div>
							<div class="display-none align-self-center">
								2023/04/01 - 2023/04/05
							</div>
							<div class="display-none ">
								<button class=" btn primary text-body-light" style="width: 90px;">
									下載報表
								</button>
							</div>

						</div>
						<div class="tab-content">
							<div id="home-overview" class="tab-pane fade show active">
								<h2>UDN 會員</h2>
								<div class=" bg-grey p-3">

									<div class="d-flex  gap-3   flex-wrap">
										<div
											class="shadow-sm card border-0 ps-3 pe-3 pb-2 pt-3 d-flex flex-column flex-grow-1">
											<div class=" text-center">
												<div class="text-danger text-end">
													<div
														class="list-icon position-relative d-inline-block fw-semibold  hover-label">
														<span class="border border-danger rounded p-1">
															<i class="icon-double-down"></i>
															<span class="ps-1 font-support text-danger ">
																-12%</span>
														</span>
														<span
															class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
															style=" top:106%;right: -10%;">
															對比上個時段
														</span>
													</div>

												</div>
												<h4>
													有效會員數

												</h4>
												<h1 class="mb-0">
													3,658.7萬
												</h1>
											</div>
											<span class="font-support mt-auto ">
												* 瀏覽內容不限 ( e.g 首頁、文章、類別... )
											</span>
										</div>
										<div
											class="shadow-sm card border-0 ps-3 pe-3 pb-2 pt-3 d-flex flex-column flex-grow-1">
											<div class=" text-center">
												<div class="text-success text-end">
													<div
														class="list-icon position-relative d-inline-block fw-semibold  hover-label">
														<span class="border border-success rounded p-1">
															<i class="icon-double-up"></i>
															<span class="ps-1 font-support text-success ">
																8,9%</span>
														</span>
														<span
															class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
															style=" top:106%;right: -10%;">
															對比上個時段
														</span>
													</div>

												</div>
												<h4>
													手機完成驗證數
												</h4>
												<h1 class="mb-0">
													7,838.4萬
												</h1>
											</div>
											<span class="font-support mt-auto ">
												* 瀏覽內容限制為文章
											</span>
										</div>
										<div
											class="shadow-sm card border-0 ps-3 pe-3 pb-2 pt-3 d-flex flex-column flex-grow-1">
											<div class=" text-center">
												<div class="text-success text-end">
													<div
														class="list-icon position-relative d-inline-block fw-semibold  hover-label">
														<span class="border border-success rounded p-1">
															<i class="icon-double-up"></i>
															<span class="ps-1 font-support text-success ">
																12,8%</span>
														</span>
														<span
															class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
															style=" top:106%;right: -10%;">
															對比上個時段
														</span>
													</div>

												</div>
												<h4>
													EMAIL 完成驗證數
												</h4>
												<h1 class="mb-0">
													2,576.6萬
												</h1>
											</div>
											<span class="font-support mt-4">
												* 瀏覽外的事件 ( e.g 完讀、分享... )
											</span>
										</div>
									</div>
									<div class="d-flex justify-content-between gap-3 flex-wrap ">
										<div class="d-flex gap-3 mt-3 card border-0 shadow-sm flex-fill"
											style="width: 450px;">
											<div class="flex-fill pb-4 d-flex flex-column  border-bottom">
												<div class="text-center">

													<h4>
														每日新增會員數

													</h4>
													<h1 class="mb-0">
														1,568.0
													</h1>
													<div class="text-success mt-3 ">
														<div
															class="list-icon position-relative d-inline-block fw-semibold  hover-label">
															<span class="border border-success rounded p-1">
																<i class="icon-double-up"></i>
																<span class="ps-1 font-support text-success ">
																	12,8%</span>
															</span>
															<span
																class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
																style=" top:106%;right: -10%;">
																對比上個時段
															</span>
														</div>

													</div>
												</div>

											</div>
											<div>
												<div id="daily-trend-bar-chart" class="charts"
													style="width: 100%; height: 30dvh;">
												</div>
											</div>

										</div>
										<div class="d-flex gap-3 mt-3 card border-0 shadow-sm flex-fill"
											style="width:450px">
											<div class="flex-fill pb-4 d-flex flex-column  border-bottom">
												<div class="text-center">

													<h4>
														UDN 到站會員數

													</h4>
													<h1 class="mb-0">
														11.8萬
													</h1>
													<div class="text-success mt-3 ">
														<div
															class="list-icon position-relative d-inline-block fw-semibold  hover-label">
															<span class="border border-success rounded p-1">
																<i class="icon-double-up"></i>
																<span class="ps-1 font-support text-success ">
																	14,8%</span>
															</span>
															<span
																class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
																style=" top:106%;right: -10%;">
																對比上個時段
															</span>
														</div>

													</div>
												</div>

											</div>
											<div>

												<div id="udn-member-points" class="charts"
													style="width: 100%; height: 30dvh;">
												</div>
											</div>

										</div>
									</div>


								</div>

								<h2 class="mt-3">焦點事件</h2>
								<div class="bg-grey p-3">

									<div class="d-flex gap-3  card border-0 shadow-sm flex-fill">
										<div class="flex-fill pb-4 d-flex flex-column  border-bottom">
											<div class="text-center">

												<h4>
													瀏覽量
												</h4>
												<h1 class="mb-0">
													1,568.0
												</h1>
												<div class="text-success mt-3 ">
													<div
														class="list-icon position-relative d-inline-block fw-semibold  hover-label">
														<span class="border border-success rounded p-1">
															<i class="icon-double-up"></i>
															<span class="ps-1 font-support text-success ">
																12,8%</span>
														</span>
														<span
															class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
															style=" top:106%;right: -10%;">
															對比上個時段
														</span>
													</div>

												</div>
											</div>

										</div>
										<div>
											<div id="views" class="charts" style="width: 100%; height: 30dvh;">
											</div>
										</div>

									</div>
									<div id="cards-area-1" class="d-flex gap-3 mt-3 flex-wrap">
										<div
											class="card border-0 shadow-sm ps-3 pe-3 pb-2 pt-3 d-flex flex-column flex-fill">
											<div class=" text-center">
												<div class="text-danger text-end">
													<div
														class="list-icon position-relative d-inline-block fw-semibold  hover-label">
														<span class="border border-danger rounded p-1">
															<i class="icon-double-down"></i>
															<span class="ps-1 font-support text-danger ">
																-12%</span>
														</span>
														<span
															class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
															style=" top:106%;right: -10%;">
															對比上個時段
														</span>
													</div>

												</div>
												<h4>
													有效會員數

												</h4>
												<h1 class="mb-0">
													3,658.7萬
												</h1>
											</div>
											<span class="font-support mt-auto ">
												* 瀏覽內容不限 ( e.g 首頁、文章、類別... )
											</span>
										</div>
										<div
											class="card border-0 shadow-sm ps-3 pe-3 pb-2 pt-3 d-flex flex-column flex-fill">
											<div class=" text-center">
												<div class="text-success text-end">
													<div
														class="list-icon position-relative d-inline-block fw-semibold  hover-label">
														<span class="border border-success rounded p-1">
															<i class="icon-double-up"></i>
															<span class="ps-1 font-support text-success ">
																8,9%</span>
														</span>
														<span
															class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
															style=" top:106%;right: -10%;">
															對比上個時段
														</span>
													</div>

												</div>
												<h4>
													手機完成驗證數
												</h4>
												<h1 class="mb-0">
													7,838.4萬
												</h1>
											</div>
											<span class="font-support mt-auto ">
												* 瀏覽內容限制為文章
											</span>
										</div>
										<div
											class="card border-0 shadow-sm ps-3 pe-3 pb-2 pt-3 d-flex flex-column flex-fill">
											<div class=" text-center">
												<div class="text-success text-end">
													<div
														class="list-icon position-relative d-inline-block fw-semibold  hover-label">
														<span class="border border-success rounded p-1">
															<i class="icon-double-up"></i>
															<span class="ps-1 font-support text-success ">
																12,8%</span>
														</span>
														<span
															class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
															style=" top:106%;right: -10%;">
															對比上個時段
														</span>
													</div>

												</div>
												<h4>
													EMAIL 完成驗證數
												</h4>
												<h1 class="mb-0">
													2,576.6萬
												</h1>
											</div>
											<span class="font-support mt-4">
												* 瀏覽外的事件 ( e.g 完讀、分享... )
											</span>
										</div>
									</div>
								</div>

							</div>
							<div id="events-details" class="tab-pane fade ">

								<div class="bg-grey p-3">
									<div class="card border-0 shadow-sm w-100">
										<div class="charts" id="event-day-trends-barchart"
											style="width: 100%; height: 35dvh;">

										</div>
									</div>
									<div class="d-flex gap-3 flex-wrap mt-3">
										<div class="card shadow-sm border-0  flex-fill " style="width: 300px;">
											<div id="piechart1" class="charts" style="width: 100%; height: 35dvh;">
											</div>
										</div>
										<div class="card shadow-sm border-0  flex-fill " style="width: 300px;">
											<div id="piechart2" class="charts" style="width: 100%; height: 35dvh;">
											</div>
										</div>
										<div class="card shadow-sm border-0  flex-fill " style="width: 300px;">
											<div id="piechart3" class="charts" style="width:100%; height: 35dvh;">
											</div>
										</div>
									</div>
									<div class="d-flex gap-3 flex-wrap mt-3">
										<div class="card shadow-sm border-0  flex-fill " style="width: 300px;">
											<div id="encodechart-1" class="charts" style="width: 100%; height: 35dvh;">
											</div>
										</div>
										<div class="card shadow-sm border-0  flex-fill " style="width: 300px;">
											<div id="encodechart-2" class="charts" style="width: 100%; height: 35dvh;">
											</div>
										</div>
										<div class="card shadow-sm border-0  flex-fill " style="width: 300px;">
											<div id="encodechart-3" class="charts" style="width:100%; height: 35dvh;">
											</div>
										</div>
									</div>
								</div>



							</div>
							<div id="article-details" class="tab-pane fade ">
								<div class="bg-grey p-3">
									<div class="title fw-bold mb-2 d-flex justify-content-between">
										<h3>文章瀏覽排行</h3>
										<div class="d-flex align-items-end">
											<button class="lh-1 bg-transparent text-secondary p-0 m-0 "
												data-bs-toggle="dropdown"><i class="icon-openMenu fs-4"></i></button>
											<ul class="dropdown-menu dropdown-menu-end">
												<li><button class="dropdown-item" type="button" onclick="">Export</button>
												</li>
												<li>
												<li><button class="dropdown-item" type="button" onclick="">Redefine</button>
												</li>
												</li>
												<li>
												<li><button class="dropdown-item" type="button" onclick="">Explore</button>
												</li>
												</li>
											</ul>
										</div>
									</div>
									<div class="table-responsive">
										<table class="table table-striped " style="min-width: 682px;">
											<thead>
												<tr>
													<th>
													</th>
													<th scope="col" class="text-start">文章 ID <button
															class="bg-transparent rounded-circle p-0 text-white"><i
																class="icon-sequence" onclick=""></i></button>
													</th>
													<th scope="col" class="text-start">文章標題 <button
															class="bg-transparent rounded-circle p-0 text-white"><i
																class="icon-sequence" onclick=""></i></button>
													</th>
													<th scope="col" class="text-start">網站 <button
															class="bg-transparent rounded-circle p-0 text-white"><i
																class="icon-sequence" onclick=""></i></button>
													</th>
													<th scope="col" class="text-end">瀏覽量<button
															class="bg-transparent rounded-circle p-0 text-white"><i
																class="icon-sequence" onclick=""></i></button>
													</th>
												</tr>
											</thead>
											<tbody id="article-rank-table-body">

											</tbody>
										</table>
										<div class="d-flex justify-content-between flex-wrap mt-2">
											<div class="font-support align-text-top">
												共 <span id="">3</span> 筆資料
											</div>
											<div class="d-flex justify-content-center align-items-center">
												<div class="btn-group me-2" role="group" aria-label="Second group">
													<button type="button" class="pagination-btn btn"> 第一頁</button>
												</div>

												<div class="btn-group me-2" role="group" aria-label="Second group">
													<button type="button" class="pagination-btn btn fs-5 p-0"><i
															class="icon-left"></i></button>

												</div>
												<div class="btn-group me-2" role="group" aria-label="First group">
													<button type="button" class="pagination-btn btn">1</button>
													<button type="button" class="pagination-btn btn">2</button>
													<button type="button" class="pagination-btn btn">3</button>
													<button type="button" class="pagination-btn btn">4</button>
													<button type="button" class="pagination-btn btn">...</button>
													<button type="button" class="pagination-btn btn">999</button>
												</div>
												<div class="btn-group me-2" role="group" aria-label="Second group">
													<button type="button" class="pagination-btn btn fs-5 p-0"><i
															class="icon-right"></i></button>

												</div>
												<div class="btn-group me-2" role="group" aria-label="Second group">
													<button type="button" class="pagination-btn btn"> 最後一頁</button>
												</div>
											</div>
											<div>

											</div>
										</div>
									</div>

									<div class="mt-3 table-responsive">
										<div class="title fw-bold mb-2 d-flex justify-content-between">
											<h3>
												(會員) 文章瀏覽排行

											</h3>
											<div class="d-flex align-items-end">
												<button class="lh-1 bg-transparent text-secondary p-0 m-0 "
													data-bs-toggle="dropdown"><i
														class="lh-1 ifont icon-openMenu p-0"></i></button>
												<ul class="dropdown-menu dropdown-menu-end">
													<li><button class="dropdown-item" type="button"
															onclick="">Export</button>
													</li>
													<li>
													<li><button class="dropdown-item" type="button"
															onclick="">Redefine</button>
													</li>
													</li>
													<li>
													<li><button class="dropdown-item" type="button"
															onclick="">Explore</button>
													</li>
													</li>
												</ul>
											</div>
										</div>
										<table class="table table-striped " style="min-width: 682px;">
											<thead>
												<tr>
													<th>
													</th>
													<th scope="col" class="text-start">文章 ID <button
															class="bg-transparent rounded-circle p-0 text-white"><i
																class="icon-sequence" onclick=""></i></button>
													</th>
													<th scope="col" class="text-start">文章標題 <button
															class="bg-transparent rounded-circle p-0 text-white"><i
																class="icon-sequence" onclick=""></i></button>
													</th>
													<th scope="col" class="text-start">網站 <button
															class="bg-transparent rounded-circle p-0 text-white"><i
																class="icon-sequence" onclick=""></i></button>
													</th>
													<th scope="col" class="text-end">瀏覽量<button
															class="bg-transparent rounded-circle p-0 text-white"><i
																class="icon-sequence" onclick=""></i></button>
													</th>
												</tr>
											</thead>
											<tbody id="member-article-rank-table-body">

											</tbody>
										</table>
										<div class="d-flex justify-content-between">
											<div class="font-support align-text-top">
												共 <span id="">3</span> 筆資料
											</div>
											<div class="d-flex justify-content-center align-items-center">

												<div class="btn-group me-2" role="group" aria-label="Second group">
													<button type="button" class="pagination-btn btn fs-5 p-0"><i
															class="icon-left"></i></button>

												</div>
												<div class="btn-group me-2" role="group" aria-label="First group">
													<button type="button" class="pagination-btn btn">1</button>
													<button type="button" class="pagination-btn btn">2</button>
													<button type="button" class="pagination-btn btn">3</button>
													<button type="button" class="pagination-btn btn">4</button>
													<button type="button" class="pagination-btn btn">...</button>
													<button type="button" class="pagination-btn btn">999</button>
												</div>
												<div class="btn-group me-2" role="group" aria-label="Second group">
													<button type="button" class="pagination-btn btn fs-5 p-0"><i
															class="icon-right"></i></button>

												</div>
											</div>
											<div>

											</div>
										</div>
									</div>
									<div class="mt-3 table-responsive">
										<div class="title fw-bold mb-2 d-flex justify-content-between">
											<h3>
												(訂戶) 文章瀏覽排行
											</h3>
											<div class="d-flex align-items-end">
												<button class="lh-1 bg-transparent text-secondary p-0 m-0 "
													data-bs-toggle="dropdown"><i
														class="lh-1 ifont icon-openMenu p-0"></i></button>
												<ul class="dropdown-menu dropdown-menu-end">
													<li><button class="dropdown-item" type="button"
															onclick="">Export</button>
													</li>
													<li>
													<li><button class="dropdown-item" type="button"
															onclick="">Redefine</button>
													</li>
													</li>
													<li>
													<li><button class="dropdown-item" type="button"
															onclick="">Explore</button>
													</li>
													</li>
												</ul>
											</div>

										</div>
										<table class="table table-striped " style="min-width: 682px;">
											<thead>
												<tr>
													<th>
													</th>
													<th scope="col" class="text-start">文章 ID <button
															class="bg-transparent rounded-circle p-0 text-white"><i
																class="icon-sequence" onclick=""></i></button>
													</th>
													<th scope="col" class="text-start">文章標題 <button
															class="bg-transparent rounded-circle p-0 text-white"><i
																class="icon-sequence" onclick=""></i></button>
													</th>
													<th scope="col" class="text-start">網站 <button
															class="bg-transparent rounded-circle p-0 text-white"><i
																class="icon-sequence" onclick=""></i></button>
													</th>
													<th scope="col" class="text-end">瀏覽量<button
															class="bg-transparent rounded-circle p-0 text-white"><i
																class="icon-sequence" onclick=""></i></button>
													</th>
												</tr>
											</thead>
											<tbody id="subs-article-rank-table-body">

											</tbody>
										</table>

										<div class="d-flex justify-content-between">
											<div class="font-support align-text-top">
												共 <span id="">3</span> 筆資料
											</div>
											<div class="d-flex justify-content-center align-items-center">

												<div class="btn-group me-2" role="group" aria-label="Second group">
													<button type="button" class="pagination-btn btn fs-5 p-0"><i
															class="icon-left"></i></button>

												</div>
												<div class="btn-group me-2" role="group" aria-label="First group">
													<button type="button" class="pagination-btn btn">1</button>
													<button type="button" class="pagination-btn btn">2</button>
													<button type="button" class="pagination-btn btn">3</button>
													<button type="button" class="pagination-btn btn">4</button>
													<button type="button" class="pagination-btn btn">...</button>
													<button type="button" class="pagination-btn btn">999</button>
												</div>
												<div class="btn-group me-2" role="group" aria-label="Second group">
													<button type="button" class="pagination-btn btn fs-5 p-0"><i
															class="icon-right"></i></button>

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


			<div class="bottom-fixed z-2">
				<button class="rounded-circle btn primary shadow-sm text-light" onclick="topFunction()">
					<i class="icon-top"></i>
				</button>
			</div>
			<div id="controlBtn1">
				<button class="rounded-circle btn bg-light shadow btn-lg" data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasRight">
					<i class="icon-filter"></i>
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
								<span class="input-group-text border-end-0 bg-white icon-search" id="basic-addon6"></span>
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
</style>
