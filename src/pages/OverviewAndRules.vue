<script setup>
import { ref } from "vue"


let overviewData = ref([])
let data1 = ref([])
let data2 = ref([])

overviewData.value = [{
    title: '(一) 基本屬性',
    items: [
        {
            text: "個類別項目",
            number: 3
        },
        {
            text: "個標籤種類 ( 全網 )",
            number: 438
        },
        {
            text: "個標籤數量 ( 待估 )",
            number: 0
        },
        {
            text: "位貼標會員數",
            number: 0
        },
        {
            text: "位貼標會員數 (不重複)",
            number: 0
        },
    ]
},
{
    title: '(二) 行為特徵',
    items: [
        {
            text: "個類別項目",
            number: 3
        },
        {
            text: "個標籤種類 ( 全網 )",
            number: 1457
        },
        {
            text: "個標籤數量 ( 待估 )",
            number: 0
        },
        {
            text: "位貼標會員數",
            number: 0
        },
        {
            text: "位貼標會員數 (不重複)",
            number: 0
        },
    ]
},
{
    title: '(三) 內容偏好',
    items: [
        {
            text: "個類別項目",
            number: 7
        },
        {
            text: "個標籤種類 ( 全網 )",
            number: 775
        },
        {
            text: "個標籤數量 ( 待估 )",
            number: 0
        },
        {
            text: "位貼標會員數",
            number: 0
        },
        {
            text: "位貼標會員數 (不重複)",
            number: 0
        },
    ]
},
{
    title: '(四) 股票與投資偏好',
    items: [
        {
            text: "個類別項目",
            number: 2
        },
        {
            text: "個標籤種類 ( 全網 )",
            number: 12
        },
        {
            text: "個標籤數量 ( 待估 )",
            number: 0
        },
        {
            text: "位貼標會員數",
            number: 0
        },
        {
            text: "位貼標會員數 (不重複)",
            number: 0
        },
    ]
},
{
    title: '(五) 產品扁好',
    items: [
        {
            text: "個類別項目",
            number: 11
        },
        {
            text: "個標籤種類 ( 全網 )",
            number: 634
        },
        {
            text: "個標籤數量 ( 待估 )",
            number: 0
        },
        {
            text: "位貼標會員數",
            number: 0
        },
        {
            text: "位貼標會員數 (不重複)",
            number: 0
        },
    ]
},
{
    title: '(六) 社交偏好',
    items: [
        {
            text: "個類別項目",
            number: 3
        },
        {
            text: "個標籤種類 ( 全網 )",
            number: 0
        },
        {
            text: "個標籤數量 ( 待估 )",
            number: 0
        },
        {
            text: "位貼標會員數",
            number: 0
        },
        {
            text: "位貼標會員數 (不重複)",
            number: 0
        },
    ]
},
{
    title: '(七) 用戶價值',
    items: [
        {
            text: "個類別項目",
            number: 1
        },
        {
            text: "個標籤種類 ( 全網 )",
            number: 73
        },
        {
            text: "個標籤數量 ( 待估 )",
            number: 0
        },
        {
            text: "位貼標會員數",
            number: 0
        },
        {
            text: "位貼標會員數 (不重複)",
            number: 0
        },
    ]
},
{
    title: '(八) 廣告偏好',
    items: [
        {
            text: "個類別項目",
            number: 21
        },
        {
            text: "個標籤種類 ( 全網 )",
            number: 72
        },
        {
            text: "個標籤數量 ( 待估 )",
            number: 0
        },
        {
            text: "位貼標會員數",
            number: 0
        },
        {
            text: "位貼標會員數 (不重複)",
            number: 0
        },
    ]
}
]

data1.value = [{
    number: '1',
    level: '行為特徵',
    type: '活躍指標',
    qtd: 0,
    projectsQtd: 33,
    tagQtd: 977,
},
{
    number: '2',
    level: '活動指標',
    type: '活躍指標',
    qtd: 0,
    projectsQtd: 33,
    tagQtd: 360,
},
{
    number: '3',
    level: '綜合內容',
    type: '活躍指標',
    qtd: 0,
    projectsQtd: 33,
    tagQtd: 283,
},
{
    number: '4',
    level: '綜合特徵',
    type: '活躍指標',
    qtd: 0,
    projectsQtd: 33,
    tagQtd: 266,
},
{
    number: '3',
    level: '綜合內容',
    type: '活躍指標',
    qtd: 0,
    projectsQtd: 33,
    tagQtd: 283,
},
{
    number: '4',
    level: '綜合特徵',
    type: '活躍指標',
    qtd: 0,
    projectsQtd: 33,
    tagQtd: 266,
},
{
    number: '3',
    level: '綜合內容',
    type: '活躍指標',
    qtd: 0,
    projectsQtd: 33,
    tagQtd: 283,
},
{
    number: '4',
    level: '綜合特徵',
    type: '活躍指標',
    qtd: 0,
    projectsQtd: 33,
    tagQtd: 266,
},
{
    number: '3',
    level: '綜合內容',
    type: '活躍指標',
    qtd: 0,
    projectsQtd: 33,
    tagQtd: 283,
},
{
    number: '4',
    level: '綜合特徵',
    type: '活躍指標',
    qtd: 0,
    projectsQtd: 33,
    tagQtd: 266,
},
{
    number: '3',
    level: '綜合內容',
    type: '活躍指標',
    qtd: 0,
    projectsQtd: 33,
    tagQtd: 283,
},
{
    number: '4',
    level: '綜合特徵',
    type: '活躍指標',
    qtd: 0,
    projectsQtd: 33,
    tagQtd: 266,
}]

data2.value = [{
    itemNo: {
        text: '1',
        align: 'text-start'
    },
    level: {
        text: '廣告扁好',
        align: 'text-start'
    },
    type: {
        text: '全藝文娛樂',
        align: 'text-start'
    },
    tagName: {
        text: '音樂與表演',
        align: 'text-start'
    },
    tagProp: {
        text: '有興趣, 沒興趣',
        align: 'text-start'
    },
    tagRule: {
        text: '有興趣, 沒興趣',
        align: 'text-start'
    },
    tagScope: {
        text: '會員',
        align: 'text-start'
    },
    tagQtd: {
        text: 1,
        align: 'text-end'
    },
    labelMemberPts: {
        text: 1,
        align: 'text-end'
    },
    labelType: {
        text: '預測標籤',
        align: 'text-start'
    },
    labelStatus: {
        text: '<span class="badge rounded-pill " style="background-color:#97CC08">可執行</span>',
        align: 'text-center'
    }
},
{
    itemNo: {
        text: '2',
        align: 'text-start'
    },
    level: {
        text: '廣告扁好',
        align: 'text-start'
    },
    type: {
        text: '全藝文娛樂',
        align: 'text-start'
    },
    tagName: {
        text: '音樂與表演',
        align: 'text-start'
    },
    tagProp: {
        text: '有興趣, 沒興趣',
        align: 'text-start'
    },
    tagRule: {
        text: '有興趣, 沒興趣',
        align: 'text-start'
    },
    tagScope: {
        text: '會員',
        align: 'text-start'
    },
    tagQtd: {
        text: 1,
        align: 'text-end'
    },
    labelMemberPts: {
        text: 1,
        align: 'text-end'
    },
    labelType: {
        text: '預測標籤',
        align: 'text-start'
    },
    labelStatus: {
        text: '<span class="badge rounded-pill " style="background-color:#FFC044">待確認</span>',
        align: 'text-center'
    }
},
{
    itemNo: {
        text: '3',
        align: 'text-start'
    },
    level: {
        text: '廣告扁好',
        align: 'text-start'
    },
    type: {
        text: '全藝文娛樂',
        align: 'text-start'
    },
    tagName: {
        text: '音樂與表演',
        align: 'text-start'
    },
    tagProp: {
        text: '有興趣, 沒興趣',
        align: 'text-start'
    },
    tagRule: {
        text: '有興趣, 沒興趣',
        align: 'text-start'
    },
    tagScope: {
        text: '會員',
        align: 'text-start'
    },
    tagQtd: {
        text: 1,
        align: 'text-end'
    },
    labelMemberPts: {
        text: 1,
        align: 'text-end'
    },
    labelType: {
        text: '預測標籤',
        align: 'text-start'
    },
    labelStatus: {
        text: '<span class="badge rounded-pill " style="background-color:#FFC044">待確認</span>',
        align: 'text-center'
    }
},
{
    itemNo: {
        text: '4',
        align: 'text-start'
    },
    level: {
        text: '廣告扁好',
        align: 'text-start'
    },
    type: {
        text: '全藝文娛樂',
        align: 'text-start'
    },
    tagName: {
        text: '音樂與表演',
        align: 'text-start'
    },
    tagProp: {
        text: '有興趣, 沒興趣',
        align: 'text-start'
    },
    tagRule: {
        text: '有興趣, 沒興趣',
        align: 'text-start'
    },
    tagScope: {
        text: '會員',
        align: 'text-start'
    },
    tagQtd: {
        text: 1,
        align: 'text-end'
    },
    labelMemberPts: {
        text: 1,
        align: 'text-end'
    },
    labelType: {
        text: '預測標籤',
        align: 'text-start'
    },
    labelStatus: {
        text: '<span class="badge rounded-pill " style="background-color:#97CC08">可執行</span>',
        align: 'text-center'
    }
},
{
    itemNo: {
        text: '5',
        align: 'text-start'
    },
    level: {
        text: '廣告扁好',
        align: 'text-start'
    },
    type: {
        text: '全藝文娛樂',
        align: 'text-start'
    },
    tagName: {
        text: '音樂與表演',
        align: 'text-start'
    },
    tagProp: {
        text: '有興趣, 沒興趣',
        align: 'text-start'
    },
    tagRule: {
        text: '有興趣, 沒興趣',
        align: 'text-start'
    },
    tagScope: {
        text: '會員',
        align: 'text-start'
    },
    tagQtd: {
        text: 1,
        align: 'text-end'
    },
    labelMemberPts: {
        text: 1,
        align: 'text-end'
    },
    labelType: {
        text: '預測標籤',
        align: 'text-start'
    },
    labelStatus: {
        text: '<span class="badge rounded-pill " style="background-color:#97CC08">可執行</span>',
        align: 'text-center'
    }
}]




</script>
<template>
    <div>
        <div class="d-flex gap-1">
            <div class="">
                <button class="btn rounded-circle btn-sm" type="button" @click="goback()">
                    <i class="bi bi-arrow-left fs-6 py-1 "></i></button>
                <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1" style=" top: 100%;right: -50%;">
                    返回
                </span>
            </div>
            <h2>
                會員標籤
            </h2>
        </div>
        <div class="mt-3 pb-2  bg-grey filter p-3 ">
            <div class="border-bottom w-100 pb-2">
                <ul id="overview-and-rules-tabs" class="d-flex nav gap-2 fw-semibold ">
                    <li class="nav-item">
                        <a class="tab-button-1 active rounded-1" aria-current="page" data-bs-target="#overview-data-section"
                            data-bs-toggle="pill" aria-controls="overview-data-section">
                            <span>總攬</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="tab-button-1 rounded-1 px-1" data-bs-target="#rules-data-section" data-bs-toggle="pill"
                            aria-controls="rules-data-section" @click="loadRulesdata()">
                            <span>標籤規則 </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="mt-3 show collapse w-100" id="overview-data-section">
                <div class="row px-2 gap-3" id="overview-cards">
                    <template v-for="(item, index) in overviewData" :key="`item`+index">
                        <div class="col-3 flex-fill card shadow-sm border-0" id="ovw-card-`+ i + `">
                            <h3>{{ item.title }}</h3>
                            <template v-for="(i, index) in item.items" :key="index">
                                <div class="d-flex justify-content-between mt-2">
                                    <div class="font-b4-me"> {{ i.text }}</div>
                                    <div class="font-b4-he"> {{ i.number }}</div>
                                </div>
                            </template>
                        </div>

                    </template>
                </div>

            </div>
            <div class="mt-3 collapse" id="rules-data-section">
                <div class="d-flex ">
                    <div>
                        <label for="input-group" class="font-b4-me">查詢 </label>
                        <div class="input-group" style="width: 450px;" id="input-group">
                            <button class="btn border dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">等於</button>
                            <ul class="dropdown-menu ">
                                <li><a class="dropdown-item" href="#">等於</a></li>
                                <li><a class="dropdown-item" href="#">包含</a></li>
                                <li><a class="dropdown-item" href="#">開頭是</a></li>
                                <li><a class="dropdown-item" href="#">規則運算式</a></li>
                                <li><a class="dropdown-item" href="#">於</a></li>
                            </ul>
                            <input type="text" class="form-control border-start w-25" id="" placeholder="請輸入標籤類別或名稱">
                        </div>

                    </div>
                    <div class="ps-2 pt-4">
                        <button class="btn primary" type="button" style="width: 100px;" @click="">
                            查詢
                        </button>
                    </div>
                </div>
                <div class="mt-4">
                    <h3>
                        標籤資訊概覽
                    </h3>
                    <div class="d-flex gap-3 mt-2 shadow-sm border-0 p-3 flex-wrap bg-white">
                        <div class="border-end pe-3" style="width: 70dvh">
                            <div class="d-flex justify-content-end">
                                <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                        class="lh-1 ifont icon-openMenu p-0"></i></button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><button class="dropdown-item" type="button" @click="">Export</button></li>

                                </ul>
                            </div>
                            <table class="table table-striped table-borderless  mt-2">
                                <thead>
                                    <tr>
                                        <th scope="col" class="text-center"> </th>
                                        <th scope="col" class="text-start">層級
                                            <button class="bg-transparent rounded-circle p-0 text-white">
                                                <i class="icon-sequence"></i></button>
                                        </th>
                                        <th scope="col" class="text-start ">
                                            類別
                                            <button class="bg-transparent rounded-circle p-0 text-white">
                                                <i class="icon-sequence"></i></button>
                                        </th>
                                        <th scope="col" class="text-end ">
                                            標籤名稱
                                            <button class="bg-transparent rounded-circle p-0 text-white">
                                                <i class="icon-sequence"></i></button>
                                        </th>
                                        <th scope="col" class="text-end ">
                                            標籤醒目
                                            <button class="bg-transparent rounded-circle p-0 text-white">
                                                <i class="icon-sequence"></i></button>
                                        </th>
                                        <th scope="col" class="text-end ">
                                            標籤數量
                                            <button class="bg-transparent rounded-circle p-0 text-white">
                                                <i class="icon-sequence"></i></button>
                                        </th>
                                    </tr>

                                </thead>
                                <tbody id="tag-data-table-body">
                                    <template v-for="item in data1">
                                        <tr>
                                            <td class="text-start" @click="">{{ item.number }}</td>
                                            <td class="text-start" @click="">{{ item.level }}</td>
                                            <td class="text-start" @click="">{{ item.type }}</td>
                                            <td class="text-end" @click="">{{ item.qtd }}</td>
                                            <td class="text-end" @click="">{{ item.projectsQtd }}</td>
                                            <td class="text-end" @click="">{{ item.tagQtd }}</td>
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
                        <div style="width: 50dvh;" class="flex-fill d-flex justify-content-center flex-column">
                            <div>
                                <div class="d-flex justify-content-end">
                                    <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                            class="lh-1 ifont icon-openMenu p-0"></i></button>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><button class="dropdown-item" type="button" @click="">匯出</button></li>
                                        <li><button class="dropdown-item" type="button" @click="">重設</button></li>
                                    </ul>
                                </div>
                                <div id="tag-barchart-area" style="width: 60dvh; height: 30dvh;" class="flex-fill mx-auto">


                                </div>
                            </div>
                            <div class="mt-3 border-top">
                                <div class="d-flex justify-content-end">
                                    <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                            class="lh-1 ifont icon-openMenu p-0"></i></button>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><button class="dropdown-item" type="button" @click="">匯出</button></li>
                                        <li><button class="dropdown-item" type="button" @click="">重設</button></li>
                                    </ul>
                                </div>
                                <div id="label-pts-barchart-area" class="flex-fill  mx-auto"
                                    style="width: 60dvh; height: 30dvh;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-4">
                    <div class="d-flex justify-content-between">
                        <h3 class="mb-0">
                            會員標籤規則
                        </h3>
                        <div class="d-flex align-items-end">
                            <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                    class="lh-1 ifont icon-openMenu p-0"></i></button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><button class="dropdown-item" type="button" @click="">Export</button></li>

                            </ul>
                        </div>
                    </div>
                    <div class="d-flex gap-3 mt-2 shadow-sm border-0 p-3 flex-wrap bg-white">

                        <div class="flex-fill ">
                            <div class="d-flex justify-content-start align-items-bottom gap-2">
                                <div class="align-self-end">
                                    <div class="font-b4-me">標籤層級</div>
                                    <div class="btn-group">
                                        <button
                                            class="border-start border-top border-bottom bg-white btn-block rounded-end-0"
                                            style="padding-top: 0.39rem; padding-bottom:0.39rem ;" type="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            標籤層級
                                        </button>
                                        <button type="button"
                                            class=" border-top border-bottom border-end bg-white btn-block  rounded-start-0 dropdown-toggle dropdown-toggle-split"
                                            style="padding-top: 0.39rem; padding-bottom:0.39rem" data-bs-toggle="dropdown"
                                            aria-expanded="false" data-bs-reference="parent">
                                            <span class="visually-hidden">Toggle</span>
                                        </button>

                                        <div class="dropdown-menu p-3 " style="min-width: 16rem !important;">
                                            <div class="d-flex justify-content-between">
                                                <div class="form-check ">
                                                    <input id="selectall-chkbox" name="selectall"
                                                        class="form-check-input  me-2" type="checkbox" value=""
                                                        aria-label="Checkbox for following text input">
                                                    <label class="form-check-label " for="selectall-chkbox">
                                                        全部
                                                    </label>

                                                </div>
                                                <div class="font-support">類別數量</div>

                                            </div>
                                            <hr class="dropdown-divider">
                                            <div id="tag-level-dropdown">

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="align-self-end">
                                    <div class="font-b4-me">標籤層級</div>
                                    <div class="btn-group">
                                        <button
                                            class="border-start border-top border-bottom bg-white btn-block rounded-end-0 "
                                            style="padding-top: 0.39rem; padding-bottom:0.39rem" type="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            標籤層級
                                        </button>
                                        <button type="button"
                                            class=" border-top border-bottom border-end bg-white btn-block  rounded-start-0 dropdown-toggle dropdown-toggle-split"
                                            style="padding-top: 0.39rem; padding-bottom:0.39rem" data-bs-toggle="dropdown"
                                            aria-expanded="false" data-bs-reference="parent">
                                            <span class="visually-hidden">Toggle</span>
                                        </button>

                                        <div class="dropdown-menu p-3" style="min-width: 20rem !important;">
                                            <div class="d-flex justify-content-between">
                                                <div class="form-check ">
                                                    <input name="selectall" id="selectall-chkbox-2"
                                                        class="form-check-input  me-2" type="checkbox" value=""
                                                        aria-label="Checkbox for following text input">
                                                    <label class="form-check-label " for="selectall-chkbox">
                                                        全部
                                                    </label>

                                                </div>
                                                <div class="font-support">標籤項目數</div>

                                            </div>
                                            <hr class="dropdown-divider">
                                            <div class="input-group input-group-sm">
                                                <span class="input-group-text border-end-0 bg-white bi bi-search"
                                                    id="basic-addon6"></span>
                                                <input type="text" class="form-control border-start-0 " id="tag-lvl-keyword"
                                                    placeholder="輸入字詞以搜尋">
                                            </div>
                                            <div id="tag-type-dropdown" class="mt-1">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="align-self-end">
                                    <div class="font-b4-me">標籤狀態</div>
                                    <div class="btn-group">
                                        <button
                                            class="border-start border-top border-bottom bg-white btn-block rounded-end-0 "
                                            style="padding-top: 0.39rem; padding-bottom:0.39rem" type="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            標籤狀態
                                        </button>
                                        <button type="button"
                                            class=" border-top border-bottom border-end bg-white btn-block  rounded-start-0 dropdown-toggle dropdown-toggle-split"
                                            style="padding-top: 0.39rem; padding-bottom:0.39rem" data-bs-toggle="dropdown"
                                            aria-expanded="false" data-bs-reference="parent">
                                            <span class="visually-hidden">Toggle</span>
                                        </button>

                                        <div class="dropdown-menu p-3" style="min-width: 20rem !important;">
                                            <div class="d-flex justify-content-between">
                                                <div class="form-check ">
                                                    <input name="selectall" id="selectall-chkbox-3"
                                                        class="form-check-input  me-2" type="checkbox" value=""
                                                        aria-label="Checkbox for following text input">
                                                    <label class="form-check-label " for="selectall-chkbox-3">
                                                        全部
                                                    </label>

                                                </div>
                                                <div class="font-support">標籤項目數</div>

                                            </div>
                                            <hr class="dropdown-divider">

                                            <div id="tag-status-dropdown" class="mt-1">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <label for="input-theme-group" class="font-b4-me">標籤名稱</label>
                                    <div class="input-group" id="input-theme-group">
                                        <span class="input-group-text border-end-0 bg-white bi bi-search"
                                            id="basic-addon4"></span>
                                        <input type="text" class="form-control border-start-0 " id="theme-keyword"
                                            placeholder="請輸入標籤名稱">
                                    </div>

                                </div>

                                <div class="align-self-end">
                                    <button class="btn primary" type="button" @click="">
                                        重設條件
                                    </button>
                                </div>

                            </div>
                            <table class="table table-striped table-borderless  mt-2">
                                <thead>
                                    <tr>
                                        <th scope="col" class="text-center"> </th>
                                        <th scope="col" class="text-start">層級 <button
                                                class="bg-transparent rounded-circle p-0 text-white">
                                                <i class="icon-sequence"></i></button></th>
                                        <th scope="col" class="text-start ">
                                            類別 <button class="bg-transparent rounded-circle p-0 text-white">
                                                <i class="icon-sequence"></i></button> </th>
                                        <th scope="col" class="text-start ">
                                            標籤名稱 <button class="bg-transparent rounded-circle p-0 text-white">
                                                <i class="icon-sequence"></i></button>
                                        </th>
                                        <th scope="col" class="text-start ">
                                            標籤內容 <button class="bg-transparent rounded-circle p-0 text-white">
                                                <i class="icon-sequence"></i></button>
                                        </th>
                                        <th scope="col" class="text-start ">
                                            標籤規則 <button class="bg-transparent rounded-circle p-0 text-white">
                                                <i class="icon-sequence"></i></button>
                                        </th>
                                        <th scope="col" class="text-start ">
                                            標籤範圍 <button class="bg-transparent rounded-circle p-0 text-white">
                                                <i class="icon-sequence"></i></button>
                                        </th>
                                        <th scope="col" class="text-end ">
                                            標籤數量<button class="bg-transparent rounded-circle p-0 text-white">
                                                <i class="icon-sequence"></i></button>
                                        </th>
                                        <th scope="col" class="text-end ">
                                            貼標會員數<button class="bg-transparent rounded-circle p-0 text-white">
                                                <i class="icon-sequence"></i></button>
                                        </th>
                                        <th scope="col" class="text-start ">
                                            標籤類型<button class="bg-transparent rounded-circle p-0 text-white">
                                                <i class="icon-sequence"></i></button>
                                        </th>
                                        <th scope="col" class="text-center ">
                                            貼標狀態<button class="bg-transparent rounded-circle p-0 text-white">
                                                <i class="icon-sequence"></i></button>
                                        </th>
                                    </tr>

                                </thead>
                                <tbody id="member-rules-data-table-body">
                                    <template v-for="item in data2">
                                        <tr>
                                            <td>
                                                {{ item.itemNo.text }}
                                            </td>
                                            <td>
                                                {{ item.level.text }}
                                            </td>
                                            <td>
                                                {{ item.type.text }}
                                            </td>
                                            <td>
                                                {{ item.tagName.text }}
                                            </td>
                                            <td>
                                                {{ item.tagProp.text }}
                                            </td>
                                            <td>
                                                {{ item.tagRule.text }}
                                            </td>
                                            <td>
                                                {{ item.tagScope.text }}
                                            </td>
                                            <td>
                                                {{ item.tagQtd.text }}
                                            </td>
                                            <td>
                                                {{ item.labelMemberPts.text }}
                                            </td>
                                            <td>
                                                {{ item.labelType.text }}
                                            </td>
                                            <td>
                                                <span class="badge rounded-pill " style="background-color:#97CC08">可執行</span>
                                            </td>
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
                    </div>
                </div>
            </div>
    </div>
</div></template>