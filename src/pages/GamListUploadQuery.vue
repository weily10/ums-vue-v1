<template>
    <div class="">
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button" onclick="goback()">
                <i class="icon-arrowback fs-6 py-1 "></i></button>
            <h2 class="mb-0"> GAM精準名單上傳進度查詢</h2>
        </div>


        <div class="bg-grey mt-3  p-3">
            <div class="mb-2 d-flex flex-column">
                <div class="d-flex align-items-end gap-2 flex-wrap border-bottom pb-3">
                    <div>
                        <label for="" class="font-b4-me">電子報發送日期</label>
                        <div class=" d-flex align-items-center gap-1 ">
                            <div class="col flex-fill">
                                <div class="input-group mt-1">
                                    <input type="text" class="form-control border-end-0" placeholder="開始日期"
                                        id="gam-list-start-date-btn">
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
                                        id="gam-list-end-date-btn">
                                    <span class="input-group-text bg-white rounded-end "> <i
                                            class="icon-calendar"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-fill">
                        <label for="" class="font-b4-me">DFP上傳狀態</label>
                        <select class="form-select mt-1 " type="select" value="" id="dpf-upload-status">
                            <option value="">不限</option>
                            <option value="F"  >吃檔失敗</option>
                            <option value="I">已忽略</option>
                            <option value="S">吃檔成功</option>
                            <option value="W">等待Google DFP吃檔</option>
                        </select>
                    </div>
                    <div class="col">
                        <label class=" font-b4-me">原始檔名查詢</label>
                        <div class="input-group mt-1" id="adv-management-gam-volume-query-keyword-theme-group">
                            <span class="input-group-text border-end-0 bg-white icon-search"
                                id="newsletter-search-basic-addon"></span>
                            <input type="text" class="form-control border-start-0 "
                                id="adv-management-gam-volume-query-number-theme" placeholder="目標對象代號">
                        </div>
                    </div>
                    <div class="col">
                        <label class="font-b4-me"> 錯誤筆數查詢 </label>
                        <div class="input-group mt-1" id="adv-management-gam-error-count-query">
                            <input type="number" maxlength="10" min="0" class="form-control"
                                id="adv-management-gam-error-count-query" placeholder="數字">
                        </div>
                    </div>
                    <div class=" pt-4 d-flex gap-2 ms-auto">
                        <button class="btn primary" type="button" onclick="">
                            查詢
                        </button>
                    </div>
                </div>
            </div>

            <div id="analysis-list-table" class="mt-3">
                <h3> 目標對象列表
                </h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col" class="text-start align-text-top">
                                <input class="form-check-input" type="checkbox" id="gam-upload-query-checkall">
                                <label for="gam-upload-query-checkall"> 全選</label>
                            </th>
                            <th scope="col" class="text-start align-text-top">序號
                            </th>
                            <th scope="col" class="text-start align-text-center">原始檔名
                            </th>
                            <th scope="col" class="text-start align-text-top">行動網站大小(異動量)
                            </th>
                            <th scope="col" class="text-center align-text-top">系統備份檔名
                            </th>
                            <th scope="col" class="text-start align-text-top"> 上傳檔名
                            </th>
                            <th scope="col" class="text-start align-text-top">上傳時間
                            </th>
                            <th scope="col" class="text-start align-text-top">處理時間
                            </th>
                            <th scope="col" class="text-start align-text-top">功能
                            </th>

                        </tr>
                    </thead>
                    <tbody id="adv-management-gam-volume-query-keyword-detail-tbody">
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
                            <button type="button" class="pagination-btn btn fs-5 p-0"><i class="icon-right"></i></button>

                        </div>
                        <div class="btn-group me-2" role="group" aria-label="Second group">
                            <button type="button" class="pagination-btn btn"> 最後一頁</button>
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
    </div>
</template>