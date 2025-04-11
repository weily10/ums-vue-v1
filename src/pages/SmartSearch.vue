<script setup>
import router from '../router'
import { ref,onMounted  } from 'vue'
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ConfirmModal from '../components/ConfirmModal.vue'

const deleteModal = ref(false)
let id = 'deleteModal'


function showConfirmModal() {
    deleteModal.value.show()
}


function closeModal(){
    
}

onMounted(() => {
    deleteModal.value = new Modal(document.getElementById(id))
})



</script>
<template>
    <div>
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button" @click="goback()">
                <i class="bi bi-arrow-left "></i></button>
            <h2 class="mb-0">智慧檢索</h2>
        </div>
        <div class=" bg-grey filter p-3 mt-3">
            <div>
                <h4> 智慧檢索主題清單
                </h4>
                <div class="d-flex justify-content-start align-items-bottom my-2 gap-2">
                    <div class="col">
                        <label for="input-topic-group" class="font-b4-me">主題名稱</label>
                        <div class="input-group" id="input-topic-group">
                            <span class="input-group-text border-end-0 bg-white bi bi-search" id="basic-addon3"></span>
                            <input type="text" class="form-control border-start-0 " id="topic-keyword"
                                placeholder="請輸入主題名稱">
                        </div>

                    </div>
                    <div class="col">
                        <label for="input-theme-group" class="font-b4-me">標籤名稱</label>
                        <div class="input-group" id="input-theme-group">
                            <span class="input-group-text border-end-0 bg-white bi bi-search" id="basic-addon4"></span>
                            <input type="text" class="form-control border-start-0 " id="theme-keyword"
                                placeholder="請輸入標籤名稱">
                        </div>

                    </div>
                    <div class="col">
                        <label for="input-status-group" class="font-b4-me">依媒合狀態</label>
                        <select class="form-select " type="select" value="" id="select-status">
                            <option selected>不限</option>
                            <option value="1">執行完成</option>
                            <option value="2">執行成功</option>
                        </select>
                    </div>
                    <div class="align-self-end">
                        <button class="btn primary" type="button" @click="">
                            查詢
                        </button>
                    </div>

                </div>
                <table class="table table-striped ">
                    <thead>
                        <tr>
                            <th scope="col" style="width: 60px;" class="text-center align-text-top">項次 </th>
                            <th scope="col" style="width: 90px;" class="text-center align-text-top">編號</th>
                            <th scope="col" style="width: 120px;" class="text-start align-text-top">主題名稱 </th>
                            <th scope="col" style="width: 90px;" class="text-start align-text-top">標籤名稱 </th>
                            <th scope="col" class="text-start  align-text-top">媒合分析</th>
                            <th scope="col" style="width: 120px" class="text-center  align-text-top">行為分析</th>
                            <th scope="col" class="text-start  align-text-top">建檔人</th>
                            <th scope="col" class="text-center  align-text-top">建立日期</th>
                            <th scope="col" class="text-center  align-text-top">操作</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-center">12</td>
                            <td class="text-center">20200</td>
                            <td class="text-start">
                                碳費困境
                            </td>
                            <td class="text-start">碳費,減碳,再生能源</td>

                            <td class="text-start">執行完成</td>
                            <td class="text-center">未執行 </td>
                            <td class="text-start">許哲豪</td>
                            <td class="text-center">2023/11/09 14:08:46</td>
                            <td class="text-center">
                                <div class="d-flex justify-content-center gap-1 fs-6">
                                    <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                        <button class=" btn rounded-circle btn-sm" type="button"
                                            @click="router.push({ name: 'AddTheme' })">
                                            <i class="bi bi-copy "
                                                style="padding-right: 2px; padding-left: 2px;"></i></button>
                                        <span class="custom-tooltip-2 rounded  position-absolute z-3 mt-1"
                                            style=" top: 100%;right: -50%;">
                                            複製
                                        </span>
                                    </div>
                                    <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                        <button class=" btn rounded-circle btn-sm" type="button"
                                            @click="router.push({ name: 'MatchmakingAnalysis' })">
                                            <i class="bi bi-graph-up "></i></button>
                                        <span class="custom-tooltip-2 rounded  position-absolute z-3 mt-1"
                                            style=" top: 100%;right: -50%;">
                                            檢視分析報告
                                        </span>
                                    </div>
                                    <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                        <button class=" btn rounded-circle btn-sm" type="button"
                                            @click="showConfirmModal()">
                                            <i class="bi bi-trash  "></i></button>
                                        <span class="custom-tooltip-2 rounded position-absolute z-3 mt-1"
                                            style=" top: 100%;right: -50%;">
                                            刪除
                                        </span>
                                    </div>
                                </div>
                            </td>
                        </tr>
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

        <ConfirmModal :id="id" @confirmClose="closeModal" :message="'確定刪除該筆資料?'"></ConfirmModal>
    </div>
</template>