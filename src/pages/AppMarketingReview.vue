<script setup>
 
</script>

<template>
    <div class="">
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button" @click="goback()">
                <i class="bi bi-arrow-left "></i></button>
            <h2 class="mb-0"> APP推播-審核</h2>
        </div>

        <div class="bg-grey mt-3 filter p-3">
            <div>
                <div class="mb-2 d-flex flex-column border-bottom pb-3">
                    <div class="d-flex align-items-center gap-2 justify-content-between">
                        <div>
                            <label for="datefiltergroup" class="font-b4-me">建立日期</label>
                            <div class=" d-flex align-items-center gap-1 " id="app-marketing-review-datefiltergroup">
                                <div class="input-group mt-1">
                                    <input type="text" class="form-control border-end-0" placeholder="開始日期"
                                        aria-label="Username" aria-describedby="basic-addon1"
                                        id="app-marketing-review-create-start-date-btn">
                                    <span class="input-group-text bg-white rounded-end "> <i
                                            class="icon-calendar"></i></span>
                                </div>

                                <div>
                                    ~
                                </div>
                                <div class="input-group mt-1">
                                    <input type="text" class="form-control border-end-0" placeholder="結束日期"
                                        aria-label="Username" aria-describedby="basic-addon1"
                                        id="app-marketing-review-create-end-date">
                                    <span class="input-group-text bg-white rounded-end "> <i
                                            class="icon-calendar"></i></span>
                                </div>
                            </div>
                        </div>
                        <div class="flex-fill">
                            <label class="font-b4-me">名稱查詢</label>
                            <div class="input-group mt-1" id="app-marketing-review-input-group">
                                <span class="input-group-text border-end-0 bg-white icon-search" id="basic-addon2"></span>
                                <input type="text" class="form-control border-start-0 "
                                    id="app-marketing-review-search-word" placeholder="查詢名單名稱">
                            </div>
                        </div>

                        <div class="flex-fill">
                            <label class="font-b4-me">編號查詢</label>
                            <div class="input-group mt-1" id="app-marketing-review-number-input-group">
                                <span class="input-group-text border-end-0 bg-white icon-search" id="basic-addon2"></span>
                                <input type="text" class="form-control border-start-0 " id="app-marketing-review-number-"
                                    placeholder="編號查詢(模糊查詢)">
                            </div>
                        </div>
                        <div style="min-width: 120px;">
                            <label for="app-marketing-status-select">狀態</label>
                            <select class="form-select mt-1" type="select" value="" id="app-marketing-review-status-select">
                                <option selected value="W">待核可</option>
                                <option value="N">已核可</option>
                            </select>
                        </div>
                        <div class="pt-4 d-flex gap-1">

                            <button class="btn primary" type="button" style="width: 100px;" @click="">
                                查詢
                            </button>



                        </div>

                    </div>
                </div>

                <div class="mt-3">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col" class="text-start align-text-top">項次
                                </th>
                                <th scope="col" class="text-start align-text-top" style="width: 120px;">編號
                                </th>
                                <th scope="col" class="text-start align-text-top">名稱
                                </th>
                                <th scope="col" class="text-start align-text-top">狀態
                                </th>
                                <th scope="col" class="text-center align-text-top">預計發送量
                                </th>
                                <th scope="col" class="text-start align-text-top">預計發送日
                                </th>
                                <th scope="col" class="align-text-top">建檔日期(人員)
                                </th>
                                <th scope="col" class="align-text-top">異動日期(人員)
                                </th>
                                <th scope="col" class="align-text-top">操作
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-start">1</td>
                                <td class="text-start">976
                                </td>
                                <td class=""> SamTes... </td>
                                <td>待核可 </td>
                                <td class="text-center">
                                    1
                                </td>
                                <td class="text-start">
                                    2024/02/26 11:21
                                </td>
                                <td class="text-start">
                                    2024/02/26 (經濟日報SAM)
                                </td>
                                <td class="text-start">
                                    2024/02/26 (周冠廷)
                                </td>
                                <td class="text-center">
                                    <div class="d-flex justify-content-center gap-1 align-items-center">
                                        <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                            <button class=" btn rounded-circle   " @click="gotoReviewDisplayPage()"
                                                 >
                                                <i class="bi bi-eye  "></i></button>
                                            <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                                style=" top: 100%;right: -50%;">
                                                檢視
                                            </span>
                                        </div>

                                        <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                            <button class=" btn rounded-circle">
                                                <i class="bi bi-eye-fill  "></i></button>
                                            <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                                style=" top: 100%;right: -50%;">
                                                預覽
                                            </span>
                                        </div>
                                        <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                            <button class=" btn rounded-circle " data-bs-toggle="modal"
                                                data-bs-target="#app-marketing-review-reject-modal">
                                                <i class="bi bi-check-circle"></i></button>
                                            <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                                style=" top: 100%;right: -50%;">
                                                核可
                                            </span>
                                        </div>


                                        <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                            <button class=" btn rounded-circle  " style="" data-bs-toggle="modal"
                                                data-bs-target="#app-marketing-review-reject-modal">
                                                <i class="bi bi-arrow-return-left"></i></button>
                                            <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                                style=" top: 100%;right: -50%;">
                                                推件
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
                                <button type="button" class="pagination-btn btn"> 第一頁</button>
                            </div>
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
                            <div class="btn-group me-2" role="group" aria-label="Second group">
                                <button type="button" class="pagination-btn btn"> 最後一頁</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="app-marketing-review-approve-modal" data-bs-backdrop="static" data-bs-toggle="modal"
            data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header border-0 pb-0">
                        <h3> 確認通知</h3>
                    </div>
                    <div class="modal-body fs-6 fw-medium pb-2">
                        確定要 "核可" 此檔任務 ? ?
                    </div>
                    <div class="modal-footer border-0">
                        <button type="button" class="btn" data-bs-dismiss="data-bs-dismiss">取消</button>
                        <button type="button" class="btn primary ">確定</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal" id="app-marketing-review-reject-modal" data-bs-toggle="modal" data-bs-backdrop="static"
            data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header border-0 pb-0">
                        <h3> 確認通知</h3>
                    </div>
                    <div class="modal-body fs-6 fw-medium pb-2">
                        確定要 "退件" 此檔任務 ?
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