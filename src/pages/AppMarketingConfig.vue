<script setup>
import { ref } from 'vue'
import router from '../router';

const status = ref(0)

function toAppAddPage(){
    router.push({name:'AppMarketingConfigAdd'})
}

</script>
<template>
    <div class="d-flex justify-content-between">
        <div class="d-flex align-items-center">
            <button class="btn rounded-circle btn-sm" type="button" @click="goback()">
                <i class="bi bi-arrow-left "></i></button>
            <h2 class="mb-0"> App 行銷設定</h2>
        </div>
        <button class="btn secondary text-light" @click="toAppAddPage()">新增 <i class="bi bi-plus"></i></button>
    </div>
    <div class="bg-grey mt-3 filter p-3">
        <div class="mb-2 d-flex flex-column">
            <div class="d-flex align-items-end gap-2 flex-wrap border-bottom pb-3">
                <div>
                    <label for="" class="font-b4-me">電子報發送日期</label>
                    <div class=" d-flex align-items-center gap-1 ">
                        <div class="col flex-fill">
                            <div class="input-group mt-1">
                                <input type="text" class="form-control border-end-0" placeholder="開始日期"
                                    aria-label="Username" aria-describedby="basic-addon1" id="app-config-startdate">
                                <span class="input-group-text bg-white rounded-end "> <i class="icon-calendar"></i></span>
                            </div>
                        </div>
                        <div>
                            ~
                        </div>
                        <div class="col flex-fill">
                            <div class="input-group mt-1">
                                <input type="text" class="form-control border-end-0" placeholder="結束日期"
                                    aria-label="Username" aria-describedby="basic-addon1" id="app-config-enddate">
                                <span class="input-group-text bg-white rounded-end "> <i class="icon-calendar"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col flex-fill">
                    <label for="app-marketing-search-word-group" class="font-b4-me">名稱查詢</label>
                    <div class="input-group" id="app-marketing-search-word-group">
                        <span class="input-group-text border-end-0 bg-white bi bi-search"></span>
                        <input type="text" class="form-control border-start-0 " id="app-marketing-search-word"
                            style="width: 18vh;" placeholder="名稱查詢(模糊查詢)">
                    </div>
                </div>
                <div class="col flex-fill ">
                    <label for="app-marketing-search-word-group" class="font-b4-me">編號查詢</label>
                    <div class="input-group" id="app-marketing-search-word-group">
                        <span class="input-group-text border-end-0 bg-white bi bi-search" id="basic-addon-sms"></span>
                        <input type="text" class="form-control border-start-0 " id="app-marketing-search-word"
                            placeholder="編號查詢(模糊查詢)" style="width: 18vh;">
                    </div>
                </div>

                <div class="col flex-fill">
                    <label for="app-marketing-status-select">狀態</label>
                    <select class="form-select " type="select" value="" id="eletter-status-select" v-model="status">
                        <option value="0">不限</option>
                        <option value="1">正式</option>
                        <option value="2">暫存</option>
                    </select>
                </div>

                <div class=" pt-4 d-flex gap-2">
                    <button class="btn primary" type="button" @click="">
                        查詢
                    </button>

                </div>

            </div>
        </div>

        <div id="analysis-list-table" class="mt-3">

            <h3>簡訊推播明細</h3>


            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col" class="text-start align-text-top">項次
                        </th>
                        <th scope="col" class="text-start align-text-top">編號
                        </th>
                        <th scope="col" class="text-start align-text-top">名稱
                        </th>
                        <th scope="col" class="text-center align-text-top">狀態
                        </th>
                        <th scope="col" class="text-center align-text-top">預計發送量
                        </th>
                        <th scope="col" class="text-center align-text-top">預計發送日
                        </th>
                        <th scope="col" class="text-center align-text-top">建檔日期(人員)
                        </th>
                        <th scope="col" class="text-center align-text-top">異動日期(人員)
                        </th>
                        <th scope="col" class="text-center align-text-top">執行概況
                        </th>
                        <th scope="col" class="text-center align-text-top">操作
                        </th>
                    </tr>
                </thead>
                <tbody id="app-marketing-settings-tbody">
                    <tr><td class="text-start" onclick="">1</td><td class="text-start" onclick="">7601391</td><td class="text-start" onclick="">finalt...	</td><td class="text-center" onclick=""><span class="badge txt-success">正式</span></td><td class="text-center" onclick="">2023/12/14 13:29</td><td class="text-center" onclick="">2023/12/14 (周冠廷)</td><td class="text-center" onclick="">2023/12/14 (周冠廷)</td><td class="text-center" onclick="">2023/12/14 (周冠廷)</td><td class="text-center" onclick=""><span class="badge txt-info">排序中 </span></td><td class="text-center" onclick=""><div id="app-config-tablebtns-section" class="d-flex align-items-center justify-content-center">
<div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
    <button class="iconbtn btn rounded-circle btn-sm  d-flex justify-content-center align-items-center" style="width:28px;height: 28px" onclick="gotoReviewDisplayPage()">
        <i class="icon-view"></i></button>
    <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1" style=" top: 100%;right: -50%;">
    檢視
    </span>
</div>
<div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
<button class="iconbtn btn rounded-circle btn-sm d-flex justify-content-center align-items-center" onclick="goToOvwAnalysisPage()" style="width:28px;height: 28px">
    <i class="icon-analysis fs-6"></i></button>
<span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1 " style=" top: 100%;right: -50%;">
    回應分析
</span>
</div>
<div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
    <button class="iconbtn btn rounded-circle btn-sm d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#app-config-preview-dialog" style="width:28px;height: 28px">
        <i class="icon-preview fs-5"></i></button>
    <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1" style=" top: 100%;right: -50%;">
        預覽
    </span>
</div>
<div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
    <button class="iconbtn btn rounded-circle btn-sm d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#history-dialog" style="width:28px;height: 28px">
        <i class="icon-timeline fs-5"></i></button>
    <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1" style=" top: 100%;right: -50%;">
        歷程
    </span>
</div>
<div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
    <button class="iconbtn btn rounded-circle btn-sm d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#app-config-delete-dialog" style="width:28px;height: 28px">
        <i class="icon-delete fs-5"></i></button>
    <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1" style=" top: 100%;right: -50%;">
        刪除
    </span>
</div>
    </div></td></tr>
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



    <!-- 預覽 -->
    <div class="modal fade" id="app-config-preview-dialog" tabindex="-1" aria-labelledby="resultModalLabel"
        aria-hidden="true">

        <div class="modal-dialog ">
            <div class="modal-content ">
                <div class="modal-header border-0 pb-0">
                    <h3 class="mb-0">預覽</h3>
                </div>
                <div class="modal-body">
                    <div class="bg-grey mt-3 filter p-3 modal-body">
                        <div class="border-bottom">
                            名稱
                            <h4> 【testtemptest】</h4>
                        </div>
                        <div class="row mt-3">
                            <div class="col">
                                <label for="input-theme-name" class="font-b4-me">簡訊內容
                                </label>
                                <div class="font-b4-he mt-1">
                                    55555555888
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-2 d-flex justify-content-end">
                        <button class="primary" data-bs-dismiss="modal">離開</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- delete modal -->
    <div class="modal fade" id="app-config-delete-dialog" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
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

    <!--history-modal-->
    <div class="modal fade" id="history-dialog" tabindex="-1" aria-labelledby="" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header border-0 pb-0">
                    <h3> wayneTest23231205</h3>
                </div>
                <div class="modal-body">
                    <div class=" bg-grey filter p-3">
                        <div class="border-bottom pb-3 d-flex gap-5">
                            <div class="font-b4-me">
                                操作者：<span class="font-b4-he">40040-1</span>
                            </div>
                            <div class="font-b4-me">
                                時間： <span class="font-b4-he">2023/12/05 10:58:04</span>
                            </div>
                            <div class="font-b4-me">
                                事件：<span class="font-b4-he">電子報新增完成</span>
                            </div>
                        </div>
                        <div class="border-bottom pb-3 d-flex gap-5 mt-3">
                            <div class="font-b4-me">
                                操作者：<span class="font-b4-he">40040-1</span>
                            </div>
                            <div class="font-b4-me">
                                時間： <span class="font-b4-he">2023/12/05 10:58:04</span>
                            </div>
                            <div class="font-b4-me">
                                事件：<span class="font-b4-he">電子報新增完成</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-0">
                    <button type="button" class="btn " data-bs-dismiss="modal">取消</button>

                </div>
            </div>
        </div>
    </div>
</template>