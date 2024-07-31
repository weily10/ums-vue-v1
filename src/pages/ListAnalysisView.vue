<script setup>
import router from '../router';
</script>
<template>
    <div>
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button">
                <i class="bi bi-arrow-left  " @click="router.go(-1)"></i></button>
            <h2 class="mb-0"> 檢視 </h2>
        </div>
        <div class="bg-grey mt-3 filter p-3 ">
            <div class="accordion" id="accordionAnalysis">
                <div class="accordion-item">
                    <h4 class="accordion-header custom-acc-button">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#list-analysis-overview" aria-expanded="true" aria-controls="collapseOne">
                            預覽
                        </button>
                    </h4>
                </div>
                <div id="list-analysis-overview" class="accordion-collapse collapse show"
                    data-bs-parent="#accordionAnalysis">
                    <div class=" d-flex gap-3 mt-3">
                        <div class="shadow-sm p-4 w-100 text-center bg-white">
                            <h4>
                                碳費困境 - 不重複用戶人數(總)

                            </h4>
                            <h1 class="mt-2">
                                112,564
                            </h1>
                        </div>
                        <div class=" card p-4  border-0 shadow-sm p-3 w-100 text-center">
                            <h4>
                                碳費困境 - 不重複會員人數(總)
                            </h4>
                            <h1 class="mt-2">
                                8,719
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="d-flex gap-3 pb-2 mt-4" id="list-browse-data">
            <ul id="list-view-data-tabs" class="d-flex nav gap-2 fw-semibold">
                <li class="nav-item">
                    <a class="tab-button-1 active rounded-1" aria-current="page" data-bs-target="#demographics-data-section"
                        data-bs-toggle="pill" aria-controls="demographics-data-section">
                        <span>人口變項</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="tab-button-1 rounded-1 px-1" data-bs-target="#browsing-data-section" data-bs-toggle="pill"
                        aria-controls="browsing-data-section">
                        <span>瀏覽數據 </span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="tab-button-1 rounded-1 px-1" data-bs-target="#ad-click-data-section" data-bs-toggle="pill"
                        aria-controls="ad-click-data-section">
                        <span>廣告點擊</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="tab-button-1 rounded-1 px-1" data-bs-target="#transaction-data-section" data-bs-toggle="pill"
                        aria-controls="transaction-data-section">
                        <span>交易</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="tab-button-1 rounded-1 px-1" data-bs-target="#subscription-data-section" data-bs-toggle="pill"
                        aria-controls="subscription-data-section">
                        <span>訂閱</span>
                    </a>
                </li>
            </ul>
        </div>

        <!-- 人口變項 -->
        <div id="demographics-data-section" class="show collapse">
            <div class="bg-grey mt-3 filter p-3 mt-3">
                <div class="accordion" id="accordionDemograph">
                    <div class="accordion-item">
                        <h4 class="accordion-header custom-acc-button">
                            <button class="accordion-button   border-bottom" type="button" data-bs-toggle="collapse"
                                data-bs-target="#list-analysis-demographics" aria-expanded="true"
                                aria-controls="collapseOne">
                                2023-10-12
                            </button>
                          
                        </h4>
                        <div id="list-analysis-demographics" class="accordion-collapse collapse show"
                        data-bs-parent="#demographics-data-section">
                        <div class=" d-flex gap-3 mt-3">
                            <div class="shadow-sm p-4 w-100 text-center bg-white">
                                <h4>
                                    碳費困境會員數
                                </h4>
                                <h1 class="mt-2">
                                    8,678
                                </h1>
                            </div>
                            <div class=" card p-4  border-0 shadow-sm p-3 w-100 text-center">
                                <h4>
                                    報系整體會員數(排除碳費困境)
                                </h4>
                                <h1 class="mt-2">
                                    7,352,564
                                </h1>
                            </div>
                        </div>
                        <div class="d-flex flex-wrap gap-3 mt-3">
                            <div class="flex-fill card border-0 shadow-sm p-3" style="width: 30vh">

                                <div id="subject-gender-piechart" class="pie-charts" style="width: 100%; height:420px;">

                                </div>
                            </div>
                            <div class="flex-fill  border-0 card shadow-sm" style="width: 70vh">
                                <h4 class="text-center">
                                    有填寫總人數
                                </h4>
                                <div class="d-flex gap-3 border-bottom mt-2">
                                    <div class=" w-100 text-center">
                                        <div class="font-b4-me">
                                            碳費困境
                                        </div>
                                        <h1>
                                            10,879
                                        </h1>
                                    </div>
                                    <div class="border-0 w-100 text-center">
                                        <div class="font-b4-me">
                                            報系整體(排除永續發展)
                                        </div>
                                        <h1>
                                            4,253,602
                                        </h1>
                                    </div>
                                </div>
                                <div class="d-flex mt-3  h-100 ">
                                    <table class="table table-striped table-borderless mt-3">
                                        <thead>
                                            <tr>
                                                <th class="col-4"></th>
                                                <th scope="col" class="text-end align-text-top">男 </th>
                                                <th scope="col" class="text-end align-text-top">女 </th>
                                                <th scope="col" class="text-end align-text-top">有填寫總人數</th>
                                            </tr>
                                        </thead>
                                        <tbody id="list-analysis-sex-table">

                                        </tbody>
                                    </table>

                                </div>

                            </div>
                        </div>
                        <!-- 年齡 -->
                        <div class="d-flex flex-wrap gap-3 mt-3 ">
                            <div class="flex-fill  border-0 card shadow-sm">
                                <h4 class="text-center">
                                    有填寫總人數
                                </h4>
                                <div class="d-flex gap-3 border-bottom mt-2">
                                    <div class=" w-100 text-center">
                                        <div class="font-b4-me">
                                            碳費困境
                                        </div>
                                        <h1>
                                            4,043
                                        </h1>
                                    </div>
                                    <div class="border-0 w-100 text-center">
                                        <div class="font-b4-me">
                                            報系整體(排除永續發展)
                                        </div>
                                        <h1>
                                            4,088,691
                                        </h1>
                                    </div>
                                </div>
                                <table class="table table-striped table-borderless h-100 mt-3">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="text-start align-text-top">年齡 </th>
                                            <th scope="col" class="text-end align-text-top">碳費困境 </th>
                                            <th scope="col" class="text-end align-text-top">碳費困境比例 </th>
                                            <th scope="col" class="text-end align-text-top">報系整體 <br>(排除碳費困境) </th>
                                            <th scope="col" class="text-end align-text-top">報系整體比例 <br>(排除碳費困境)</th>
                                            <th scope="col" class="text-end align-text-top">差異率</th>
                                            <th scope="col" class="text-end align-text-top">TGI</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-start">14歲或以下</td>
                                            <td class="text-end">8
                                            </td>
                                            <td class="text-end">0.2%</td>
                                            <td class="text-end">14,704</td>
                                            <td class="text-end">0.3%</td>
                                            <td class="text-end">-43%</td>
                                            <td class="text-end">57.2</td>
                                        </tr>
                                        <tr>
                                            <td class="text-start">15歲-24歲</td>
                                            <td class="text-end">8
                                            </td>
                                            <td class="text-end">0.2%</td>
                                            <td class="text-end">14,704</td>
                                            <td class="text-end">0.3%</td>
                                            <td class="text-end">-43%</td>
                                            <td class="text-end">57.2</td>
                                        </tr>
                                        <tr>
                                            <td class="text-start">25歲-34歲</td>
                                            <td class="text-end">8
                                            </td>
                                            <td class="text-end">0.2%</td>
                                            <td class="text-end">14,704</td>
                                            <td class="text-end">0.3%</td>
                                            <td class="text-end">-43%</td>
                                            <td class="text-end">57.2</td>
                                        </tr>
                                        <tr>
                                            <td class="text-start">45歲-54歲</td>
                                            <td class="text-end">8
                                            </td>
                                            <td class="text-end">0.2%</td>
                                            <td class="text-end">14,704</td>
                                            <td class="text-end">0.3%</td>
                                            <td class="text-end">-43%</td>
                                            <td class="text-end">57.2</td>
                                        </tr>
                                        <tr>
                                            <td class="text-start">55歲或以上</td>
                                            <td class="text-end">8
                                            </td>
                                            <td class="text-end">0.2%</td>
                                            <td class="text-end">14,704</td>
                                            <td class="text-end">0.3%</td>
                                            <td class="text-end">-43%</td>
                                            <td class="text-end">57.2</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="flex-fill  card shadow-sm   border-0 p-3 " style="width: 50vh">
                                <div id="subject-age-piechart" class=" pie-charts" style="width: 100%; height: 420px;">
                                </div>
                            </div>
                        </div>
                        <!-- 區域 -->
                        <div class="hoverDiv flex-fill card border-0 shadow-sm  mt-3">

                            <div id="subject-region-piechart" class="pie-charts" style="width: 100%; height: 420px;"></div>

                        </div>
                        <div class="flex-fill  border-0 card shadow-sm mt-3">
                            <h4 class="text-center">
                                有填寫總人數
                            </h4>
                            <div class="d-flex gap-3 border-bottom mt-2">
                                <div class=" w-100 text-center">
                                    <div class="font-b4-me">
                                        碳費困境
                                    </div>
                                    <h1>
                                        4,043
                                    </h1>
                                </div>
                                <div class="border-0 w-100 text-center">
                                    <div class="font-b4-me">
                                        報系整體(排除永續發展)
                                    </div>
                                    <h1>
                                        3,987,158
                                    </h1>
                                </div>
                            </div>
                            <table class="table table-striped table-borderless h-100 mt-3">
                                <thead>
                                    <tr>
                                        <th scope="col" class="text-start align-text-top">區域 </th>
                                        <th scope="col" class="text-end align-text-top">碳費困境 </th>
                                        <th scope="col" class="text-end align-text-top">碳費困境比例 </th>
                                        <th scope="col" class="text-end align-text-top">報系整體 <br>(排除碳費困境) </th>
                                        <th scope="col" class="text-end align-text-top">報系整體比例 <br>(排除碳費困境)</th>
                                        <th scope="col" class="text-end align-text-top">差異率</th>
                                        <th scope="col" class="text-end align-text-top">TGI</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-start">台北市</td>
                                        <td class="text-end">1,339
                                        </td>
                                        <td class="text-end">33.2%</td>
                                        <td class="text-end">950,963</td>
                                        <td class="text-end">23.9%</td>
                                        <td class="text-end">-43%</td>
                                        <td class="text-end">57.2</td>
                                    </tr>
                                    <tr>
                                        <td class="text-start">新北市 </td>
                                        <td class="text-end">8
                                        </td>
                                        <td class="text-end">0.2%</td>
                                        <td class="text-end">14,704</td>
                                        <td class="text-end">0.3%</td>
                                        <td class="text-end">-43%</td>
                                        <td class="text-end">57.2</td>
                                    </tr>
                                    <tr>
                                        <td class="text-start">台中市</td>
                                        <td class="text-end">8
                                        </td>
                                        <td class="text-end">0.2%</td>
                                        <td class="text-end">14,704</td>
                                        <td class="text-end">0.3%</td>
                                        <td class="text-end">-43%</td>
                                        <td class="text-end">57.2</td>
                                    </tr>
                                    <tr>
                                        <td class="text-start">高雄市</td>
                                        <td class="text-end">8
                                        </td>
                                        <td class="text-end">0.2%</td>
                                        <td class="text-end">14,704</td>
                                        <td class="text-end">0.3%</td>
                                        <td class="text-end">-43%</td>
                                        <td class="text-end">57.2</td>
                                    </tr>
                                    <tr>
                                        <td class="text-start">桃園市</td>
                                        <td class="text-end">8
                                        </td>
                                        <td class="text-end">0.2%</td>
                                        <td class="text-end">14,704</td>
                                        <td class="text-end">0.3%</td>
                                        <td class="text-end">-43%</td>
                                        <td class="text-end">57.2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </div>
                  
                </div>

            </div>
        </div>
        <!-- 瀏覽數據  -->

        <div id="browsing-data-section" class="collapse">
            <div class="bg-grey mt-3 filter p-3 mt-3">
                <div class="d-flex align-items-center justify-content-between border-bottom">
                    <h4 class="">
                        2023-07-12 ~ 2023-10-12
                    </h4>
                    <button class="rounded-circle btn-sm rotate collapsed up p-0" data-bs-toggle="collapse"
                        data-bs-target="#list-browse-data" aria-expanded="false" type="button">
                        <i class="icon-down fs-6 "></i>
                    </button>
                </div>
                <div class="d-flex gap-3 border-bottom pb-2 mt-2" id="list-browse-data">
                    <ul id="general-data-tabs" class="d-flex nav gap-2 fw-semibold">
                        <li class="nav-item">
                            <a class="tab-button-1 active rounded-1" aria-current="page" data-bs-target="#news-network"
                                data-bs-toggle="pill" aria-controls="news-network">
                                <span>新聞網</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="tab-button-1 rounded-1 px-1" data-bs-target="#news-daily" data-bs-toggle="pill"
                                aria-controls="daily-news">
                                <span>經濟日報網</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="" id="browsing-data">
                    <div class=" mt-3">
                        <h3>
                            人數
                        </h3>
                        <div class="d-flex gap-3 mt-3">
                            <div class="card shadow-sm border-0  w-100 text-center ">
                                <h4 id="unrepeated-browsing-keyword">
                                    碳費困境不重複瀏覽用戶數
                                </h4>
                                <h1 class="mt-2" id="unrepeated-browsing-number">
                                    112,563
                                </h1>
                            </div>
                            <div class="card  border-0 shadow-sm w-100 text-center">
                                <h4 id="browsing-user-title">
                                    新聞網整體不重複瀏覽用戶數(排除碳費困境)
                                </h4>
                                <h1 class="mt-2 d-flex  justify-content-center " id="browsing-user-number">
                                    112,319,361 <span class="fs-6  ps-1">(占比：21%)</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div class=" mt-4">
                        <h3>
                            人均瀏覽次數
                        </h3>
                        <div class="d-flex gap-3 mt-3">
                            <div class="card shadow-sm border-0  w-100 text-center ">
                                <h4>
                                    碳費困境
                                </h4>
                                <h1 class="mt-2" id="views-per-person-number">
                                    24.8
                                </h1>
                            </div>
                            <div class="card  border-0 shadow-sm w-100 text-center">
                                <h4>
                                    經濟日報整體(排除碳費困境)
                                </h4>
                                <h1 class="mt-2" id="views-per-person-number-whole-daily-news">
                                    3.5
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div class="card shadow-sm border-0 mt-3 w-100 mx-auto">
                        <div id="visitors-ratio-barchart" class="pt-0 pb-3  mx-auto" style="width: 100vh; height: 420px;">

                        </div>
                        <div>
                            <table class="table table-striped table-borderless h-100 mt-3">
                                <thead>
                                    <tr>
                                        <th scope="col" class="text-center " rowspan="2">項次 </th>
                                        <th scope="col" class="text-start border-end " rowspan="2">頻道 </th>
                                        <th scope="col" class="text-center border-end border-start" colspan="3">碳費困境
                                        </th>
                                        <th scope="col" class="text-center border-end " colspan="3">新聞網整體(排除碳費困境) </th>
                                        <th scope="col" class="text-center ">差異率 </th>
                                        <th scope="col" class="text-end border-start" rowspan="2">TGI</th>
                                    </tr>
                                    <tr>
                                        <th scope="col" class="text-end ">不重複瀏覽人數 </th>
                                        <th scope="col" class="text-end ">不重複瀏覽人數比例 </th>

                                        <th scope="col" class="text-end border-end">人均瀏覽次數 </th>
                                        <th scope=" col" class="text-end ">不重複瀏覽人數 </th>
                                        <th scope="col" class="text-end ">不重複瀏覽人數比例 </th>
                                        <th scope="col" class="text-end border-end">人均瀏覽次數 </th>
                                        <th scope="col" class="text-end ">人數</th>
                                    </tr>
                                </thead>
                                <tbody id="browsing-data-table-body">
                                    <!-- <tr>
                                <td class="text-start">1</td>
                                <td class="text-start">要聞
                                </td>
                                <td class="text-end">74,418</td>
                                <td class="text-end">66.1%</td>
                                <td class="text-end">57.3</td>
                                <td class="text-end">14,504,039</td>
                                <td class="text-end">12.9%</td>
                                <td class="text-end">3.5</td>
                                <td class="text-end">412%</td>
                                <td class="text-end">512.0</td>
                            </tr>
                            <tr>
                                <td class="text-start">2</td>
                                <td class="text-start">產經
                                </td>
                                <td class="text-end">73,817</td>
                                <td class="text-end">65.6%</td>
                                <td class="text-end">18.5</td>
                                <td class="text-end">7,110,278</td>
                                <td class="text-end">6.3%</td>
                                <td class="text-end">2.6</td>
                                <td class="text-end">936%</td>
                                <td class="text-end">1,035.9</td>
                            </tr> -->

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 廣告點擊 -->
        <div id="ad-click-data-section" class="collapse">
            <div class="bg-grey mt-3 filter p-3 mt-3">
                <div class="d-flex align-items-center justify-content-between border-bottom">
                    <h4 class="">
                        2023-07-12 ~ 2023-10-12
                    </h4>
                    <button class="rounded-circle btn-sm rotate collapsed up p-0" data-bs-toggle="collapse"
                        data-bs-target="#list-ad-click-data" aria-expanded="false" type="button">
                        <i class="icon-down fs-6 "></i>
                    </button>
                </div>
                <div id="list-ad-click-data">
                    <div class="d-flex gap-3 border-bottom pb-2 mt-2">
                        <ul id="ad-click-theme-tabs" class="d-flex nav gap-2 fw-semibold">
                            <li class="nav-item">
                                <a class="tab-button-1 active rounded-1" aria-current="page" data-bs-target="#big-theme"
                                    data-bs-toggle="pill" aria-controls="big-theme">
                                    <span>大主題</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="tab-button-1 rounded-1 px-1" data-bs-target="#small-theme" data-bs-toggle="pill"
                                    aria-controls="small-theme">
                                    <span>小主題</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="tab-button-1 rounded-1 px-1" data-bs-target="#brands" data-bs-toggle="pill"
                                    aria-controls="brands">
                                    <span>品牌</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="" id="click-times">
                        <div class=" mt-3">
                            <h3>
                                次數
                            </h3>
                            <div class="d-flex gap-3 mt-3">
                                <div class="card shadow-sm border-0  w-100 text-center ">
                                    <h4 id="theme-click-times-title">
                                        碳費困境廣告點擊次數
                                    </h4>
                                    <h1 class="mt-2" id="theme-click-times">
                                        101,715
                                    </h1>
                                </div>
                                <div class="card  border-0 shadow-sm w-100 text-center">
                                    <h4 id="theme-click-times-title-whole">
                                        新聞網整體不重複瀏覽用戶數(排除碳費困境)
                                    </h4>
                                    <h1 class="mt-2 d-flex  justify-content-center " id="theme-click-times-whole">
                                        6,866,507
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div class="card shadow-sm border-0 mt-3 w-100 mx-auto">
                            <div id="theme-click-barchart" class="pt-0  pb-3 mx-auto " style="width: 100vh; height: 420px;">

                            </div>
                            <div>
                                <table class="table table-striped table-borderless h-100 mt-3">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="text-end align-text-top ">項次 </th>
                                            <th scope="col" class="text-start align-text-top">主題 </th>
                                            <th scope="col" class="text-end align-text-top">碳費困境廣告點擊數 </th>
                                            <th scope="col" class="text-end align-text-top">碳費困境點擊數比例 </th>
                                            <th scope="col" class="text-end align-text-top">整體廣告點擊數(排除碳費困境) </th>
                                            <th scope="col" class="text-end align-text-top">整體廣告點擊次數比例(排除碳費困境) </th>
                                            <th scope="col" class="text-end align-text-top">差異率</th>
                                            <th scope="col" class="text-end align-text-top">TGI</th>
                                        </tr>
                                    </thead>
                                    <tbody id="click-times-table-body">

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 交易 -->
        <div id="transaction-data-section" class="collapse">
            <div class="bg-grey mt-3 filter p-3 mt-3">
                <div class="d-flex align-items-center justify-content-between border-bottom">
                    <h4 class="">
                        2023-07-12 ~ 2023-10-12
                    </h4>
                    <button class="rounded-circle btn-sm rotate collapsed up p-0" data-bs-toggle="collapse"
                        data-bs-target="#list-trans-data" aria-expanded="false" type="button">
                        <i class="icon-down fs-6"></i>
                    </button>
                </div>
                <div id="list-trans-data">
                    <div class="d-flex gap-3 border-bottom pb-2 mt-2">
                        <ul id="ad-click-theme-tabs" class="d-flex nav gap-2 fw-semibold">
                            <li class="nav-item">
                                <a class="tab-button-1 active rounded-1 " aria-current="page"
                                    data-bs-target="#ecommerce-with-design" data-bs-toggle="pill" aria-controls="big-theme">
                                    <span>垂直電商</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="tab-button-1 rounded-1 px-1" data-bs-target="#ticket-sales" data-bs-toggle="pill"
                                    aria-controls="small-theme">
                                    <span>展演購票</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="tab-button-1 rounded-1 px-1" data-bs-target="#ecommerce-udn-shopping"
                                    data-bs-toggle="pill" aria-controls="brands">
                                    <span>綜合電商UDN</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="" id="transaction-section">
                        <div class="d-flex gap-3 mt-3">
                            <div class="card shadow-sm border-0  w-100 text-center ">
                                <h4 id="number-people-trading-title">
                                    碳費困境區間內交易人數
                                </h4>
                                <h1 class="mt-2" id="number-people-trading">
                                    40
                                </h1>
                            </div>

                        </div>

                        <div class=" mt-3">
                            <h3>
                                人均購買單量
                            </h3>
                            <div class="d-flex gap-3 mt-2">
                                <div class="card shadow-sm border-0  w-100 text-center ">
                                    <h4 id="transaction-number-people-ratio-title">
                                        碳費困境區間內平均客單價
                                    </h4>
                                    <h1 class="mt-2" id="transaction-number-people-ratio">
                                        2,488.2
                                    </h1>
                                </div>
                                <div class="card  border-0 shadow-sm w-100 text-center">
                                    <h4 id="per-capta-transaction-within-range-title">
                                        有設計區間內平均客單價(排除碳費困境)
                                    </h4>
                                    <h1 class="mt-2 d-flex  justify-content-center "
                                        id="per-capta-transaction-within-range">
                                        2,881.0
                                    </h1>
                                </div>
                            </div>

                        </div>
                        <div class="mt-3">
                            <h3>
                                平均客單價
                            </h3>
                            <div class="d-flex gap-3 mt-2">
                                <div class="card shadow-sm border-0  w-100 text-center ">
                                    <h4 id="average-price-per-people-title">
                                        碳費困境區間內人均交易單量
                                    </h4>
                                    <h1 class="mt-2" id="average-price-per-people">
                                        2488.2
                                    </h1>
                                </div>
                                <div class="card  border-0 shadow-sm w-100 text-center">
                                    <h4 id="average-price-per-people-with-range-title">
                                        有設計區間內人均交易單量(排除碳費困境)
                                    </h4>
                                    <h1 class="mt-2 d-flex  justify-content-center "
                                        id="average-price-per-people-with-range">
                                        1.3
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div class="card shadow-sm border-0 mt-3 w-100 mx-auto">
                            <div id="transaction-ratio-barchart" class="pt-0  pb-3 mx-auto "
                                style="width: 100vh; height: 420px;">

                            </div>
                            <div>
                                <table class="table table-striped table-borderless h-100 mt-3">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="text-center" rowspan="2">項次 </th>
                                            <th scope="col" class="text-start border-end " rowspan="2">館別 </th>
                                            <th scope="col" class="text-center border-end border-start" colspan="4">
                                                碳費困境各館別交易狀況
                                            </th>
                                            <th scope="col" class="text-center border-end " colspan="3">
                                                有設計整體各館別交易狀況(排除碳費困境)
                                            </th>
                                            <th scope="col" class="text-center ">差異率 </th>
                                            <th scope="col" class="text-end border-start" rowspan="2">TGI</th>
                                        </tr>
                                        <tr>
                                            <th scope="col" class="text-end ">人數 </th>
                                            <th scope="col" class="text-end ">人數比例 </th>


                                            <th scope="col" class="text-end ">人均交易單量 </th>
                                            <th scope="col" class="text-end border-end">平均客單價 </th>
                                            <th scope="col" class="text-end ">人數比例 </th>
                                            <th scope="col" class="text-end ">人均交易單量 </th>
                                            <th scope="col" class="text-end border-end">平均客單價 </th>
                                            <th scope="col" class="text-end ">人數 </th>
                                        </tr>
                                    </thead>
                                    <tbody id="transaction-data-table-body"></tbody>
                                </table>

                            </div>
                            <div class="border-top">
                                <table class="table table-striped table-borderless h-100 mt-3">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="text-center border-end " style="width: 80px;"
                                                rowspan="2">項次 </th>
                                            <th scope="col" class="text-center border-end " colspan="2">
                                                賣最好的商品 ( top 25) </th>
                                            <th scope="col" class="text-center border-end border-start" colspan="2">
                                                銷售額最高的商品 ( top 25)
                                            </th>
                                        </tr>
                                        <tr>
                                            <th scope="col" class="text-start ">碳費困境 </th>
                                            <th scope="col" class="text-start border-end">有設計整體 </th>
                                            <th scope="col" class="text-start ">碳費困境 </th>
                                            <th scope=" col" class="text-start border-end">有設計整體 </th>
                                        </tr>
                                    </thead>
                                    <tbody id="transaction-products-data-table-body"></tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 訂閱 -->
        <div id="subscription-data-section" class="collapse">
            <div class="bg-grey mt-3 filter p-3 mt-3">
                <div class="d-flex align-items-center justify-content-between border-bottom">
                    <h4 class="">
                        2023-07-12 ~ 2023-10-12
                    </h4>
                    <button class="rounded-circle btn-sm rotate collapsed up p-0" data-bs-toggle="collapse"
                        data-bs-target="#list-subs-data" aria-expanded="false" type="button">
                        <i class="icon-down fs-6 "></i>
                    </button>
                </div>
                <div id="list-subs-data" class="collapse show">
                    <div class="card shadow-sm border-0  mt-3">
                        <div id="subscription-data-piechart" class="pt-0  pb-3 mx-auto "
                            style="width: 100vh; height: 320px;">

                        </div>
                    </div>
                    <div id="subscription-data">

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>