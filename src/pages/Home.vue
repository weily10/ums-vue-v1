<script setup>
import { ref } from 'vue';
import customChart from '../components/Chart.vue'


const articleTableData = ref([{
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
}])


const option = ref({
    legend: {
        bottom: 0,
        left: 'center',

    },
    tooltip: {
        trigger: 'item',
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {},
        }
    },
    title: {
        text: '',
        subtext: '',
        left: 'center',
    },
    dataset: {
        source: [
            ['product', '瀏覽量', '文章瀏覽量', '互動事件量'],
            ['2023年11月27日', 103010, 75000, 230654],
            ['2023年11月28日', 810300, 730004, 230654],
            ['2023年11月29日', 23864, 65214, 42145],
            ['2023年11月30日', 633219, 74249, 421412],
        ],
    },
    xAxis: {
        type: 'category',

    },
    yAxis: {

    },

    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
})





</script>

<template>
    <div class="ps-2">
        <div class=" d-flex border-bottom gap-3 d-flex flex-wrap py-2">
            <div class="pb-2 me-auto">
                <ul class="d-flex nav gap-2 fw-semibold " role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="tab-button-1 rounded-1 active" aria-current="page" data-bs-target="#home-overview"
                            data-bs-toggle="pill" aria-selected="false" role="tab" tabindex="-1">
                            <span>總攬</span>
                        </a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="tab-button-1 rounded-1 px-1 " data-bs-target="#events-details" data-bs-toggle="pill"
                            aria-selected="true" role="tab">
                            <span>​事件詳情</span>
                        </a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="tab-button-1 rounded-1 px-1" data-bs-target="#article-details" data-bs-toggle="pill"
                            aria-selected="true" role="tab">
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
                        <div class="shadow-sm card border-0 ps-3 pe-3 pb-2 pt-3 d-flex flex-column flex-grow-1">
                            <div class=" text-center">
                                <div class="text-danger text-end">
                                    <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                        <span class="border border-danger rounded p-1">
                                            <i class="icon-double-down"></i>
                                            <span class="ps-1 font-support text-danger ">
                                                -12%</span>
                                        </span>
                                        <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
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
                        <div class="shadow-sm card border-0 ps-3 pe-3 pb-2 pt-3 d-flex flex-column flex-grow-1">
                            <div class=" text-center">
                                <div class="text-success text-end">
                                    <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                        <span class="border border-success rounded p-1">
                                            <i class="icon-double-up"></i>
                                            <span class="ps-1 font-support text-success ">
                                                8,9%</span>
                                        </span>
                                        <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
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
                        <div class="shadow-sm card border-0 ps-3 pe-3 pb-2 pt-3 d-flex flex-column flex-grow-1">
                            <div class=" text-center">
                                <div class="text-success text-end">
                                    <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                        <span class="border border-success rounded p-1">
                                            <i class="icon-double-up"></i>
                                            <span class="ps-1 font-support text-success ">
                                                12,8%</span>
                                        </span>
                                        <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
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
                        <div class="d-flex gap-3 mt-3 card border-0 shadow-sm flex-fill" style="width: 450px;">
                            <div class="flex-fill pb-4 d-flex flex-column  border-bottom">
                                <div class="text-center">

                                    <h4>
                                        每日新增會員數

                                    </h4>
                                    <h1 class="mb-0">
                                        1,568.0
                                    </h1>
                                    <div class="text-success mt-3 ">
                                        <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                            <span class="border border-success rounded p-1">
                                                <i class="icon-double-up"></i>
                                                <span class="ps-1 font-support text-success ">
                                                    12,8%</span>
                                            </span>
                                            <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                                style=" top:106%;right: -10%;">
                                                對比上個時段
                                            </span>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div>
                                <div id="daily-trend-bar-chart" class="charts">
                                    <custom-chart :option="option"></custom-chart>
                                </div>
                            </div>

                        </div>
                        <div class="d-flex gap-3 mt-3 card border-0 shadow-sm flex-fill" style="width:450px">
                            <div class="flex-fill pb-4 d-flex flex-column  border-bottom">
                                <div class="text-center">
                                    <h4>
                                        UDN 到站會員數
                                    </h4>
                                    <h1 class="mb-0">
                                        11.8萬
                                    </h1>
                                    <div class="text-success mt-3 ">
                                        <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                            <span class="border border-success rounded p-1">
                                                <i class="icon-double-up"></i>
                                                <span class="ps-1 font-support text-success ">
                                                    14,8%</span>
                                            </span>
                                            <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                                style=" top:106%;right: -10%;">
                                                對比上個時段
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div>
                                <custom-chart :option="option"></custom-chart>
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
                                    <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                        <span class="border border-success rounded p-1">
                                            <i class="icon-double-up"></i>
                                            <span class="ps-1 font-support text-success ">
                                                12,8%</span>
                                        </span>
                                        <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                            style=" top:106%;right: -10%;">
                                            對比上個時段
                                        </span>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div>
                            <custom-chart :option="option"></custom-chart>
                        </div>

                    </div>
                    <div id="cards-area-1" class="d-flex gap-3 mt-3 flex-wrap">
                        <div class="card border-0 shadow-sm ps-3 pe-3 pb-2 pt-3 d-flex flex-column flex-fill">
                            <div class=" text-center">
                                <div class="text-danger text-end">
                                    <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                        <span class="border border-danger rounded p-1">
                                            <i class="icon-double-down"></i>
                                            <span class="ps-1 font-support text-danger ">
                                                -12%</span>
                                        </span>
                                        <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
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
                        <div class="card border-0 shadow-sm ps-3 pe-3 pb-2 pt-3 d-flex flex-column flex-fill">
                            <div class=" text-center">
                                <div class="text-success text-end">
                                    <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                        <span class="border border-success rounded p-1">
                                            <i class="icon-double-up"></i>
                                            <span class="ps-1 font-support text-success ">
                                                8,9%</span>
                                        </span>
                                        <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
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
                        <div class="card border-0 shadow-sm ps-3 pe-3 pb-2 pt-3 d-flex flex-column flex-fill">
                            <div class=" text-center">
                                <div class="text-success text-end">
                                    <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                        <span class="border border-success rounded p-1">
                                            <i class="icon-double-up"></i>
                                            <span class="ps-1 font-support text-success ">
                                                12,8%</span>
                                        </span>
                                        <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
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
                        <div class="charts" id="event-day-trends-barchart" style="width: 100%; height: 35dvh;">

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
                            <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                    class="icon-openMenu fs-4"></i></button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><button class="dropdown-item" type="button" @click="">Export</button>
                                </li>
                                <li>
                                <li><button class="dropdown-item" type="button" @click="">Redefine</button>
                                </li>
                                </li>
                                <li>
                                <li><button class="dropdown-item" type="button" @click="">Explore</button>
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
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                @click=""></i></button>
                                    </th>
                                    <th scope="col" class="text-start">文章標題 <button
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                @click=""></i></button>
                                    </th>
                                    <th scope="col" class="text-start">網站 <button
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                @click=""></i></button>
                                    </th>
                                    <th scope="col" class="text-end">瀏覽量<button
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                @click=""></i></button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody id="article-rank-table-body">
                                <template v-for="(item, index) in articleTableData" :key="index">
                                    <tr>
                                        <td> {{ item.number }}</td>
                                        <td> {{ item.articleID }}</td>
                                        <td>{{ item.articleTitle }}</td>
                                        <td>{{ item.website }}</td>
                                        <td class="text-end">{{ item.accessQtd }}</td>
                                    </tr>
                                </template>
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
                                <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                        class="lh-1 ifont icon-openMenu p-0"></i></button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><button class="dropdown-item" type="button" @click="">Export</button>
                                    </li>
                                    <li>
                                    <li><button class="dropdown-item" type="button" @click="">Redefine</button>
                                    </li>
                                    </li>
                                    <li>
                                    <li><button class="dropdown-item" type="button" @click="">Explore</button>
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
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                @click=""></i></button>
                                    </th>
                                    <th scope="col" class="text-start">文章標題 <button
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                @click=""></i></button>
                                    </th>
                                    <th scope="col" class="text-start">網站 <button
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                @click=""></i></button>
                                    </th>
                                    <th scope="col" class="text-end">瀏覽量<button
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                @click=""></i></button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody id="member-article-rank-table-body">
                                <template v-for="(item, index) in articleTableData" :key="index">
                                    <tr>
                                        <td> {{ item.number }}</td>
                                        <td> {{ item.articleID }}</td>
                                        <td>{{ item.articleTitle }}</td>
                                        <td>{{ item.website }}</td>
                                        <td class="text-end">{{ item.accessQtd }}</td>
                                    </tr>
                                </template>
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
                                <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                        class="lh-1 ifont icon-openMenu p-0"></i></button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><button class="dropdown-item" type="button" @click="">Export</button>
                                    </li>
                                    <li>
                                    <li><button class="dropdown-item" type="button" @click="">Redefine</button>
                                    </li>
                                    </li>
                                    <li>
                                    <li><button class="dropdown-item" type="button" @click="">Explore</button>
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
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                @click=""></i></button>
                                    </th>
                                    <th scope="col" class="text-start">文章標題 <button
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                @click=""></i></button>
                                    </th>
                                    <th scope="col" class="text-start">網站 <button
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                @click=""></i></button>
                                    </th>
                                    <th scope="col" class="text-end">瀏覽量<button
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                @click=""></i></button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                <template v-for="(item, index) in articleTableData" :key="index">
                                    <tr>
                                        <td> {{ item.number }}</td>
                                        <td> {{ item.articleID }}</td>
                                        <td>{{ item.articleTitle }}</td>
                                        <td>{{ item.website }}</td>
                                        <td class="text-end">{{ item.accessQtd }}</td>
                                    </tr>
                                </template>

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
</template>