<script setup>
 
</script>

<template>
    <div>
        <div class="d-flex gap-1">
            <div class="">
                <button class="btn rounded-circle btn-sm" type="button">
                    <i class="icon-arrowback fs-6 py-1 " onclick="goback()"></i></button>
                <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1" style=" top: 100%;right: -50%;">
                    返回
                </span>
            </div>
            <h2 class="mb-0">
                經濟日報轉單新聞
            </h2>
        </div>


        <div class="ms-3 mt-3 bg-grey p-3">

            <ul id="" class="d-flex nav gap-2 fw-semibold border-bottom pb-3" role="tablist">

                <li class="nav-item">
                    <a class="tab-button-1 active rounded-1" aria-current="page" data-bs-target="#order-status-section"
                        data-bs-toggle="pill" aria-controls="news-bill-data-section" role="tab" onclick="loadOrderStatus()">
                        <span>訂單狀態</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="tab-button-1 rounded-1 px-1" data-bs-target="#demograph-section" data-bs-toggle="pill"
                        aria-controls="news-bill-data-section" role="tab" onclick="loadDemographData()">
                        <span>人口變項 </span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="tab-button-1 rounded-1 px-1" data-bs-target="#article-data-section" data-bs-toggle="pill"
                        aria-controls="news-bill-data-section" role="tab" onclick="loadArticleData()">
                        <span>文章分析 </span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="tab-button-1 rounded-1 px-1" data-bs-target="#doc-manual-section" data-bs-toggle="pill"
                        aria-controls="news-bill-data-section" role="tab" onclick="loadDocManual()">
                        <span>說明文件 </span>
                    </a>
                </li>

            </ul>
            <div class="tab-content">
                <!-- 訂單狀態 -->
                <div id="order-status-section" class="tab-pane fade show active" role="tabpanel" tabindex="0">
                    <div class="font-support mt-3">
                        GA4 資料更新時間 ： <span>2023年12月12日 上午10:53:10</span>
                    </div>
                    <div class=" d-flex gap-3 flex-wrap mt-3">
                        <div class="flex-fill">

                            <div class="shadow-sm ps-4 pe-4 pb-5 pt-3 flex-fill bg-white">
                                <div class="d-flex justify-content-end">
                                    <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                            class="lh-1 ifont icon-openMenu p-0"></i></button>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><button class="dropdown-item" type="button" onclick="">匯出</button></li>
                                        <li><button class="dropdown-item" type="button" onclick="">重設</button></li>
                                        <li><button class="dropdown-item" type="button" onclick="">排序</button></li>
                                    </ul>
                                </div>
                                <div class=" d-flex flex-column justify-content-center  border-bottom flex-fill">
                                    <div class="  d-flex flex-column flex-fill ">
                                        <div class=" text-center ">
                                            <h4>
                                                訂閱總數
                                            </h4>
                                            <h1 class="font-color-orange" style="font-size: 46px">
                                                29
                                            </h1>

                                        </div>
                                    </div>

                                </div>

                                <div id="sales-plan-chart-1" class="mx-auto" style="width: 60vh; height: 40vh;">
                                    
                                </div>

                            </div>

                            <div class="mt-3 d-flex gap-3 flex-wrap">

                                <div class="shadow-sm ps-4 pe-4 pb-5 pt-3 flex-fill bg-white">
                                    <div class="d-flex justify-content-end">
                                        <button class="lh-1 bg-transparent text-secondary p-0 m-0 "
                                            data-bs-toggle="dropdown"><i class="lh-1 ifont icon-openMenu p-0"></i></button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><button class="dropdown-item" type="button" onclick="">匯出</button></li>
                                            <li><button class="dropdown-item" type="button" onclick="">重設</button></li>
                                            <li><button class="dropdown-item" type="button" onclick="">排序</button></li>
                                        </ul>
                                    </div>
                                    <div class="  d-flex flex-column justify-content-center  border-bottom flex-fill">
                                        <div class=" text-center">
                                            <h4>
                                                自動續訂人數
                                            </h4>
                                            <h1 class="">
                                                21
                                            </h1>
                                        </div>
                                    </div>

                                    <div id="sales-plan-chart-2" class="mx-auto" style="width: 35vh; height: 40vh;">
                                    </div>

                                </div>
                                <div class="shadow-sm ps-4 pe-4 pb-5 pt-3 flex-fill bg-white">
                                    <div class="d-flex justify-content-end">
                                        <button class="lh-1 bg-transparent text-secondary p-0 m-0 "
                                            data-bs-toggle="dropdown"><i class="lh-1 ifont icon-openMenu p-0"></i></button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><button class="dropdown-item" type="button" onclick="">匯出</button></li>
                                            <li><button class="dropdown-item" type="button" onclick="">重設</button></li>
                                            <li><button class="dropdown-item" type="button" onclick="">排序</button></li>
                                        </ul>
                                    </div>
                                    <div class="  d-flex flex-column justify-content-center  border-bottom flex-fill">
                                        <div class=" text-center">
                                            <h4>
                                                自動續訂人數
                                            </h4>
                                            <h1 class="">
                                                21
                                            </h1>
                                        </div>
                                    </div>

                                    <div id="sales-plan-chart-3" class="mx-auto" style="width: 35vh; height: 40vh;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-fill d-flex flex-column gap-3 flex-wrap">
                            <div class="shadow-sm ps-4 pe-4 pb-5 pt-3 flex-fill bg-white">
                                <div class="d-flex justify-content-end">
                                    <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                            class="lh-1 ifont icon-openMenu p-0"></i></button>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><button class="dropdown-item" type="button" onclick="">匯出</button></li>
                                        <li><button class="dropdown-item" type="button" onclick="">重設</button></li>
                                        <li><button class="dropdown-item" type="button" onclick="">排序</button></li>
                                    </ul>
                                </div>
                                <div id="order-source-barchart" class="mx-auto" style="width: 35vh; height: 50vh;">
                                </div>
                            </div>
                            <div class="shadow-sm ps-4 pe-4 pb-5 pt-3 flex-fill bg-white">
                                <div class="d-flex justify-content-end">
                                    <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                            class="lh-1 ifont icon-openMenu p-0"></i></button>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><button class="dropdown-item" type="button" onclick="">匯出</button></li>
                                        <li><button class="dropdown-item" type="button" onclick="">重設</button></li>
                                        <li><button class="dropdown-item" type="button" onclick="">排序</button></li>
                                    </ul>
                                </div>
                                <div id="time-barchart" class="mx-auto" style="width: 35vh; height: 50vh;">
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 class="mt-3">訂閱趨勢圖</h3>
                    <div class="shadow-sm p-3 bg-white">
                        <div class="d-flex justify-content-end ">
                            <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                    class="lh-1 ifont icon-openMenu p-0"></i></button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><button class="dropdown-item" type="button" onclick="">匯出</button></li>
                                <li><button class="dropdown-item" type="button" onclick="">重設</button></li>
                                <li><button class="dropdown-item" type="button" onclick="">排序</button></li>
                            </ul>
                        </div>

                        <div id="subs-trend-chart" class="mx-auto" style="width: 100vh; height: 50vh;"></div>
                    </div>
                </div>
                <!-- 人口變項 -->
                <div id="demograph-section" class="tab-pane fade" role="tabpanel" tabindex="0">
                    <h3 class="mt-3">
                        人口變項
                    </h3>
                    <div class="row gap-3 px-3">
                        <div class="shadow-sm p-3 col bg-white">
                            <div class="d-flex justify-content-end ">
                                <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                        class="lh-1 ifont icon-openMenu p-0"></i></button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><button class="dropdown-item" type="button" onclick="">匯出</button></li>
                                    <li><button class="dropdown-item" type="button" onclick="">重設</button></li>
                                    <li><button class="dropdown-item" type="button" onclick="">排序</button></li>
                                </ul>
                            </div>

                            <div id="demograph-region-chart" class="mx-auto" style="width: 35vh; height: 30vh;"></div>
                        </div>
                        <div class="shadow-sm p-3 col bg-white">
                            <div class="d-flex justify-content-end ">
                                <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                        class="lh-1 ifont icon-openMenu p-0"></i></button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><button class="dropdown-item" type="button" onclick="">匯出</button></li>
                                    <li><button class="dropdown-item" type="button" onclick="">重設</button></li>
                                    <li><button class="dropdown-item" type="button" onclick="">排序</button></li>
                                </ul>
                            </div>

                            <div id="demograph-age-chart" class="mx-auto" style="width: 35vh; height: 30vh;"></div>
                        </div>
                        <div class="shadow-sm p-3 col bg-white">
                            <div class="d-flex justify-content-end ">
                                <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                        class="lh-1 ifont icon-openMenu p-0"></i></button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><button class="dropdown-item" type="button" onclick="">匯出</button></li>
                                    <li><button class="dropdown-item" type="button" onclick="">重設</button></li>
                                    <li><button class="dropdown-item" type="button" onclick="">排序</button></li>
                                </ul>
                            </div>

                            <div id="demograph-sex-chart" class="mx-auto" style="width: 35vh; height: 30vh;"></div>
                        </div>
                        <div class="shadow-sm p-3 col bg-white">
                            <div class="d-flex justify-content-end ">
                                <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                        class="lh-1 ifont icon-openMenu p-0"></i></button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><button class="dropdown-item" type="button" onclick="">匯出</button></li>
                                    <li><button class="dropdown-item" type="button" onclick="">重設</button></li>
                                    <li><button class="dropdown-item" type="button" onclick="">排序</button></li>
                                </ul>
                            </div>

                            <div id="demograph-jobs-chart" class="mx-auto" style="width: 35vh; height: 30vh;"></div>
                        </div>
                        <div class="shadow-sm p-3 col bg-white">
                            <div class="d-flex justify-content-end ">
                                <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                        class="lh-1 ifont icon-openMenu p-0"></i></button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><button class="dropdown-item" type="button" onclick="">匯出</button></li>
                                    <li><button class="dropdown-item" type="button" onclick="">重設</button></li>
                                    <li><button class="dropdown-item" type="button" onclick="">排序</button></li>
                                </ul>
                            </div>

                            <div id="demograph-device-chart" class="mx-auto" style="width: 35vh; height: 30vh;"></div>
                        </div>
                        <div class="shadow-sm p-3 col bg-white">
                            <div class="d-flex justify-content-end ">
                                <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                        class="lh-1 ifont icon-openMenu p-0"></i></button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><button class="dropdown-item" type="button" onclick="">匯出</button></li>
                                    <li><button class="dropdown-item" type="button" onclick="">重設</button></li>
                                    <li><button class="dropdown-item" type="button" onclick="">排序</button></li>
                                </ul>
                            </div>

                            <div id="demograph-platform-chart" class="mx-auto" style="width: 35vh; height: 30vh;"></div>
                        </div>
                    </div>
                </div>
                <!-- 文章分析 -->
                <div id="article-data-section" class="tab-pane fade" role="tabpanel" tabindex="0">
                    <h3 class="mt-3">
                        分析目標
                    </h3>
                    <div class="font-support mt-3">
                        訂購前，有文章瀏覽行為的訂戶，為分析母體 ( 藍框 )。
                    </div>
                    <div class=" d-flex flex-column justify-content-center mt-3 border-bottom pb-3">
                        <div
                            class="bg-white d-flex  flex-fill shadow-sm align-items-center px-5 py-3 gap-5 justify-content-center">
                            <div class="text-center">
                                <h4 class="pt-2">
                                    新訂閱人數
                                </h4>
                                <h1>
                                    1,701
                                </h1>
                            </div>
                            <div class="text-center font-b4-me">
                                =
                            </div>
                            <div class="text-center">
                                <h4 class="pt-2">
                                    直接購買人數
                                </h4>
                                <h1>
                                    1,284
                                </h1>
                            </div>
                            <div class="text-center font-b4-me">
                                +
                            </div>
                            <div class="text-center">
                                <h4 class="pt-2">
                                    黑名單購買人數
                                </h4>
                                <h1>
                                    5
                                </h1>
                            </div>
                            <div class="text-center font-b4-me">
                                +
                            </div>
                            <div class="text-center">
                                <h4 class="pt-2">
                                    閱讀後購買 ( 含新會員 <b class="text-danger">52</b> )
                                </h4>
                                <h1 class="font-color-orange">
                                    421
                                </h1>
                            </div>
                        </div>
                    </div>
                    <h3 class="mt-3">
                        熱門文章
                    </h3>
                    <div class="d-flex flex-wrap gap-3">
                        <div class="shadow-sm p-3 flex-fill bg-white">
                            <div class="d-flex justify-content-end ">
                                <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                        class="lh-1 ifont icon-openMenu p-0"></i></button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><button class="dropdown-item" type="button" onclick="">匯出</button></li>
                                    <li><button class="dropdown-item" type="button" onclick="">重設</button></li>
                                    <li><button class="dropdown-item" type="button" onclick="">排序</button></li>
                                </ul>
                            </div>

                            <div id="article-type-chart" class="mx-auto" style="width: 45vh; height: 50vh;">

                            </div>
                        </div>
                        <div class="shadow-sm p-3 flex-fill bg-white">
                            <div class="d-flex justify-content-end ">
                                <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                        class="lh-1 ifont icon-openMenu p-0"></i></button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><button class="dropdown-item" type="button" onclick="">匯出</button></li>
                                    <li><button class="dropdown-item" type="button" onclick="">重設</button></li>
                                    <li><button class="dropdown-item" type="button" onclick="">排序</button></li>
                                </ul>
                            </div>

                            <div id="article-tag-chart" class="mx-auto" style="width: 45vh; height: 50vh;">

                            </div>
                        </div>
                        <div class="shadow-sm p-3 flex-fill bg-white">
                            <div class="d-flex justify-content-end flex-wrap">
                                <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                        class="lh-1 ifont icon-openMenu p-0"></i></button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><button class="dropdown-item" type="button" onclick="">匯出</button></li>
                                    <li><button class="dropdown-item" type="button" onclick="">重設</button></li>
                                    <li><button class="dropdown-item" type="button" onclick="">排序</button></li>
                                </ul>
                            </div>

                            <div id="article-type-chart-2" class="mx-auto" style="width: 30vh; height: 45vh;">

                            </div>
                        </div>
                    </div>
                    <div class="mt-3">
                        <div class=" mb-2 d-flex justify-content-end">
                            <div class="d-flex align-items-end">
                                <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                        class="lh-1 ifont icon-openMenu p-0"></i></button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><button class="dropdown-item" type="button" onclick="">匯出</button></li>
                                    <li><button class="dropdown-item" type="button" onclick="">重設</button></li>
                                </ul>
                            </div>
                        </div>
                        <table class="table table-striped ">
                            <thead>
                                <tr>

                                    <th scope="col" class="text-start">熱門文章標題 <button
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                onclick=""></i></button></th>
                                    <th scope="col" class="text-start">文章 ID <button
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                onclick=""></i></button></th>
                                    <th scope="col" class="text-start">文章類別 <button
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                onclick=""></i></button></th>
                                    <th scope="col" class="text-start">文章標籤<button
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                onclick=""></i></button> </th>
                                    <th scope="col" class="text-start">文章類型<button
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                onclick=""></i></button> </th>
                                    <th scope="col" class="text-start">作者<button
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                onclick=""></i></button> </th>

                                    <th scope="col" class="text-center">轉單日期<button
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                onclick=""></i></button> </th>
                                    <th scope="col" class="text-end">當日 PV 總數<button
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                onclick=""></i></button> </th>
                                    <th scope="col" class="text-end">當日 PV 排行<button
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                onclick=""></i></button> </th>
                                    <th scope="col" class="text-end">轉單 PV 數<button
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                onclick=""></i></button> </th>
                                </tr>
                            </thead>
                            <tbody id="article-analysis-table-body">

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
                </div>
                <div id="doc-manual-section" class="tab-pane fade" role="tabpanel" tabindex="0">
                    <h3 class="mt-3">
                        報表邏輯說明
                    </h3>
                    <div class="d-flex gap-3 flex-wrap border-bottom pb-4">
                        <div class="d-flex flex-column gap-3 p-4 card shadow-sm border-0 flex-fill" style="width: 30vh;">
                            <div class="rounded-circle border d-flex justify-content-center align-items-center"
                                style="width: 3rem;height: 3rem;">
                                <h4 class="font-support mb-0">
                                    1
                                </h4>
                                <div class="card-title">

                                </div>
                            </div>
                            <div class="font-b4-he">
                                轉單新聞 DashBoard 的 【自動續訂】和【新訂閱】人數，為參照數位產品管理平台邏輯。
                            </div>
                        </div>
                        <div class="d-flex flex-column gap-3 p-4 card shadow-sm border-0 flex-fill" style="width: 30vh;">
                            <div class="rounded-circle border d-flex justify-content-center align-items-center"
                                style="width: 3rem;height: 3rem;">
                                <h4 class="font-support mb-0">
                                    2
                                </h4>
                                <div class="card-title">

                                </div>
                            </div>
                            <div class="font-b4-he">
                                係利用 RR 訂單資料，找出【訂購成功】的 ACNO，在透過 ACNO 至 GA4 尋找訂購當前工作階段的瀏覽行為。
                            </div>
                        </div>
                        <div class="d-flex flex-column gap-3 p-4 card shadow-sm border-0 flex-fill" style="width: 30vh;">
                            <div class="rounded-circle border d-flex justify-content-center align-items-center"
                                style="width: 3rem;height: 3rem;">
                                <h4 class="font-support mb-0">
                                    3
                                </h4>
                                <div class="card-title">

                                </div>
                            </div>
                            <div class="font-b4-he">
                                報表內的人口變項，資料來源屬會員註冊時所填入的資訊。
                            </div>
                        </div>
                        <div class="d-flex flex-column gap-3 p-4 card shadow-sm border-0 flex-fill" style="width: 30vh;">
                            <div class="rounded-circle border d-flex justify-content-center align-items-center"
                                style="width: 3rem;height: 3rem;">
                                <h4 class="font-support mb-0">
                                    4
                                </h4>
                                <div class="card-title">

                                </div>
                            </div>
                            <div class="font-b4-he">
                                報表僅針對【訂購成功的會員】進行數據撈取，會員在未登入時，其文章瀏覽行為，暫不在此範圍。
                            </div>
                        </div>
                        <div class="d-flex flex-column gap-3 p-4 card shadow-sm border-0 flex-fill" style="width: 30vh;">
                            <div class="rounded-circle border d-flex justify-content-center align-items-center"
                                style="width: 3rem;height: 3rem;">
                                <h4 class="font-support mb-0">
                                    5
                                </h4>
                                <div class="card-title">

                                </div>
                            </div>
                            <div class="font-b4-he">
                                文章分析頁 - 欄位說明
                                <li>
                                    直接購買人數 --> 新訂閱者，未閱讀文章，直接訂閱 ( 包含聯合報聯賣 provider = 1 )
                                </li>
                                <li>
                                    黑名單購買人數 --> 新訂閱者，為黑名單
                                </li>
                                <li>
                                    閱讀後購買人數 (含新會員) --> 新訂閱者，閱讀文章後訂閱 ( 包含當日註冊即訂閱的會員 )
                                </li>
                                <li>
                                    ( * 新會員 ) --> 新訂閱者，閱讀文章後訂閱，註冊日與訂閱日相同的新會員
                                </li>
                            </div>
                        </div>
                    </div>
                    <h3 class="mt-3">
                        異動調整紀錄
                    </h3>
                    <div class="d-flex gap-3 flex-wrap border-bottom pb-4">
                        <div class="d-flex flex-column gap-3 p-4 card shadow-sm border-0 flex-fill" style="width: 40vh;">
                            <div class="rounded-circle border d-flex justify-content-center align-items-center"
                                style="width: 3rem;height: 3rem;">
                                <h4 class="font-support mb-0">
                                    1
                                </h4>
                                <div class="card-title">

                                </div>
                            </div>
                            <div class="font-b4-he">
                                訂單狀態新增聯合報聯賣 ( provider = 1 )，為便利區別，方案命名為 【 聯賣方案 (聯合報) 】2023/08/21
                            </div>
                        </div>
                        <div class="d-flex flex-column gap-3 p-4 card shadow-sm border-0 flex-fill" style="width: 40vh;">
                            <div class="rounded-circle border d-flex justify-content-center align-items-center me-auto"
                                style="width: 3rem;height: 3rem;">
                                <h4 class="font-support mb-0">
                                    2
                                </h4>

                            </div>
                            <div class="font-b4-he d-flex flex-column justify-content-between flex-fill">
                                <div>
                                    處理同一分鐘內，重複閱讀的文章 ( 文章 A、D判定後才處置，不影響文章 A、D順序 ) 2023/08/21
                                </div>

                                <div>
                                    <img src="../../public/img/f449849e-581f-4b91-a484-b779cf9ccdef.jpg" alt=""
                                        class="img-fluid">
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-column gap-3 p-4 card shadow-sm border-0 flex-fill " style="width: 40vh;">
                            <div class="rounded-circle border d-flex justify-content-center align-items-center"
                                style="width: 3rem;height: 3rem;">
                                <h4 class="font-support mb-0">
                                    3
                                </h4>
                                <div class="card-title">

                                </div>
                            </div>
                            <div class="font-b4-he">
                                版面調整 - 因黑名單( 測試帳號 )，會導致轉單的文章行為判讀失真，故文章分析頁的內容，不包含黑名單帳號的瀏覽。黑名單數採
                                另外揭露，以利數據比對 2023/08/21
                                <div class="mt-3">
                                    <img src="../../public/img/f449849e-581f-4b91-a484-b779cf9ccdef.jpg" alt=""
                                        class="img-fluid">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 d-flex gap-3 justify-content-center">
                        <div>
                            <img src="../../public/img/38b72f92-a72d-4d97-84b9-7abeed18e847.png" alt=""
                                class="img-thumbnail border-0" style="width:100px;height:100px">
                        </div>
                        <div>
                            <p> 報表維護：DDD 數據發展部 郭奕璋 ( YC )</p>
                            <p>電子郵件：yichang.kuo@udngroup.com</p>
                            <p>分機號碼：2502</p>
                        </div>
                    </div>
                    <div class="mt-3 text-center">
                        <h4>有任何問題，或者有新的想像，請不要吝嗇與我聯繫。Thanks :)</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>