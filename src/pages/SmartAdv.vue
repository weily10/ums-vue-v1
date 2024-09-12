<script setup>
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import router from '../router/index.js'
import { ref, onMounted } from 'vue'
import ConfirmModal from '../components/ConfirmModal.vue'

let deleteModal = ref(false)
let id = 'deleteModal'


const items = ref([
    {
        no: '1',
        no2: '4124',
        themename: 'wayneTest',
        themeTag: '美妝_綜合美妝	',
        analysis: '執行完成',
        actionanalysis: '未執行',
        zaiju: 'Desktop',
        desktopmobile: 0,
        list: ' N/ A',
        status: 'N / A	',
        phonelist: 'N / A',
        phonestatus: ' N / A	',
        creatorname: '周冠廷',
        createdate: ' 2023 / 10 / 20 11:04: 34'
    }
])


function toSmartAdKeywordAdvAddPage() {
    router.push({ name: "SmartAdThemeAdvertisingAdd" })
}


function viewAnalysisReport() {
    router.push({ name: "SmartAnalysisReport" })
}

onMounted(() => {
    deleteModal.value = new Modal(document.getElementById(id))
})

function showConfirmModal1() {
    deleteModal.value.show()
}

function closeModal() {
     deleteModal.value.hide()
}
 




</script>

<template>
    <div class="">
        <div class="d-flex justify-content-between gap-1">
            <div class="d-flex align-items-center gap-1">
                <button class="btn rounded-circle btn-sm" type="button" @click="router.go(-1)">
                    <i class="bi bi-arrow-left  fs-6 py-1 "></i></button>
                <h2 class="mb-0"> 主題標籤廣告</h2>
            </div>
            <button class="btn secondary text-light" @click="toSmartAdKeywordAdvAddPage()">新增 <i
                    class="bi bi-plus"></i></button>
        </div>

        <div class="bg-grey mt-3 filter p-3">
            <div class="mb-2 d-flex flex-column">
                <div class="d-flex align-items-end gap-2  flex-wrap border-bottom pb-3">

                    <div class="col">
                        <label for="newsletter-search-input-group" class=" font-b4-me">主題名稱</label>
                        <div class="input-group" id="smart-ad-theme-group" style="min-width: 350px;">
                            <span class="input-group-text border-end-0 bg-white bi bi-search"
                                id="newsletter-search-basic-addon"></span>
                            <input type="text" class="form-control border-start-0 " id="smart-ad-theme-name"
                                placeholder="主題名稱(模糊查詢)">
                        </div>
                    </div>
                    <div>
                        <label class="font-b4-me">可投遞曝光數</label>
                        <div class=" d-flex align-items-center gap-1 ">
                            <div class="col">
                                <input type="number" class="form-control " placeholder="最小值" aria-label="Username"
                                    aria-describedby="basic-addon1" id="smart-ad-theme-deliverable-impressions-min">

                            </div>
                            <div>
                                ~
                            </div>
                            <div class="col">
                                <input type="number" class="form-control" placeholder="最大值" aria-label="Username"
                                    aria-describedby="basic-addon1" id="smart-ad-theme-deliverable-impressions-max">
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <label for="newsletter-search-input-group" class=" font-b4-me"> 編號查詢 </label>
                        <div class="input-group" id="smart-ad-theme-number-search" style="min-width: 350px;">
                            <span class="input-group-text border-end-0 bg-white bi bi-search" id=""></span>
                            <input type="text" class="form-control border-start-0 " id="smart-ad-theme-theme-theme"
                                placeholder="編號查詢">
                        </div>
                    </div>
                    <div class=" pt-4 d-flex gap-2 ms-auto">
                        <button class="btn primary" type="button" @click="">
                            查詢
                        </button>
                    </div>
                </div>
            </div>

            <div id="smart-ad-theme-list-table-wrapper" class="mt-3">
                <h3> 電子報明細
                </h3>
                <div class="table-responsive-xxl">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col" class="text-start align-text-top" style="min-width: 60px;">項次
                                </th>
                                <th scope="col" class="text-start align-text-top" style="min-width: 60px;">編號
                                </th>
                                <th scope="col" class="text-start align-text-top" style="min-width: 80px;">主題名稱
                                </th>
                                <th scope="col" class="text-start align-text-top" style="min-width: 80px;">主題標籤
                                </th>
                                <th scope="col" class="text-center align-text-top" style="min-width: 80px;">媒合分析
                                </th>
                                <th scope="col" class="text-center align-text-top" style="min-width: 80px;">行為分析</th>
                                <th scope="col" class="text-center align-text-top" style="min-width: 60px;">載具</th>
                                <th scope="col" class="text-start align-text-top" style="min-width: 100px;"> 可投遞曝光數 (Desktop
                                    / Mobile)
                                </th>
                                <th scope="col" class="text-start align-text-top" style="min-width: 80px;">桌機名單
                                </th>
                                <th scope="col" class="text-start align-text-top" style="min-width: 80px;">桌機名單狀態
                                </th>
                                <th scope="col" class="text-start align-text-top" style="min-width: 80px;">手機名單
                                </th>
                                <th scope="col" class="text-start align-text-top" style="min-width: 80px;">手機名單狀態
                                </th>
                                <th scope="col" class="text-start align-text-top" style="min-width: 60px;">建檔人
                                </th>
                                <th scope="col" class="text-center align-text-top" style="min-width: 60px;">建檔日期
                                </th>
                                <th scope="col" class="text-center align-text-top" style="min-width: 60px;">功能
                                </th>
                            </tr>
                        </thead>
                        <tbody id="smart-ad-theme-detail-tbody">
                            <template v-for="(item, index) in items" :key="index">
                                <tr>
                                    <td>
                                        {{ item.no }}
                                    </td>
                                    <td>
                                        {{ item.no2 }}
                                    </td>
                                    <td>
                                        {{ item.themename }}
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
                                        {{ item.zaiju }}
                                    </td>
                                    <td>
                                        {{ item.desktopmobile }}
                                    </td>
                                    <td>
                                        {{ item.list }}
                                    </td>
                                    <td>
                                        {{ item.status }}
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
                                    <td class="">
                                        <div class="list-icon position-relative d-inline-block fw-semibold  hover-label ">
                                            <button class=" btn rounded-circle btn-sm" type="button"
                                                @click="router.push({ name: 'SmartAdThemeAdvertisingAdd' })">
                                                <i class="bi bi-copy fs-6"
                                                    style="padding-right: 2px; padding-left: 2px;"></i></button>
                                            <span class="custom-tooltip-2 rounded  position-absolute z-3 mt-1"
                                                style=" top: 100%;right: -50%;">
                                                複製
                                            </span>
                                        </div>
                                        <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                            <button class="btn rounded-circle btn-sm" type="button"
                                                @click="viewAnalysisReport()">
                                                <i class="bi bi-graph-up fs-6"></i></button>
                                            <span class="custom-tooltip-2 rounded  position-absolute z-3 mt-1"
                                                style=" top: 100%;right: -50%;">
                                                檢視分析報告
                                            </span>
                                        </div>
                                        <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                            <button class=" btn rounded-circle btn-sm" type="button"
                                                @click="showConfirmModal1">
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
                </div>
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
                </div>
            </div>
        </div>
        <ConfirmModal :id="id" @confirmClose="closeModal"></ConfirmModal>
      
    </div>
</template>