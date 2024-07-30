<script setup>
import { ref, onMounted } from 'vue'
let contexts = ref([])
const contexts2 = ref([])
const indList = ref([
    {
        id: 'any',
        name: '不限'
    },
    {
        id: 'unemployed',
        name: '待業中'
    },
    {
        id: 'housekeeper',
        name: '家管'
    },
    {
        id: 'student',
        name: '學生 '
    },
    {
        id: 'agriculture',
        name: '農漁牧 '
    },
    {
        id: 'art',
        name: '藝術 '
    },
    {
        id: 'communication',
        name: '傳播/公關/廣告行銷'
    },
    {
        id: 'entertainment',
        name: '娛樂/出版  '
    },
    {
        id: 'traffic',
        name: '交通/運輸/旅遊   '
    },
    {
        id: 'distribution',
        name: '流通/零售'
    },
    {
        id: 'law',
        name: '法律相關'
    },
    {
        id: 'medical',
        name: '醫療'
    },
    {
        id: 'service',
        name: '服務'
    },
    {
        id: 'info',
        name: '資訊'
    },
    {
        id: 'supplier',
        name: '製造/供應商'
    },
    {
        id: 'realestate',
        name: '建築營造'
    },
    {
        id: 'business',
        name: '經商'
    },
    {
        id: 'education',
        name: '教育研究'
    },
    {
        id: 'military',
        name: '軍警'
    },
    {
        id: 'government',
        name: '政府機關 '
    },
    {
        id: 'land',
        name: '房地產'
    },
    {
        id: 'finance',
        name: '金融/保險 '
    },
    {
        id: 'other',
        name: '其他'
    }
])

const preflist = ref([
    {
        id: 'outdoor',
        name: '全戶外活動'
    },
    {
        id: 'makeups',
        name: '全美妝'
    },
    {
        id: 'clothes',
        name: '全時尚穿搭'
    },
    {
        id: 'eletronics',
        name: '全家電'
    },
    {
        id: 'finance',
        name: '全財務金融'
    },
    {
        id: 'alcohol',
        name: '全酒精飲料'
    },
    {
        id: 'healthy',
        name: '全健康照護'
    },
    {
        id: 'food',
        name: '全飲食'
    },
    {
        id: 'info',
        name: '全通訊'
    },
    {
        id: 'boutique',
        name: '全精品'
    },
    {
        id: 'education',
        name: '全文教'
    },
    {
        id: 'parents',
        name: '全親子與教育'
    }
])

function addContext1() {
    contexts.value.push(1)
}

function addContext2() {
    contexts2.value.push(1)
}

</script>

<template>
    <div class="">
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button" @click="goback()">
                <i class="bi bi-arrow-left  "></i></button>
            <h2>名單篩選</h2>
        </div>
        <div class="bg-grey mt-3 filter p-3">
            <div class="select-wrap filter-location-wrap">
                <div class="d-flex flex-column gap-2">
                    <div class="d-flex gap-3 border-bottom pb-2">
                        <ul id="custom-tab " class="d-flex nav gap-2 fw-semibold">
                            <li class="nav-item">
                                <a class="tab-button-1 active rounded-1" aria-current="page" data-bs-target='#membership'
                                    data-bs-toggle="pill" aria-controls="membership">
                                    <span>會員</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="tab-button-1 rounded-1" data-bs-target="#subscriber" data-bs-toggle="pill"
                                    aria-controls="subscriber">
                                    <span>訂戶</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="tab-button-1 rounded-1" data-bs-target="#self" data-bs-toggle="pill"
                                    aria-controls="self">
                                    <span>自訂</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content" id="tab-content">
                        <div id="membership" role="tabpanel" class="tab-pane fade show active">
                            <div class=" pt-2 d-flex flex-column gap-2 ">
                                <div class="form-check d-flex">
                                    <input class="form-check-input" type="checkbox" value="" id="validsubscriber">
                                    <label class="form-check-label ps-2" for="validsubscriber">
                                        排除有效訂戶
                                    </label>
                                    <div class="position-relative fw-semibold text-label hover-label ms-2">
                                        <i class=" icon-qa"></i>
                                        <span class="custom-tooltip-2 rounded p-1 position-absolute">
                                            排除正在訂閱經濟日報或聯合報之會員
                                        </span>
                                    </div>

                                </div>

                                <div class="d-flex">
                                    <div class="fw-semibold text-label pt-1">
                                        <div class=" position-relative d-inline-block  hover-label">

                                            篩選情境<span class="text-danger">*</span>
                                            <span class="custom-tooltip-2 tooltip-avatar" style=" top:106%;right: -10%;">
                                                請至少選擇一項
                                            </span>
                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                    <div class="d-flex gap-2 flex-column ps-2">
                                        <div class="form-check d-flex align-items-center gap-1">
                                            <div>
                                                <input class="form-check-input" checked type="checkbox"
                                                    value="member-context-1" id="member-context-1">
                                            </div>
                                            <div class="form-check-label d-flex align-items-center gap-1"
                                                for="validsubscriber">
                                                <div class="col-1">
                                                    <input type="text" class="form-control form-control-sm" />
                                                </div>
                                                <div class="">
                                                    未造訪
                                                </div>
                                                <div class="col-2">
                                                    <select class="form-select form-select-sm" type="select"
                                                        value="member-select-1" id="member-select-1">
                                                        <option selected>WEB+APP</option>
                                                        <option value="1">WEB</option>
                                                        <option value="2">APP</option>
                                                    </select>
                                                </div>
                                                <div class="col-2">
                                                    <select class="form-select form-select-sm" type="select" disabled
                                                        value="member-select-1" id="meb_Not_visit_bu">
                                                        <option value="1" selected>聯經日報</option>
                                                        <option value="2">聯合報</option>
                                                        <option value="3">聯合新聞網</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    平台，天數超過
                                                </div>
                                                <div class="col-1">
                                                    <input type="number" id="member-days-above-1" min="0"
                                                        class="form-control form-control-sm" />
                                                </div>
                                                天以上的會員
                                                <div class="position-relative text-label hover-label ms-2">
                                                    <i class=" icon-qa"></i>
                                                    <span class="custom-tooltip-2 rounded p-1 position-absolute">
                                                        搭配用戶身分，輔助流失策略。
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-check d-flex align-items-center gap-1 ">
                                            <div>
                                                <input class="form-check-input" type="checkbox" value="member-context-2"
                                                    id="member-context-2">
                                            </div>
                                            <div class="form-check-label d-flex align-items-center gap-1" for="1">
                                                <div class="col-1">
                                                    <input id="member-days-within-1" type="number" min="0"
                                                        class="form-control form-control-sm" />
                                                </div>
                                                <div class="">
                                                    天內，每週消耗
                                                </div>
                                                <div class="col-1">
                                                    <input id="member-pts" type="text" class="form-control form-control-sm">
                                                </div>
                                                <div>
                                                    點額度，
                                                </div>
                                                <div class="col-1">
                                                    <input id="member-weeks" type="number" min="0"
                                                        class="form-control form-control-sm" />
                                                </div>


                                                週以上
                                                <div class="position-relative text-label hover-label ms-2">
                                                    <i class=" icon-qa"></i>
                                                    <span class="custom-tooltip-2 rounded p-1 position-absolute">
                                                        關注持續使用免費權益之用戶，輔助轉換策略。
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-check d-flex align-items-center gap-1 ">
                                            <div>
                                                <input class="form-check-input" type="checkbox" value="member-context-3"
                                                    id="member-context-3">
                                            </div>
                                            <div class="form-check-label d-flex align-items-center gap-1"
                                                for="member-context-3">
                                                <div class="col-1">
                                                    <input type="number" min="0" class="form-control form-control-sm" />
                                                </div>
                                                <div class="">
                                                    天內，點選方案進到
                                                </div>
                                                <div class="col-2">
                                                    <select class="form-select form-select-sm" type="select"
                                                        value="member-select-1" id="list-plan-select-2">
                                                        <option selected>WEB+APP</option>
                                                        <option value="1">WEB</option>
                                                        <option value="2">APP</option>
                                                    </select>
                                                </div>
                                                <div class="col-2">
                                                    <select class="form-select form-select-sm" disabled type="select"
                                                        value="member-select-1" id="list-product-select-2">
                                                        <option selected>單位</option>
                                                        <option value="1">聯經日報</option>
                                                        <option value="2">聯合報</option>
                                                        <option value="3">聯合新聞網</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    產品頁面超過
                                                </div>
                                                <div class="col-1">
                                                    <input type="number" min="0" class="form-control form-control-sm" />
                                                </div>
                                                天以上的會員
                                                <div class="position-relative text-label hover-label ms-2">
                                                    <i class="icon-qa" @click="showProductDisplay()" data-bs-toggle="modal"
                                                        data-bs-target="#productDisplayModal"></i>
                                                    <span class="custom-tooltip-2 rounded p-1 position-absolute">
                                                        (點選以查看產品頁面示意圖) 篩選高度關注產品頁，輔助優惠策略。
                                                    </span>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="form-check d-flex align-items-center gap-1 pb-2 ">
                                            <div>
                                                <input class="form-check-input" type="checkbox" value="" id="1">
                                            </div>
                                            <div class="form-check-label d-flex align-items-center gap-1" for="1">
                                                <div class="col-1">
                                                    <input type="number" min="0" class="form-control form-control-sm" />
                                                </div>
                                                <div class="">
                                                    天內，造訪
                                                </div>
                                                <div class="col-2">
                                                    <select class="form-select form-select-sm" type="select"
                                                        value="member-select-3" id="member-select-3">
                                                        <option selected>單位</option>
                                                        <option value="1">聯經日報</option>
                                                        <option value="2">聯合報</option>
                                                        <option value="3">聯合新聞網</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    單位
                                                </div>
                                                <div class="col-2">
                                                    <select class="form-select form-select-sm" type="select"
                                                        value="member-select-4" id="member-select-4">
                                                        <option selected>單位</option>
                                                        <option value="1">聯經日報</option>
                                                        <option value="2">聯合報</option>
                                                        <option value="3">聯合新聞網</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    類別，天數超過
                                                </div>
                                                <div class="col-1">
                                                    <input type="number" min="0" class="form-control form-control-sm" />
                                                </div>
                                                天以上的會員
                                                <div class="position-relative text-label hover-label ms-2">
                                                    <i class="icon-qa"></i>
                                                    <span class="custom-tooltip-2 rounded p-1 position-absolute">
                                                        設定指定類別造訪頻率，鎖定目標偏好者，輔助優質文章推送策略。
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="border bg-grey p-2 rounded sub-context ">
                                            <div id="subcontext" class="d-flex flex-column gap-2">
                                                <template v-for="(item, index) in contexts" :key="index">
                                                    <div id="first-subcontext-checkbox`+ subcontext.getElementsByClassName('form-check-label').length + `"
                                                        class="form-check-label d-flex align-items-center gap-1 flex-wrap">
                                                        <div>
                                                            <button class="delete-btn btn rounded-circle py-0 px-1"
                                                                @click="deleteItem(event)"> <i class="bi bi-trash" />
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <select class="form-select form-select-sm" type="select"
                                                                value="and">
                                                                <option value="and" selected>並且</option>
                                                                <option value="or">或者</option>
                                                            </select>
                                                        </div>
                                                        在
                                                        <div class="col-1">
                                                            <input type="text" class="form-control form-control-sm" />
                                                        </div>
                                                        <div class="">
                                                            天內，造訪
                                                        </div>
                                                        <div class="col-2">
                                                            <select class="form-select form-select-sm" type="select"
                                                                value=""
                                                                id="hidden-select1`+ subcontext.getElementsByClassName('form-check-label').length + `">
                                                                <option selected>單位</option>
                                                                <option value="1">聯經日報</option>
                                                                <option value="2">聯合報</option>
                                                                <option value="3">聯合新聞網</option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            單位
                                                        </div>
                                                        <div class="col-2">
                                                            <select class="form-select form-select-sm" type="select"
                                                                value=""
                                                                id="hidden-select2`+ subcontext.getElementsByClassName('form-check-label').length + `">
                                                                <option selected>單位</option>
                                                                <option value="1">聯經日報</option>
                                                                <option value="2">聯合報</option>
                                                                <option value="3">聯合新聞網</option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            產品頁面超過
                                                        </div>
                                                        <div class="col-1">
                                                            <input type="text" class="form-control form-control-sm" />
                                                        </div>
                                                        天以上的會員
                                                    </div>
                                                </template>
                                            </div>
                                            <div class="pt-2">
                                                <button class="btn secondary w-100" @click="addContext1()"
                                                    :disabled="contexts.length >= 2">
                                                    新增情境
                                                </button>
                                            </div>
                                        </div>

                                        <div class="form-check d-flex align-items-top gap-1">
                                            <div class="pt-1">
                                                <input class="form-check-input" type="checkbox" value="" id="1">
                                            </div>
                                            <div class="d-flex align-items-center flex-wrap gap-1 pb-2">
                                                <div class="col-1">
                                                    <input type="number" min="0" class="form-control form-control-sm" />
                                                </div>
                                                <div class="flex-nowrap">
                                                    天內，閱讀
                                                </div>
                                                <div class="col-2">
                                                    <select class="form-select form-select-sm" type="select" value=""
                                                        id="member-select-5">
                                                        <option selected>單位</option>
                                                        <option value="1">聯經日報</option>
                                                        <option value="2">聯合報</option>
                                                        <option value="3">聯合新聞網</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    單位
                                                </div>
                                                <div class="col-2">
                                                    <select class="form-select form-select-sm" type="select" value=""
                                                        id="member-select-6">
                                                        <option selected>單位</option>
                                                        <option value="1">聯經日報</option>
                                                        <option value="2">聯合報</option>
                                                        <option value="3">聯合新聞網</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    類別
                                                </div>
                                                <div class="col-2">
                                                    <select class="form-select form-select-sm" type="select" value=""
                                                        id="member-select-8">
                                                        <option selected>單位</option>
                                                        <option value="1">聯經日報</option>
                                                        <option value="2">聯合報</option>
                                                        <option value="3">聯合新聞網</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    類型文章篇數超過
                                                </div>
                                                <div class="col-1">
                                                    <input type="number" min="0" class="form-control form-control-sm" />
                                                </div>
                                                天以上的會員
                                                <div class="position-relative text-label hover-label ms-2">
                                                    <i class="icon-qa"></i>
                                                    <span class="custom-tooltip-2 rounded p-1 position-absolute">
                                                        使用免費/付費文章閱讀狀況追蹤用戶數據，輔助經營策略。
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="border bg-grey p-2 rounded sub-context ">
                                            <div id="subcontext2" class="d-flex flex-column gap-2">
                                                <template v-for="(item, index) in contexts2" :ley="index">
                                                    <div id="second-subcontext-checkbox`+ subcontext.getElementsByClassName('form-check-label').length + `"
                                                        class="form-check-label d-flex align-items-center gap-1 flex-wrap">
                                                        <div>
                                                            <button class="delete-btn btn rounded-circle py-0 px-1"
                                                                @click="deleteItem2(event)"> <i
                                                                    class="bi bi-trash"></i></button>
                                                        </div>
                                                        <div>
                                                            <select class="form-select form-select-sm" type="select"
                                                                value="second-increment`+ subcontext.getElementsByClassName('form-check-label').length + `"
                                                                id="second-increment` + subcontext.getElementsByClassName('form-check-label').length + `">
                                                                <option value="and" selected>並且</option>
                                                                <option value="or">或者</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-1">
                                                            <input type="text" class="form-control form-control-sm">
                                                        </div>
                                                        <div class="flex-nowrap">
                                                            天內，閱讀
                                                        </div>
                                                        <div class="col-2">
                                                            <select class="form-select form-select-sm" type="select"
                                                                value="" id="aaa">
                                                                <option selected>Op</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            單位
                                                        </div>
                                                        <div class="col-2">
                                                            <select class="form-select form-select-sm" type="select"
                                                                value="" id="bbb">
                                                                <option selected>Op</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            類別
                                                        </div>
                                                        <div class="col-2">
                                                            <select class="form-select form-select-sm" type="select"
                                                                value="" id="type">
                                                                <option selected>Op</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            類型文章篇數超過
                                                        </div>
                                                        <div class="col-1">
                                                            <input type="text" class="form-control form-control-sm">
                                                        </div>
                                                        天以上的會員
                                                    </div>
                                                </template>
                                            </div>
                                            <div class="justify-content-center pt-2">
                                                <button class="btn  w-100 secondary" @click="addContext2()"
                                                    :disabled="contexts2.length >= 2">
                                                    新增情境
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <!-- 訂戶 -->
                        <div id="subscriber" role="tabpanel" class="tab-pane fade show">
                            <div class="d-flex flex-column gap-2">
                                <div class="d-flex gap-1">
                                    <div class="fw-semibold text-label">
                                        訂戶
                                    </div>
                                    <div class="d-flex gap-3 ps-2" role="group">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="subscrtiberadio" id="valid"
                                                checked @click="change(event)">
                                            <label class="form-check-label" for="valid">
                                                有效訂戶
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="subscrtiberadio" id="invalid"
                                                @click="change(event)">
                                            <label class="form-check-label" for="invalid">
                                                已流失訂戶
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex gap-1 align-items-center">
                                    <div class="fw-semibold text-label">
                                        <span class="hidden-label"></span>訂閱產品
                                    </div>

                                    <div class="d-flex gap-1 align-items-center ps-2">
                                        <input class="form-check-input" type="checkbox" value="" id="productcheckbox">
                                        <div class="dropdown1" id="product">
                                            <button
                                                class="btn dropdown-btn dropdown-toggle btn-select btn-sm border bg-white btn-block"
                                                type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                請選擇訂閱商品
                                            </button>
                                            <ul id="productslist" class="dropdown-menu p-3" @click="onclick(event)">
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex gap-1 align-items-center">
                                    <div class="fw-semibold text-label">
                                        <span class="hidden-label"></span><span class="show-label">訂戶效</span>期
                                    </div>

                                    <div class="d-flex align-items-center gap-1 ps-2">
                                        <input class="form-check-input" type="checkbox" value="" id="member-checkbox">
                                        <div class="dropdown1" id="subStartDatedropdown">
                                            <button
                                                class="btn dropdown-toggle border bg-white dropdown-btn btn-select btn-sm"
                                                style="width: 100%;" type="button" id="subStartDate" aria-expanded="false">
                                                <span id="substart" class=''>開始日期</span>
                                            </button>
                                        </div>
                                        <div>
                                            至
                                        </div>
                                        <div class="dropdown1" id="subEndtDatedropdown">
                                            <button
                                                class="btn dropdown-toggle border bg-white dropdown-btn btn-select btn-sm"
                                                style="width: 100%;" type="button" id="subEndDate" aria-expanded="false">
                                                <span id="subend" class=''>結束日期</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class=" d-flex align-items-top gap-1">
                                    <div class="fw-semibold text-label pt-1">
                                        篩選情境
                                    </div>
                                    <div class="d-flex gap-2 flex-column">
                                        <div class="form-check-label d-flex align-items-center gap-1 ps-2">
                                            <div class="">
                                                未造訪
                                            </div>
                                            <div class="col-3">
                                                <select class="form-select form-select-sm" type="select" value=""
                                                    id="member-select-7">
                                                    <option selected>單位</option>
                                                    <option value="1">聯經日報</option>
                                                    <option value="2">聯合報</option>
                                                    <option value="3">聯合新聞網</option>
                                                </select>
                                            </div>
                                            <div>
                                                產品頁面超過
                                            </div>
                                            <div class="col-1">
                                                <input type="number" min="0" class="form-control form-control-sm" />
                                            </div>
                                            <span>天以上的<span class="hidden-label"></span>訂戶</span>
                                            <div class="fw-semibold text-label hover-label">
                                                <i class=" icon-qa"></i>
                                                <span class="custom-tooltip-2 rounded p-1">
                                                    搭配用戶身分，輔助流失策略。
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            class="hidden-class form-check-label d-flex align-items-center gap-1 ps-2 flex-wrap">
                                            <div class="col-1">
                                                <input type="number" min="0" class="form-control form-control-sm">
                                            </div>
                                            <div class="d-inline-block">
                                                天內，每週消耗
                                            </div>
                                            <div class="col-1">
                                                <input type="text" class="form-control form-control-sm">
                                            </div>
                                            <div>
                                                點額度，
                                            </div>
                                            <div class="col-1">
                                                <input type="number" min="0" class="form-control form-control-sm">
                                            </div>
                                            <div>
                                                週以上
                                            </div>
                                            <div class="fw-semibold text-label hover-label position-relative">
                                                <i class="icon-qa"></i>
                                                <span class="custom-tooltip-2 rounded p-1 position-absolute">
                                                    關注持續使用免費權益之用戶，輔助轉換策略。
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            class="hidden-class form-check-label d-flex align-items-center gap-1 ps-2 flex-wrap">
                                            <div class="col-1">
                                                <input type="number" min="0" class="form-control form-control-sm">
                                            </div>
                                            <div class="d-inline-block">
                                                天內，點選方案進到
                                            </div>
                                            <div class="col-2">
                                                <select class="form-select form-select-sm" type="select"
                                                    value="hidden-select" id="hidden-select">
                                                    <option selected>單位</option>
                                                    <option value="1">聯經日報</option>
                                                    <option value="2">聯合報</option>
                                                    <option value="3">聯合新聞網</option>
                                                </select>
                                            </div>
                                            <div>
                                                產品頁面超過
                                            </div>
                                            <div class="col-1">
                                                <input type="number" min="0" class="form-control form-control-sm">
                                            </div>
                                            <div>
                                                天以上的流失訂戶
                                            </div>
                                            <div class="fw-semibold text-label hover-label position-relative">
                                                <i class="icon-qa"></i>
                                                <span class="custom-tooltip-2 rounded p-1 position-absolute">
                                                    (點選以查看產品頁面示意圖) 篩選高度關注產品頁，輔助優惠策略。
                                                </span>
                                            </div>
                                        </div>

                                        <div class="form-check-label d-flex align-items-center gap-1 ps-2 flex-wrap pb-2">
                                            <div class="pt-1">
                                                <input class="form-check-input" type="checkbox" value="" id="input-12314">
                                            </div>
                                            <div class="col-1">
                                                <input type="number" min="0" class="form-control form-control-sm">
                                            </div>
                                            <div class="d-inline-block">
                                                天內，閱讀
                                            </div>
                                            <div class="col-2">
                                                <select class="form-select form-select-sm" type="select" value=""
                                                    id="list1">
                                                    <option selected>單位</option>
                                                    <option value="1">聯經日報</option>
                                                    <option value="2">聯合報</option>
                                                    <option value="3">聯合新聞網</option>
                                                </select>
                                            </div>
                                            <div>
                                                單位
                                            </div>
                                            <div class="col-2">
                                                <select class="form-select form-select-sm" type="select" value=""
                                                    id="list2">
                                                    <option selected>單位</option>
                                                    <option value="1">聯經日報</option>
                                                    <option value="2">聯合報</option>
                                                    <option value="3">聯合新聞網</option>
                                                </select>
                                            </div>
                                            <div>
                                                類別
                                            </div>
                                            <div class="col-1">
                                                <input type="text" class="form-control form-control-sm" />
                                            </div>
                                            <div>
                                                類型文章篇數超過
                                            </div>
                                            <div class="fw-semibold text-label hover-label position-relative">
                                                <i class="icon-qa"></i>
                                                <span class="custom-tooltip-2 rounded p-1 position-absolute">
                                                    設定指定類別造訪頻率，鎖定目標偏好者，輔助優質文章推送策略。
                                                </span>
                                            </div>
                                        </div>
                                        <div class=" sub-context border p-2 ">
                                            <div id="subcontext3" class="d-flex flex-column gap-2">

                                            </div>
                                            <div class="mt-2">
                                                <button class="btn secondary w-100" @click="addContext3()">
                                                    新增情境
                                                </button>
                                            </div>
                                        </div>

                                        <div class="form-check-label d-flex align-items-center gap-1 ps-2 flex-wrap pb-2">
                                            <div class="pt-1">
                                                <input class="form-check-input" type="checkbox" value="" id="input-12314">
                                            </div>
                                            <div class="col-1">
                                                <input type="number" min="0" class="form-control form-control-sm">
                                            </div>
                                            <div class="d-inline-block">
                                                天內，造訪
                                            </div>
                                            <div class="col-2">
                                                <select class="form-select form-select-sm" type="select" value=""
                                                    id="list1">
                                                    <option selected>單位</option>
                                                    <option value="1">聯經日報</option>
                                                    <option value="2">聯合報</option>
                                                    <option value="3">聯合新聞網</option>
                                                </select>
                                            </div>
                                            <div>
                                                單位
                                            </div>
                                            <div class="col-2">
                                                <select class="form-select form-select-sm" type="select" value=""
                                                    id="list2">
                                                    <option selected>單位</option>
                                                    <option value="1">聯經日報</option>
                                                    <option value="2">聯合報</option>
                                                    <option value="3">聯合新聞網</option>
                                                </select>
                                            </div>
                                            <div>
                                                類別
                                            </div>
                                            <div class="col-1">
                                                <input type="text" class="form-control form-control-sm" />
                                            </div>
                                            <div>
                                                類型文章篇數超過
                                            </div>
                                            <div class="col-1">
                                                <input type="text" class="form-control form-control-sm" />
                                            </div>
                                            <div>
                                                篇以上的訂戶
                                            </div>
                                            <div class="fw-semibold text-label hover-label position-relative">
                                                <i class="icon-qa"></i>
                                                <span class="custom-tooltip-2 rounded p-1 position-absolute">
                                                    使用免費/付費文章閱讀狀況追蹤用戶數據，輔助經營策略。
                                                </span>
                                            </div>
                                        </div>
                                        <div class="sub-context border p-2 ">
                                            <div id="subcontext4">

                                            </div>
                                            <div class="mt-2">
                                                <button class="btn secondary w-100" @click="addContext4()">
                                                    新增情境
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="self" role="tabpanel" class="tab-pane fade show">
                            <div class="d-flex gap-5 mt-3 justify-content-center">
                                <div class="mb-3 position-relative ">
                                    <input type="file" name="file" id="file" class="inputfile" />
                                    <label for="file">
                                        <i class="icon-upload pe-3"></i>
                                        <span>選擇檔案</span>
                                        <span class="file-input-box position-absolute border">檔案名稱</span>
                                    </label>
                                </div>
                                <div style="margin-left: 130px;" class="col-2">
                                    <button class="btn primary w-75">下載</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="advanceSearch" class="collapse">
                        <div class="mt-2 border-top pt-2 d-flex gap-2 flex-column">
                            <div class="d-flex gap-1">
                                <div class="fw-semibold text-label">
                                    性別
                                </div>
                                <div class="d-flex gap-3 ps-2">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="sex" id="any" checked>
                                        <label class="form-check-label" for="any">
                                            不限
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="sex" id="male">
                                        <label class="form-check-label" for="male">
                                            男
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="sex" id="female">
                                        <label class="form-check-label" for="female">
                                            女
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex gap-1">
                                <div class="fw-semibold text-label">
                                    年齡
                                </div>
                                <div class="d-flex gap-3 ps-2">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="flexRadioDefault"
                                            id="age-any">
                                        <label class="form-check-label" for="age-any">
                                            不限
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="flexRadioDefault"
                                            id="14below">
                                        <label class="form-check-label" for="14below">
                                            14或以下
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="1524">
                                        <label class="form-check-label" for="1524">
                                            15-24
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="2534">
                                        <label class="form-check-label" for="2534">
                                            25-34
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex gap-1">
                                <div class="fw-semibold text-label">
                                    職業
                                </div>
                                <div id="checkboxlist" class="d-flex gap-3 flex-wrap ps-2"
                                    style="row-gap: 0.2rem !important;">
                                    <template v-for="item in indList">
                                        <div class="form-check"><input class="form-check-input" type="checkbox" name="radio"
                                                id="any"><label class="form-check-label" for="any">{{ item.name }}</label>
                                        </div>
                                    </template>
                                </div>
                            </div>
                            <div class="d-flex gap-1">
                                <div class="fw-semibold text-label">
                                    活躍時間
                                </div>
                                <div class="d-flex gap-3 ps-2">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="housekkeper" id="housekkeper">
                                        <label class="form-check-label" for="housekkeper">
                                            不限
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="housekkeper" id="housekkeper">
                                        <label class="form-check-label" for="housekkeper">
                                            深夜獨行者 (00點-03點)
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="housekkeper" id="housekkeper">
                                        <label class="form-check-label" for="housekkeper">
                                            曙光先知 (04點-07點)
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex gap-1 align-items-center">
                                <div class="fw-semibold text-label">
                                    閱讀偏好
                                </div>
                                <div class="ps-2">
                                    <input class="form-control form-control-sm" type="text" name="reading" id="reading"
                                        placeholder="智慧檢索編號">
                                </div>
                            </div>
                            <div class="d-flex gap-1">

                                <div class="fw-semibold text-label hover-label position-relative">
                                    廣告偏好 <i class="icon-qa"></i>
                                    <span class="position-absolute custom-tooltip rounded p-1">
                                        模型預測名單
                                    </span>
                                </div>

                                <div id="adv-pref-list" class="d-flex gap-3 ps-2 flex-wrap"
                                    style="row-gap: 0.2rem !important;">
                                    <template v-for="item in preflist">
                                        
                                        <div class="form-check"><input class="form-check-input" type="checkbox"
                                                name="radio"><label class="form-check-label" for="any">{{ item.name
                                                }}</label>
                                        </div>
                                    </template>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="button" class="bg-transparent w-100" data-bs-toggle="collapse" id="moreToggleButton"
                        data-bs-target="#advanceSearch" aria-expanded="false" aria-controls="advanceSearch">進階篩選 <i
                            class="filter-icon icon-down"></i>
                    </button>
                </div>
                <div class="border-top  d-flex justify-content-end ">
                    <button class="btn primary text-body-light mt-3 me-0 mb-2" type="button" data-bs-toggle="modal"
                        data-bs-target="#resultModal">
                        下一步
                    </button>
                </div>
            </div>
            <div class="modal fade" id="resultModal" tabindex="-1" aria-labelledby="resultModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header border-0 pb-0">
                            <h3> 儲存名單</h3>
                        </div>
                        <div class="modal-body">
                            <div class=" bg-grey filter p-3">


                                <div>
                                    <div class="fs-6 fw-medium pb-2">
                                        請確認以下篩選條件:
                                    </div>
                                    <ul class="font-b4-he">
                                        <li>
                                            篩選類型 : 會員
                                        </li>

                                        <li>
                                            性別 : 【 不限 】
                                        </li>
                                        <li>
                                            年齡 : <span class="font-b4-he">【 不限 】</span>
                                        </li>
                                        <li>
                                            職業 :<span class="font-b4-he">【 不限 】</span>
                                        </li>
                                        <li>
                                            活躍時間 :<span class="font-b4-he">【 不限 】</span>
                                        </li>
                                        <li>
                                            <span class="font-b4-he">排除有效訂戶</span>
                                        </li>
                                        <li>
                                            <span class="font-b4-he">未造訪 【 經濟日報 】 平台，天數超過【 1 】天以上的會員</span>
                                        </li>

                                    </ul>
                                </div>
                                <div class="border-top">
                                    <div class="mt-2">
                                        <div>
                                            <label for="form-name" class="form-label font-b4-me">名單名稱</label>
                                        </div>
                                        <div>
                                            <input type="text" class="form-control form-control-sm" placeholder="名單名稱" />
                                        </div>
                                        <div class="font-b4-me mt-1">
                                            備註
                                        </div>
                                        <div class="mt-2">
                                            <textarea class="form-control form-control-sm" placeholder=""
                                                id="custom-textarea"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer border-0">
                            <button type="button" class="btn" data-bs-dismiss="modal">修改</button>
                            <button type="button" class="btn primary " @click="saveList()">儲存</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade me-5" id="productDisplayModal">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                <div class="p-3 modal-content overflow-x-auto" style="display: inline;">
                    <img src="" alt="" class="">
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.filter {
    width: 100%;
}

.delete-btn {
    font-size: medium;
}

.font-b4-he li::marker {
    list-style-type: disc;
    font-size: 8px;
}


#and-input-addon {
    height: 33px;
}


.icon-upload::before {
    padding-left: 3px;
}

.file-input-box {
    padding-top: 6px;
    border-radius: 0 4px 4px 0;
    width: 160px;
    height: 40px;
    top: -0.5px;
    left: 160px;
    background-color: white;
    color: #D8D8D8;
    font-style: italic;
}

.file-input-box-1 {
    padding-top: 6px;
    border-radius: 0 4px 4px 0;
    width: 160px;
    height: 40px;
    top: -0.5px;
    left: 160px;
    background-color: white;
    color: #D8D8D8;
    font-style: italic;
}

.inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: 1;
}

.inputfile+label {
    width: 160px;
    height: 40px;
    border-radius: 4px 0 0 4px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: white;
    padding: 6px 3px;
    background-color: #005FC3;
    transition: 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;

}


.inputfile:focus+label,
.inputfile+label:hover {
    background-color: #0086FF
}

.inputfile+label {
    cursor: pointer;
}

.dropdown1+button {
    line-height: 1.5 !important;
    color: brown !important;
    padding: 0;
}




.text-label {
    min-width: 80px;
}



.sub-context {
    border-style: dashed !important;

}

#inputGroupFile01 {
    background-color: aliceblue;
}

.hidden-class {
    visibility: hidden;
    position: absolute;
}

.invalid-only {
    visibility: static;
    position: none;
}

.filter-icon .icon-down {
    transition: transform 1s;
}

.filter-icon .icon-top {
    transform: rotate(180deg);
    transition: transform 1s;
}
</style>