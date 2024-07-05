<script setup>

</script>

<template>
    <div class="">
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button" onclick="goback()">
                <i class="bi bi-arrow-left fs-6 py-1 "></i></button>
            <h2 class="mb-0">電子報審核</h2>
        </div>
        <div class="bg-grey mt-3 filter p-3">
            <div class="mb-2 d-flex flex-column">
                <div class="d-flex align-items-end gap-2  flex-wrap border-bottom pb-3">
                    <div class="">
                        <label for="datefiltergroup" class="font-b4-me">電子報發送日期</label>
                        <div class=" d-flex align-items-center gap-1 ">

                            <div class="col flex-fill">
                                <div class="input-group mt-1">
                                    <input type="text" class="form-control border-end-0" placeholder="開始日期"
                                        id="review-sent-start-date-btn">
                                    <span class="input-group-text bg-white rounded-end "> <i
                                            class="icon-calendar"></i></span>
                                </div>
                            </div>
                            <div>
                                ~
                            </div>
                            <div class="col flex-fill">
                                <div class="input-group mt-1">
                                    <input type="text" class="form-control border-end-0" placeholder="結束日期"
                                        id="review-sent-end-date-btn">
                                    <span class="input-group-text bg-white rounded-end "> <i
                                            class="icon-calendar"></i></span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="ms-2">
                        <label>
                            電子報核可狀態
                        </label>
                        <div class="btn-group button-checkbox d-flex " role="group" id="eletter-status">
                            <input type="radio" class="btn-check" name="share-types" id="eletter-status-approved"
                                autocomplete="off" value="eletter-status-approved" checked>
                            <label class="btn text-nowrap" for="eletter-status-approved">待核可 </label>
                            <input type="radio" class="btn-check" name="share-types" id="eletter-status-not-approved"
                                autocomplete="off" value="eletter-status-not-approved">
                            <label class="btn " for="eletter-status-not-approved"> 已核可
                            </label>

                        </div>
                    </div>

                    <div class="ms-auto list-icon position-relative d-inline-block fw-semibold  hover-label">
                        <button class="btn primary" type="button" onclick="">
                            查詢
                        </button>
                        <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                            style=" top:106%;right: -10%;">
                            提醒：請於各 EDM 發行日期【前】完成審核的動作，避免 EDM 發送排程漏發您的任務，謝謝！
                        </span>
                    </div>
                </div>
            </div>

            <div id="analysis-list-table" class="mt-3">
                <h3> 電子報明細
                </h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col" class="text-center align-text-top">發行日期
                            </th>
                            <th scope="col" class="text-start align-text-top">項次
                            </th>
                            <th scope="col" class="text-start align-text-top">電子報名稱
                            </th>
                            <th scope="col" class="text-end align-text-top">整檔名單總數
                            </th>
                            <th scope="col" class="text-center align-text-top">異動日期時間
                            </th>
                            <th scope="col" class="text-center align-text-top">作業
                            </th>
                        </tr>
                    </thead>
                    <tbody id="eletter-review-detail-tbody">

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
                        <button type="button" class="btn " data-bs-dismiss="modal">取消</button>
                        <button type="button" class="btn primary ">建立</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal" id="marketing-review-reject-modal" data-bs-toggle="modal" data-bs-backdrop="static"
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
                        <button type="button" class="btn primary" onclick="reviewRejectSuccess()">確定</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="marketing-review-approve-modal" data-bs-backdrop="static" data-bs-toggle="modal"
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
                        <button type="button" class="btn" data-bs-dismiss="modal">取消</button>
                        <button type="button" class="btn primary" onclick="marketingReviewApprove()">確定</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="marketing-review-approve-failed" data-bs-backdrop="static" data-bs-toggle="modal"
            data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header border-0 pb-0">
                        <h3> 審核失敗!</h3>
                    </div>
                    <div class="modal-body fs-6 fw-medium pb-2">
                        您必須於電子報發送日(20240201)前完成審核!
                    </div>
                    <div class="modal-footer border-0">
                        <button type="button" class="btn primary " data-bs-dismiss="modal">ok</button>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>