<script setup>
import router from '../router/index.js'
import { ref } from 'vue'

const items = ref([
    {
        no: '1',
        no2: '4124',
        themename: 'wayneTest',
        themeTag: '美妝_綜合美妝	',
        analysis: '執行完成',
        actionanalysis: '未執行',
         desktopmobile: 0,
        list: ' N/ A',
        status: 'N / A	',
        phonelist: 'N / A',
        phonestatus: ' N / A	',
        creatorname: '周冠廷',
        createdate: ' 2023 / 10 / 20 11:04: 34'
    }
])



function toAdKeywordAddPage() {
    router.push({ name: "add-theme" })
}

function toSmartAdKeywordAdvAddPage() {
    router.push({ name: "SmartAdThemeAdvertisingAdd" })
}


function viewAnalysisReport(){
    router.push({ name: "SmartAnalysisReport" })
}



function goback() {

}
</script>

<template >
    <div class="">
        <div class="d-flex justify-content-between gap-1">
            <div class="d-flex align-items-center gap-1">
                <button class="btn rounded-circle btn-sm" type="button" @click="goback()">
                    <i class="bi bi-arrow-left  fs-6 py-1 "></i></button>
                <h2 class="mb-0"> 關鍵字廣告</h2>
            </div>
            <button class="btn secondary text-light" @click="toAdKeywordAddPage()">新增 <i class="bi bi-plus"></i></button>
        </div>

        <div class="bg-grey mt-3 filter p-3">
            <div class="d-flex align-items-end gap-2  flex-wrap border-bottom pb-3">
                <div class="col">
                    <label for="newsletter-search-input-group" class="font-b4-me">主題名稱</label>
                    <div class="input-group" id="smart-ad-keyword-theme-group" style="min-width: 350px;">
                        <span class="input-group-text border-end-0 bg-white bi bi-search"
                            id="newsletter-search-basic-addon"></span>
                        <input type="text" class="form-control border-start-0 " id="smart-ad-keyword-theme"
                            placeholder="主題名稱(模糊查詢)	">
                    </div>
                </div>
                <div>
                    <label class="font-b4-me">可投遞曝光數</label>
                    <div class=" d-flex align-items-center gap-1 " style="min-width: 350px;">
                        <div class="col">
                            <input type="number" class="form-control " placeholder="最小值" aria-label="Username"
                                aria-describedby="basic-addon1" id="smart-ad-deliverable-impressions-min">

                        </div>
                        <div>
                            ~
                        </div>
                        <div class="col">
                            <input type="number" class="form-control" placeholder="最大值" aria-label="Username"
                                aria-describedby="basic-addon1" id="smart-ad-deliverable-impressions-max">

                        </div>
                    </div>
                </div>
                <div class="col">
                    <label for="newsletter-search-input-group" class="font-b4-me"> 編號查詢 </label>
                    <div class="input-group" id="smart-ad-number-search" style="min-width: 350px;">
                        <span class="input-group-text border-end-0 bg-white bi bi-search" id=""></span>
                        <input type="text" class="form-control border-start-0 " id="smart-ad-keyword-theme"
                            placeholder="編號查詢">
                    </div>
                </div>
                <div class=" pt-4 d-flex gap-2 ms-auto">
                    <button class="btn primary" type="button" @click="">
                        查詢
                    </button>
                </div>
            </div>

            <div id="analysis-list-table" class="mt-3">
                <h3> 電子報明細
                </h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col" class="text-start align-text-top">項次
                            </th>
                            <th scope="col" class="text-start align-text-top">編號
                            </th>
                            <th scope="col" class="text-start align-text-center">主題名稱
                            </th>
                            <th scope="col" class="text-start align-text-top">媒合分析
                            </th>
                            <th scope="col" class="text-center align-text-top">行為分析
                            </th>
                            <th scope="col" class="text-start align-text-top"> 可投遞曝光數 (Desktop / Mobile)
                            </th>
                            <th scope="col" class="text-start align-text-top">桌機名單
                            </th>
                            <th scope="col" class="text-start align-text-top">手機名單
                            </th>
                            <th scope="col" class="text-start align-text-top">手機名單狀態
                            </th>
                            <th scope="col" class="text-start align-text-top">建檔人
                            </th>
                            <th scope="col" class="text-center align-text-top">建檔日期
                            </th>
                            <th scope="col" class="text-center align-text-top">功能
                            </th>
                        </tr>
                    </thead>
                    <tbody id="smart-ad-keyword-detail-tbody">
                        <template v-for="(item, index) in items" :key="index">
                                <tr>
                                    <td>
                                        {{ item.no }}
                                    </td>
                                    <td>
                                        {{ item.no2 }}
                                    </td>
                          
                                    <td>
                                        {{ item.themeTag }}
                                    </td>
                                    <td>
                                        {{ item.analysis }}
                                    </td>
                                    <td>
                                        {{ item.actionanalysis }}
                                    </td>
                           
                                    <td>
                                        {{ item.desktopmobile }}
                                    </td>
                                    <td>
                                        {{ item.list }}
                                    </td>
                          
                                    <td>
                                        {{ item.phonelist }}
                                    </td>
                                    <td>
                                        {{ item.phonestatus }}
                                    </td>
                                    <td>
                                        {{ item.creatorname }}
                                    </td>
                                    <td>
                                        {{ item.createdate }}
                                    </td>
                                    <td>
                                        <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                            <button class="iconbtn btn rounded-circle btn-sm" type="button"
                                                @click="gotoCopyPage()">
                                                <i class="bi bi-copy fs-6"
                                                    style="padding-right: 2px; padding-left: 2px;"></i></button>
                                            <span class="custom-tooltip-2 rounded  position-absolute z-3 mt-1"
                                                style=" top: 100%;right: -50%;">
                                                複製
                                            </span>
                                        </div>
                                        <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                            <button class="iconbtn btn rounded-circle btn-sm" type="button"
                                                @click="viewAnalysisReport()">
                                                <i class="bi bi-graph-up fs-6"></i></button>
                                            <span class="custom-tooltip-2 rounded  position-absolute z-3 mt-1"
                                                style=" top: 100%;right: -50%;">
                                                檢視分析報告
                                            </span>
                                        </div>
                                        <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                            <button class="iconbtn btn rounded-circle btn-sm" type="button"
                                                @click="showConfirmModal(this)">
                                                <i class="bi bi-trash fs-6"></i></button>
                                            <span class="custom-tooltip-2 rounded position-absolute z-3 mt-1"
                                                style=" top: 100%;right: -50%;">
                                                刪除
                                            </span>
                                        </div>
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
                            <button type="button" class="pagination-btn btn fs-5 p-0"><i class="icon-right"></i></button>

                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>


        <!-- smart-search-number-modal -->

        <div class="modal fade" id="smart-search-modal" tabindex="-1" aria-labelledby="resultModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header border-0 pb-0">
                        <h3> 智慧檢索編號</h3>
                    </div>
                    <div class="modal-body">
                        <div class=" bg-grey filter p-3">
                            <div class="font-b4-me">
                                請輸入客製化名稱
                            </div>
                            <div class="mt-1">
                                <input type="text" class="form-control  " id="custom-name-input" placeholder="請勿包含特殊符號">
                            </div>
                            <div class="font-b4-me mt-3">
                                請輸入智慧檢索編號
                            </div>
                            <div class="mt-1">
                                <input type="text" class="form-control  " id="smart-search-number-input" placeholder="">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer border-0">
                        <button type="button" class="btn" data-bs-dismiss="modal">取消</button>
                        <button type="button" class="btn primary ">建立</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- remove-modal -->
        <div class="modal" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
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
                        <button type="button" class="btn primary ">確定</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>