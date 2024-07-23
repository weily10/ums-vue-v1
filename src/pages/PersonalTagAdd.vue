<script setup>
import { ref } from 'vue'
const items = ref([])
const addTagSelect = ref('產品成交 (3)')


function addItem() {
    items.value.push({ title: addTagSelect.value })
}
</script>
<template>
    <div class="personal-tag-add-page">
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button" @click="goback()">
                <i class="bi bi-arrow-left fs-6 py-1 "></i></button>
            <h2 class="mb-0"> 新增標籤</h2>
            <div class="ms-auto">
                <button class="btn secondary text-light" @click="uploadTag()">上傳標籤 </button>
            </div>
        </div>
        <div class="stayonTop">
            <div>
                <label for="personal-add-tag-search-word-group" class="font-b4-me">標籤查詢</label>
                <div class="align-search-bar">
                    <div class="input-group" id="personal-add-tag-search-word-group">
                        <span class="input-group-text border-end-0 bg-white icon-search"
                            id="basic-addon-personal-add-tag"></span>
                        <input type="text" class="form-control border-start-0 inputsearch " @click="showSearchDialog()"
                            style="width: 18vh;" placeholder="名稱查詢">
                    </div>

                </div>
            </div>
            <div class="dropdowns-layout">
                <div class="d-flex align-items-end gap-2 flex-wrap  pb-3 ">
                    <div class="flex-fill" style="width: 9rem">
                        <label for="personal-add-tag-config-status-select">單位</label>
                        <select class="form-select " type="select" value="" id="add-tag-unit-select">
                            <option selected value="udn">聯合報系(45k)</option>
                            <option value="finance">股票 (20k)</option>
                        </select>
                    </div>
                    <div class="flex-fill" style="width: 9rem">
                        <label for="personal-add-tag-config-status-select">平台</label>
                        <select class="form-select " type="select" value="" id="add-tag-platform-select">
                            <option selected value="all">ALL (45k)</option>
                            <option value="1">IOS (22k)</option>
                            <option value="2">ANDROID (23k)</option>
                        </select>
                    </div>
                    <div class="flex-fill" style="width: 9rem">
                        <label for="personal-add-tag-type-select">種類</label>
                        <select class="form-select " type="select" value="" id="add-tag-type-select">
                            <option selected value="truth">真實 </option>
                            <option value="1">預測</option>
                            <option value="2">偏好</option>
                        </select>
                    </div>
                    <div class="flex-fill" style="width: 9rem">
                        <label for="personal-add-tag-config-status-select">大類別</label>
                        <select class="form-select " type="select" value="" id="add-tag-bigcategory-select">
                            <option selected value="content">內容偏好</option>
                            <option value="1">基本屬性 </option>
                            <option value="2">產品偏好 </option>
                            <option value="2">股票與投資偏好</option>
                            <option value="2">行為特徵 </option>
                        </select>
                    </div>
                    <div class=" flex-fill" style="width: 9rem">
                        <label for="personal-add-tag-config-status-select"> 中類別</label>
                        <select class="form-select " type="select" id="add-tag-middlecategory-select">
                            <option selected value="0">產品成交 </option>
                            <option value="1">產品 30 日均訪問時長</option>
                            <option value="2">產品活躍度指標</option>
                            <option value="3">活躍度指標 </option>
                        </select>
                    </div>
                    <div class=" flex-fill" style="width: 9rem">
                        <label> 標籤</label>
                        <select class="form-select " type="select"   v-model="addTagSelect">
                            <option selected value="產品成交 (3)">產品成交 (3)</option>
                            <option value="產品 30 日均訪問時長(3)">產品 30 日均訪問時長(3)</option>
                            <option value="產品活躍度指標(8)">產品活躍度指標(8)</option>
                            <option value="活躍度指標 (8)">活躍度指標 (8)</option>
                        </select>
                    </div>





                    
                    <div style="min-width:6%;margin-top: 0.2rem;">
                        <button class="btn secondary text-light" @click="addItem()">新增 <i class="icon-add"></i></button>
                    </div>

                </div>
            </div>
        </div>
        <div class="personal-tag-content">

            <div style="margin-top: 18px;">

                <div id="cards-list">
                    <template v-for="(item, index) in items" :key="index">
                        <div class="deletable">
                            <div class="btn-group-display" v-show="index >= 1">
                                <div class="btn-group button-checkbox d-flex w-25" role="group"
                                    style="z-index: 0;margin-block:1rem">
                                    <input type="radio" class="btn-check btnRadio" name="tag-content-options`+ random + `"
                                        value="tag-content-and" checked id="tag-content-and-`+ random + `">
                                    <label class="btn text-nowrap" for="tag-content-and-`+ random + `">AND </label>
                                    <input type="radio" class="btn-check btnRadio" name="tag-content-options`+ random + `"
                                        id="tag-content-or` + random + `" value="tag-content-or">
                                    <label class="btn " for="tag-content-or`+ random + `">OR
                                    </label>
                                </div>
                            </div>
                            <div class="result-card" id="not-finance-card-`+ random + `">
                                <div class="d-flex justify-content-between">
                                    <p class="font-support"> {{ item.title }} </p>
                                    <div class="position-relative d-inline-block fw-semibold  hover-label">
                                        <button class="delete-icon-button" @click="deleteItemCard(this)" type="button">
                                            <i class="icon-cancel"></i></button>
                                        <span class="custom-tooltip-2 custom-tooltip-3">
                                            刪除
                                        </span>
                                    </div>
                                </div>

                                <div class="badge-group" id="non-finance-badges`+ random + `">
                                    <div id="custom-badge-example1-`+ random + `" class="custom-badge">
                                        <label>
                                            <input type="checkbox" value="custom-badge0-`+ random + `"><span> 30 日以上點擊推播
                                                (3k)</span>
                                        </label>
                                    </div>
                                    <div id="custom-badge-example2-`+ random + `" class="custom-badge">
                                        <label>
                                            <input type="checkbox" value="custom-badge1-`+ random + `"><span> 30 日以上點擊推播
                                                (3k)</span>
                                        </label>
                                    </div>

                                    <button id="add-item-button-`+ random + `" type="button" class="add-badge-button "
                                        @click="openAddItemModal(` + random + `)">
                                        <span>more</span> <i class="icon-add pt-auto"></i>
                                    </button>
                                    <span class="max3message text-danger" style="display:none">最多只能加3筆!</span>
                                </div>
                            </div>
                        </div>
                    </template>
                    <div class="empty-div">
                        <img src="" alt="" width="30px" style="filter: opacity(0.2);">
                        <p>無資料</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="next-btn-align">
            <button class="btn primary" @click="toNextPage()">下一步</button>
        </div>
        <div class="modal fade" id="addItemModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header border-bottom-0">

                        <h4 class="modal-title" id="">新增標籤內容</h4>
                        <button type="button" class="custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body d-flex align-items-center gap-2">
                        <input id="min-number" type="number" placeholder="最小數字" class="form-control" value="0" min="0"
                            style="max-width:10rem"><span class="font-support">~</span><input id="max-number" type="number"
                            placeholder="最大數字" class="form-control" value="0" min="0" style="max-width:10rem"><span
                            class="font-support" style="width: 9rem;">日內點擊推播 </span>
                    </div>
                    <div class="modal-footer border-top-0">
                        <button id="add-item-modal-btn" type="button" class="btn primary" style="width: 100%;">新增</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="addFinanceModal" tabindex="-1" role="dialog" aria-labelledby="financeLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header border-bottom-0">

                        <h4 class="modal-title" id="financeLabel">新增標籤內容</h4>
                        <button type="button" class="custom-btn-close" data-bs-dismiss="modal" aria-label="Close"
                            @click="closeFinanceModal()"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        <div class="input-group">
                            <span class="input-group-text border-end-0 bg-white icon-search"
                                id="basic-addon-personal-add-finance-tag"></span>
                            <input type="text" class="form-control border-start-0 "
                                id="personal-add-tag-search-finance-word" style="width: 18vh;" placeholder="名稱查詢(模糊查詢)">
                            <div style="width:65px">
                                <button class="btn primary" type="button" @click="searchNewFinanceTag()"
                                    style="width: 100%; border-radius: 0 0.375rem 0.375rem 0  ;">
                                    查詢
                                </button>
                            </div>
                        </div>
                        <div style="width: 100%;">
                            <div id="finance-list-1" class="finance-list">

                                <!-- <li>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="item-1">
                                    <label class="form-check-label" for="item-1">
                                        台積電
                                    </label>
                                </div>
                            </li> -->
                            </div>
                            <div class="empty-search-div mt-3">
                                <h2 class="font-support">
                                    無查詢資料!
                                </h2>
                            </div>
                            <div class="finance-list-pagination">
                                <div class="btn-group " role="group" aria-label="First group">
                                    <button type="button" class="pagination-btn btn">1</button>
                                    <button type="button" class="pagination-btn btn">2</button>
                                    <button type="button" class="pagination-btn btn">3</button>
                                    <button type="button" class="pagination-btn btn">4</button>
                                    <button type="button" class="pagination-btn btn">...</button>
                                    <button type="button" class="pagination-btn btn">999</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer border-top-0">
                        <button type="button" class="btn primary" style="width: 100%;" @click="addFinanceItem()">新增</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="searchTagModal" tabindex="-1" role="dialog" aria-labelledby="searchTagModal"
            style="min-height:30vh;">
            <div class="modal-dialog" role="document">
                <div class="modal-content" style="min-height:30vh;max-height: 50vh;position: relative;">
                    <div class="modal-body" style="flex:none">
                        <div class="input-group">
                            <span class="input-group-text border-end-0 bg-white icon-search"
                                id="basic-addon-personal-add-finance-tag"></span>
                            <input type="text" class="form-control border-start-0 " id="personal-add-tag-search-word"
                                style="width: 18vh;" placeholder="名稱查詢(模糊查詢)">
                            <div style="width:65px">
                                <button class="btn primary" type="button" @click="searchKeywordItem()"
                                    style="width: 100%; border-radius: 0 0.375rem 0.375rem 0  ;">
                                    查詢
                                </button>
                            </div>
                        </div>
                        <div style="width: 100%;height:30vh;overflow-y: auto;">
                            <div id="kewords-list" class="kewords-list">
                                <div class="empty-search-div mt-3">
                                    <h2 class="font-support">
                                        無查詢資料!
                                    </h2>
                                </div>
                                <!-- <li>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="item-1">
                                    <label class="form-check-label" for="item-1">
                                        台積電
                                    </label>
                                </div>
                            </li> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal" id="checkBlankModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header border-0 pb-0">
                        <h3> 注意</h3>
                    </div>
                    <div class="modal-body fs-6 fw-medium pb-2">
                        請確認所有欄位無空白!
                    </div>
                    <div class="modal-footer border-0">
                        <button type="button" class="btn primary" data-bs-dismiss="modal">ok</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>
.inputsearch {
    cursor: pointer;
}


.hide-btn-group {
    display: none;
}



.personal-tag-flex {
    display: flex;
    justify-content: space-between;
}

div.deletable>.btn-group-hide {


    display: block;
}

div:first-child+div.deletable>.btn-group-hide {
    display: none;
}


.personal-tag-content {
    background-color: #FAFAFA;
    padding: 1rem;

}

#personal-add-tag-search-word-group {
    margin-top: 0.2rem;
    margin-bottom: 1rem;

}

.align-search-bar {
    display: flex;
    justify-content: space-between;
    gap: 12px;
}

#cards-list:has(.result-card) .empty-div {
    display: none;
}


#kewords-list:has(.list-item) .empty-search-div {
    display: none;
}



.remove-btn-icon-class {
    vertical-align: middle;
    border-radius: 50%;
    background-color: transparent;
    padding: 0 0.360rem 0 0
}




.result-card {
    background-color: white;
    box-shadow: 0px 4px 4px 0px rgba(94, 93, 93, 0.25);
    padding: 16px;
}


@scope (.personal-tag-page) {
    .w-25 {
        width: 25%;
    }

    .d-flex {
        display: flex;
    }

    .flex-column {
        flex-direction: column
    }

    .mt-1 {
        margin-top: 1rem
    }

    .justify-content-between {
        justify-content: space-between;
    }


    .align-items-end {
        align-items: end;
    }

    .align-items-center {
        align-items: center;
    }

    .bg-white {
        background-color: #fff;
    }

    .gap-1 {
        gap: 0.25rem;
    }

    .gap-3 {
        gap: 1rem;
    }

    .text-light {
        color: #f8f9fa
    }

    .rounded-end {
        border-top-right-radius: 0.375rem;
        border-bottom-right-radius: 0.375rem;
    }

    .border-start-0 {
        border-left: 0
    }

    .border-end-0 {
        border-right: 0
    }

    .ms-auto {
        margin-left: auto
    }

    .me-2 {
        margin-right: .5rem
    }

    .mt-3 {
        margin-top: 1rem
    }

    .pb-0 {
        padding-bottom: 0
    }

    .modal-body {
        padding: 1rem 1rem;
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        align-items: center;
        flex-wrap: wrap;
    }

}



.next-btn-align {
    display: flex;
    justify-content: right;
    margin-top: 1rem;
}



.custom-badge {
    color: #888888;
    background-color: #F5F5F5;
    border-radius: 0.375rem;
    overflow: auto;
    float: left;

}

.custom-badge label span {
    cursor: pointer;
    padding-inline: 12px;
    padding-block: 6px;
    text-align: center;
    display: block;
}

.custom-badge label input {
    position: absolute;
    top: 0;
    visibility: hidden;
}


.custom-badge:has(input:checked) {
    background-color: #EF6800;
    color: #fff;
}


.custom-badge:has(input:checked) .remove-btn-icon-class {
    color: #ffffff;
}

/* .custom-badge input:checked+span {
   
} */

.badge-group {
    position: relative;
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
}

.add-badge-button {
    background-color: #fff;
    border: 1px dashed #d8d8d8;
    color: #aaaaaa;
    height: 33px;
    display: flex;
    align-items: center;
    gap: 6px;

}

.add-badge-button:disabled {
    cursor: not-allowed;
    color: #ececec;
    border: 1px dashed #f1f1f1;
}

.delete-icon-button {
    font-size: medium;
    border-radius: 60%;
    padding: 0;
    background: #fff;
}

.custom-tooltip-3 {
    border-radius: 3px;
    padding: 3px;
    position: absolute;
    z-index: 3;
    margin-top: 3px;
    top: 24px;
    left: -36px;
}



.custom-btn-close {
    display: flex;
    align-items: start;
    top: 0px;
    right: 1rem;
    position: absolute;
    background: #fff;
    padding: 0 !important;
    font-size: 20px;
}

#cards-list {
    margin-top: 16px;

}


.finance-list {
    display: flex;
    flex-direction: column;
    width: 100%;
}


.finance-list-pagination {
    margin-top: 1rem;
    display: flex;
    justify-content: center;

}


.finance-item {
    width: 100%;
    color: #888888;
    border-radius: 0.375rem;
    overflow: auto;
    float: left;

}

.finance-item label {
    cursor: pointer;
    width: 100% !important;
    display: flex;
    border-bottom: 1px solid #e0e0e0;
    padding-left: 1rem;
}

.finance-item label span {
    padding: 9px;
    padding-block: 12px;
    cursor: pointer;
    display: block;
}



.finance-item label:has(>input:checked) {
    background-color: #DDEDF3 !important;
    color: #3f3f3f;
    border-bottom: 1px solid #ffffff;
}


.dropdowns-layout {

    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #dee2e6;
}


.list-item:nth-child(odd) {
    background: #f8f9fa
}

.list-item {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 12px;
    border-bottom: 1px solid #e0e0e0;
}

.empty-search-div {
    border-radius: 9px;
    width: 100%;
    height: 25vh;
    border: 1px dashed #b9b9b9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #7e7e7e;
}

.icon-btn {
    padding: 0;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    width: 24px;
    height: 24px;
    transition: 0.6s;
}

.icon-btn:hover {

    background-color: #DDEDF3;
}


.stayonTop {
    margin-top: 1rem;
    position: sticky;
    top: 0;
    background-color: #FAFAFA;
    z-index: 1;
    padding: 1rem 1rem 0 1rem;
    transition: 0.3s ease;
}

.btn-group-display {
    display: block;
}
</style>