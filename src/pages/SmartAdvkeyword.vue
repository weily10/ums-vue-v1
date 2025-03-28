<script setup>
import router from '../router/index.js'
import { ref, onMounted } from 'vue'
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ConfirmModal from '../components/ConfirmModal.vue'
import Table from '../components/Table.vue'



const items = ref([
    {
        no: '1',
        no2: '4124',
        themename: 'wayneTest',
        analysis: '執行完成',
        actionanalysis: '未執行',
        desktopmobile: 0,
        desktop: ' N/ A',
        phonelist: 'N / A',
        phonestatus: ' N / A',
        creatorname: '周冠廷',
        createdate: ' 2023 / 10 / 20 11:04: 34'
    }
])

const headers = ref([
    '項次',
    '編號',
    '主題名稱',
    '媒合分析',
    '行為分析',
    '可投遞曝光數 (Desktop / Mobile)',
    '桌機名單',
    '手機名單',
    '手機名單狀態',
    '建檔人',
    '建檔日期',
    '功能'
])


const deleteModal = ref(false)
let id = 'deleteModal'


function toAdKeywordAddPage() {
    router.push({ name: "AddTheme" })
}

function toSmartAdKeywordAdvAddPage() {
    router.push({ name: "SmartAdThemeAdvertisingAdd" })
}


function viewAnalysisReport() {
    router.push({ name: "SmartAnalysisReport" })
}



function gotoCopyPage() {
    router.push({ name: "AddTheme" })
}

function showConfirmModal() {
    deleteModal.value.show()
}

function closeModal() {
    deleteModal.value.hide()
}



onMounted(() => {
    deleteModal.value = new Modal(document.getElementById(id))
})

</script>

<template>
    <div class="">
        <div class="d-flex justify-content-between gap-1">
            <div class="d-flex align-items-center gap-1">
                <button class="btn rounded-circle btn-sm" type="button" @click="router.go(-1)">
                    <i class="bi bi-arrow-left   fs-6 py-1 "></i></button>
                <h2 class="mb-0"> 關鍵字廣告</h2>
            </div>
            <button class="btn secondary text-light" @click="toAdKeywordAddPage()">新增 <i class="bi bi-plus"></i></button>
        </div>

        <div class="bg-grey mt-3  p-3">
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

            <Table :tableData='items' :headers="headers">
                <template v-slot:header="{item}">
                    <div v-if="item === '功能'" class="text-center ">{{ item }}</div>
                </template>
                <template v-slot:content >
                 </template>
                <template v-slot:actions>
                    <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                        <button class="iconbtn btn rounded-circle btn-sm" type="button" @click="gotoCopyPage(item)">
                            <i class="bi bi-copy fs-6" style="padding-right: 2px; padding-left: 2px;"></i></button>
                        <span class="custom-tooltip-2 rounded  position-absolute z-3 mt-1" style=" top: 100%;right: -50%;">
                            複製
                        </span>
                    </div>
                    <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                        <button class="iconbtn btn rounded-circle btn-sm" type="button" @click="viewAnalysisReport(item)">
                            <i class="bi bi-graph-up fs-6"></i></button>
                        <span class="custom-tooltip-2 rounded  position-absolute z-3 mt-1" style=" top: 100%;right: -50%;">
                            檢視分析報告
                        </span>
                    </div>
                    <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                        <button class="iconbtn btn rounded-circle btn-sm" type="button" @click="showConfirmModal(item)">
                            <i class="bi bi-trash fs-6"></i></button>
                        <span class="custom-tooltip-2 rounded position-absolute z-3 mt-1" style=" top: 100%;right: -50%;">
                            刪除
                        </span>
                    </div>
                </template>
            </Table>
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
        <ConfirmModal :id="id" @confirmClose="closeModal" :message="'確定刪除該筆資料?'"></ConfirmModal>
    </div>
</template>


<style scoped></style>