<script setup>

</script>
<template>
    <div>
        <div class="d-flex justify-content-between align-items-end">
            <div class="d-flex align-items-center gap-1">
                <button class="btn rounded-circle btn-sm" type="button" onclick="goback()">
                    <i class="bi bi-arrow-left fs-6 py-1 "></i></button>
                <h2 class="mb-0">​總覽 (經濟日報)</h2>
            </div>
            <div class="align-self-end">
                <button class="btn primary text-body-light">
                    下載
                </button>
            </div>
        </div>
        <div class="p-3 bg-grey  mt-3">
            <div class="border-bottom pb-4">
                <h3>
                    UDN 會員
                </h3>
                <div class="d-flex flex-wrap mt-3 gap-3 ">
                    <div class="d-flex  gap-3 flex-wrap flex-fill " style="width: 60dvh;">
                        <div class="shadow-sm ps-3 pe-3 pb-2 pt-3 d-flex flex-column  flex-fill bg-white"
                            style="width: 30dvh;">
                            <div class=" text-center">
                                <div class="text-danger text-end">
                                    <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                        <span class="border border-danger rounded p-1">
                                            <i class="icon-double-down"></i>
                                            <span class="ps-1 font-support text-danger "> -12%</span>
                                        </span>
                                        <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                            style=" top:106%;right: -10%;">
                                            對比上個時段
                                        </span>
                                    </div>

                                </div>
                                <h4 class="mt-2">
                                    有效會員數
                                </h4>
                                <h1 class="mb-0">
                                    3746.7萬
                                </h1>
                            </div>
                            <span class="font-support mt-auto ">
                                * 對比上個時段
                            </span>
                        </div>
                        <div class=" shadow-sm ps-3 pe-3 pb-2 pt-3 d-flex flex-column  flex-fill bg-white"
                            style="width: 30dvh;">
                            <div class=" text-center">
                                <div class="text-success text-end">
                                    <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                        <span class="border border-success rounded p-1">
                                            <i class="icon-double-up"></i>
                                            <span class="ps-1 font-support text-success "> 8,9%</span>
                                        </span>
                                        <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                            style=" top:106%;right: -10%;">
                                            對比上個時段
                                        </span>
                                    </div>

                                </div>
                                <h4 class="mt-2">
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
                        <div class=" shadow-sm ps-3 pe-3 pb-2 pt-3 d-flex flex-column  flex-fill  bg-white"
                            style="width: 30dvh;">
                            <div class=" text-center">
                                <div class="text-success text-end">
                                    <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                        <span class="border border-success rounded p-1">
                                            <i class="icon-double-up"></i>
                                            <span class="ps-1 font-support text-success "> 12,8%</span>
                                        </span>
                                        <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                            style=" top:106%;right: -10%;">
                                            對比上個時段
                                        </span>
                                    </div>

                                </div>
                                <h4 class="mt-2">
                                    EMAIL 完成驗證數
                                </h4>
                                <h1 class="mb-0">
                                    2,576.6萬
                                </h1>
                            </div>
                            <span class="font-support mt-auto">
                                * 對比上個時段
                            </span>
                        </div>
                        <div class=" shadow-sm ps-3 pe-3 pb-2 pt-3 d-flex flex-column  flex-fill  bg-white"
                            style="width: 30dvh;">
                            <div class=" text-center">
                                <div class="text-success text-end">
                                    <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                        <span class="border border-success rounded p-1">
                                            <i class="icon-double-up"></i>
                                            <span class="ps-1 font-support text-success "> 1,8%</span>
                                        </span>
                                        <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                            style=" top:106%;right: -10%;">
                                            每日新增會員數

                                        </span>
                                    </div>

                                </div>
                                <h4 class="mt-2">
                                    EMAIL 完成驗證數
                                </h4>
                                <h1 class="mb-0">
                                    1.3萬
                                </h1>
                            </div>
                            <span class="font-support mt-auto">
                                * 對比上個時段
                            </span>
                        </div>
                    </div>
                    <div class="card shadow-sm border-0  flex-fill " style="width: 70vh;">
                        <div id="dailynews-chart" class="charts mx-auto" style="width: 100%; height: 35dvh;">
                        </div>
                    </div>
                </div>
            </div>

            <div class="pb-4 mt-3">
                <h3>
                    焦點事件
                </h3>
                <div class="d-flex flex-wrap mt-3 gap-3 ">
                    <div class="card shadow-sm border-0  flex-fill " style="width: 70dvh;">
                        <div id="event-chart" class="charts" style="width: 100%; height: 35dvh;">
                        </div>
                    </div>
                    <div class="d-flex  gap-3 flex-wrap flex-fill " style="width: 60dvh;">
                        <div class="bg-white shadow-sm ps-3 pe-3 pb-2 pt-3 d-flex flex-column  flex-fill "
                            style="width: 30dvh;">
                            <div class=" text-center">
                                <div class="text-danger text-end">
                                    <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                        <span class="border border-danger rounded p-1">
                                            <i class="icon-double-down"></i>
                                            <span class="ps-1 font-support text-danger "> -12%</span>
                                        </span>
                                        <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                            style=" top:106%;right: -10%;">
                                            對比上個時段
                                        </span>
                                    </div>

                                </div>
                                <h4 class="mt-2">
                                    瀏覽量
                                </h4>
                                <h1 class="mb-0">
                                    374萬
                                </h1>
                            </div>
                            <div class="d-flex justify-content-between  mt-auto">
                                <span class="font-support ">
                                    * 對比上個時段
                                </span>
                                <div class="position-relative fw-semibold  hover-label ">
                                    <i class="icon-qa"></i>
                                    <span class="custom-tooltip-2 rounded p-1 position-absolute">
                                        排除正在訂閱經濟日報或聯合報之會員
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div class=" shadow-sm ps-3 pe-3 pb-2 pt-3 d-flex flex-column  flex-fill  bg-white"
                            style="width: 30dvh;">
                            <div class=" text-center">
                                <div class="text-success text-end">
                                    <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                        <span class="border border-success rounded p-1">
                                            <i class="icon-double-up"></i>
                                            <span class="ps-1 font-support text-success "> 8,9%</span>
                                        </span>
                                        <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                            style=" top:106%;right: -10%;">
                                            對比上個時段
                                        </span>
                                    </div>

                                </div>
                                <h4 class="mt-2">
                                    類別頁瀏覽量
                                </h4>
                                <h1 class="mb-0">
                                    24萬
                                </h1>
                            </div>
                            <span class="font-support mt-auto ">
                                * 瀏覽內容限制為文章
                            </span>
                        </div>
                        <div class=" shadow-sm ps-3 pe-3 pb-2 pt-3 d-flex flex-column  flex-fill  bg-white"
                            style="width: 30dvh;">
                            <div class=" text-center">
                                <div class="text-success text-end">
                                    <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                        <span class="border border-success rounded p-1">
                                            <i class="icon-double-up"></i>
                                            <span class="ps-1 font-support text-success "> 12,8%</span>
                                        </span>
                                        <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                            style=" top:106%;right: -10%;">
                                            對比上個時段
                                        </span>
                                    </div>

                                </div>
                                <h4 class="mt-2">
                                    文章瀏覽量
                                </h4>
                                <h1 class="mb-0">
                                    166萬
                                </h1>
                            </div>
                            <span class="font-support mt-auto">
                                * 對比上個時段
                            </span>
                        </div>
                        <div class=" shadow-sm ps-3 pe-3 pb-2 pt-3 d-flex flex-column  flex-fill  bg-white"
                            style="width: 30dvh;">
                            <div class=" text-center">
                                <div class="text-success text-end">
                                    <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                        <span class="border border-success rounded p-1">
                                            <i class="icon-double-up"></i>
                                            <span class="ps-1 font-support text-success "> 1,8%</span>
                                        </span>
                                        <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                            style=" top:106%;right: -10%;">
                                            每日新增會員數

                                        </span>
                                    </div>

                                </div>
                                <h4 class="mt-2">
                                    互動事件量
                                </h4>
                                <h1 class="mb-0">
                                    1121萬
                                </h1>
                            </div>
                            <div class="d-flex justify-content-between  mt-auto">
                                <span class="font-support ">
                                    * 對比上個時段
                                </span>
                                <div class="position-relative fw-semibold  hover-label ">
                                    <i class=" icon-qa"></i>
                                    <span class="custom-tooltip-2 rounded p-1 position-absolute">
                                        排除正在訂閱經濟日報或聯合報之會員
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


        <div class="mt-3">
            <h2 class="mb-0">​事件詳情</h2>
            <div class="p-3 bg-grey  mt-3">
                <div class="">
                    <h3>
                        事件日趨勢
                    </h3>
                    <div class="card shadow-sm border-0  flex-fill " style="width: 100%;">
                        <div id="day-trend-chart" class="charts" style="width: 100%; height:40dvh;">
                        </div>
                    </div>
                </div>
                <div class="d-flex gap-3 mt-3 flex-wrap">
                    <div class="card shadow-sm border-0  flex-fill " style="width: 40dvh; ">
                        <div id="percentage-views-chart" class="charts" style="width: 100%; height: 35dvh;">
                        </div>
                    </div>
                    <div class="card shadow-sm border-0  flex-fill " style="width: 40dvh; ">
                        <div id="share-views-chart" class="charts" style="width: 100%; height: 35dvh;">
                        </div>
                    </div>
                    <div class="card shadow-sm border-0  flex-fill " style="width: 40dvh; ">
                        <div id="proportion-events-chart" class="charts" style="width: 100%; height: 35dvh;">
                        </div>
                    </div>
                </div>
                <div class="d-flex gap-3 mt-3 flex-wrap">
                    <div class="card shadow-sm border-0  flex-fill pt-3 pe-3" style="width: 40dvh;">
                        <div class="d-flex justify-content-end">
                            <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                    class="lh-1 ifont icon-openMenu p-0"></i></button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><button class="dropdown-item" type="button" onclick="">排序</button></li>
                            </ul>
                        </div>
                        <div id="browsers-chart" class="charts" style="width: 100%; height: 35dvh;">
                        </div>
                    </div>
                    <div class="card shadow-sm border-0  flex-fill pt-3 pe-3" style="width: 40dvh;">
                        <div class="d-flex justify-content-end">
                            <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                    class="lh-1 ifont icon-openMenu p-0"></i></button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><button class="dropdown-item" type="button" onclick="">排序</button></li>
                            </ul>
                        </div>
                        <div id="android-device-chart" class="charts" style="width: 100%; height: 35dvh;">
                        </div>
                    </div>
                    <div class="card shadow-sm border-0  flex-fill pt-3 pe-3" style="width: 40dvh;">
                        <div class="d-flex justify-content-end">
                            <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                    class="lh-1 ifont icon-openMenu p-0"></i></button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><button class="dropdown-item" type="button" onclick="">排序</button></li>
                            </ul>
                        </div>
                        <div id="apple-device-chart" class="charts" style="width: 100%; height: 35dvh;">
                        </div>
                    </div>
                </div>
            </div>
            <h2 class="mt-3">​文章詳情</h2>
            <div class="bg-grey mt-3 p-3">
                <div class="border-bottom pb-4">
                    <div class="d-flex gap-3 align-items-center">
                        <h3>類別瀏覽排行</h3>
                        <div class="position-relative fw-semibold  hover-label ">
                            <i class="icon-qa"></i>
                            <span class="custom-tooltip-2 rounded p-1 position-absolute">
                                排除正在訂閱經濟日報或聯合報之會員
                            </span>
                        </div>
                    </div>

                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th></th>
                                <th scope="col" class="text-start">類別
                                    <button class="bg-transparent rounded-circle p-0 text-white">
                                        <i class="icon-sequence" onclick=""></i>
                                    </button>
                                </th>
                                <th scope="col" class="text-start">網站
                                    <button class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                            onclick=""></i></button>
                                </th>
                                <th scope="col" class="text-end">瀏覽量
                                    <button class="bg-transparent rounded-circle p-0 text-white">
                                        <i class="icon-sequence" onclick=""></i></button>
                                </th>
                            </tr>
                        </thead>
                        <tbody id="category-browsing-table-body">

                        </tbody>
                    </table>
                    <div class="d-flex justify-content-between">
                        <div class="font-support align-text-top">
                            共 <span id="">3</span> 筆資料
                        </div>
                        <div class="d-flex justify-content-center align-items-center">

                            <div class="btn-group me-2" role="group" aria-label="Second group">
                                <button type="button" class="pagination-btn btn fs-5 p-0"><i class="icon-left"></i></button>

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
                <div class='mt-3 border-bottom pb-4'>
                    <h3>
                        文章瀏覽排行
                    </h3>
                    <table class="table table-striped ">
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th scope="col" class="text-start">文章 ID <button
                                        class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                            onclick=""></i></button></th>
                                <th scope="col" class="text-start">文章標題 <button
                                        class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                            onclick=""></i></button></th>
                                <th scope="col" class="text-start">網站 <button
                                        class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                            onclick=""></i></button></th>
                                <th scope="col" class="text-end">瀏覽量<button
                                        class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                            onclick=""></i></button> </th>
                            </tr>
                        </thead>
                        <tbody id="article-access-table-body">

                        </tbody>
                    </table>
                    <div class="d-flex justify-content-between">
                        <div class="font-support align-text-top">
                            共 <span id="">3</span> 筆資料
                        </div>
                        <div class="d-flex justify-content-center align-items-center">

                            <div class="btn-group me-2" role="group" aria-label="Second group">
                                <button type="button" class="pagination-btn btn fs-5 p-0"><i class="icon-left"></i></button>

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
                <div class='mt-3 border-bottom pb-4'>
                    <h3>
                        (會員) 文章瀏覽排行
                    </h3>
                    <table class="table table-striped ">
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th scope="col" class="text-start">文章 ID <button
                                        class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                            onclick=""></i></button></th>
                                <th scope="col" class="text-start">文章標題 <button
                                        class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                            onclick=""></i></button></th>
                                <th scope="col" class="text-start">網站 <button
                                        class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                            onclick=""></i></button></th>
                                <th scope="col" class="text-end">瀏覽量<button
                                        class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                            onclick=""></i></button> </th>
                            </tr>
                        </thead>
                        <tbody id="overview-article-rank-table-body">

                        </tbody>
                    </table>

                    <div class="d-flex justify-content-between">
                        <div class="font-support align-text-top">
                            共 <span id="">3</span> 筆資料
                        </div>
                        <div class="d-flex justify-content-center align-items-center">

                            <div class="btn-group me-2" role="group" aria-label="Second group">
                                <button type="button" class="pagination-btn btn fs-5 p-0"><i class="icon-left"></i></button>

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
                <div class='mt-3 '>
                    <h3>
                        (訂戶) 文章瀏覽排行
                    </h3>
                    <table class="table table-striped ">
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th scope="col" class="text-start">文章 ID <button
                                        class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                            onclick=""></i></button></th>
                                <th scope="col" class="text-start">文章標題 <button
                                        class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                            onclick=""></i></button></th>
                                <th scope="col" class="text-start">網站 <button
                                        class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                            onclick=""></i></button></th>
                                <th scope="col" class="text-end">瀏覽量<button
                                        class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                            onclick=""></i></button> </th>
                            </tr>
                        </thead>
                        <tbody id="overview-subs-article-rank-table-body">

                        </tbody>
                    </table>

                    <div class="d-flex justify-content-between">
                        <div class="font-support align-text-top">
                            共 <span id="">3</span> 筆資料
                        </div>
                        <div class="d-flex justify-content-center align-items-center">

                            <div class="btn-group me-2" role="group" aria-label="Second group">
                                <button type="button" class="pagination-btn btn fs-5 p-0"><i class="icon-left"></i></button>

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
        </div>
    </div>
</template>